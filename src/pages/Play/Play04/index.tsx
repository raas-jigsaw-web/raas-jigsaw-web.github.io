import React from 'react';
import Block from './Block';


export default class PlayPage extends React.Component {

  render() {
    const matrix = [
      [0, 1, 0,],
      [0, 1, 0,],
      [1, 1, 1,],
    ], matrix2 = [
      [1, 1, 0, 0,],
      [0, 1, 0, 0,],
      [0, 1, 0, 0,],
      [0, 1, 0, 0,],
    ], matrix3 = [
      [1, 0, 0, 0,],
      [1, 1, 0, 0,],
      [0, 1, 0, 0,],
      [0, 1, 0, 0,],
    ]

    return (<div>
      <div className={"center"}>Here is play04..</div>

      {
        <Block top={100} left={100} matrix={matrix}></Block>
      }
      {
        <Block left={500} matrix={matrix2}></Block>
      }
      {
        <Block top={500} matrix={matrix3}></Block>
      }
    </div>)
  }
}
