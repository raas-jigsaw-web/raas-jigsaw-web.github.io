import React, {Component} from 'react'
import OperableRect from "./OperableRect"
import {centerToTL, degToRadian, getNewStyle, tLToCenter} from './utils'

export default class ResizableRect extends Component<any, any> {

  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      top: (typeof props.top === "number" ? props.top : 100),
      left: (typeof props.left === "number" ? props.left : 100),
      width: (typeof props.width === "number" ? props.width : 100),
      height: (typeof props.height === "number" ? props.height : 100),
      rotateAngle: 0,
      zoomable: ""
    }
  }

  onRotate = (angle: number, startAngle: number) => {
    let rotateAngle = Math.round(startAngle + angle)
    if (rotateAngle >= 360) {
      rotateAngle -= 360
    } else if (rotateAngle < 0) {
      rotateAngle += 360
    }
    if (rotateAngle > 356 || rotateAngle < 4) {
      rotateAngle = 0
    } else if (rotateAngle > 86 && rotateAngle < 94) {
      rotateAngle = 90
    } else if (rotateAngle > 176 && rotateAngle < 184) {
      rotateAngle = 180
    } else if (rotateAngle > 266 && rotateAngle < 274) {
      rotateAngle = 270
    }
    this.setState((state) => {
      return {
        ...state, rotateAngle
      }
    })
  }

  onResize = (length: number, alpha: number, rect: any, type: number, isShiftKey: boolean) => {
    const rotateAngle = this.state.rotateAngle;
    const beta = alpha - degToRadian(this.state.rotateAngle + 0)
    const deltaW = length * Math.cos(beta)
    const deltaH = length * Math.sin(beta)
    const ratio = rect.width / rect.height
    const {
      position: {centerX, centerY},
      size: {width, height}
    } = getNewStyle(type, {...rect, rotateAngle}, deltaW, deltaH, ratio, 10, 10)

    const styles = centerToTL({centerX, centerY, width, height, rotateAngle})

    this.setState(state => {
      return {...state, ...styles}
    })
  }

  onDrag = (deltaX: number, deltaY: number) => {
    this.setState((state) => {
      const top = state.top + deltaY;
      const left = state.left + deltaX;
      return {
        ...state, top, left
      }
    })
  }

  render() {
    const {top, left, width, height, rotateAngle} = this.state;
    const styles = tLToCenter({top, left, width, height, rotateAngle});
    return (
      <OperableRect
        styles={styles}
        zoomable={this.state.zoomable}
        rotatable={false}
        parentRotateAngle={0}

        onResizeStart={null}
        onResize={this.onResize}
        onResizeEnd={null}

        onRotateStart={null}
        onRotate={this.onRotate}
        onRotateEnd={null}

        onDragStart={null}
        onDrag={this.onDrag}
        onDragEnd={null}
      >
        {this.props.children}
      </OperableRect>
    )
  }
}
