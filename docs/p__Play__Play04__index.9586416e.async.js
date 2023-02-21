"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[438],{86889:function(nt,Y,g){g.d(Y,{t:function(){return z}});var K=g(72004),E=g.n(K),k=g(12444),A=g.n(k),F=g(9783),M=g.n(F),z=E()(function n(){A()(this,n)});M()(z,"array",function(n,o){for(var I=[],b=0;b<n;b++){var Z=[];I[b]=Z;for(var j=0;j<o;j++)I[b].push(0)}return I}),M()(z,"rotate",function(n){if(n.length!==n[0].length||n.length!==3&&n.length!==4)throw new Error;var o=z.array(n.length,n[0].length);return n.length===3&&(o[0][0]=n[2][0],o[0][1]=n[1][0],o[0][2]=n[0][0],o[1][0]=n[2][1],o[1][1]=n[1][1],o[1][2]=n[0][1],o[2][0]=n[2][2],o[2][1]=n[1][2],o[2][2]=n[0][2]),n.length===4&&(o[0][0]=n[3][0],o[0][1]=n[2][0],o[0][2]=n[1][0],o[0][3]=n[0][0],o[1][0]=n[3][1],o[1][1]=n[2][1],o[1][2]=n[1][1],o[1][3]=n[0][1],o[2][0]=n[3][2],o[2][1]=n[2][2],o[2][2]=n[1][2],o[2][3]=n[0][2],o[3][0]=n[3][3],o[3][1]=n[2][3],o[3][2]=n[1][3],o[3][3]=n[0][3]),o}),M()(z,"reverse",function(n){if(n.length!==n[0].length||n.length!==3&&n.length!==4)throw new Error;var o=z.array(n.length,n[0].length);return n.length===3&&(o[0][0]=n[0][2],o[0][1]=n[0][1],o[0][2]=n[0][0],o[1][0]=n[1][2],o[1][1]=n[1][1],o[1][2]=n[1][0],o[2][0]=n[2][2],o[2][1]=n[2][1],o[2][2]=n[2][0]),n.length===4&&(o[0][0]=n[0][3],o[0][1]=n[0][2],o[0][2]=n[0][1],o[0][3]=n[0][0],o[1][0]=n[1][3],o[1][1]=n[1][2],o[1][2]=n[1][1],o[1][3]=n[1][0],o[2][0]=n[2][3],o[2][1]=n[2][2],o[2][2]=n[2][1],o[2][3]=n[2][0],o[3][0]=n[3][3],o[3][1]=n[3][2],o[3][2]=n[3][1],o[3][3]=n[3][0]),o})},18266:function(nt,Y,g){g.r(Y),g.d(Y,{default:function(){return xt}});var K=g(12444),E=g.n(K),k=g(72004),A=g.n(k),F=g(31996),M=g.n(F),z=g(26037),n=g.n(z),o=g(67294),I=g(97857),b=g.n(I),Z=g(25098),j=g.n(Z),rt=g(9783),R=g.n(rt),st=g(45697),y=g.n(st),bt=function(a,i){return Math.sqrt(a*a+i*i)},dt=function(a,i){var e=a.x,t=a.y,r=i.x,u=i.y,v=e*r+t*u,s=e*u-t*r,l=Math.atan2(s,v)/Math.PI*180;return(l+360)%360},G=function(a){return a*Math.PI/180},f=function(a){return Math.cos(G(a))},p=function(a){return Math.sin(G(a))},_=function(a,i,e){var t=a+i;return t>e?a=t:(i=e-a,a=e),{width:a,deltaW:i}},O=function(a,i,e){var t=a+i;return t>e?a=t:(i=e-a,a=e),{height:a,deltaH:i}},ot=function(a,i,e,t,r,u,v){var s=i.width,l=i.height,c=i.centerX,x=i.centerY,h=i.rotateAngle,L=s<0?-1:1,N=l<0?-1:1;switch(s=Math.abs(s),l=Math.abs(l),a){case"r":{var P=_(s,e,u);s=P.width,e=P.deltaW,r?(t=e/r,l=s/r,c+=e/2*f(h)-t/2*p(h),x+=e/2*p(h)+t/2*f(h)):(c+=e/2*f(h),x+=e/2*p(h));break}case"tr":{t=-t;var S=_(s,e,u);s=S.width,e=S.deltaW;var D=O(l,t,v);l=D.height,t=D.deltaH,r&&(e=t*r,s=l*r),c+=e/2*f(h)+t/2*p(h),x+=e/2*p(h)-t/2*f(h);break}case"br":{var T=_(s,e,u);s=T.width,e=T.deltaW;var w=O(l,t,v);l=w.height,t=w.deltaH,r&&(e=t*r,s=l*r),c+=e/2*f(h)-t/2*p(h),x+=e/2*p(h)+t/2*f(h);break}case"b":{var C=O(l,t,v);l=C.height,t=C.deltaH,r?(e=t*r,s=l*r,c+=e/2*f(h)-t/2*p(h),x+=e/2*p(h)+t/2*f(h)):(c-=t/2*p(h),x+=t/2*f(h));break}case"bl":{e=-e;var X=_(s,e,u);s=X.width,e=X.deltaW;var $=O(l,t,v);l=$.height,t=$.deltaH,r&&(l=s/r,t=e/r),c-=e/2*f(h)+t/2*p(h),x-=e/2*p(h)-t/2*f(h);break}case"l":{e=-e;var B=_(s,e,u);s=B.width,e=B.deltaW,r?(l=s/r,t=e/r,c-=e/2*f(h)+t/2*p(h),x-=e/2*p(h)-t/2*f(h)):(c-=e/2*f(h),x-=e/2*p(h));break}case"tl":{e=-e,t=-t;var U=_(s,e,u);s=U.width,e=U.deltaW;var tt=O(l,t,v);l=tt.height,t=tt.deltaH,r&&(s=l*r,e=t*r),c-=e/2*f(h)-t/2*p(h),x-=e/2*p(h)+t/2*f(h);break}case"t":{t=-t;var et=O(l,t,v);l=et.height,t=et.deltaH,r?(s=l*r,e=t*r,c+=e/2*f(h)+t/2*p(h),x+=e/2*p(h)-t/2*f(h)):(c+=t/2*p(h),x-=t/2*f(h));break}}return{position:{centerX:c,centerY:x},size:{width:s*L,height:l*N}}},it={n:0,ne:1,e:2,se:3,s:4,sw:5,w:6,nw:7},at=["n","ne","e","se","s","sw","w","nw"],ht={0:0,1:1,2:2,3:2,4:3,5:4,6:4,7:5,8:6,9:6,10:7,11:8},lt=function(a,i){var e=ht[Math.floor(a/30)],t=it[i],r=(t+e)%8;return at[r]},ut=function(a){var i=a.centerX,e=a.centerY,t=a.width,r=a.height,u=a.rotateAngle;return{top:e-r/2,left:i-t/2,width:t,height:r,rotateAngle:u}},gt=function(a){var i=a.top,e=a.left,t=a.width,r=a.height,u=a.rotateAngle;return{position:{centerX:e+t/2,centerY:i+r/2},size:{width:t,height:r},transform:{rotateAngle:u}}},ct=g(68400),vt=g.n(ct),ft=g(85121),Q,pt=ft.ZP.div(Q||(Q=vt()([`
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
`]))),d=g(85893),V={n:"t",s:"b",e:"r",w:"l",ne:"tr",nw:"tl",se:"br",sw:"bl"},q=function(m){M()(i,m);var a=n()(i);function i(){var e;E()(this,i);for(var t=arguments.length,r=new Array(t),u=0;u<t;u++)r[u]=arguments[u];return e=a.call.apply(a,[this].concat(r)),R()(j()(e),"setElementRef",function(v){e.$element=v}),e}return A()(i,[{key:"render",value:function(){var t=this,r=this.props,u=r.styles,v=u.position,s=v.centerX,l=v.centerY,c=u.size,x=c.width,h=c.height,L=u.transform.rotateAngle,N=r.zoomable,P=r.rotatable,S=r.parentRotateAngle,D={width:Math.abs(x),height:Math.abs(h),transform:"rotate(".concat(L,"deg)"),left:s-Math.abs(x)/2,top:l-Math.abs(h)/2,cursor:"move",userSelect:"none",backgroundColor:this.props.text==="1"?"grey":""},T=N.split(",").map(function(w){return w.trim()}).filter(function(w){return w});return(0,d.jsxs)(pt,{ref:this.setElementRef,onMouseDown:this.startDrag,className:"rect single-resizer",style:D,children:[this.props.children,P&&(0,d.jsx)("div",{className:"rotate",onClick:this.props.onRotate,children:(0,d.jsx)("svg",{width:"14",height:"14",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("image",{width:"14",height:"14",href:"/icons/cycle-arrow.png"})})}),P&&(0,d.jsx)("div",{className:"reverse",onClick:this.props.onReverse,children:(0,d.jsx)("svg",{width:"14",height:"14",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("image",{width:"14",height:"14",href:"/icons/left-right-arrow.png"})})}),T.map(function(w){var C="".concat(lt(L+S,w),"-resize");return(0,d.jsx)("div",{style:{cursor:C},className:"".concat(V[w]," resizable-handler"),onMouseDown:function($){return t.startResize($,C)}},w)}),T.map(function(w){return(0,d.jsx)("div",{className:"".concat(V[w]," square")},w)})]})}}]),i}(o.PureComponent);R()(q,"propTypes",{styles:y().object,zoomable:y().string,rotatable:y().bool,onResizeStart:y().func,onResize:y().func,onResizeEnd:y().func,onRotateStart:y().func,onRotate:y().func,onRotateEnd:y().func,onDragStart:y().func,onDrag:y().func,onDragEnd:y().func,parentRotateAngle:y().number});var W=function(m){M()(i,m);var a=n()(i);function i(e,t){var r;return E()(this,i),r=a.call(this,e,t),R()(j()(r),"onRotate",function(u,v){var s=Math.round(v+u);s>=360?s-=360:s<0&&(s+=360),s>356||s<4?s=0:s>86&&s<94?s=90:s>176&&s<184?s=180:s>266&&s<274&&(s=270),r.setState(function(l){return b()(b()({},l),{},{rotateAngle:s})})}),R()(j()(r),"onResize",function(u,v,s,l,c){var x=r.state.rotateAngle,h=v-G(r.state.rotateAngle+0),L=u*Math.cos(h),N=u*Math.sin(h),P=s.width/s.height,S=ot(l,b()(b()({},s),{},{rotateAngle:x}),L,N,P,10,10),D=S.position,T=D.centerX,w=D.centerY,C=S.size,X=C.width,$=C.height,B=ut({centerX:T,centerY:w,width:X,height:$,rotateAngle:x});r.setState(function(U){return b()(b()({},U),B)})}),R()(j()(r),"onDrag",function(u,v){r.props.movable&&r.setState(function(s){var l=s.top+v,c=s.left+u;return b()(b()({},s),{},{top:l,left:c})})}),r.state={top:typeof e.top=="number"?e.top:100,left:typeof e.left=="number"?e.left:100,width:typeof e.width=="number"?e.width:100,height:typeof e.height=="number"?e.height:100,rotateAngle:0,zoomable:""},r}return A()(i,[{key:"render",value:function(){var t=this.state,r=t.top,u=t.left,v=t.width,s=t.height,l=t.rotateAngle,c=gt({top:r,left:u,width:v,height:s,rotateAngle:l});return(0,d.jsx)(q,{styles:c,zoomable:this.state.zoomable,rotatable:this.props.rotatable,parentRotateAngle:0,onResizeStart:null,onResize:this.onResize,onResizeEnd:null,onRotateStart:null,onRotateEnd:null,onDragStart:null,onDrag:this.onDrag,onDragEnd:null,onRotate:this.props.onRotate,onReverse:this.props.onReverse,text:this.props.text,children:this.props.children})}}]),i}(o.Component),H=g(86889),mt=A()(function m(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:100,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:100,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"kept";E()(this,m),R()(this,"top",void 0),R()(this,"left",void 0),R()(this,"width",void 0),R()(this,"height",void 0),R()(this,"text",void 0),this.top=a,this.left=i,this.width=e,this.height=t,this.text=r}),J=function(m){M()(i,m);var a=n()(i);function i(e){var t;return E()(this,i),t=a.call(this,e),R()(j()(t),"onRotate",function(){console.log("onRotate");var r=H.t.rotate(t.state.matrix);t.setState(function(u){return b()(b()({},u),{},{matrix:r})})}),R()(j()(t),"onReverse",function(){console.log("onReverse");var r=H.t.reverse(t.state.matrix);t.setState(function(u){return console.log(r),b()(b()({},u),{},{matrix:r})})}),t.state={matrix:t.props.matrix||[[0,1,0],[0,1,0],[1,1,1]]},t}return A()(i,[{key:"render",value:function(){for(var t=100,r=this.state.matrix[0].length,u=this.state.matrix.length,v=[],s=0;s<u;s++)for(var l=0;l<r;l++)v.push(new mt(t*s,t*l,t,t,this.state.matrix[s][l]+""));return(0,d.jsx)(W,{top:this.props.top||100,left:this.props.left||100,width:t*r,height:t*u,movable:!0,rotatable:!0,onRotate:this.onRotate,onReverse:this.onReverse,children:v.map(function(c){return(0,d.jsx)(W,{top:c.top,left:c.left,text:c.text,children:c.text})})})}}]),i}(o.PureComponent),xt=function(m){M()(i,m);var a=n()(i);function i(){return E()(this,i),a.apply(this,arguments)}return A()(i,[{key:"render",value:function(){var t=[[0,1,0],[0,1,0],[1,1,1]],r=[[1,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],u=[[1,0,0,0],[1,1,0,0],[0,1,0,0],[0,1,0,0]];return(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:"center",children:"Here is play04.."}),(0,d.jsx)(J,{top:100,left:100,matrix:t}),(0,d.jsx)(J,{left:500,matrix:r}),(0,d.jsx)(J,{top:500,matrix:u})]})}}]),i}(o.Component)}}]);
