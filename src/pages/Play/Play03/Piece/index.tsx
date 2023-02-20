import React, {PureComponent} from 'react'
import Rect from './Rect'

export default class Piece extends PureComponent {

  render() {
    return (
      <Rect top={this.props.top}
            left={this.props.left}
            width={this.props.width}
            height={this.props.height}
            kept={this.props.kept}
            movable={this.props.movable}
      >
        {this.props.children}
      </Rect>
    )
  }
}
