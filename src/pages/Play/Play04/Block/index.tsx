import React, {PureComponent} from 'react'
import Rect from './Rect'
import {MatrixUtil} from "@/pages/Play/Play04/Block/matrixUtil";

export class Box {
  top: number
  left: number
  width: number
  height: number
  text: string

  constructor(top: number = 0, left: number = 0, width: number = 100, height: number = 100, text: string = "kept") {
    this.top = top;
    this.left = left;
    this.width = width;
    this.height = height;
    this.text = text;
  }
}

export default class Block extends PureComponent<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      matrix: this.props.matrix || [
        [0, 1, 0,],
        [0, 1, 0,],
        [1, 1, 1,],
      ]
    }
  }

  onRotate = () => {
    console.log("onRotate")
    const matrix = MatrixUtil.rotate(this.state.matrix);
    this.setState(state => {
      return {
        ...state, matrix
      }
    })
  }

  onReverse = () => {
    console.log("onReverse")
    const matrix = MatrixUtil.reverse(this.state.matrix);
    this.setState(state => {
      console.log(matrix)
      return {
        ...state, matrix
      }
    })
  }

  render() {
    const size = 100;
    const columns = this.state.matrix[0].length, rows = this.state.matrix.length;

    const boxes: Box[] = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        boxes.push(new Box(size * i, size * j, size, size, this.state.matrix[i][j] + ""))
      }
    }
    return (
      <Rect top={this.props.top || 100}
            left={this.props.left || 100}
            width={size * columns}
            height={size * rows}
            movable={true}
            rotatable={true}
            onRotate={this.onRotate}
            onReverse={this.onReverse}
      >
        {boxes.map(box => {
          return (<Rect top={box.top} left={box.left} text={box.text}>
              {box.text}
            </Rect>
          )
        })}
      </Rect>
    )
  }
}
