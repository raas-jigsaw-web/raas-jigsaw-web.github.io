import React from 'react';
import Square from './Square/Square';
import {Pieces} from "@/pages/Play/Play05/Block/Block";
import {Button, Col, DatePicker, List, Row} from 'antd';

export default class PlayPage extends React.Component {

  onDateChange = (e) => {
    const week = e.$W; // monday: 1
    const date = e.$D; // 1st: 1
    const month = e.$M; // Jan: 0
  }

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
      <div className={"center"}>Here is play05..</div>
      <Row>

        {
          <Col span={16}>
            <Square top={100} left={100} width={100} height={100} matrix={matrix} backgroundColor={"#eee"} zIndex={11}
                    boxSize={25} position={"relative"} cursor={"hand"} boxCursor={"hand"}
                    rotatable={true} reversible={true}>
            </Square>
          </Col>
        }
        {
          // <Square top={200} left={200} width={100} height={100} matrix={matrix} zIndex={10} border={"1px solid #eb5648"}
          //         rotatable={false} reversible={false}></Square>
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
                    <Square top={0} left={0} width={25 * piece.matrix.length} height={25 * piece.matrix.length}
                            matrix={piece.matrix} boxBackgroundColor={piece.color} zIndex={11}
                            boxSize={25} position={"relative"} boxCursor={"pointer"}
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
                <Button type="primary">OK</Button>
              </Col>
            </Row>
          </Col>
        }
      </Row>
    </div>)
  }
}
