import React from 'react';
import Square, {SquareProps} from './Square/Square';
import {Backboard, Colors, Days, Empties, Months, Pieces, Texts, Weeks} from "./Block/Block";
import {Button, Col, DatePicker, List, message, Row} from 'antd';
import dayjs from 'dayjs';
import {formatMessage, FormattedMessage, SelectLang} from "@umijs/max";

export default class PlayPage extends React.Component<any, any> {

  dateSet?: boolean

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
      backboard, month: 0, day: 0, week: 0, results: []
    }
  }

  onDateChange = (e) => {
    const week = e.$W; // monday: 1, sunday: 0
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
    fetch("http://localhost:8080/resolve?count=10").then(resp => {
      return resp.json()
    }).then(json => {
      if (json && 0 === json.code && json.data && 0 < json.data.length) {
        this.setState(state => {
          const results = []
          for (const i in json.data) {
            const boxes: SquareProps[] = []
            const matrix = json.data[i].matrix
            for (let j = 0; j < matrix.length; j++) {
              for (let k = 0; k < matrix[0].length; k++) {
                const box: SquareProps = new SquareProps()
                box.key = `result-${i}-${j}-${k}`
                const size = Backboard.BoxSize / 5
                box.top = size * j
                box.left = size * k
                box.width = size
                box.height = size
                const pieceName = matrix[j][k];
                box.pieceName = pieceName
                if ('`' !== pieceName) {
                  box.backgroundColor = Colors[pieceName];
                } else {
                  for (const empty of Empties) {
                    if (j === empty[0] && k === empty[1]) {
                      box.backgroundColor = Backboard.backgroundColorHighLight;
                    }
                  }
                }
                boxes.push(box)
              }
            }
            results.push(boxes)
          }
          console.log(results)

          return {
            ...state, results,
          }
        });
      }
    }).catch(err => {
      message.info(`${formatMessage({
        id: err,
      })}`)
    })
  }

  render() {
    if (!this.dateSet) {
      this.dateSet = true
      this.onDateChange(dayjs())
    }
    const {minX, minY, maxX, maxY, results,} = this.state
    return (<div>
      <div className={"center"}>Here is play 11 ..</div>

      <div style={{padding: "2em 8em 0"}}>
        <div id={Backboard.Id}>
          <Row>
            {
              <Col span={11}>
                {
                  // backboard
                  this.state.backboard.map(b => {
                    return (<Square top={b.top} left={b.left} width={b.width} height={b.height} zIndex={b.zIndex}
                                    border={b.border} text={b.text} backgroundColor={b.backgroundColor}
                                    rotatable={false} reversible={false}
                                    key={`backboard-${b.key}`}>
                    </Square>)
                  })
                }
              </Col>
            }
            {
              // pick up pieces
              <Col span={13}>
                <Row>
                  <Col span={20}>
                    <List
                      grid={{column: 5}}
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
                                  width={0} height={0}
                                  maxX={maxX} maxY={maxY} minX={minX} minY={minY}
                                  matrix={piece.matrix} boxBackgroundColor={piece.color} zIndex={10}
                                  boxSize={Backboard.BoxSize / 3} position={"absolute"} boxCursor={"pointer"}
                                  opacity={0.92}
                                  rotatable={false} reversible={false} movable={false}>
                          </Square>
                        </List.Item>
                      )}
                    />
                  </Col>

                  <Col span={4}>
                    <SelectLang className={"ant-dropdown-trigger css-lye32u"} reload={false}/>
                  </Col>
                </Row>
                <Row>
                  <Col span={11}>
                  </Col>
                  <Col span={3} style={{fontSize: "1.2em", textAlign: "right", float: "right"}}>
                    <big>
                      <FormattedMessage id={"set.goal"}/>:&nbsp;
                    </big>
                  </Col>
                  <Col span={5} style={{fontSize: "1.2em", textAlign: "right", float: "right"}}>
                    <DatePicker format="YYYY-MM-DD" defaultValue={dayjs()} size={"middle"}
                                allowClear={false} onChange={this.onDateChange}/>
                  </Col>
                  <Col span={5} style={{fontSize: "1.2em", textAlign: "right", float: "right"}}>
                    <Button type="primary" onClick={this.resolve}>
                      <FormattedMessage id={"resolve"}></FormattedMessage>
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <List
                      size="large"
                      itemLayout="vertical"
                      pagination={{
                        onChange: (page) => {
                          console.log(`page: ${page}`);
                        },
                        pageSize: 3,
                      }}
                      dataSource={results}
                      renderItem={(item) => (
                        <List.Item
                          key={"item.title"}
                        >
                          {JSON.stringify(item)}
                        </List.Item>
                      )}
                    />
                  </Col>
                </Row>
              </Col>
            }
          </Row>
        </div>
      </div>
    </div>)
  }
}
