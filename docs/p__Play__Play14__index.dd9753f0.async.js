(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[956],{78732:function(O,ot,u){"use strict";u.r(ot),u.d(ot,{default:function(){return Tt}});var it=u(96695),at=u.n(it),M=u(97857),S=u.n(M),j=u(12444),R=u.n(j),Q=u(72004),A=u.n(Q),q=u(25098),k=u.n(q),T=u(31996),Z=u.n(T),xt=u(26037),ut=u.n(xt),Ct=u(9783),i=u.n(Ct),vt=u(67294),St=u(68400),wt=u.n(St),bt=u(85121),ht,ct=bt.ZP.div(ht||(ht=wt()([`
  .rotate {
    position: absolute;
    left: 0em;
    top: -2em;
    width: 1.2em;
    height: 1.2em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .reverse {
    position: absolute;
    left: 3em;
    top: -2em;
    width: 1.2em;
    height: 1.2em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`]))),X=function(){function r(){R()(this,r)}return A()(r,null,[{key:"isEmpty",value:function(t){return!t||t.length<1||t[0].length<1}},{key:"sum",value:function(t){if(this.isEmpty(t))return 0;for(var n=0,h=0;h<t.length;h++)for(var e=0;e<t[0].length;e++)n+=t[h][e];return n}},{key:"operable",value:function(t){return!(this.isEmpty(t)||t.length!==t[0].length||t.length!==3&&t.length!==4)}},{key:"copy",value:function(t){if(!this.operable(t))throw new Error;var n=this.array(t.length,t[0].length);return n.length>=3&&(n[0][0]=t[0][0],n[0][1]=t[0][1],n[0][2]=t[0][2],n[1][0]=t[1][0],n[1][1]=t[1][1],n[1][2]=t[1][2],n[2][0]=t[2][0],n[2][1]=t[2][1],n[2][2]=t[2][2]),n.length>=4&&(n[0][3]=t[0][3],n[1][3]=t[1][3],n[2][3]=t[2][3],n[3][0]=t[3][0],n[3][1]=t[3][1],n[3][2]=t[3][2],n[3][3]=t[3][3]),n}},{key:"left0",value:function(t){if(!this.operable(t))throw new Error;var n=this.array(t.length,t[0].length);return n.length>=3&&(n[0][0]=t[0][1],n[0][1]=t[0][2],n[1][0]=t[1][1],n[1][1]=t[1][2],n[2][0]=t[2][1],n[2][1]=t[2][2]),n.length>=4&&(n[0][2]=t[0][3],n[1][2]=t[1][3],n[2][2]=t[2][3],n[3][0]=t[3][1],n[3][1]=t[3][2],n[3][2]=t[3][3]),n}},{key:"left",value:function(t){if(!this.operable(t))throw new Error;for(var n=this.sum(t),h=this.copy(t);;){var e=this.left0(h);if(n!==this.sum(e))return h;h=e}}},{key:"top0",value:function(t){if(!this.operable(t))throw new Error;var n=this.array(t.length,t[0].length);return n.length>=3&&(n[0][0]=t[1][0],n[0][1]=t[1][1],n[0][2]=t[1][2],n[1][0]=t[2][0],n[1][1]=t[2][1],n[1][2]=t[2][2]),n.length>=4&&(n[0][3]=t[1][3],n[1][3]=t[2][3],n[2][0]=t[3][0],n[2][1]=t[3][1],n[2][2]=t[3][2],n[2][3]=t[3][3]),n}},{key:"top",value:function(t){if(!this.operable(t))throw new Error;for(var n=this.sum(t),h=this.copy(t);;){var e=this.top0(h);if(n!==this.sum(e))return h;h=e}}},{key:"move2TopLeft",value:function(t){return this.top(this.left(t))}}]),r}();i()(X,"array",function(r,o){for(var t=[],n=0;n<r;n++){var h=[];t[n]=h;for(var e=0;e<o;e++)t[n].push(0)}return t}),i()(X,"rotate",function(r){if(!X.operable(r))throw new Error;var o=X.array(r.length,r[0].length);return r.length===3&&(o[0][0]=r[2][0],o[0][1]=r[1][0],o[0][2]=r[0][0],o[1][0]=r[2][1],o[1][1]=r[1][1],o[1][2]=r[0][1],o[2][0]=r[2][2],o[2][1]=r[1][2],o[2][2]=r[0][2]),r.length===4&&(o[0][0]=r[3][0],o[0][1]=r[2][0],o[0][2]=r[1][0],o[0][3]=r[0][0],o[1][0]=r[3][1],o[1][1]=r[2][1],o[1][2]=r[1][1],o[1][3]=r[0][1],o[2][0]=r[3][2],o[2][1]=r[2][2],o[2][2]=r[1][2],o[2][3]=r[0][2],o[3][0]=r[3][3],o[3][1]=r[2][3],o[3][2]=r[1][3],o[3][3]=r[0][3]),o}),i()(X,"reverse",function(r){if(!X.operable(r))throw new Error;var o=X.array(r.length,r[0].length);return r.length===3&&(o[0][0]=r[0][2],o[0][1]=r[0][1],o[0][2]=r[0][0],o[1][0]=r[1][2],o[1][1]=r[1][1],o[1][2]=r[1][0],o[2][0]=r[2][2],o[2][1]=r[2][1],o[2][2]=r[2][0]),r.length===4&&(o[0][0]=r[0][3],o[0][1]=r[0][2],o[0][2]=r[0][1],o[0][3]=r[0][0],o[1][0]=r[1][3],o[1][1]=r[1][2],o[1][2]=r[1][1],o[1][3]=r[1][0],o[2][0]=r[2][3],o[2][1]=r[2][2],o[2][2]=r[2][1],o[2][3]=r[2][0],o[3][0]=r[3][3],o[3][1]=r[3][2],o[3][2]=r[3][1],o[3][3]=r[3][0]),o});var U=u(80854),kt=[[1,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],Dt=[[1,0,0],[1,1,0],[1,1,0]],zt=[[1,1,1],[1,0,1],[0,0,0]],Yt=[[0,0,1],[0,0,1],[1,1,1]],It=[[1,1,0],[0,1,0],[0,1,1]],Et=[[1,1,1],[0,1,0],[0,1,0]],Mt=[[1,1,1,1],[0,0,0,0],[0,0,0,0],[0,0,0,0]],Bt=[[0,1,0],[0,1,0],[1,1,0]],jt=[[1,1,0,0],[0,1,1,1],[0,0,0,0],[0,0,0,0]],Xt=[[1,1,0],[0,1,1],[0,0,0]],$={A:"rgb(105,165,45)",B:"rgb(145,85,160)",C:"rgb(120,85,85)",D:"rgb(40,130,240)",E:"rgb(120,100,200)",F:"rgb(250,190,110)",G:"rgb(220,110,160)",H:"rgb(230,110,15)",I:"rgb(80,180,140)",J:"rgb(220,150,100)"},Wt=null,$t=[{name:"A",matrix:kt,color:$.A},{name:"B",matrix:Dt,color:$.B},{name:"C",matrix:zt,color:$.C},{name:"D",matrix:Yt,color:$.D},{name:"E",matrix:It,color:$.E},{name:"F",matrix:Et,color:$.F},{name:"G",matrix:Mt,color:$.G},{name:"H",matrix:Bt,color:$.H},{name:"I",matrix:jt,color:$.I},{name:"J",matrix:Xt,color:$.J}],a=A()(function r(){R()(this,r)});i()(a,"Rows",8),i()(a,"Columns",7),i()(a,"BoxSize",90),i()(a,"backgroundColor",["white","#eee"]),i()(a,"backgroundColorHighLight","#f1c205"),i()(a,"border","1px solid rgb(25,140,250)"),i()(a,"Id","backboard-id"),i()(a,"LoadMore",20),i()(a,"Url","https://jigsaw.raas-dev.autodesk.com");var Pt=[["january","february","march","april","may","june",""],["july","august","september","october","november","december",""],["01","02","03","04","05","06","07"],["08","09","10","11","12","13","14"],["15","16","17","18","19","20","21"],["22","23","24","25","26","27","28"],["29","30","31","sunday","monday","tuesday","wednesday"],["","","","","thursday","friday","saturday"]],mt=[[6,3],[6,4],[6,5],[6,6],[7,4],[7,5],[7,6]],ft=[[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[6,0],[6,1],[6,2]],gt=[[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[1,0],[1,1],[1,2],[1,3],[1,4],[1,5]],Zt=[[0,6],[1,6],[7,0],[7,1],[7,2],[7,3]],l=u(85893),st=A()(function r(){R()(this,r),i()(this,"key",void 0),i()(this,"pieceName",void 0),i()(this,"top",void 0),i()(this,"left",void 0),i()(this,"width",void 0),i()(this,"height",void 0),i()(this,"x",void 0),i()(this,"y",void 0),i()(this,"maxX",void 0),i()(this,"maxY",void 0),i()(this,"minX",void 0),i()(this,"minY",void 0),i()(this,"rotateAngle",void 0),i()(this,"rotatable",void 0),i()(this,"reversible",void 0),i()(this,"movable",void 0),i()(this,"matrix",void 0),i()(this,"boxSize",void 0),i()(this,"boxBackgroundColor",void 0),i()(this,"boxCursor",void 0),i()(this,"extendedMatrix",void 0),i()(this,"onDrag",void 0),i()(this,"onDragEnd",void 0),i()(this,"onDragStart",void 0),i()(this,"children",void 0),i()(this,"backgroundColor",void 0),i()(this,"border",void 0),i()(this,"position",void 0),i()(this,"cursor",void 0),i()(this,"text",void 0),i()(this,"zIndex",void 0),i()(this,"opacity",void 0)}),_=function(r){Z()(t,r);var o=ut()(t);function t(n,h){var e;return R()(this,t),e=o.call(this,n,h),i()(k()(e),"mouseDown",void 0),i()(k()(e),"moveRefresh",void 0),i()(k()(e),"minX",void 0),i()(k()(e),"minY",void 0),i()(k()(e),"maxX",void 0),i()(k()(e),"maxY",void 0),i()(k()(e),"startDrag",function(z){if(e.props.movable){var x=z.clientX,D=z.clientY;e.mouseDown=!0;var f=function(d){if(e.mouseDown){d.stopImmediatePropagation();var s=d.clientX,w=d.clientY,m=s-x,y=w-D;x=s,D=w}},c=function v(){document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",v),e.mouseDown&&(e.mouseDown=!1)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",c)}}),i()(k()(e),"startInnerDrag",function(z){var x=z.clientX,D=z.clientY;e.mouseDown=!0,e.moveRefresh=!1;var f=function(s){var w,m,y,C,g,p;if(e.mouseDown){e.moveRefresh=!0,s.stopImmediatePropagation();var I=s.clientX,E=s.clientY,B=I-x,b=E-D,N=Math.round(((w=s.target)===null||w===void 0||(m=w.parentElement)===null||m===void 0||(y=m.getBoundingClientRect())===null||y===void 0?void 0:y.x)||0),H=Math.round(((C=s.target)===null||C===void 0||(g=C.parentElement)===null||g===void 0||(p=g.getBoundingClientRect())===null||p===void 0?void 0:p.y)||0);e.setState(function(F){var G=a.BoxSize,nt=0,yt=0,J=F.top+b,lt=F.left+B;return S()(S()({},F),{},{top:J,left:lt,width:nt,height:yt,boxSize:G,x:N,y:H})}),x=I,D=E}},c=function d(s){var w,m,y,C,g,p;(s==null||(w=s.target)===null||w===void 0||(m=w.attributes)===null||m===void 0||(y=m.name)===null||y===void 0?void 0:y.value)==="reverse"||(s==null||(C=s.target)===null||C===void 0||(g=C.attributes)===null||g===void 0||(p=g.name)===null||p===void 0?void 0:p.value)==="rotate"||e.setState(function(I){return document.removeEventListener("mousedown",d),S()(S()({},I),{},{rotatable:!1,reversible:!1})})},v=function d(){document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",d),e.mouseDown&&(e.mouseDown=!1),e.setState(function(s){return S()(S()({},s),{},{rotatable:!0,reversible:!0})},function(){document.addEventListener("mousedown",c),e.moveRefresh&&e.setState(function(s){var w=s.x,m=s.y,y=s.top,C=s.left,g=C+e.minX-w,p=y+e.minY-m,I=g+e.maxX-e.minX,E=p+e.maxY-e.minY,B=Math.round((Math.min(Math.max(g,C),I)-g)/a.BoxSize)*a.BoxSize+g,b=Math.round((Math.min(Math.max(p,y),E)-p)/a.BoxSize)*a.BoxSize+p;return S()(S()({},s),{},{left:B,top:b})})})};document.addEventListener("mousemove",f),document.addEventListener("mouseup",v)}),i()(k()(e),"onRotate",function(){var z=X.move2TopLeft(X.rotate(e.state.matrix));e.setState(function(x){return S()(S()({},x),{},{matrix:z})})}),i()(k()(e),"onReverse",function(){var z=X.move2TopLeft(X.reverse(e.state.matrix));e.setState(function(x){return S()(S()({},x),{},{matrix:z})})}),e.state=S()({},n),e}return A()(t,[{key:"render",value:function(){var h,e=(h=document.getElementById(a.Id))===null||h===void 0?void 0:h.getBoundingClientRect(),z=Math.round((e==null?void 0:e.x)||0),x=Math.round((e==null?void 0:e.y)||0),D=z,f=x,c=D+a.BoxSize*(a.Columns+5),v=f+a.BoxSize*(a.Rows-1);this.minX=D,this.minY=f,this.maxX=c,this.maxY=v;var d=this.props,s=d.key,w=d.border,m=d.cursor,y=d.boxCursor,C=d.boxBackgroundColor,g=d.position,p=d.zIndex,I=d.opacity,E=d.backgroundColor,B=d.text,b=this.state,N=b.top,H=b.left,F=b.width,G=b.height,nt=b.x,yt=b.y,J=b.boxSize,lt=b.rotateAngle,W=b.matrix,Ht=b.rotatable,Ft=b.reversible,dt=[];if(W&&W.length&&W[0])for(var Ut=W[0].length,Nt=W.length,V=0;V<Nt;V++)for(var K=0;K<Ut;K++){var Y=new st;Y.key="".concat(s,"-").concat(V,"-").concat(K),Y.top=J*V,Y.left=J*K;var Gt=this.state.matrix[V][K];Gt?(Y.backgroundColor=C,Y.cursor=y,Y.zIndex=p+1,Y.onDrag=this.startInnerDrag,Y.width=J,Y.height=J):(Y.backgroundColor=void 0,Y.cursor=void 0,Y.zIndex=p-1,Y.onDrag=this.startDrag,Y.width=0,Y.height=0),dt.push(Y)}var Jt={top:N,left:H,width:F,height:G,transform:"rotate(".concat(lt,"deg)"),cursor:m,userSelect:"none",border:w,backgroundColor:E,position:g||"absolute",zIndex:p,opacity:I};return(0,l.jsxs)(ct,{onMouseDown:this.startDrag,style:Jt,children:[this.props.children,B&&(0,l.jsx)("div",{style:{fontSize:"1.1em",lineHeight:"1em",margin:"0.6em 0.3em 0"},children:(0,l.jsx)(U.FormattedMessage,{id:B},"backboard-text-".concat(B))}),dt&&dt.map(function(P){var Ot={top:P.top,left:P.left,width:P.width,height:P.height,cursor:P.cursor,userSelect:"none",backgroundColor:P.backgroundColor,position:"absolute",zIndex:P.zIndex,opacity:P.opacity};return(0,l.jsx)(ct,{onMouseDown:P.onDrag,style:Ot},P.key)}),Ht&&(0,l.jsx)("div",{className:"rotate",onClick:this.onRotate,children:(0,l.jsx)("svg",{width:"1.2em",height:"1.2em",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("image",{width:"1.2em",height:"1.2em",href:"/icons/cycle-arrow.png",name:"rotate"})})}),Ft&&(0,l.jsx)("div",{className:"reverse",onClick:this.onReverse,children:(0,l.jsx)("svg",{width:"1.2em",height:"1.2em",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("image",{width:"1.2em",height:"1.2em",href:"/icons/left-right-arrow.png",name:"reverse"})})})]})}}]),t}(vt.PureComponent),pt=u(2453),tt=u(71230),L=u(15746),et=u(52691),Lt=u(61342),Rt=u(18662),At=u(27484),rt=u.n(At),Tt=function(r){Z()(t,r);var o=ut()(t);function t(n,h){var e;R()(this,t),e=o.call(this,n,h),i()(k()(e),"dateSet",void 0),i()(k()(e),"resultsCount",{}),i()(k()(e),"queryDate",rt()().format("MM/DD/YYYY")),i()(k()(e),"onDateChange",function(c){var v=c.$W,d=c.$D-1,s=c.$M;e.queryDate=rt()(c.$d).format("MM/DD/YYYY"),!(v===e.state.week&&d===e.state.day&&s===e.state.month)&&e.setState(function(w){for(var m=w.backboard,y=0;y<a.Rows;y++)for(var C=0;C<a.Columns;C++){var g=m[y*a.Columns+C];g.text===""?g.backgroundColor="":(g.backgroundColor=a.backgroundColor[(y+C)%2],g.border=a.border)}return m[mt[v][0]*a.Columns+mt[v][1]].backgroundColor=a.backgroundColorHighLight,m[ft[d][0]*a.Columns+ft[d][1]].backgroundColor=a.backgroundColorHighLight,m[gt[s][0]*a.Columns+gt[s][1]].backgroundColor=a.backgroundColorHighLight,S()(S()({},w),{},{month:s,day:d,week:v})})}),i()(k()(e),"resolve",function(){var c=0;e.resultsCount&&e.resultsCount[e.queryDate]&&(c=e.resultsCount[e.queryDate]);var v=Math.max(50,c+a.LoadMore);fetch("".concat(a.Url,"/resolve?date=").concat(e.queryDate,"&count=").concat(v)).then(function(d){return d.json()}).then(function(d){e.resultsCount[e.queryDate]=d.count||0;var s=[];e.setState(function(w){if(d&&d.code===0&&d.data&&0<d.data.length){var m=[];for(var y in d.data){for(var C=[],g=d.data[y].matrix,p=0;p<g.length;p++)for(var I=0;I<g[0].length;I++){var E=new st;E.key="result-".concat(y,"-").concat(p,"-").concat(I);var B=a.BoxSize/3;E.top=B*p,E.left=B*I+m.length*a.BoxSize*3,E.width=B,E.height=B;var b=g[p][I];if(E.pieceName=b,b!=="`")E.backgroundColor=$[b];else{var N=!1,H=at()(Zt),F;try{for(H.s();!(F=H.n()).done;){var G=F.value;p===G[0]&&I===G[1]&&(N=!0)}}catch(nt){H.e(nt)}finally{H.f()}}C.push(E)}m.push(C),m.length>2&&(s.push(m),m=[])}m.length>0&&s.push(m)}else pt.ZP.info("".concat((0,U.formatMessage)({id:"server.computing"})));return S()(S()({},w),{},{results:s})})}).catch(function(d){pt.ZP.info("".concat((0,U.formatMessage)({id:d})))})});for(var z=[],x=0;x<a.Rows;x++)for(var D=0;D<a.Columns;D++){var f=new st;f.key="backboard-".concat(x,"-").concat(D),f.top=a.BoxSize*x,f.left=a.BoxSize*D,f.width=a.BoxSize,f.height=a.BoxSize,f.zIndex=0,f.text=Pt[x][D],f.text===""?f.backgroundColor="":(f.backgroundColor=a.backgroundColor[(x+D)%2],f.border=a.border),z.push(f)}return e.state={backboard:z,month:0,day:0,week:0,results:[]},e}return A()(t,[{key:"render",value:function(){this.dateSet||(this.dateSet=!0,this.onDateChange(rt()()));var h=this.state,e=h.minX,z=h.minY,x=h.maxX,D=h.maxY,f=h.results;return(0,l.jsx)("div",{children:(0,l.jsx)("div",{style:{padding:"2em 8em 0"},children:(0,l.jsx)("div",{id:a.Id,children:(0,l.jsxs)(tt.Z,{children:[(0,l.jsx)(L.Z,{span:11,children:this.state.backboard.map(function(c){return(0,l.jsx)(_,{top:c.top,left:c.left,width:c.width,height:c.height,zIndex:c.zIndex,border:c.border,text:c.text,backgroundColor:c.backgroundColor,rotatable:!1,reversible:!1},"backboard-".concat(c.key))})}),(0,l.jsxs)(L.Z,{span:13,children:[(0,l.jsxs)(tt.Z,{children:[(0,l.jsx)(L.Z,{span:20,children:(0,l.jsx)(et.ZP,{grid:{column:5},dataSource:$t,renderItem:function(v){return(0,l.jsxs)(et.ZP.Item,{children:[v.name,(0,l.jsx)(_,{top:0,left:0,pieceName:v.name,width:a.BoxSize/3*v.matrix.length,height:a.BoxSize/3*v.matrix.length,position:"relative",zIndex:-1,rotatable:!1,reversible:!1,movable:!1},"piece-pickup-placeholder-".concat(v.name)),(0,l.jsx)(_,{pieceName:v.name,top:a.BoxSize/3,left:a.BoxSize/3,width:0,height:0,maxX:x,maxY:D,minX:e,minY:z,matrix:v.matrix,boxBackgroundColor:v.color,zIndex:10,boxSize:a.BoxSize/3,position:"absolute",boxCursor:"pointer",opacity:.92,rotatable:!1,reversible:!1,movable:!1},"piece-pickup-".concat(v.name))]})}})}),(0,l.jsx)(L.Z,{span:4,children:(0,l.jsx)(U.SelectLang,{className:"ant-dropdown-trigger css-lye32u",reload:!1})})]}),(0,l.jsxs)(tt.Z,{children:[(0,l.jsx)(L.Z,{span:11}),(0,l.jsx)(L.Z,{span:3,style:{fontSize:"1.2em",textAlign:"right",float:"right"},children:(0,l.jsxs)("big",{children:[(0,l.jsx)(U.FormattedMessage,{id:"set.goal"}),":\xA0"]})}),(0,l.jsx)(L.Z,{span:5,style:{fontSize:"1.2em",textAlign:"right",float:"right"},children:(0,l.jsx)(Lt.Z,{format:"YYYY-MM-DD",defaultValue:rt()(),size:"middle",allowClear:!1,onChange:this.onDateChange})}),(0,l.jsx)(L.Z,{span:5,style:{fontSize:"1.2em",textAlign:"right",float:"right"},children:(0,l.jsx)(Rt.ZP,{type:"primary",onClick:this.resolve,children:(0,l.jsx)(U.FormattedMessage,{id:"resolve"})})})]}),(0,l.jsx)(tt.Z,{children:(0,l.jsx)(L.Z,{span:24,children:(0,l.jsx)(et.ZP,{size:"large",itemLayout:"vertical",pagination:{onChange:function(v){console.log("page: ".concat(v))},pageSize:1},dataSource:f,renderItem:function(v){return(0,l.jsx)(et.ZP.Item,{children:v&&v.map(function(d){return d&&d.map(function(s){return(0,l.jsx)(_,{backgroundColor:s.backgroundColor,top:s.top+100,left:s.left+40,width:s.width,height:s.height},s.key)})})})}})})})]})]})})})})}}]),t}(vt.Component)},96695:function(O,ot,u){var it=u(96263);function at(M,S){var j=typeof Symbol!="undefined"&&M[Symbol.iterator]||M["@@iterator"];if(!j){if(Array.isArray(M)||(j=it(M))||S&&M&&typeof M.length=="number"){j&&(M=j);var R=0,Q=function(){};return{s:Q,n:function(){return R>=M.length?{done:!0}:{done:!1,value:M[R++]}},e:function(Z){throw Z},f:Q}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var A=!0,q=!1,k;return{s:function(){j=j.call(M)},n:function(){var Z=j.next();return A=Z.done,Z},e:function(Z){q=!0,k=Z},f:function(){try{!A&&j.return!=null&&j.return()}finally{if(q)throw k}}}}O.exports=at,O.exports.__esModule=!0,O.exports.default=O.exports}}]);