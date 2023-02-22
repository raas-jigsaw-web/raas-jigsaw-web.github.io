import React from 'react';
import Square, {SquareProps} from './Square/Square';
import {Backboard, Days, Months, Pieces, Texts, Weeks} from "./Block/Block";
import {Button, Col, DatePicker, List, message, Row} from 'antd';
import {formatMessage, FormattedMessage, SelectLang} from "@umijs/max";

export default class PlayPage extends React.Component<any, any> {

  constructor(props: any, context: any) {
    super(props, context);

    // backboard
    const backboard: SquareProps[] = []
    for (let i = 0; i < Backboard.Rows; i++) {
      for (let j = 0; j < Backboard.Columns; j++) {
        const box = new SquareProps()
        box.key = `backboard-${i}-${j}`
        box.top = Backboard.BoxSize * i;
        box.left = Backboard.BoxSize * j
        box.width = Backboard.BoxSize
        box.height = Backboard.BoxSize
        box.zIndex = 0; // not less than 0
        box.text = Texts[i][j]

        if (box.text === "") {
          box.backgroundColor = ""; // unused box
        } else {
          box.backgroundColor = Backboard.backgroundColor[(i + j) % 2]
          box.border = Backboard.border
        }
        backboard.push(box)
      }
    }

    this.state = {
      backboard, month: 0, day: 0, week: 0,
    }
  }

  onDateChange = (e) => {
    const week = e.$W - 1; // monday: 1
    const day = e.$D - 1; // 1st: 1
    const month = e.$M; // Jan: 0

    if (week === this.state.week && day === this.state.day && month === this.state.month) {
      return
    }
    this.setState(state => {
      const {backboard} = state;
      for (let i = 0; i < Backboard.Rows; i++) {
        for (let j = 0; j < Backboard.Columns; j++) {
          const box = backboard[i * Backboard.Columns + j]
          if (box.text === "") {
            box.backgroundColor = ""; // unused box
          } else {
            box.backgroundColor = Backboard.backgroundColor[(i + j) % 2]
            box.border = Backboard.border
          }
        }
      }
      backboard[Weeks[week][0] * Backboard.Columns + Weeks[week][1]].backgroundColor = Backboard.backgroundColorHighLight
      backboard[Days[day][0] * Backboard.Columns + Days[day][1]].backgroundColor = Backboard.backgroundColorHighLight
      backboard[Months[month][0] * Backboard.Columns + Months[month][1]].backgroundColor = Backboard.backgroundColorHighLight
      return {...state, month, day, week,}
    });
  }

  resolve = () => {
    message.info(`${formatMessage({
      id: 'develop.wait',
    })}`)
  }

  render() {
    return (<div>
      <div className={"center"}>Here is play 07..</div>
      <Row>
        {
          <Col span={12}>
            {
              // backboard
              this.state.backboard.map(b => {
                return (<Square top={b.top} left={b.left} width={b.width} height={b.height} zIndex={b.zIndex}
                                border={b.border} text={b.text} backgroundColor={b.backgroundColor}
                                rotatable={false} reversible={false}>
                  <div style={{fontSize: "0.8em"}}>
                    {`top: ${b.top}`} <br/>
                    {`left: ${b.left}`} <br/>
                  </div>
                </Square>)
              })
            }
          </Col>
        }
        {
          // pick up pieces
          <Col span={8}>
            <Row>
              <List
                grid={{gutter: 16, column: 4}}
                dataSource={Pieces}
                renderItem={(piece) => (
                  <List.Item>
                    {piece.name}
                    <Square top={0} left={0} pieceName={piece.name} key={`piece-pickup-placeholder-${piece.name}`}
                            width={Backboard.BoxSize / 3 * piece.matrix.length}
                            height={Backboard.BoxSize / 3 * piece.matrix.length}
                            position={"relative"} zIndex={-1}
                            rotatable={false} reversible={false} movable={false}>
                    </Square>
                    <Square key={`piece-pickup-${piece.name}`} pieceName={piece.name}
                            top={Backboard.BoxSize / 3} left={Backboard.BoxSize / 3}
                            width={0}
                            height={0}
                            matrix={piece.matrix} boxBackgroundColor={piece.color} zIndex={10}
                            boxSize={Backboard.BoxSize / 3} position={"absolute"} boxCursor={"pointer"}
                            opacity={0.92}
                            rotatable={false} reversible={false} movable={false}>
                    </Square>
                  </List.Item>
                )}
              />
            </Row>
            <Row>
              <Col span={8}>
                <DatePicker format="YYYY-MM-DD" allowClear={false} onChange={this.onDateChange}/>
              </Col>
              <Col span={12}>
                <Button type="primary" onClick={this.resolve}>
                  <FormattedMessage id={"resolve"}></FormattedMessage>
                </Button>
              </Col>
            </Row>
          </Col>
        }
        {
          <Col span={1} offset={1}>
            <SelectLang className={"ant-dropdown-trigger css-lye32u"} reload={false}/>
          </Col>
        }
      </Row>
    </div>)
  }
}
