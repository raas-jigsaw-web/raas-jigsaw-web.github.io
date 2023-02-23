import PropTypes from 'prop-types'
import React, {PureComponent} from 'react'
import {getCursor} from './utils'
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

  render() {
    const {
      styles: {
        position: {centerX, centerY},
        size: {width, height},
        transform: {rotateAngle}
      },
      zoomable,
      rotatable,
      parentRotateAngle,
    } = this.props
    const style = {
      width: Math.abs(width),
      height: Math.abs(height),
      transform: `rotate(${rotateAngle}deg)`,
      left: centerX - Math.abs(width) / 2,
      top: centerY - Math.abs(height) / 2,
      cursor: "move",
      userSelect: "none",
      backgroundColor: this.props.text === "1" ? "grey" : "",
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
          <div className="rotate" onClick={this.props.onRotate}>
            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
              <image width="14" height="14" href="/icons/cycle-arrow.png"/>
            </svg>
          </div>
        }

        {
          // 翻转, reverse/flip
          rotatable &&
          <div className="reverse" onClick={this.props.onReverse}>
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
