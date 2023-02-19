import PropTypes from 'prop-types'
import React, {PureComponent} from 'react'
import {getAngle, getCursor, getLength} from './utils'
import StyledRect from './StyledRect'

const zoomableMap = {
  'n': 't',
  's': 'b',
  'e': 'r',
  'w': 'l',
  'ne': 'tr',
  'nw': 'tl',
  'se': 'br',
  'sw': 'bl'
}

export default class OperableRect extends PureComponent {
  static propTypes = {
    styles: PropTypes.object,
    zoomable: PropTypes.string,
    rotatable: PropTypes.bool,
    onResizeStart: PropTypes.func,
    onResize: PropTypes.func,
    onResizeEnd: PropTypes.func,
    onRotateStart: PropTypes.func,
    onRotate: PropTypes.func,
    onRotateEnd: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrag: PropTypes.func,
    onDragEnd: PropTypes.func,
    parentRotateAngle: PropTypes.number
  }

  setElementRef = (ref) => {
    this.$element = ref
  }

  // Drag
  startDrag = (e) => {
    let {clientX: startX, clientY: startY} = e
    this.props.onDragStart && this.props.onDragStart()
    this._isMouseDown = true
    const onMove = (e) => {
      if (!this._isMouseDown) return // patch: fix windows press win key during mouseup issue
      e.stopImmediatePropagation()
      const {clientX, clientY} = e
      const deltaX = clientX - startX
      const deltaY = clientY - startY
      this.props.onDrag(deltaX, deltaY)
      startX = clientX
      startY = clientY
    }
    const onUp = () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
      if (!this._isMouseDown) return
      this._isMouseDown = false
      this.props.onDragEnd && this.props.onDragEnd()
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
  }

  // Rotate
  startRotate = (e) => {
    if (e.button !== 0) return
    const {clientX, clientY} = e
    const {styles: {transform: {rotateAngle: startAngle}}} = this.props
    const rect = this.$element.getBoundingClientRect()
    const center = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    }
    const startVector = {
      x: clientX - center.x,
      y: clientY - center.y
    }
    this.props.onRotateStart && this.props.onRotateStart()
    this._isMouseDown = true
    const onMove = (e) => {
      if (!this._isMouseDown) return // patch: fix windows press win key during mouseup issue
      e.stopImmediatePropagation()
      const {clientX, clientY} = e
      const rotateVector = {
        x: clientX - center.x,
        y: clientY - center.y
      }
      const angle = getAngle(startVector, rotateVector)
      this.props.onRotate(angle, startAngle)
    }
    const onUp = () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
      if (!this._isMouseDown) return
      this._isMouseDown = false
      this.props.onRotateEnd && this.props.onRotateEnd()
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
  }

  // Resize
  startResize = (e, cursor) => {
    if (e.button !== 0) return
    document.body.style.cursor = cursor
    const {styles: {position: {centerX, centerY}, size: {width, height}, transform: {rotateAngle}}} = this.props
    const {clientX: startX, clientY: startY} = e
    const rect = {width, height, centerX, centerY, rotateAngle}
    const type = e.target.getAttribute('class').split(' ')[0]
    this.props.onResizeStart && this.props.onResizeStart()
    this._isMouseDown = true
    const onMove = (e) => {
      if (!this._isMouseDown) return // patch: fix windows press win key during mouseup issue
      e.stopImmediatePropagation()
      const {clientX, clientY} = e
      const deltaX = clientX - startX
      const deltaY = clientY - startY
      const alpha = Math.atan2(deltaY, deltaX)
      const deltaL = getLength(deltaX, deltaY)
      const isShiftKey = e.shiftKey
      this.props.onResize(deltaL, alpha, rect, type, isShiftKey)
    }

    const onUp = () => {
      document.body.style.cursor = 'auto'
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
      if (!this._isMouseDown) return
      this._isMouseDown = false
      this.props.onResizeEnd && this.props.onResizeEnd()
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
  }

  render() {
    const {
      styles: {
        position: {centerX, centerY},
        size: {width, height},
        transform: {rotateAngle}
      },
      zoomable,
      rotatable,
      parentRotateAngle
    } = this.props
    const style = {
      width: Math.abs(width),
      height: Math.abs(height),
      transform: `rotate(${rotateAngle}deg)`,
      left: centerX - Math.abs(width) / 2,
      top: centerY - Math.abs(height) / 2,
      cursor: "move",
      userSelect: "none"
    }
    const direction = zoomable.split(',').map(d => d.trim()).filter(d => d) // TODO: may be speed up

    return (
      <StyledRect
        ref={this.setElementRef}
        onMouseDown={this.startDrag}
        className="rect single-resizer"
        style={style}
      >
        {
          this.props.children
        }

        {
          // 旋转, rotate
          rotatable &&
          <div className="rotate" onMouseDown={this.startRotate}>
            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
              <image width="14" height="14" href="/icons/cycle-arrow.png"/>
            </svg>
          </div>
        }

        {
          // 翻转, reverse/flip
          rotatable &&
          <div className="reverse" onMouseDown={this.startRotate}>
            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
              <image width="14" height="14" href="/icons/left-right-arrow.png"/>
            </svg>
          </div>
        }

        {
          // 缩放, zoom
          direction.map(d => {
            const cursor = `${getCursor(rotateAngle + parentRotateAngle, d)}-resize`
            return (
              <div key={d}
                   style={{cursor}}
                   className={`${zoomableMap[d]} resizable-handler`}
                   onMouseDown={(e) => this.startResize(e, cursor)}/>
            )
          })
        }

        {
          // 角落小白块, corners' white blocks
          direction.map(d => {
            return (
              <div key={d} className={`${zoomableMap[d]} square`}/>
            )
          })
        }
      </StyledRect>
    )
  }
}
