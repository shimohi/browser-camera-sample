(this["webpackJsonpcertify-browser-camera-sample"]=this["webpackJsonpcertify-browser-camera-sample"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),o=n(3),c=n.n(o),a=(n(15),n(9)),h=n(4),d=n(5),s=n(10),u=n(7),w=n(8),f=n(6),b=n.n(f),l=n(0);function g(){var e=r.a.useState({height:window.innerHeight,width:window.innerWidth}),t=Object(w.a)(e,2),n=t[0],i=t[1];return r.a.useEffect((function(){var e=function(e,t){var n;return function(){clearTimeout(n),n=setTimeout((function(t){n=null,e()}),t)}}((function(){i({height:window.innerHeight,width:window.innerWidth})}),100);return window.addEventListener("resize",e),window.addEventListener("orientationchange",e),function(){window.removeEventListener("orientationchange",e),window.removeEventListener("resize",e)}})),Object(l.jsx)(m,{width:n.width,height:n.height})}var p={width:1920,height:1080,facingMode:{exact:"environment"}},m=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(h.a)(this,n),(i=t.call(this,e)).webcamRef=void 0,i.capture=function(){var e=i.webcam;if(null!=e){var t=i.props.width>i.props.height?p:{width:p.height,height:p.width},n=e.getScreenshot(Object(a.a)({},t));n&&v(n)}},i.webcamRef=r.a.createRef(),i}return Object(d.a)(n,[{key:"webcam",get:function(){return this.webcamRef.current}},{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)(b.a,{audio:!1,width:this.props.width,height:this.props.height,ref:this.webcamRef,screenshotQuality:.85,screenshotFormat:"image/jpeg",videoConstraints:p,onUserMediaError:function(e){return window.alert(e)}})}),Object(l.jsx)("div",{style:{position:"absolute",right:"2%",top:"2%"},children:Object(l.jsx)("button",{onClick:this.capture,children:"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8"})})]})}}]),n}(r.a.Component);var v=function(e){var t=document.createElement("a");"string"===typeof t.download?(t.href=e,t.download="component.png",document.body.appendChild(t),t.click(),document.body.removeChild(t)):window.open(e)},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),i(e),r(e),o(e),c(e)}))};c.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),j()}},[[17,1,2]]]);
//# sourceMappingURL=main.011ef50f.chunk.js.map