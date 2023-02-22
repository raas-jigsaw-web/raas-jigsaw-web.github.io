"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[589],{93597:function(Et,$,i){i.r($),i.d($,{default:function(){return jt}});var et=i(97857),z=i.n(et),rt=i(12444),M=i.n(rt),nt=i(72004),E=i.n(nt),ot=i(25098),B=i.n(ot),at=i(31996),G=i.n(at),it=i(26037),J=i.n(it),st=i(9783),n=i.n(st),W=i(67294),lt=i(68400),dt=i.n(lt),ht=i(85121),O,K=ht.ZP.div(O||(O=dt()([`
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
`]))),I=E()(function t(){M()(this,t)});n()(I,"array",function(t,e){for(var v=[],y=0;y<t;y++){var s=[];v[y]=s;for(var r=0;r<e;r++)v[y].push(0)}return v}),n()(I,"rotate",function(t){if(t.length!==t[0].length||t.length!==3&&t.length!==4)throw new Error;var e=I.array(t.length,t[0].length);return t.length===3&&(e[0][0]=t[2][0],e[0][1]=t[1][0],e[0][2]=t[0][0],e[1][0]=t[2][1],e[1][1]=t[1][1],e[1][2]=t[0][1],e[2][0]=t[2][2],e[2][1]=t[1][2],e[2][2]=t[0][2]),t.length===4&&(e[0][0]=t[3][0],e[0][1]=t[2][0],e[0][2]=t[1][0],e[0][3]=t[0][0],e[1][0]=t[3][1],e[1][1]=t[2][1],e[1][2]=t[1][1],e[1][3]=t[0][1],e[2][0]=t[3][2],e[2][1]=t[2][2],e[2][2]=t[1][2],e[2][3]=t[0][2],e[3][0]=t[3][3],e[3][1]=t[2][3],e[3][2]=t[1][3],e[3][3]=t[0][3]),e}),n()(I,"reverse",function(t){if(t.length!==t[0].length||t.length!==3&&t.length!==4)throw new Error;var e=I.array(t.length,t[0].length);return t.length===3&&(e[0][0]=t[0][2],e[0][1]=t[0][1],e[0][2]=t[0][0],e[1][0]=t[1][2],e[1][1]=t[1][1],e[1][2]=t[1][0],e[2][0]=t[2][2],e[2][1]=t[2][1],e[2][2]=t[2][0]),t.length===4&&(e[0][0]=t[0][3],e[0][1]=t[0][2],e[0][2]=t[0][1],e[0][3]=t[0][0],e[1][0]=t[1][3],e[1][1]=t[1][2],e[1][2]=t[1][1],e[1][3]=t[1][0],e[2][0]=t[2][3],e[2][1]=t[2][2],e[2][2]=t[2][1],e[2][3]=t[2][0],e[3][0]=t[3][3],e[3][1]=t[3][2],e[3][2]=t[3][1],e[3][3]=t[3][0]),e});var X=i(80854),ct=[[1,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],vt=[[1,0,0],[1,1,0],[1,1,0]],ut=[[1,1,1],[1,0,1],[0,0,0]],mt=[[1,1,1],[1,0,0],[1,0,0]],gt=[[1,1,0],[0,1,0],[0,1,1]],ft=[[1,1,1],[0,1,0],[0,1,0]],pt=[[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0]],xt=[[1,1,0],[0,1,0],[0,1,0]],Ct=[[1,1,0,0],[0,1,1,1],[0,0,0,0],[0,0,0,0]],yt=[[1,1,0],[0,1,1],[0,0,0]],w={A:"rgb(105,165,45)",B:"rgb(145,85,160)",C:"rgb(230,225,45)",D:"rgb(20,130,240)",E:"rgb(120,100,200)",F:"rgb(105,165,45)",G:"rgb(145,85,160)",H:"rgb(230,225,45)",I:"rgb(20,130,240)",J:"rgb(120,100,200)"},Lt=null,bt=[{name:"A",matrix:ct,color:w.A},{name:"B",matrix:vt,color:w.B},{name:"C",matrix:ut,color:w.C},{name:"D",matrix:mt,color:w.D},{name:"E",matrix:gt,color:w.E},{name:"F",matrix:ft,color:w.F},{name:"G",matrix:pt,color:w.G},{name:"H",matrix:xt,color:w.H},{name:"I",matrix:Ct,color:w.I},{name:"J",matrix:yt,color:w.J}],a=E()(function t(){M()(this,t)});n()(a,"Rows",8),n()(a,"Columns",7),n()(a,"BoxSize",90),n()(a,"backgroundColor",["white","#eee"]),n()(a,"backgroundColorHighLight","#f1c309"),n()(a,"border","1px solid rgb(25,140,250)");var St=[["january","february","march","april","may","june",""],["july","august","september","october","november","december",""],["01","02","03","04","05","06","07"],["08","09","10","11","12","13","14"],["15","16","17","18","19","20","21"],["22","23","24","25","26","27","28"],["29","30","31","monday","tuesday","wednesday","thursday"],["","","","","friday","saturday","sunday"]],Q=[[6,3],[6,4],[6,5],[6,6],[7,4],[7,5],[7,6]],V=[[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[6,0],[6,1],[6,2]],q=[[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[1,0],[1,1],[1,2],[1,3],[1,4],[1,5]],o=i(85893),_=E()(function t(){M()(this,t),n()(this,"key",void 0),n()(this,"pieceName",void 0),n()(this,"top",void 0),n()(this,"left",void 0),n()(this,"width",void 0),n()(this,"height",void 0),n()(this,"rotateAngle",void 0),n()(this,"rotatable",void 0),n()(this,"reversible",void 0),n()(this,"movable",void 0),n()(this,"matrix",void 0),n()(this,"boxSize",void 0),n()(this,"boxBackgroundColor",void 0),n()(this,"boxCursor",void 0),n()(this,"extendedMatrix",void 0),n()(this,"onDrag",void 0),n()(this,"onDragEnd",void 0),n()(this,"onDragStart",void 0),n()(this,"children",void 0),n()(this,"backgroundColor",void 0),n()(this,"border",void 0),n()(this,"position",void 0),n()(this,"cursor",void 0),n()(this,"text",void 0),n()(this,"zIndex",void 0),n()(this,"opacity",void 0)}),A=function(t){G()(v,t);var e=J()(v);function v(y,s){var r;return M()(this,v),r=e.call(this,y,s),n()(B()(r),"startDrag",function(u){if(r.props.movable){var h=u.clientX,m=u.clientY;r.mouseDown=!0;var l=function(p){if(r.mouseDown){p.stopImmediatePropagation();var x=p.clientX,C=p.clientY,d=x-h,S=C-m;h=x,m=C}},b=function f(){document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",f),r.mouseDown&&(r.mouseDown=!1)};document.addEventListener("mousemove",l),document.addEventListener("mouseup",b)}}),n()(B()(r),"startInnerDrag",function(u,h){var m=u.clientX,l=u.clientY;r.mouseDown=!0;var b=function(x){if(r.mouseDown){x.stopImmediatePropagation();var C=x.clientX,d=x.clientY,S=C-m,k=d-l,j=!0,R=!0;r.setState(function(D){var F=a.BoxSize,P=0,U=0,T=D.top+k,Y=D.left+S;return z()(z()({},D),{},{top:T,left:Y,width:P,height:U,boxSize:F,rotatable:j,reversible:R})}),m=C,l=d}},f=function p(){document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",p),r.mouseDown&&(r.mouseDown=!1)};document.addEventListener("mousemove",b),document.addEventListener("mouseup",f)}),n()(B()(r),"onRotate",function(){var u=I.rotate(r.state.matrix);r.setState(function(h){return z()(z()({},h),{},{matrix:u})})}),n()(B()(r),"onReverse",function(){var u=I.reverse(r.state.matrix);r.setState(function(h){return z()(z()({},h),{},{matrix:u})})}),r.state=z()({},y),r}return E()(v,[{key:"render",value:function(){var s=this.props,r=s.key,u=s.border,h=s.cursor,m=s.boxCursor,l=s.boxBackgroundColor,b=s.position,f=s.zIndex,p=s.opacity,x=s.backgroundColor,C=s.text,d=this.state,S=d.top,k=d.left,j=d.width,R=d.height,D=d.boxSize,F=d.rotateAngle,P=d.matrix,U=d.rotatable,T=d.reversible,Y=[];if(P&&P.length&&P[0])for(var Dt=P[0].length,It=P.length,Z=0;Z<It;Z++)for(var H=0;H<Dt;H++){var c=new _;c.key="".concat(r,"-").concat(Z,"-").concat(H),c.top=D*Z,c.left=D*H;var Pt=this.state.matrix[Z][H];Pt?(c.backgroundColor=l,c.cursor=m,c.zIndex=f+1,c.onDrag=this.startInnerDrag,c.width=D,c.height=D):(c.backgroundColor=void 0,c.cursor=void 0,c.zIndex=f-1,c.onDrag=this.startDrag,c.width=0,c.height=0),Y.push(c)}var Bt={top:S,left:k,width:j,height:R,transform:"rotate(".concat(F,"deg)"),cursor:h,userSelect:"none",border:u,backgroundColor:x,position:b||"absolute",zIndex:f,opacity:p};return(0,o.jsxs)(K,{onMouseDown:this.startDrag,style:Bt,children:[this.props.children,C&&(0,o.jsx)("div",{style:{fontSize:"1.1em",lineHeight:"1em",margin:"0.6em 0.3em 0"},children:(0,o.jsx)(X.FormattedMessage,{id:C},"backboard-text-".concat(C))}),Y&&Y.map(function(g){var Mt={top:g.top,left:g.left,width:g.width,height:g.height,cursor:g.cursor,userSelect:"none",backgroundColor:g.backgroundColor,position:"absolute",zIndex:g.zIndex,opacity:g.opacity};return(0,o.jsx)(K,{onMouseDown:g.onDrag,style:Mt,children:(g.top===S&&g.left===k||!0)&&(0,o.jsxs)("div",{style:{fontSize:"0.8em"},children:["top: ".concat(S)," ",(0,o.jsx)("br",{}),"left: ".concat(k)," ",(0,o.jsx)("br",{}),"b.top: ".concat(g.top)," ",(0,o.jsx)("br",{}),"b.left: ".concat(g.left)," ",(0,o.jsx)("br",{})]})},g.key)}),U&&(0,o.jsx)("div",{className:"rotate",onClick:this.onRotate,children:(0,o.jsx)("svg",{width:"14",height:"14",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("image",{width:"14",height:"14",href:"/icons/cycle-arrow.png"})})}),T&&(0,o.jsx)("div",{className:"reverse",onClick:this.onReverse,children:(0,o.jsx)("svg",{width:"14",height:"14",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("image",{width:"14",height:"14",href:"/icons/left-right-arrow.png"})})})]})}}]),v}(W.PureComponent),wt=i(2453),N=i(71230),L=i(15746),tt=i(52691),kt=i(61342),zt=i(18662),jt=function(t){G()(v,t);var e=J()(v);function v(y,s){var r;M()(this,v),r=e.call(this,y,s),n()(B()(r),"onDateChange",function(b){var f=b.$W-1,p=b.$D-1,x=b.$M;f===r.state.week&&p===r.state.day&&x===r.state.month||r.setState(function(C){for(var d=C.backboard,S=0;S<a.Rows;S++)for(var k=0;k<a.Columns;k++){var j=d[S*a.Columns+k];j.text===""?j.backgroundColor="":(j.backgroundColor=a.backgroundColor[(S+k)%2],j.border=a.border)}return d[Q[f][0]*a.Columns+Q[f][1]].backgroundColor=a.backgroundColorHighLight,d[V[p][0]*a.Columns+V[p][1]].backgroundColor=a.backgroundColorHighLight,d[q[x][0]*a.Columns+q[x][1]].backgroundColor=a.backgroundColorHighLight,z()(z()({},C),{},{month:x,day:p,week:f})})}),n()(B()(r),"resolve",function(){wt.ZP.info("".concat((0,X.formatMessage)({id:"develop.wait"})))});for(var u=[],h=0;h<a.Rows;h++)for(var m=0;m<a.Columns;m++){var l=new _;l.key="backboard-".concat(h,"-").concat(m),l.top=a.BoxSize*h,l.left=a.BoxSize*m,l.width=a.BoxSize,l.height=a.BoxSize,l.zIndex=0,l.text=St[h][m],l.text===""?l.backgroundColor="":(l.backgroundColor=a.backgroundColor[(h+m)%2],l.border=a.border),u.push(l)}return r.state={backboard:u,month:0,day:0,week:0},r}return E()(v,[{key:"render",value:function(){return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"center",children:"Here is play 07.."}),(0,o.jsxs)(N.Z,{children:[(0,o.jsx)(L.Z,{span:12,children:this.state.backboard.map(function(s){return(0,o.jsx)(A,{top:s.top,left:s.left,width:s.width,height:s.height,zIndex:s.zIndex,border:s.border,text:s.text,backgroundColor:s.backgroundColor,rotatable:!1,reversible:!1,children:(0,o.jsxs)("div",{style:{fontSize:"0.8em"},children:["top: ".concat(s.top)," ",(0,o.jsx)("br",{}),"left: ".concat(s.left)," ",(0,o.jsx)("br",{})]})})})}),(0,o.jsxs)(L.Z,{span:8,children:[(0,o.jsx)(N.Z,{children:(0,o.jsx)(tt.ZP,{grid:{gutter:16,column:4},dataSource:bt,renderItem:function(r){return(0,o.jsxs)(tt.ZP.Item,{children:[r.name,(0,o.jsx)(A,{top:0,left:0,pieceName:r.name,width:a.BoxSize/3*r.matrix.length,height:a.BoxSize/3*r.matrix.length,position:"relative",zIndex:-1,rotatable:!1,reversible:!1,movable:!1},"piece-pickup-placeholder-".concat(r.name)),(0,o.jsx)(A,{pieceName:r.name,top:a.BoxSize/3,left:a.BoxSize/3,width:0,height:0,matrix:r.matrix,boxBackgroundColor:r.color,zIndex:10,boxSize:a.BoxSize/3,position:"absolute",boxCursor:"pointer",opacity:.92,rotatable:!1,reversible:!1,movable:!1},"piece-pickup-".concat(r.name))]})}})}),(0,o.jsxs)(N.Z,{children:[(0,o.jsx)(L.Z,{span:8,children:(0,o.jsx)(kt.Z,{format:"YYYY-MM-DD",allowClear:!1,onChange:this.onDateChange})}),(0,o.jsx)(L.Z,{span:12,children:(0,o.jsx)(zt.ZP,{type:"primary",onClick:this.resolve,children:(0,o.jsx)(X.FormattedMessage,{id:"resolve"})})})]})]}),(0,o.jsx)(L.Z,{span:1,offset:1,children:(0,o.jsx)(X.SelectLang,{className:"ant-dropdown-trigger css-lye32u",reload:!1})})]})]})}}]),v}(W.Component)}}]);
