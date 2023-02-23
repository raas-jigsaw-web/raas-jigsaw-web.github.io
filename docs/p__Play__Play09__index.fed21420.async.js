"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[531],{37584:function(Mt,U,s){s.r(U),s.d(U,{default:function(){return jt}});var et=s(97857),C=s.n(et),rt=s(12444),E=s.n(rt),nt=s(72004),L=s.n(nt),ot=s(25098),D=s.n(ot),it=s(31996),$=s.n(it),at=s(26037),G=s.n(at),st=s(9783),n=s.n(st),J=s(67294),lt=s(68400),dt=s.n(lt),ct=s(85121),W,O=ct.ZP.div(W||(W=dt()([`
  z-index: 20;

  .square {
    position: relative;
    width: 7px;
    height: 7px;
    background: white;
    border: 1px solid #eb5648;
    border-radius: 1px;
  }

  .rotate {
    position: absolute;
    left: 0em;
    top: -2em;
    width: 1em;
    height: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .reverse {
    position: absolute;
    left: 3em;
    top: -2em;
    width: 1em;
    height: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .t,
  .tl,
  .tr {
    top: -3px;
  }

  .b,
  .bl,
  .br {
    bottom: -3px;
  }

  .r,
  .tr,
  .br {
    right: -3px;
  }

  .tl,
  .l,
  .bl {
    left: -3px;
  }

  .l,
  .r {
    top: 50%;
    margin-top: -3px;
  }

  .t,
  .b {
    left: 50%;
    margin-left: -3px;
  }
`]))),I=L()(function t(){E()(this,t)});n()(I,"array",function(t,e){for(var u=[],b=0;b<t;b++){var i=[];u[b]=i;for(var r=0;r<e;r++)u[b].push(0)}return u}),n()(I,"rotate",function(t){if(t.length!==t[0].length||t.length!==3&&t.length!==4)throw new Error;var e=I.array(t.length,t[0].length);return t.length===3&&(e[0][0]=t[2][0],e[0][1]=t[1][0],e[0][2]=t[0][0],e[1][0]=t[2][1],e[1][1]=t[1][1],e[1][2]=t[0][1],e[2][0]=t[2][2],e[2][1]=t[1][2],e[2][2]=t[0][2]),t.length===4&&(e[0][0]=t[3][0],e[0][1]=t[2][0],e[0][2]=t[1][0],e[0][3]=t[0][0],e[1][0]=t[3][1],e[1][1]=t[2][1],e[1][2]=t[1][1],e[1][3]=t[0][1],e[2][0]=t[3][2],e[2][1]=t[2][2],e[2][2]=t[1][2],e[2][3]=t[0][2],e[3][0]=t[3][3],e[3][1]=t[2][3],e[3][2]=t[1][3],e[3][3]=t[0][3]),e}),n()(I,"reverse",function(t){if(t.length!==t[0].length||t.length!==3&&t.length!==4)throw new Error;var e=I.array(t.length,t[0].length);return t.length===3&&(e[0][0]=t[0][2],e[0][1]=t[0][1],e[0][2]=t[0][0],e[1][0]=t[1][2],e[1][1]=t[1][1],e[1][2]=t[1][0],e[2][0]=t[2][2],e[2][1]=t[2][1],e[2][2]=t[2][0]),t.length===4&&(e[0][0]=t[0][3],e[0][1]=t[0][2],e[0][2]=t[0][1],e[0][3]=t[0][0],e[1][0]=t[1][3],e[1][1]=t[1][2],e[1][2]=t[1][1],e[1][3]=t[1][0],e[2][0]=t[2][3],e[2][1]=t[2][2],e[2][2]=t[2][1],e[2][3]=t[2][0],e[3][0]=t[3][3],e[3][1]=t[3][2],e[3][2]=t[3][1],e[3][3]=t[3][0]),e});var B=s(80854),ht=[[1,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],vt=[[1,0,0],[1,1,0],[1,1,0]],ut=[[1,1,1],[1,0,1],[0,0,0]],mt=[[1,1,1],[1,0,0],[1,0,0]],gt=[[1,1,0],[0,1,0],[0,1,1]],ft=[[1,1,1],[0,1,0],[0,1,0]],pt=[[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0]],xt=[[1,1,0],[0,1,0],[0,1,0]],yt=[[1,1,0,0],[0,1,1,1],[0,0,0,0],[0,0,0,0]],Ct=[[1,1,0],[0,1,1],[0,0,0]],w={A:"rgb(105,165,45)",B:"rgb(145,85,160)",C:"rgb(230,225,45)",D:"rgb(40,130,240)",E:"rgb(120,100,200)",F:"rgb(170,190,110)",G:"rgb(220,110,160)",H:"rgb(230,110,15)",I:"rgb(80,180,140)",J:"rgb(220,150,100)"},Et=null,bt=[{name:"A",matrix:ht,color:w.A},{name:"B",matrix:vt,color:w.B},{name:"C",matrix:ut,color:w.C},{name:"D",matrix:mt,color:w.D},{name:"E",matrix:gt,color:w.E},{name:"F",matrix:ft,color:w.F},{name:"G",matrix:pt,color:w.G},{name:"H",matrix:xt,color:w.H},{name:"I",matrix:yt,color:w.I},{name:"J",matrix:Ct,color:w.J}],a=L()(function t(){E()(this,t)});n()(a,"Rows",8),n()(a,"Columns",7),n()(a,"BoxSize",90),n()(a,"backgroundColor",["white","#eee"]),n()(a,"backgroundColorHighLight","#f1c309"),n()(a,"border","1px solid rgb(25,140,250)");var kt=[["january","february","march","april","may","june",""],["july","august","september","october","november","december",""],["01","02","03","04","05","06","07"],["08","09","10","11","12","13","14"],["15","16","17","18","19","20","21"],["22","23","24","25","26","27","28"],["29","30","31","monday","tuesday","wednesday","thursday"],["","","","","friday","saturday","sunday"]],K=[[6,3],[6,4],[6,5],[6,6],[7,4],[7,5],[7,6]],Q=[[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[6,0],[6,1],[6,2]],V=[[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[1,0],[1,1],[1,2],[1,3],[1,4],[1,5]],o=s(85893),q=L()(function t(){E()(this,t),n()(this,"key",void 0),n()(this,"pieceName",void 0),n()(this,"top",void 0),n()(this,"left",void 0),n()(this,"width",void 0),n()(this,"height",void 0),n()(this,"rotateAngle",void 0),n()(this,"rotatable",void 0),n()(this,"reversible",void 0),n()(this,"movable",void 0),n()(this,"matrix",void 0),n()(this,"boxSize",void 0),n()(this,"boxBackgroundColor",void 0),n()(this,"boxCursor",void 0),n()(this,"extendedMatrix",void 0),n()(this,"onDrag",void 0),n()(this,"onDragEnd",void 0),n()(this,"onDragStart",void 0),n()(this,"children",void 0),n()(this,"backgroundColor",void 0),n()(this,"border",void 0),n()(this,"position",void 0),n()(this,"cursor",void 0),n()(this,"text",void 0),n()(this,"zIndex",void 0),n()(this,"opacity",void 0)}),X=function(t){$()(u,t);var e=G()(u);function u(b,i){var r;return E()(this,u),r=e.call(this,b,i),n()(D()(r),"mouseDown",void 0),n()(D()(r),"startDrag",function(m){if(r.props.movable){var d=m.clientX,g=m.clientY;r.mouseDown=!0;var l=function(h){if(r.mouseDown){h.stopImmediatePropagation();var x=h.clientX,y=h.clientY,c=x-d,j=y-g;d=x,g=y}},S=function f(){document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",f),r.mouseDown&&(r.mouseDown=!1)};document.addEventListener("mousemove",l),document.addEventListener("mouseup",S)}}),n()(D()(r),"startInnerDrag",function(m){var d=m.clientX,g=m.clientY;r.mouseDown=!0;var l=function(h){if(r.mouseDown){h.stopImmediatePropagation();var x=h.clientX,y=h.clientY,c=x-d,j=y-g;r.setState(function(k){var z=a.BoxSize,R=0,M=0,F=k.top+j,P=k.left+c;return C()(C()({},k),{},{top:F,left:P,width:R,height:M,boxSize:z})}),d=x,g=y}},S=function f(){document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",f),r.mouseDown&&(r.mouseDown=!1),r.setState(function(h){return C()(C()({},h),{},{rotatable:!0,reversible:!0})},function(){})};document.addEventListener("mousemove",l),document.addEventListener("mouseup",S)}),n()(D()(r),"onRotate",function(){var m=I.rotate(r.state.matrix);r.setState(function(d){return C()(C()({},d),{},{matrix:m})})}),n()(D()(r),"onReverse",function(){var m=I.reverse(r.state.matrix);r.setState(function(d){return C()(C()({},d),{},{matrix:m})})}),r.state=C()({},b),r}return L()(u,[{key:"render",value:function(){var i=this.props,r=i.key,m=i.border,d=i.cursor,g=i.boxCursor,l=i.boxBackgroundColor,S=i.position,f=i.zIndex,h=i.opacity,x=i.backgroundColor,y=i.text,c=this.state,j=c.top,k=c.left,z=c.width,R=c.height,M=c.boxSize,F=c.rotateAngle,P=c.matrix,tt=c.rotatable,zt=c.reversible,T=[];if(P&&P.length&&P[0])for(var Dt=P[0].length,It=P.length,Y=0;Y<It;Y++)for(var H=0;H<Dt;H++){var v=new q;v.key="".concat(r,"-").concat(Y,"-").concat(H),v.top=M*Y,v.left=M*H;var Pt=this.state.matrix[Y][H];Pt?(v.backgroundColor=l,v.cursor=g,v.zIndex=f+1,v.onDrag=this.startInnerDrag,v.width=M,v.height=M):(v.backgroundColor=void 0,v.cursor=void 0,v.zIndex=f-1,v.onDrag=this.startDrag,v.width=0,v.height=0),T.push(v)}var Bt={top:j,left:k,width:z,height:R,transform:"rotate(".concat(F,"deg)"),cursor:d,userSelect:"none",border:m,backgroundColor:x,position:S||"absolute",zIndex:f,opacity:h};return(0,o.jsxs)(O,{onMouseDown:this.startDrag,style:Bt,children:[this.props.children,y&&(0,o.jsx)("div",{style:{fontSize:"1.1em",lineHeight:"1em",margin:"0.6em 0.3em 0"},children:(0,o.jsx)(B.FormattedMessage,{id:y},"backboard-text-".concat(y))}),T&&T.map(function(p){var Zt={top:p.top,left:p.left,width:p.width,height:p.height,cursor:p.cursor,userSelect:"none",backgroundColor:p.backgroundColor,position:"absolute",zIndex:p.zIndex,opacity:p.opacity};return(0,o.jsx)(O,{onMouseDown:p.onDrag,style:Zt,children:p.top===0&&p.left===0&&tt&&(0,o.jsxs)("div",{style:{fontSize:"0.8em"},children:["top: ".concat(j)," ",(0,o.jsx)("br",{}),"left: ".concat(k)," ",(0,o.jsx)("br",{}),"b.top: ".concat(p.top)," ",(0,o.jsx)("br",{}),"b.left: ".concat(p.left)," ",(0,o.jsx)("br",{})]})},p.key)}),tt&&(0,o.jsx)("div",{className:"rotate",onClick:this.onRotate,children:(0,o.jsx)("svg",{width:"14",height:"14",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("image",{width:"14",height:"14",href:"/icons/cycle-arrow.png"})})}),zt&&(0,o.jsx)("div",{className:"reverse",onClick:this.onReverse,children:(0,o.jsx)("svg",{width:"14",height:"14",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("image",{width:"14",height:"14",href:"/icons/left-right-arrow.png"})})})]})}}]),u}(J.PureComponent),wt=s(2453),A=s(18662),N=s(71230),Z=s(15746),_=s(52691),St=s(61342),jt=function(t){$()(u,t);var e=G()(u);function u(b,i){var r;E()(this,u),r=e.call(this,b,i),n()(D()(r),"onDateChange",function(S){var f=S.$W-1,h=S.$D-1,x=S.$M;f===r.state.week&&h===r.state.day&&x===r.state.month||r.setState(function(y){for(var c=y.backboard,j=0;j<a.Rows;j++)for(var k=0;k<a.Columns;k++){var z=c[j*a.Columns+k];z.text===""?z.backgroundColor="":(z.backgroundColor=a.backgroundColor[(j+k)%2],z.border=a.border)}return c[K[f][0]*a.Columns+K[f][1]].backgroundColor=a.backgroundColorHighLight,c[Q[h][0]*a.Columns+Q[h][1]].backgroundColor=a.backgroundColorHighLight,c[V[x][0]*a.Columns+V[x][1]].backgroundColor=a.backgroundColorHighLight,C()(C()({},y),{},{month:x,day:h,week:f})})}),n()(D()(r),"resolve",function(){wt.ZP.info("".concat((0,B.formatMessage)({id:"develop.wait"})))});for(var m=[],d=0;d<a.Rows;d++)for(var g=0;g<a.Columns;g++){var l=new q;l.key="backboard-".concat(d,"-").concat(g),l.top=a.BoxSize*d,l.left=a.BoxSize*g,l.width=a.BoxSize,l.height=a.BoxSize,l.zIndex=0,l.text=kt[d][g],l.text===""?l.backgroundColor="":(l.backgroundColor=a.backgroundColor[(d+g)%2],l.border=a.border),m.push(l)}return r.state={backboard:m,month:0,day:0,week:0},r}return L()(u,[{key:"render",value:function(){return(0,o.jsxs)("div",{style:{padding:"4em 4em 0"},children:[(0,o.jsxs)("div",{className:"center",children:["Here is play 09.. - ",(0,o.jsx)(A.ZP,{type:"primary",onClick:function(){B.history.push("/welcome")},children:"Test route /welcome "}),(0,o.jsx)(A.ZP,{type:"primary",onClick:function(){B.history.push("/play/play09")},children:"Back to 09"})]}),(0,o.jsxs)(N.Z,{children:[(0,o.jsx)(Z.Z,{span:2}),(0,o.jsx)(Z.Z,{span:11,children:this.state.backboard.map(function(i){return(0,o.jsx)(X,{top:i.top,left:i.left,width:i.width,height:i.height,zIndex:i.zIndex,border:i.border,text:i.text,backgroundColor:i.backgroundColor,rotatable:!1,reversible:!1,children:(i.text==="may"||i.text==="01")&&(0,o.jsxs)("div",{style:{fontSize:"0.8em"},children:["top: ".concat(i.top)," ",(0,o.jsx)("br",{}),"left: ".concat(i.left)," ",(0,o.jsx)("br",{})]},"backboard-test-".concat(i.key))},"backboard-".concat(i.key))})}),(0,o.jsxs)(Z.Z,{span:8,children:[(0,o.jsx)(N.Z,{children:(0,o.jsx)(_.ZP,{grid:{gutter:16,column:4},dataSource:bt,renderItem:function(r){return(0,o.jsxs)(_.ZP.Item,{children:[r.name,(0,o.jsx)(X,{top:0,left:0,pieceName:r.name,width:a.BoxSize/3*r.matrix.length,height:a.BoxSize/3*r.matrix.length,position:"relative",zIndex:-1,rotatable:!1,reversible:!1,movable:!1},"piece-pickup-placeholder-".concat(r.name)),(0,o.jsx)(X,{pieceName:r.name,top:a.BoxSize/3,left:a.BoxSize/3,width:0,height:0,matrix:r.matrix,boxBackgroundColor:r.color,zIndex:10,boxSize:a.BoxSize/3,position:"absolute",boxCursor:"pointer",opacity:.92,rotatable:!1,reversible:!1,movable:!1},"piece-pickup-".concat(r.name))]})}})}),(0,o.jsxs)(N.Z,{children:[(0,o.jsx)(Z.Z,{span:8,children:(0,o.jsx)(St.Z,{format:"YYYY-MM-DD",allowClear:!1,onChange:this.onDateChange})}),(0,o.jsx)(Z.Z,{span:12,children:(0,o.jsx)(A.ZP,{type:"primary",onClick:this.resolve,children:(0,o.jsx)(B.FormattedMessage,{id:"resolve"})})})]})]}),(0,o.jsx)(Z.Z,{span:1,offset:1,children:(0,o.jsx)(B.SelectLang,{className:"ant-dropdown-trigger css-lye32u",reload:!1})})]})]})}}]),u}(J.Component)}}]);
