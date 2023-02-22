"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[617],{55121:function(Et,$,a){a.r($),a.d($,{default:function(){return zt}});var rt=a(97857),y=a.n(rt),nt=a(12444),M=a.n(nt),ot=a(72004),E=a.n(ot),it=a(25098),D=a.n(it),at=a(31996),G=a.n(at),st=a(26037),J=a.n(st),lt=a(9783),n=a.n(lt),W=a(67294),dt=a(68400),ct=a.n(dt),ht=a(85121),O,K=ht.ZP.div(O||(O=ct()([`
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
`]))),I=E()(function t(){M()(this,t)});n()(I,"array",function(t,e){for(var u=[],C=0;C<t;C++){var s=[];u[C]=s;for(var r=0;r<e;r++)u[C].push(0)}return u}),n()(I,"rotate",function(t){if(t.length!==t[0].length||t.length!==3&&t.length!==4)throw new Error;var e=I.array(t.length,t[0].length);return t.length===3&&(e[0][0]=t[2][0],e[0][1]=t[1][0],e[0][2]=t[0][0],e[1][0]=t[2][1],e[1][1]=t[1][1],e[1][2]=t[0][1],e[2][0]=t[2][2],e[2][1]=t[1][2],e[2][2]=t[0][2]),t.length===4&&(e[0][0]=t[3][0],e[0][1]=t[2][0],e[0][2]=t[1][0],e[0][3]=t[0][0],e[1][0]=t[3][1],e[1][1]=t[2][1],e[1][2]=t[1][1],e[1][3]=t[0][1],e[2][0]=t[3][2],e[2][1]=t[2][2],e[2][2]=t[1][2],e[2][3]=t[0][2],e[3][0]=t[3][3],e[3][1]=t[2][3],e[3][2]=t[1][3],e[3][3]=t[0][3]),e}),n()(I,"reverse",function(t){if(t.length!==t[0].length||t.length!==3&&t.length!==4)throw new Error;var e=I.array(t.length,t[0].length);return t.length===3&&(e[0][0]=t[0][2],e[0][1]=t[0][1],e[0][2]=t[0][0],e[1][0]=t[1][2],e[1][1]=t[1][1],e[1][2]=t[1][0],e[2][0]=t[2][2],e[2][1]=t[2][1],e[2][2]=t[2][0]),t.length===4&&(e[0][0]=t[0][3],e[0][1]=t[0][2],e[0][2]=t[0][1],e[0][3]=t[0][0],e[1][0]=t[1][3],e[1][1]=t[1][2],e[1][2]=t[1][1],e[1][3]=t[1][0],e[2][0]=t[2][3],e[2][1]=t[2][2],e[2][2]=t[2][1],e[2][3]=t[2][0],e[3][0]=t[3][3],e[3][1]=t[3][2],e[3][2]=t[3][1],e[3][3]=t[3][0]),e});var B=a(80854),vt=[[1,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],ut=[[1,0,0],[1,1,0],[1,1,0]],mt=[[1,1,1],[1,0,1],[0,0,0]],gt=[[1,1,1],[1,0,0],[1,0,0]],ft=[[1,1,0],[0,1,0],[0,1,1]],pt=[[1,1,1],[0,1,0],[0,1,0]],xt=[[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0]],yt=[[1,1,0],[0,1,0],[0,1,0]],Ct=[[1,1,0,0],[0,1,1,1],[0,0,0,0],[0,0,0,0]],bt=[[1,1,0],[0,1,1],[0,0,0]],w={A:"rgb(105,165,45)",B:"rgb(145,85,160)",C:"rgb(230,225,45)",D:"rgb(40,130,240)",E:"rgb(120,100,200)",F:"rgb(170,190,110)",G:"rgb(220,110,160)",H:"rgb(230,110,15)",I:"rgb(80,180,140)",J:"rgb(220,150,100)"},Lt=null,kt=[{name:"A",matrix:vt,color:w.A},{name:"B",matrix:ut,color:w.B},{name:"C",matrix:mt,color:w.C},{name:"D",matrix:gt,color:w.D},{name:"E",matrix:ft,color:w.E},{name:"F",matrix:pt,color:w.F},{name:"G",matrix:xt,color:w.G},{name:"H",matrix:yt,color:w.H},{name:"I",matrix:Ct,color:w.I},{name:"J",matrix:bt,color:w.J}],i=E()(function t(){M()(this,t)});n()(i,"Rows",8),n()(i,"Columns",7),n()(i,"BoxSize",90),n()(i,"backgroundColor",["white","#eee"]),n()(i,"backgroundColorHighLight","#f1c309"),n()(i,"border","1px solid rgb(25,140,250)");var wt=[["january","february","march","april","may","june",""],["july","august","september","october","november","december",""],["01","02","03","04","05","06","07"],["08","09","10","11","12","13","14"],["15","16","17","18","19","20","21"],["22","23","24","25","26","27","28"],["29","30","31","monday","tuesday","wednesday","thursday"],["","","","","friday","saturday","sunday"]],Q=[[6,3],[6,4],[6,5],[6,6],[7,4],[7,5],[7,6]],V=[[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[6,0],[6,1],[6,2]],q=[[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[1,0],[1,1],[1,2],[1,3],[1,4],[1,5]],o=a(85893),_=E()(function t(){M()(this,t),n()(this,"key",void 0),n()(this,"pieceName",void 0),n()(this,"top",void 0),n()(this,"left",void 0),n()(this,"width",void 0),n()(this,"height",void 0),n()(this,"rotateAngle",void 0),n()(this,"rotatable",void 0),n()(this,"reversible",void 0),n()(this,"movable",void 0),n()(this,"matrix",void 0),n()(this,"boxSize",void 0),n()(this,"boxBackgroundColor",void 0),n()(this,"boxCursor",void 0),n()(this,"extendedMatrix",void 0),n()(this,"onDrag",void 0),n()(this,"onDragEnd",void 0),n()(this,"onDragStart",void 0),n()(this,"children",void 0),n()(this,"backgroundColor",void 0),n()(this,"border",void 0),n()(this,"position",void 0),n()(this,"cursor",void 0),n()(this,"text",void 0),n()(this,"zIndex",void 0),n()(this,"opacity",void 0)}),X=function(t){G()(u,t);var e=J()(u);function u(C,s){var r;return M()(this,u),r=e.call(this,C,s),n()(D()(r),"mouseDown",void 0),n()(D()(r),"startDrag",function(m){if(r.props.movable){var d=m.clientX,g=m.clientY;r.mouseDown=!0;var l=function(c){if(r.mouseDown){c.stopImmediatePropagation();var x=c.clientX,S=c.clientY,b=x-d,h=S-g;d=x,g=S}},j=function p(){document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",p),r.mouseDown&&(r.mouseDown=!1)};document.addEventListener("mousemove",l),document.addEventListener("mouseup",j)}}),n()(D()(r),"startInnerDrag",function(m){var d=m.clientX,g=m.clientY;r.mouseDown=!0;var l=function(c){if(r.mouseDown){c.stopImmediatePropagation();var x=c.clientX,S=c.clientY,b=x-d,h=S-g;r.setState(function(k){var z=i.BoxSize,R=0,F=0,Z=k.top+h,T=k.left+b;return y()(y()({},k),{},{top:Z,left:T,width:R,height:F,boxSize:z})}),d=x,g=S}},j=function p(){document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",p),r.mouseDown&&(r.mouseDown=!1),r.setState(function(c){return y()(y()({},c),{},{rotatable:!0,reversible:!0})},function(){})};document.addEventListener("mousemove",l),document.addEventListener("mouseup",j)}),n()(D()(r),"onRotate",function(){var m=I.rotate(r.state.matrix);r.setState(function(d){return y()(y()({},d),{},{matrix:m})})}),n()(D()(r),"onReverse",function(){var m=I.reverse(r.state.matrix);r.setState(function(d){return y()(y()({},d),{},{matrix:m})})}),n()(D()(r),"onBlur",function(){console.log("haha")}),r.state=y()({},C),r}return E()(u,[{key:"render",value:function(){var s=this,r=this.props,m=r.key,d=r.border,g=r.cursor,l=r.boxCursor,j=r.boxBackgroundColor,p=r.position,c=r.zIndex,x=r.opacity,S=r.backgroundColor,b=r.text,h=this.state,k=h.top,z=h.left,R=h.width,F=h.height,Z=h.boxSize,T=h.rotateAngle,L=h.matrix,et=h.rotatable,Dt=h.reversible,U=[];if(L&&L.length&&L[0])for(var It=L[0].length,Bt=L.length,Y=0;Y<Bt;Y++)for(var H=0;H<It;H++){var v=new _;v.key="".concat(m,"-").concat(Y,"-").concat(H),v.top=Z*Y,v.left=Z*H;var Pt=this.state.matrix[Y][H];Pt?(v.backgroundColor=j,v.cursor=l,v.zIndex=c+1,v.onDrag=this.startInnerDrag,v.width=Z,v.height=Z):(v.backgroundColor=void 0,v.cursor=void 0,v.zIndex=c-1,v.onDrag=this.startDrag,v.width=0,v.height=0),U.push(v)}var Zt={top:k,left:z,width:R,height:F,transform:"rotate(".concat(T,"deg)"),cursor:g,userSelect:"none",border:d,backgroundColor:S,position:p||"absolute",zIndex:c,opacity:x};return(0,o.jsxs)(K,{onMouseDown:this.startDrag,style:Zt,children:[this.props.children,b&&(0,o.jsx)("div",{style:{fontSize:"1.1em",lineHeight:"1em",margin:"0.6em 0.3em 0"},children:(0,o.jsx)(B.FormattedMessage,{id:b},"backboard-text-".concat(b))}),U&&U.map(function(f){var Mt={top:f.top,left:f.left,width:f.width,height:f.height,cursor:f.cursor,userSelect:"none",backgroundColor:f.backgroundColor,position:"absolute",zIndex:f.zIndex,opacity:f.opacity};return(0,o.jsx)(K,{onMouseDown:f.onDrag,onBlur:s.onBlur,style:Mt,children:f.top===0&&f.left===0&&et&&(0,o.jsxs)("div",{style:{fontSize:"0.8em"},children:["top: ".concat(k)," ",(0,o.jsx)("br",{}),"left: ".concat(z)," ",(0,o.jsx)("br",{}),"b.top: ".concat(f.top)," ",(0,o.jsx)("br",{}),"b.left: ".concat(f.left)," ",(0,o.jsx)("br",{})]})},f.key)}),et&&(0,o.jsx)("div",{className:"rotate",onClick:this.onRotate,children:(0,o.jsx)("svg",{width:"14",height:"14",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("image",{width:"14",height:"14",href:"/icons/cycle-arrow.png"})})}),Dt&&(0,o.jsx)("div",{className:"reverse",onClick:this.onReverse,children:(0,o.jsx)("svg",{width:"14",height:"14",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("image",{width:"14",height:"14",href:"/icons/left-right-arrow.png"})})})]})}}]),u}(W.PureComponent),St=a(2453),A=a(18662),N=a(71230),P=a(15746),tt=a(52691),jt=a(61342),zt=function(t){G()(u,t);var e=J()(u);function u(C,s){var r;M()(this,u),r=e.call(this,C,s),n()(D()(r),"onDateChange",function(j){var p=j.$W-1,c=j.$D-1,x=j.$M;p===r.state.week&&c===r.state.day&&x===r.state.month||r.setState(function(S){for(var b=S.backboard,h=0;h<i.Rows;h++)for(var k=0;k<i.Columns;k++){var z=b[h*i.Columns+k];z.text===""?z.backgroundColor="":(z.backgroundColor=i.backgroundColor[(h+k)%2],z.border=i.border)}return b[Q[p][0]*i.Columns+Q[p][1]].backgroundColor=i.backgroundColorHighLight,b[V[c][0]*i.Columns+V[c][1]].backgroundColor=i.backgroundColorHighLight,b[q[x][0]*i.Columns+q[x][1]].backgroundColor=i.backgroundColorHighLight,y()(y()({},S),{},{month:x,day:c,week:p})})}),n()(D()(r),"resolve",function(){St.ZP.info("".concat((0,B.formatMessage)({id:"develop.wait"})))});for(var m=[],d=0;d<i.Rows;d++)for(var g=0;g<i.Columns;g++){var l=new _;l.key="backboard-".concat(d,"-").concat(g),l.top=i.BoxSize*d,l.left=i.BoxSize*g,l.width=i.BoxSize,l.height=i.BoxSize,l.zIndex=0,l.text=wt[d][g],l.text===""?l.backgroundColor="":(l.backgroundColor=i.backgroundColor[(d+g)%2],l.border=i.border),m.push(l)}return r.state={backboard:m,month:0,day:0,week:0},r}return E()(u,[{key:"render",value:function(){return(0,o.jsxs)("div",{style:{padding:"4em 4em 0"},children:[(0,o.jsxs)("div",{className:"center",children:["Here is play 08.. - ",(0,o.jsx)(A.ZP,{type:"primary",onClick:function(){B.history.push("/welcome")},children:"Test route /welcome "}),(0,o.jsx)(A.ZP,{type:"primary",onClick:function(){B.history.push("/play/play08")},children:"Back to 08"})]}),(0,o.jsxs)(N.Z,{children:[(0,o.jsx)(P.Z,{span:2}),(0,o.jsx)(P.Z,{span:12,children:this.state.backboard.map(function(s){return(0,o.jsx)(X,{top:s.top,left:s.left,width:s.width,height:s.height,zIndex:s.zIndex,border:s.border,text:s.text,backgroundColor:s.backgroundColor,rotatable:!1,reversible:!1,children:(s.text==="may"||s.text==="01")&&(0,o.jsxs)("div",{style:{fontSize:"0.8em"},children:["top: ".concat(s.top)," ",(0,o.jsx)("br",{}),"left: ".concat(s.left)," ",(0,o.jsx)("br",{})]})})})}),(0,o.jsxs)(P.Z,{span:8,children:[(0,o.jsx)(N.Z,{children:(0,o.jsx)(tt.ZP,{grid:{gutter:16,column:4},dataSource:kt,renderItem:function(r){return(0,o.jsxs)(tt.ZP.Item,{children:[r.name,(0,o.jsx)(X,{top:0,left:0,pieceName:r.name,width:i.BoxSize/3*r.matrix.length,height:i.BoxSize/3*r.matrix.length,position:"relative",zIndex:-1,rotatable:!1,reversible:!1,movable:!1},"piece-pickup-placeholder-".concat(r.name)),(0,o.jsx)(X,{pieceName:r.name,top:i.BoxSize/3,left:i.BoxSize/3,width:0,height:0,matrix:r.matrix,boxBackgroundColor:r.color,zIndex:10,boxSize:i.BoxSize/3,position:"absolute",boxCursor:"pointer",opacity:.92,rotatable:!1,reversible:!1,movable:!1},"piece-pickup-".concat(r.name))]})}})}),(0,o.jsxs)(N.Z,{children:[(0,o.jsx)(P.Z,{span:8,children:(0,o.jsx)(jt.Z,{format:"YYYY-MM-DD",allowClear:!1,onChange:this.onDateChange})}),(0,o.jsx)(P.Z,{span:12,children:(0,o.jsx)(A.ZP,{type:"primary",onClick:this.resolve,children:(0,o.jsx)(B.FormattedMessage,{id:"resolve"})})})]})]}),(0,o.jsx)(P.Z,{span:1,offset:1,children:(0,o.jsx)(B.SelectLang,{className:"ant-dropdown-trigger css-lye32u",reload:!1})})]})]})}}]),u}(W.Component)}}]);
