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
  x?: number
  y?: number
  maxX?: number
  maxY?: number
  minX?: number
  minY?: number
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

  mouseDown?: boolean
  moveRefresh?: boolean
  minX?: number
  minY?: number
  maxX?: number
  maxY?: number

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
      this.mouseDown && (this.mouseDown = false)
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
  }
  startInnerDrag = (e) => {
    let {clientX: startX, clientY: startY} = e;
    this.mouseDown = true
    this.moveRefresh = false
    const onMove = (e2) => {
      if (!this.mouseDown) return // patch: fix windows press win key during mouseup issue
      this.moveRefresh = true
      e2.stopImmediatePropagation()
      const {clientX, clientY} = e2
      let deltaX = clientX - startX
      let deltaY = clientY - startY

      const x = Math.round(e2.target?.parentElement?.getBoundingClientRect()?.x || 0)
      const y = Math.round(e2.target?.parentElement?.getBoundingClientRect()?.y || 0)
      this.setState((state) => {
        const boxSize = Backboard.BoxSize;
        const width = 0;
        const height = 0;
        const top = state.top + deltaY;
        const left = state.left + deltaX;
        return {
          ...state, top, left, width, height, boxSize, x, y,
        }
      });

      startX = clientX
      startY = clientY
    }
    const onDown = (e3) => {
      if (e3?.target?.attributes?.name?.value === "reverse" || e3?.target?.attributes?.name?.value === "rotate") {
        return
      }
      this.setState((state) => {
        document.removeEventListener('mousedown', onDown)
        return {
          ...state, rotatable: false, reversible: false,
        }
      })
    }
    const onUp = () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
      this.mouseDown && (this.mouseDown = false)

      this.setState((state) => {
        return {
          ...state, rotatable: true, reversible: true,
        }
      }, () => {
        document.addEventListener('mousedown', onDown)
        if (!this.moveRefresh) {
          return
        }
        // alignment
        this.setState(state => {
          const {x, y, top, left,} = state
          const minLeft = left + this.minX - x, minTop = top + this.minY - y;
          const maxLeft = minLeft + this.maxX - this.minX, maxTop = minTop + this.maxY - this.minY;
          const finalLeft = Math.round((Math.min(Math.max(minLeft, left), maxLeft) - minLeft) / Backboard.BoxSize) * Backboard.BoxSize + minLeft;
          const finalTop = Math.round((Math.min(Math.max(minTop, top), maxTop) - minTop) / Backboard.BoxSize) * Backboard.BoxSize + minTop;
          return {
            ...state, left: finalLeft, top: finalTop,
          }
        })
      });
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
  }

  onRotate = () => {
    const matrix = MatrixUtil.move2TopLeft(MatrixUtil.rotate(this.state.matrix));
    this.setState(state => {
      return {
        ...state, matrix
      }
    })
  }

  onReverse = () => {
    const matrix = MatrixUtil.move2TopLeft(MatrixUtil.reverse(this.state.matrix));
    this.setState(state => {
      return {
        ...state, matrix
      }
    })
  }

  render() {
    const rect = document.getElementById(Backboard.Id)?.getBoundingClientRect()
    const backboardX = Math.round(rect?.x || 0), backboardY = Math.round(rect?.y || 0);
    const minX = backboardX, minY = backboardY,
      maxX = minX + Backboard.BoxSize * (Backboard.Columns + 5),
      maxY = minY + Backboard.BoxSize * (Backboard.Rows - 1);
    this.minX = minX
    this.minY = minY
    this.maxX = maxX
    this.maxY = maxY

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
    const {top, left, width, height, x, y, boxSize, rotateAngle, matrix, rotatable, reversible,} = this.state

    const boxes: SquareProps[] = [];
    if (matrix && matrix.length && matrix[0]) {
      const columns = matrix[0].length, rows = matrix.length;
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
          const box = new SquareProps()
          box.key = `${key}-${i}-${j}`
          box.top = boxSize * i;
          box.left = boxSize * j
          const flag = this.state.matrix[i][j];
          if (flag) {
            box.backgroundColor = boxBackgroundColor;
            box.cursor = boxCursor;
            box.zIndex = zIndex + 1
            box.onDrag = this.startInnerDrag
            box.width = boxSize
            box.height = boxSize
          } else {
            box.backgroundColor = undefined;
            box.cursor = undefined;
            box.zIndex = zIndex - 1
            box.onDrag = this.startDrag
            box.width = 0
            box.height = 0
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
      position: position || "absolute",
      zIndex,
      opacity
    }
    return (
      <StyledDiv onMouseDown={this.startDrag} style={style}>
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
              backgroundColor: box.backgroundColor,
              position: "absolute",
              zIndex: box.zIndex,
              opacity: box.opacity
            }
            return (
              <StyledDiv onMouseDown={box.onDrag} key={box.key} style={boxStyle}>
                {
                  (box.top === 0 && box.left === 0 && (rotatable || true)) && // todo, delete
                  (
                    <div style={{fontSize: "0.8em"}}>
                      {`x:${x}`} <br/>
                      {`y:${y}`} <br/>
                    </div>
                  )
                }
              </StyledDiv>
            );
          })
        }

        {
          // 旋转, rotate
          rotatable &&
          <div className="rotate" onClick={this.onRotate}>
            <svg width="1.2em" height="1.2em" xmlns="http://www.w3.org/2000/svg">
              <image width="1.2em" height="1.2em" href="/icons/cycle-arrow.png" name={"rotate"}/>
            </svg>
          </div>
        }

        {
          // 翻转, reverse/flip
          reversible &&
          <div className="reverse" onClick={this.onReverse}>
            <svg width="1.2em" height="1.2em" xmlns="http://www.w3.org/2000/svg">
              <image width="1.2em" height="1.2em" href="/icons/left-right-arrow.png" name={"reverse"}/>
            </svg>
          </div>
        }
      </StyledDiv>
    )
  }
}
