import React from 'react';
import Drr from '../../../components/DragResizeRotate';

const PlayPage: React.FC = () => (
  <div>
    <div className={"center"}>Here is play01..</div>

    <div style={{width: "100px", height: "100px", backgroundColor: "black"}}></div>

    <Drr
      left={100}
      top={100}
      width={100}
      height={100}
      rotateAngle={0}
      onRotate={null}
      onResize={null}
      onDrag={(deltaX: number, deltaY: number) => {
      }}
      onDragEnd={null}
      onResizeEnd={null}
      onRotateEnd={null}
      rotatable={true}
      aspectRatio={true}
      zoomable=""
      key={""}
    >
      <img src={"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"}
           style={{
             width: 100,
             height: 100,
             userSelect: "none",
             pointerEvents: "none"
           }}/>
    </Drr>
  </div>
);

export default PlayPage;
