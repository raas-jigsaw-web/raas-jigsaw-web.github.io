import React from 'react';
import Piece from './Piece';
import {FormattedMessage} from "@@/exports";

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

export default class PlayPage extends React.Component {

  render() {
    const columns = 7, rows = 8, size = 100;
    const boxes: Box[][] = [];
    let texts: string[][] = [
      ["january", "february", "march", "april", "may", "june", "kept",],
      ["july", "august", "september", "october", "november", "december", "kept",],
      ["01", "02", "03", "04", "05", "06", "07",],
      ["08", "09", "10", "11", "12", "13", "14",],
      ["15", "16", "17", "18", "19", "20", "21",],
      ["22", "23", "24", "25", "26", "27", "28",],
      ["29", "30", "31", "monday", "tuesday", "wednesday", "thursday",],
      ["kept", "kept", "kept", "kept", "friday", "saturday", "sunday",],
    ];

    for (let i = 0; i < rows; i++) {
      boxes[i] = [];
      for (let j = 0; j < columns; j++) {
        boxes[i].push(new Box(size * i, size * j, size, size, texts[i][j]))
      }
    }

    return (<div>
      <div className={"center"}>Here is play02..</div>

      {
        <div style={{zIndex: 9999}}>
          {
            boxes.map(boxes2 => {
              return boxes2.map(box => {
                return (
                  <div style={{backgroundColor: "black"}}>
                    <Piece top={box.top} left={box.left} kept={box.text === "kept"}
                           key={"box-" + box.top + "-" + box.left}>
                      <FormattedMessage id={box.text}></FormattedMessage>
                    </Piece>
                  </div>
                )
              })
            })
          }
        </div>
      }
      {
        <div style={{zIndex: -9999}}>
          <Piece top={0 + 1} left={0 + 1} width={size * columns} height={size * rows} movable={false}></Piece>
        </div>
      }
    </div>)
  }
}
