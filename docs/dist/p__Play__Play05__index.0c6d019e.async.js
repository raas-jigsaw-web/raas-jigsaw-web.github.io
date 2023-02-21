"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[989],{2e3:function(It,F,o){o.r(F),o.d(F,{default:function(){return kt}});var V=o(97857),b=o.n(V),q=o(12444),I=o.n(q),_=o(72004),B=o.n(_),tt=o(25098),P=o.n(tt),rt=o(31996),$=o.n(rt),et=o(26037),T=o.n(et),nt=o(9783),n=o.n(nt),X=o(67294),ot=o(68400),at=o.n(ot),it=o(85121),G,J=it.ZP.div(G||(G=at()([`
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
    left: 50%;
    top: -26px;
    width: 18px;
    height: 18px;
    margin-left: -9px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .reverse {
    position: absolute;
    left: 50%;
    bottom: -26px;
    width: 18px;
    height: 18px;
    margin-left: -9px;
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
`]))),D=B()(function t(){I()(this,t)});n()(D,"array",function(t,r){for(var d=[],g=0;g<t;g++){var i=[];d[g]=i;for(var e=0;e<r;e++)d[g].push(0)}return d}),n()(D,"rotate",function(t){if(t.length!==t[0].length||t.length!==3&&t.length!==4)throw new Error;var r=D.array(t.length,t[0].length);return t.length===3&&(r[0][0]=t[2][0],r[0][1]=t[1][0],r[0][2]=t[0][0],r[1][0]=t[2][1],r[1][1]=t[1][1],r[1][2]=t[0][1],r[2][0]=t[2][2],r[2][1]=t[1][2],r[2][2]=t[0][2]),t.length===4&&(r[0][0]=t[3][0],r[0][1]=t[2][0],r[0][2]=t[1][0],r[0][3]=t[0][0],r[1][0]=t[3][1],r[1][1]=t[2][1],r[1][2]=t[1][1],r[1][3]=t[0][1],r[2][0]=t[3][2],r[2][1]=t[2][2],r[2][2]=t[1][2],r[2][3]=t[0][2],r[3][0]=t[3][3],r[3][1]=t[2][3],r[3][2]=t[1][3],r[3][3]=t[0][3]),r}),n()(D,"reverse",function(t){if(t.length!==t[0].length||t.length!==3&&t.length!==4)throw new Error;var r=D.array(t.length,t[0].length);return t.length===3&&(r[0][0]=t[0][2],r[0][1]=t[0][1],r[0][2]=t[0][0],r[1][0]=t[1][2],r[1][1]=t[1][1],r[1][2]=t[1][0],r[2][0]=t[2][2],r[2][1]=t[2][1],r[2][2]=t[2][0]),t.length===4&&(r[0][0]=t[0][3],r[0][1]=t[0][2],r[0][2]=t[0][1],r[0][3]=t[0][0],r[1][0]=t[1][3],r[1][1]=t[1][2],r[1][2]=t[1][1],r[1][3]=t[1][0],r[2][0]=t[2][3],r[2][1]=t[2][2],r[2][2]=t[2][1],r[2][3]=t[2][0],r[3][0]=t[3][3],r[3][1]=t[3][2],r[3][2]=t[3][1],r[3][3]=t[3][0]),r});var R=o(80854),a=o(85893),Bt={n:"t",s:"b",e:"r",w:"l",ne:"tr",nw:"tl",se:"br",sw:"bl"},N=B()(function t(){I()(this,t),n()(this,"key",void 0),n()(this,"top",void 0),n()(this,"left",void 0),n()(this,"width",void 0),n()(this,"height",void 0),n()(this,"rotateAngle",void 0),n()(this,"rotatable",void 0),n()(this,"reversible",void 0),n()(this,"movable",void 0),n()(this,"matrix",void 0),n()(this,"boxSize",void 0),n()(this,"boxBackgroundColor",void 0),n()(this,"boxCursor",void 0),n()(this,"extendedMatrix",void 0),n()(this,"onDrag",void 0),n()(this,"onDragEnd",void 0),n()(this,"onDragStart",void 0),n()(this,"children",void 0),n()(this,"backgroundColor",void 0),n()(this,"border",void 0),n()(this,"position",void 0),n()(this,"cursor",void 0),n()(this,"text",void 0),n()(this,"zIndex",void 0),n()(this,"opacity",void 0)}),U=function(t){$()(d,t);var r=T()(d);function d(g,i){var e;return I()(this,d),e=r.call(this,g,i),n()(P()(e),"setElementRef",function(u){e.$element=u}),n()(P()(e),"startDrag",function(u){if(e.props.movable){var h=u.clientX,c=u.clientY;e.props.onDragStart&&e.props.onDragStart(),e.mouseDown=!0;var l=function(m){if(e.mouseDown){m.stopImmediatePropagation();var y=m.clientX,j=m.clientY,f=y-h,v=j-c;e.props.onDrag&&e.props.onDrag(f,v),e.setState(function(C){var S=C.top+v,Y=C.left+f;return b()(b()({},C),{},{top:S,left:Y})}),h=y,c=j}},z=function x(){document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",x),e.mouseDown&&(e.mouseDown=!1,e.props.onDragEnd&&e.props.onDragEnd())};document.addEventListener("mousemove",l),document.addEventListener("mouseup",z)}}),n()(P()(e),"onRotate",function(){console.log("onRotate");var u=D.rotate(e.state.matrix);e.setState(function(h){return b()(b()({},h),{},{matrix:u})})}),n()(P()(e),"onReverse",function(){console.log("onReverse");var u=D.reverse(e.state.matrix);e.setState(function(h){return b()(b()({},h),{},{matrix:u})})}),e.state=b()({},g),e}return B()(d,[{key:"render",value:function(){var i=this.props,e=i.key,u=i.border,h=i.cursor,c=i.boxSize,l=i.boxCursor,z=i.boxBackgroundColor,x=i.position,m=i.zIndex,y=i.opacity,j=i.backgroundColor,f=i.text,v=this.state,C=v.top,S=v.left,Y=v.width,wt=v.height,St=v.rotateAngle,M=v.matrix,A=[];if(M&&M.length&&M[0])for(var Dt=M[0].length,zt=M.length,Z=0;Z<zt;Z++)for(var L=0;L<Dt;L++){var k=new N;k.key="".concat(e,"-").concat(Z,"-").concat(L),k.top=c*Z,k.left=c*L,k.width=c,k.height=c,k.backgroundColor=this.state.matrix[Z][L]?z:void 0,k.cursor=l,k.zIndex=m+1,A.push(k)}var jt={top:C,left:S,width:Y,height:wt,transform:"rotate(".concat(St,"deg)"),cursor:h,userSelect:"none",border:u,backgroundColor:j,position:x||"absolute",zIndex:m,opacity:y};return(0,a.jsxs)(J,{ref:this.setElementRef,onMouseDown:this.startDrag,style:jt,children:[this.props.children,f&&(0,a.jsx)("div",{style:{fontSize:"1.1em",lineHeight:"1em",margin:"0.6em 0.3em 0"},children:(0,a.jsx)(R.FormattedMessage,{id:f},"backboard-text-".concat(f))}),A&&A.map(function(w){var Pt={top:w.top,left:w.left,width:w.width,height:w.height,cursor:w.cursor,userSelect:"none",backgroundColor:w.backgroundColor,position:"absolute",zIndex:w.zIndex,opacity:w.opacity};return(0,a.jsx)(J,{style:Pt},w.key)}),this.props.rotatable&&(0,a.jsx)("div",{className:"rotate",onClick:this.onRotate,children:(0,a.jsx)("svg",{width:"14",height:"14",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("image",{width:"14",height:"14",href:"/icons/cycle-arrow.png"})})}),this.props.reversible&&(0,a.jsx)("div",{className:"reverse",onClick:this.onReverse,children:(0,a.jsx)("svg",{width:"14",height:"14",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("image",{width:"14",height:"14",href:"/icons/left-right-arrow.png"})})})]})}}]),d}(X.PureComponent),st=[[1,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],lt=[[1,0,0],[1,1,0],[1,1,0]],dt=[[1,1,1],[1,0,1],[0,0,0]],ht=[[1,1,1],[1,0,0],[1,0,0]],ct=[[1,1,0],[0,1,0],[0,1,1]],vt=[[1,1,1],[0,1,0],[0,1,0]],ut=[[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0]],gt=[[1,1,0],[0,1,0],[0,1,0]],mt=[[1,1,0,0],[0,1,1,1],[0,0,0,0],[0,0,0,0]],ft=[[1,1,0],[0,1,1],[0,0,0]],p={A:"rgb(105,165,45)",B:"rgb(145,85,160)",C:"rgb(230,225,45)",D:"rgb(20,130,240)",E:"rgb(120,100,200)",F:"rgb(105,165,45)",G:"rgb(145,85,160)",H:"rgb(230,225,45)",I:"rgb(20,130,240)",J:"rgb(120,100,200)"},Et=null,pt=[{name:"A",matrix:st,color:p.A},{name:"B",matrix:lt,color:p.B},{name:"C",matrix:dt,color:p.C},{name:"D",matrix:ht,color:p.D},{name:"E",matrix:ct,color:p.E},{name:"F",matrix:vt,color:p.F},{name:"G",matrix:ut,color:p.G},{name:"H",matrix:gt,color:p.H},{name:"I",matrix:mt,color:p.I},{name:"J",matrix:ft,color:p.J}],s=B()(function t(){I()(this,t)});n()(s,"Rows",8),n()(s,"Columns",7),n()(s,"BoxSize",90),n()(s,"backgroundColor",["white","#eee"]),n()(s,"backgroundColorHighLight","#f1c309"),n()(s,"border","1px solid rgb(25,140,250)");var xt=[["january","february","march","april","may","june",""],["july","august","september","october","november","december",""],["01","02","03","04","05","06","07"],["08","09","10","11","12","13","14"],["15","16","17","18","19","20","21"],["22","23","24","25","26","27","28"],["29","30","31","monday","tuesday","wednesday","thursday"],["","","","","friday","saturday","sunday"]],W=[[6,3],[6,4],[6,5],[6,6],[7,4],[7,5],[7,6]],O=[[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[6,0],[6,1],[6,2]],K=[[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[1,0],[1,1],[1,2],[1,3],[1,4],[1,5]],Ct=o(2453),H=o(71230),E=o(15746),Q=o(52691),bt=o(61342),yt=o(18662),kt=function(t){$()(d,t);var r=T()(d);function d(g,i){var e;I()(this,d),e=r.call(this,g,i),n()(P()(e),"onDateChange",function(z){var x=z.$W-1,m=z.$D-1,y=z.$M;x===e.state.week&&m===e.state.day&&y===e.state.month||e.setState(function(j){for(var f=j.backboard,v=0;v<s.Rows;v++)for(var C=0;C<s.Columns;C++){var S=f[v*s.Columns+C];S.text===""?S.backgroundColor="":(S.backgroundColor=s.backgroundColor[(v+C)%2],S.border=s.border)}return f[W[x][0]*s.Columns+W[x][1]].backgroundColor=s.backgroundColorHighLight,f[O[m][0]*s.Columns+O[m][1]].backgroundColor=s.backgroundColorHighLight,f[K[y][0]*s.Columns+K[y][1]].backgroundColor=s.backgroundColorHighLight,b()(b()({},j),{},{month:y,day:m,week:x})})}),n()(P()(e),"resolve",function(){Ct.ZP.info("".concat((0,R.formatMessage)({id:"develop.wait"})))});for(var u=[],h=0;h<s.Rows;h++)for(var c=0;c<s.Columns;c++){var l=new N;l.key="backboard-".concat(h,"-").concat(c),l.top=s.BoxSize*h,l.left=s.BoxSize*c,l.width=s.BoxSize,l.height=s.BoxSize,l.zIndex=0,l.text=xt[h][c],l.text===""?l.backgroundColor="":(l.backgroundColor=s.backgroundColor[(h+c)%2],l.border=s.border),u.push(l)}return e.state={backboard:u,month:0,day:0,week:0},e}return B()(d,[{key:"render",value:function(){return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"center",children:"Here is play 05.."}),(0,a.jsxs)(H.Z,{children:[(0,a.jsx)(E.Z,{span:13,children:this.state.backboard.map(function(i){return(0,a.jsx)(U,{top:i.top,left:i.left,width:i.width,height:i.height,zIndex:i.zIndex,border:i.border,text:i.text,backgroundColor:i.backgroundColor,rotatable:!1,reversible:!1})})}),(0,a.jsxs)(E.Z,{span:8,children:[(0,a.jsx)(H.Z,{children:(0,a.jsx)(Q.ZP,{grid:{gutter:16,column:4},dataSource:pt,renderItem:function(e){return(0,a.jsxs)(Q.ZP.Item,{children:[e.name,(0,a.jsx)(U,{top:0,left:0,width:25*e.matrix.length,height:25*e.matrix.length,matrix:e.matrix,boxBackgroundColor:e.color,zIndex:11,boxSize:25,position:"relative",boxCursor:"pointer",rotatable:!1,reversible:!1,movable:!1})]})}})}),(0,a.jsxs)(H.Z,{children:[(0,a.jsx)(E.Z,{span:8,children:(0,a.jsx)(bt.Z,{format:"YYYY-MM-DD",allowClear:!1,onChange:this.onDateChange})}),(0,a.jsx)(E.Z,{span:12,children:(0,a.jsx)(yt.ZP,{type:"primary",onClick:this.resolve,children:(0,a.jsx)(R.FormattedMessage,{id:"resolve"})})})]})]}),(0,a.jsx)(E.Z,{span:1,offset:1,children:(0,a.jsx)(R.SelectLang,{className:"ant-dropdown-trigger css-lye32u",reload:!1})})]})]})}}]),d}(X.Component)}}]);
