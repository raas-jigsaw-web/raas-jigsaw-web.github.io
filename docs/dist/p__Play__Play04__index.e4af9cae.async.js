"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[438],{88652:function(mt,K,c){c.r(K),c.d(K,{default:function(){return xt}});var q=c(12444),j=c.n(q),H=c(72004),C=c.n(H),W=c(31996),L=c.n(W),_=c(26037),D=c.n(_),I=c(67294),tt=c(97857),y=c.n(tt),nt=c(25098),T=c.n(nt),et=c(9783),m=c.n(et),rt=c(45697),w=c.n(rt),bt=function(t,i){return Math.sqrt(t*t+i*i)},wt=function(t,i){var r=t.x,n=t.y,s=i.x,l=i.y,g=r*s+n*l,o=r*l-n*s,h=Math.atan2(o,g)/Math.PI*180;return(h+360)%360},F=function(t){return t*Math.PI/180},v=function(t){return Math.cos(F(t))},f=function(t){return Math.sin(F(t))},$=function(t,i,r){var n=t+i;return n>r?t=n:(i=r-t,t=r),{width:t,deltaW:i}},N=function(t,i,r){var n=t+i;return n>r?t=n:(i=r-t,t=r),{height:t,deltaH:i}},st=function(t,i,r,n,s,l,g){var o=i.width,h=i.height,u=i.centerX,p=i.centerY,a=i.rotateAngle,P=o<0?-1:1,Y=h<0?-1:1;switch(o=Math.abs(o),h=Math.abs(h),t){case"r":{var z=$(o,r,l);o=z.width,r=z.deltaW,s?(n=r/s,h=o/s,u+=r/2*v(a)-n/2*f(a),p+=r/2*f(a)+n/2*v(a)):(u+=r/2*v(a),p+=r/2*f(a));break}case"tr":{n=-n;var M=$(o,r,l);o=M.width,r=M.deltaW;var S=N(h,n,g);h=S.height,n=S.deltaH,s&&(r=n*s,o=h*s),u+=r/2*v(a)+n/2*f(a),p+=r/2*f(a)-n/2*v(a);break}case"br":{var A=$(o,r,l);o=A.width,r=A.deltaW;var b=N(h,n,g);h=b.height,n=b.deltaH,s&&(r=n*s,o=h*s),u+=r/2*v(a)-n/2*f(a),p+=r/2*f(a)+n/2*v(a);break}case"b":{var R=N(h,n,g);h=R.height,n=R.deltaH,s?(r=n*s,o=h*s,u+=r/2*v(a)-n/2*f(a),p+=r/2*f(a)+n/2*v(a)):(u-=n/2*f(a),p+=n/2*v(a));break}case"bl":{r=-r;var E=$(o,r,l);o=E.width,r=E.deltaW;var X=N(h,n,g);h=X.height,n=X.deltaH,s&&(h=o/s,n=r/s),u-=r/2*v(a)+n/2*f(a),p-=r/2*f(a)-n/2*v(a);break}case"l":{r=-r;var B=$(o,r,l);o=B.width,r=B.deltaW,s?(h=o/s,n=r/s,u-=r/2*v(a)+n/2*f(a),p-=r/2*f(a)-n/2*v(a)):(u-=r/2*v(a),p-=r/2*f(a));break}case"tl":{r=-r,n=-n;var O=$(o,r,l);o=O.width,r=O.deltaW;var Q=N(h,n,g);h=Q.height,n=Q.deltaH,s&&(o=h*s,r=n*s),u-=r/2*v(a)-n/2*f(a),p-=r/2*f(a)+n/2*v(a);break}case"t":{n=-n;var V=N(h,n,g);h=V.height,n=V.deltaH,s?(o=h*s,r=n*s,u+=r/2*v(a)+n/2*f(a),p+=r/2*f(a)-n/2*v(a)):(u+=n/2*f(a),p-=n/2*v(a));break}}return{position:{centerX:u,centerY:p},size:{width:o*P,height:h*Y}}},ot={n:0,ne:1,e:2,se:3,s:4,sw:5,w:6,nw:7},it=["n","ne","e","se","s","sw","w","nw"],at={0:0,1:1,2:2,3:2,4:3,5:4,6:4,7:5,8:6,9:6,10:7,11:8},ht=function(t,i){var r=at[Math.floor(t/30)],n=ot[i],s=(n+r)%8;return it[s]},lt=function(t){var i=t.centerX,r=t.centerY,n=t.width,s=t.height,l=t.rotateAngle;return{top:r-s/2,left:i-n/2,width:n,height:s,rotateAngle:l}},ut=function(t){var i=t.top,r=t.left,n=t.width,s=t.height,l=t.rotateAngle;return{position:{centerX:r+n/2,centerY:i+s/2},size:{width:n,height:s},transform:{rotateAngle:l}}},gt=c(68400),ct=c.n(gt),vt=c(85121),Z,ft=vt.ZP.div(Z||(Z=ct()([`
  position: absolute;
  // todo, hide border
  border: 1px solid #eb5648;

  .square {
    position: absolute;
    width: 7px;
    height: 7px;
    background: white;
    border: 1px solid #eb5648;
    border-radius: 1px;
  }

  .resizable-handler {
    position: absolute;
    width: 14px;
    height: 14px;
    cursor: pointer;
    z-index: 1;

    &.tl,
    &.t,
    &.tr {
      top: -7px;
    }

    &.tl,
    &.l,
    &.bl {
      left: -7px;
    }

    &.bl,
    &.b,
    &.br {
      bottom: -7px;
    }

    &.br,
    &.r,
    &.tr {
      right: -7px;
    }

    &.l,
    &.r {
      margin-top: -7px;
    }

    &.t,
    &.b {
      margin-left: -7px;
    }
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
`]))),x=c(85893),k={n:"t",s:"b",e:"r",w:"l",ne:"tr",nw:"tl",se:"br",sw:"bl"},G=function(e){L()(i,e);var t=D()(i);function i(){var r;j()(this,i);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return r=t.call.apply(t,[this].concat(s)),m()(T()(r),"setElementRef",function(g){r.$element=g}),r}return C()(i,[{key:"render",value:function(){var n=this,s=this.props,l=s.styles,g=l.position,o=g.centerX,h=g.centerY,u=l.size,p=u.width,a=u.height,P=l.transform.rotateAngle,Y=s.zoomable,z=s.rotatable,M=s.parentRotateAngle,S={width:Math.abs(p),height:Math.abs(a),transform:"rotate(".concat(P,"deg)"),left:o-Math.abs(p)/2,top:h-Math.abs(a)/2,cursor:"move",userSelect:"none",backgroundColor:this.props.text==="1"?"grey":""},A=Y.split(",").map(function(b){return b.trim()}).filter(function(b){return b});return(0,x.jsxs)(ft,{ref:this.setElementRef,onMouseDown:this.startDrag,className:"rect single-resizer",style:S,children:[this.props.children,z&&(0,x.jsx)("div",{className:"rotate",onClick:this.props.onRotate,children:(0,x.jsx)("svg",{width:"14",height:"14",xmlns:"http://www.w3.org/2000/svg",children:(0,x.jsx)("image",{width:"14",height:"14",href:"/icons/cycle-arrow.png"})})}),z&&(0,x.jsx)("div",{className:"reverse",onClick:this.props.onReverse,children:(0,x.jsx)("svg",{width:"14",height:"14",xmlns:"http://www.w3.org/2000/svg",children:(0,x.jsx)("image",{width:"14",height:"14",href:"/icons/left-right-arrow.png"})})}),A.map(function(b){var R="".concat(ht(P+M,b),"-resize");return(0,x.jsx)("div",{style:{cursor:R},className:"".concat(k[b]," resizable-handler"),onMouseDown:function(X){return n.startResize(X,R)}},b)}),A.map(function(b){return(0,x.jsx)("div",{className:"".concat(k[b]," square")},b)})]})}}]),i}(I.PureComponent);m()(G,"propTypes",{styles:w().object,zoomable:w().string,rotatable:w().bool,onResizeStart:w().func,onResize:w().func,onResizeEnd:w().func,onRotateStart:w().func,onRotate:w().func,onRotateEnd:w().func,onDragStart:w().func,onDrag:w().func,onDragEnd:w().func,parentRotateAngle:w().number});var J=function(e){L()(i,e);var t=D()(i);function i(r,n){var s;return j()(this,i),s=t.call(this,r,n),m()(T()(s),"onRotate",function(l,g){var o=Math.round(g+l);o>=360?o-=360:o<0&&(o+=360),o>356||o<4?o=0:o>86&&o<94?o=90:o>176&&o<184?o=180:o>266&&o<274&&(o=270),s.setState(function(h){return y()(y()({},h),{},{rotateAngle:o})})}),m()(T()(s),"onResize",function(l,g,o,h,u){var p=s.state.rotateAngle,a=g-F(s.state.rotateAngle+0),P=l*Math.cos(a),Y=l*Math.sin(a),z=o.width/o.height,M=st(h,y()(y()({},o),{},{rotateAngle:p}),P,Y,z,10,10),S=M.position,A=S.centerX,b=S.centerY,R=M.size,E=R.width,X=R.height,B=lt({centerX:A,centerY:b,width:E,height:X,rotateAngle:p});s.setState(function(O){return y()(y()({},O),B)})}),m()(T()(s),"onDrag",function(l,g){s.props.movable&&s.setState(function(o){var h=o.top+g,u=o.left+l;return y()(y()({},o),{},{top:h,left:u})})}),s.state={top:typeof r.top=="number"?r.top:100,left:typeof r.left=="number"?r.left:100,width:typeof r.width=="number"?r.width:100,height:typeof r.height=="number"?r.height:100,rotateAngle:0,zoomable:""},s}return C()(i,[{key:"render",value:function(){var n=this.state,s=n.top,l=n.left,g=n.width,o=n.height,h=n.rotateAngle,u=ut({top:s,left:l,width:g,height:o,rotateAngle:h});return(0,x.jsx)(G,{styles:u,zoomable:this.state.zoomable,rotatable:this.props.rotatable,parentRotateAngle:0,onResizeStart:null,onResize:this.onResize,onResizeEnd:null,onRotateStart:null,onRotateEnd:null,onDragStart:null,onDrag:this.onDrag,onDragEnd:null,onRotate:this.props.onRotate,onReverse:this.props.onReverse,text:this.props.text,children:this.props.children})}}]),i}(I.Component),d=C()(function e(){j()(this,e)});m()(d,"array",function(e,t){for(var i=[],r=0;r<e;r++){var n=[];i[r]=n;for(var s=0;s<t;s++)i[r].push(0)}return i}),m()(d,"rotate",function(e){if(e.length!==e[0].length||e.length!==3&&e.length!==4)throw new Error;var t=d.array(e.length,e[0].length);return e.length===3&&(t[0][0]=e[2][0],t[0][1]=e[1][0],t[0][2]=e[0][0],t[1][0]=e[2][1],t[1][1]=e[1][1],t[1][2]=e[0][1],t[2][0]=e[2][2],t[2][1]=e[1][2],t[2][2]=e[0][2]),e.length===4&&(t[0][0]=e[3][0],t[0][1]=e[2][0],t[0][2]=e[1][0],t[0][3]=e[0][0],t[1][0]=e[3][1],t[1][1]=e[2][1],t[1][2]=e[1][1],t[1][3]=e[0][1],t[2][0]=e[3][2],t[2][1]=e[2][2],t[2][2]=e[1][2],t[2][3]=e[0][2],t[3][0]=e[3][3],t[3][1]=e[2][3],t[3][2]=e[1][3],t[3][3]=e[0][3]),t}),m()(d,"reverse",function(e){if(e.length!==e[0].length||e.length!==3&&e.length!==4)throw new Error;var t=d.array(e.length,e[0].length);return e.length===3&&(t[0][0]=e[0][2],t[0][1]=e[0][1],t[0][2]=e[0][0],t[1][0]=e[1][2],t[1][1]=e[1][1],t[1][2]=e[1][0],t[2][0]=e[2][2],t[2][1]=e[2][1],t[2][2]=e[2][0]),e.length===4&&(t[0][0]=e[0][3],t[0][1]=e[0][2],t[0][2]=e[0][1],t[0][3]=e[0][0],t[1][0]=e[1][3],t[1][1]=e[1][2],t[1][2]=e[1][1],t[1][3]=e[1][0],t[2][0]=e[2][3],t[2][1]=e[2][2],t[2][2]=e[2][1],t[2][3]=e[2][0],t[3][0]=e[3][3],t[3][1]=e[3][2],t[3][2]=e[3][1],t[3][3]=e[3][0]),t});var pt=C()(function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:100,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:100,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"kept";j()(this,e),m()(this,"top",void 0),m()(this,"left",void 0),m()(this,"width",void 0),m()(this,"height",void 0),m()(this,"text",void 0),this.top=t,this.left=i,this.width=r,this.height=n,this.text=s}),U=function(e){L()(i,e);var t=D()(i);function i(r){var n;return j()(this,i),n=t.call(this,r),m()(T()(n),"onRotate",function(){console.log("onRotate");var s=d.rotate(n.state.matrix);n.setState(function(l){return y()(y()({},l),{},{matrix:s})})}),m()(T()(n),"onReverse",function(){console.log("onReverse");var s=d.reverse(n.state.matrix);n.setState(function(l){return console.log(s),y()(y()({},l),{},{matrix:s})})}),n.state={matrix:n.props.matrix||[[0,1,0],[0,1,0],[1,1,1]]},n}return C()(i,[{key:"render",value:function(){for(var n=100,s=this.state.matrix[0].length,l=this.state.matrix.length,g=[],o=0;o<l;o++)for(var h=0;h<s;h++)g.push(new pt(n*o,n*h,n,n,this.state.matrix[o][h]+""));return(0,x.jsx)(J,{top:this.props.top||100,left:this.props.left||100,width:n*s,height:n*l,movable:!0,rotatable:!0,onRotate:this.onRotate,onReverse:this.onReverse,children:g.map(function(u){return(0,x.jsx)(J,{top:u.top,left:u.left,text:u.text,children:u.text})})})}}]),i}(I.PureComponent),xt=function(e){L()(i,e);var t=D()(i);function i(){return j()(this,i),t.apply(this,arguments)}return C()(i,[{key:"render",value:function(){var n=[[0,1,0],[0,1,0],[1,1,1]],s=[[1,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],l=[[1,0,0,0],[1,1,0,0],[0,1,0,0],[0,1,0,0]];return(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:"center",children:"Here is play04.."}),(0,x.jsx)(U,{top:100,left:100,matrix:n}),(0,x.jsx)(U,{left:500,matrix:s}),(0,x.jsx)(U,{top:500,matrix:l})]})}}]),i}(I.Component)}}]);
