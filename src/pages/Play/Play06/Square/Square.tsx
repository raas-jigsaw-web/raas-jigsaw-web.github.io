import React, {CSSProperties, PureComponent} from 'react'
import StyledDiv from './StyledDiv'
import {MatrixUtil} from "../util/matrixUtil";
import {FormattedMessage} from "@@/exports";
import {Backboard} from "../Block/Block";

export class SquareProps {
  key?: string
  pieceName?: string
  top?: number
  left?: number
  width?: number
  height?: number
  rotateAngle?: number
  rotatable?: boolean
  reversible?: boolean
  movable?: boolean
  matrix?: number[][]
  boxSize?: number
  boxBackgroundColor?: string
  boxCursor?: string
  extendedMatrix?: number[][]
  onDrag?: () => void
  onDragEnd?: () => void
  onDragStart?: () => void
  children?: any
  backgroundColor?: string
  border?: string
  position?: "absolute" | "relative"
  cursor?: string
  text?: string
  zIndex?: number
  opacity?: number
}

export default class Square extends PureComponent <SquareProps, any> {

  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      ...props
    }
  }

  // Drag
  startDrag = (e) => {
    if (!this.props.movable) {
      return
    }
    let {clientX: startX, clientY: startY} = e;
    this.props.onDragStart && this.props.onDragStart()
    this.mouseDown = true
    const onMove = (e2) => {
      if (!this.mouseDown) return // patch: fix windows press win key during mouseup issue
      e2.stopImmediatePropagation()
      const {clientX, clientY} = e2
      const deltaX = clientX - startX
      const deltaY = clientY - startY
      startX = clientX
      startY = clientY
    }
    const onUp = () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
      if (!this.mouseDown) return
      this.mouseDown = false
      this.props.onDragEnd && this.props.onDragEnd()
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
  }
  startInnerDrag = (e, aaa) => {
    let {clientX: startX, clientY: startY} = e;
    this.mouseDown = true
    const onMove = (e2) => {
      if (!this.mouseDown) return // patch: fix windows press win key during mouseup issue
      e2.stopImmediatePropagation()
      const {clientX, clientY} = e2
      const deltaX = clientX - startX
      const deltaY = clientY - startY
      this.props.onDrag && this.props.onDrag(deltaX, deltaY)

      this.setState((state) => {
        const boxSize = Backboard.BoxSize;
        const width = boxSize;
        const height = boxSize;
        const top = state.top + deltaY;
        const left = state.left + deltaX;
        return {
          ...state, top, left, width, height, boxSize,
        }
      })

      startX = clientX
      startY = clientY
    }
    const onUp = () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
      if (!this.mouseDown) return
      this.mouseDown = false
      this.props.onDragEnd && this.props.onDragEnd()
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
  }

  onRotate = () => {
    const matrix = MatrixUtil.rotate(this.state.matrix);
    this.setState(state => {
      return {
        ...state, matrix
      }
    })
  }

  onReverse = () => {
    const matrix = MatrixUtil.reverse(this.state.matrix);
    this.setState(state => {
      return {
        ...state, matrix
      }
    })
  }

  render() {
    const {
      key,
      border,
      cursor,
      boxCursor,
      boxBackgroundColor,
      position,
      zIndex,
      opacity,
      backgroundColor,
      text,
    } = this.props
    const {top, left, width, height, boxSize, rotateAngle, matrix} = this.state

    const boxes: SquareProps[] = [];
    if (matrix && matrix.length && matrix[0]) {
      const columns = matrix[0].length, rows = matrix.length;
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
          const box = new SquareProps()
          box.key = `${key}-${i}-${j}`
          box.top = boxSize * i;
          box.left = boxSize * j
          box.width = boxSize
          box.height = boxSize
          box.onDrag = this.startInnerDrag
          const flag = this.state.matrix[i][j];
          if (flag) {
            box.backgroundColor = boxBackgroundColor;
            box.cursor = boxCursor;
            box.zIndex = zIndex + 1
            box.width = boxSize
            box.height = boxSize
          } else {
            box.backgroundColor = undefined;
            box.cursor = undefined;
            box.zIndex = zIndex - 1
          }
          boxes.push(box)
        }
      }
    }
    const style: CSSProperties = {
      top, left, width, height,
      transform: `rotate(${rotateAngle}deg)`,
      cursor,
      userSelect: "none",
      border,
      backgroundColor,
      position: !position ? "absolute" : position,
      zIndex,
      opacity
    }
    return (
      <StyledDiv
        onMouseDown={this.startDrag}
        style={style}
      >
        {
          this.props.children
        }

        {
          text &&
          <div style={{fontSize: "1.1em", lineHeight: "1em", margin: "0.6em 0.3em 0"}}>
            <FormattedMessage id={text} key={`backboard-text-${text}`}></FormattedMessage>
          </div>
        }

        {
          // matrix view
          boxes && boxes.map(box => {
            const boxStyle: CSSProperties = {
              top: box.top, left: box.left, width: box.width, height: box.height,
              cursor: box.cursor,
              userSelect: "none",
              // border,
              backgroundColor: box.backgroundColor,
              position: "absolute",
              zIndex: box.zIndex,
              opacity: box.opacity
            }
            return (
              <StyledDiv onMouseDown={box.onDrag}
                         key={box.key} style={boxStyle}
              ></StyledDiv>
            )
          })
        }

        {
          // 旋转, rotate
          this.props.rotatable &&
          <div className="rotate" onClick={this.onRotate}>
            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
              <image width="14" height="14" href="/icons/cycle-arrow.png"/>
            </svg>
          </div>
        }

        {
          // 翻转, reverse/flip
          this.props.reversible &&
          <div className="reverse" onClick={this.onReverse}>
            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
              <image width="14" height="14" href="/icons/left-right-arrow.png"/>
            </svg>
          </div>
        }
      </StyledDiv>
    )
  }
}
