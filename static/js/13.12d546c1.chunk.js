(this.webpackJsonpclient1=this.webpackJsonpclient1||[]).push([[13],{530:function(t,e,n){"use strict";var a=n(748),c=n(749),r=n(750),i=n(751),o=n(752),s=n(753),l=n(723),d=n(754),u=n(728),b=n(639),f=(n(531),n(0),n(35)),j=n(21),h=n(1),m=u.a.Sider;e.a=function(){var t=[Object(f.f)().pathname];return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(u.a,{className:"site-layout-background",style:{margin:"25px 25px",backgroundColor:"white"},children:Object(h.jsx)(m,{width:250,className:"site-layout-background",children:Object(h.jsxs)(b.a,{mode:"inline",defaultSelectedKeys:t,style:{height:"100%",borderRight:0},children:[Object(h.jsxs)(b.a.Item,{children:[" ",Object(h.jsxs)(j.c,{to:"/customer/account/edit",children:[Object(h.jsx)(a.a,{}),"Th\xf4ng tin t\xe0i kho\u1ea3n"]})]},"/customer/account/edit"),Object(h.jsxs)(b.a.Item,{children:[" ",Object(h.jsxs)(j.c,{to:"/customer/notification",children:[Object(h.jsx)(c.a,{}),"Th\xf4ng b\xe1o c\u1ee7a t\xf4i"]})]},"/customer/notification"),Object(h.jsxs)(b.a.Item,{children:[" ",Object(h.jsxs)(j.c,{to:"/sales/order/history",children:[Object(h.jsx)(r.a,{}),"Qu\u1ea3n l\xfd \u0111\u01a1n h\xe0ng"]})]},"/sales/order/history"),Object(h.jsxs)(b.a.Item,{children:[" ",Object(h.jsxs)(j.c,{to:"/customer/address",children:[Object(h.jsx)(i.a,{}),"S\u1ed5 \u0111\u1ecba ch\u1ec9"]})]},"/customer/address"),Object(h.jsxs)(b.a.Item,{children:[" ",Object(h.jsxs)(j.c,{to:"/customer/paymentcard",children:[Object(h.jsx)(o.a,{}),"Th\xf4ng tin thanh to\xe1n"]})]},"/customer/paymentcard"),Object(h.jsxs)(b.a.Item,{children:[" ",Object(h.jsx)(s.a,{}),"S\u1ea3n ph\u1ea9m mua sau"]},"9"),Object(h.jsx)(b.a.Item,{children:Object(h.jsxs)(j.c,{to:"/chatbot",children:[Object(h.jsx)(l.a,{}),"H\u1ecfi \u0111\xe1p"]})},"/chatbot"),Object(h.jsx)(b.a.Item,{children:Object(h.jsxs)(j.c,{to:"/customer/coupons",children:[Object(h.jsx)(d.a,{}),"M\xe3 gi\u1ea3m gi\xe1"]})},"/customer/coupons")]})})})})}},540:function(t,e,n){"use strict";var a=n(545);e.a=a.b},545:function(t,e,n){"use strict";n.d(e,"a",(function(){return A}));var a=n(2),c=n(14),r=n(44),i=n(76),o=n(0),s=n.n(o),l=n(40),d=n.n(l),u=n(99),b=n(448),f=n(123),j=function t(e){return Object(f.a)(this,t),new Error("unreachable case: ".concat(JSON.stringify(e)))},h=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(t);c<a.length;c++)e.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(t,a[c])&&(n[a[c]]=t[a[c]])}return n},m=function(t){return o.createElement(b.a,null,(function(e){var n,r=e.getPrefixCls,i=e.direction,s=t.prefixCls,l=t.size,u=t.className,b=h(t,["prefixCls","size","className"]),f=r("btn-group",s),m="";switch(l){case"large":m="lg";break;case"small":m="sm";break;case"middle":case void 0:break;default:console.warn(new j(l))}var p=d()(f,(n={},Object(c.a)(n,"".concat(f,"-").concat(m),m),Object(c.a)(n,"".concat(f,"-rtl"),"rtl"===i),n),u);return o.createElement("div",Object(a.a)({},b,{className:p}))}))},p=n(560),O=n(539),g=n(526),v=n(528),x=n(533),y=n(546),E=function(){return{width:0,opacity:0,transform:"scale(0)"}},k=function(t){return{width:t.scrollWidth,opacity:1,transform:"scale(1)"}},N=function(t){var e=t.prefixCls,n=!!t.loading;return t.existIcon?s.a.createElement("span",{className:"".concat(e,"-loading-icon")},s.a.createElement(y.a,null)):s.a.createElement(x.b,{visible:n,motionName:"".concat(e,"-loading-icon-motion"),removeOnLeave:!0,onAppearStart:E,onAppearActive:k,onEnterStart:E,onEnterActive:k,onLeaveStart:k,onLeaveActive:E},(function(t,n){var a=t.className,c=t.style;return s.a.createElement("span",{className:"".concat(e,"-loading-icon"),style:c,ref:n},s.a.createElement(y.a,{className:a}))}))},C=n(529),w=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(t);c<a.length;c++)e.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(t,a[c])&&(n[a[c]]=t[a[c]])}return n},T=/^[\u4e00-\u9fa5]{2}$/,S=T.test.bind(T);function I(t){return"text"===t||"link"===t}function P(t,e){var n=!1,a=[];return o.Children.forEach(t,(function(t){var e=Object(i.a)(t),c="string"===e||"number"===e;if(n&&c){var r=a.length-1,o=a[r];a[r]="".concat(o).concat(t)}else a.push(t);n=c})),o.Children.map(a,(function(t){return function(t,e){if(null!=t){var n=e?" ":"";return"string"!==typeof t&&"number"!==typeof t&&"string"===typeof t.type&&S(t.props.children)?Object(C.a)(t,{children:t.props.children.split("").join(n)}):"string"===typeof t?(S(t)&&(t=t.split("").join(n)),o.createElement("span",null,t)):t}}(t,e)}))}Object(O.a)("default","primary","ghost","dashed","link","text"),Object(O.a)("circle","round"),Object(O.a)("submit","button","reset");function A(t){return"danger"===t?{danger:!0}:{type:t}}var R=function(t,e){var n,s,l=t.loading,f=void 0!==l&&l,j=t.prefixCls,h=t.type,m=t.danger,O=t.shape,x=t.size,y=t.className,E=t.children,k=t.icon,C=t.ghost,T=void 0!==C&&C,A=t.block,R=void 0!==A&&A,L=t.htmlType,M=void 0===L?"button":L,z=w(t,["loading","prefixCls","type","danger","shape","size","className","children","icon","ghost","block","htmlType"]),W=o.useContext(v.b),B=o.useState(!!f),V=Object(r.a)(B,2),D=V[0],H=V[1],J=o.useState(!1),U=Object(r.a)(J,2),_=U[0],F=U[1],G=o.useContext(b.b),K=G.getPrefixCls,Q=G.autoInsertSpaceInButton,Z=G.direction,$=e||o.createRef(),q=o.useRef(),X=function(){return 1===o.Children.count(E)&&!k&&!I(h)};s="object"===Object(i.a)(f)&&f.delay?f.delay||!0:!!f,o.useEffect((function(){clearTimeout(q.current),"number"===typeof s?q.current=window.setTimeout((function(){H(s)}),s):H(s)}),[s]),o.useEffect((function(){if($&&$.current&&!1!==Q){var t=$.current.textContent;X()&&S(t)?_||F(!0):_&&F(!1)}}),[$]);var Y=function(e){var n,a=t.onClick,c=t.disabled;D||c?e.preventDefault():null===(n=a)||void 0===n||n(e)};Object(g.a)(!("string"===typeof k&&k.length>2),"Button","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(k,"` at https://ant.design/components/icon")),Object(g.a)(!(T&&I(h)),"Button","`link` or `text` button can't be a `ghost` button.");var tt=K("btn",j),et=!1!==Q,nt="";switch(x||W){case"large":nt="lg";break;case"small":nt="sm"}var at=D?"loading":k,ct=d()(tt,(n={},Object(c.a)(n,"".concat(tt,"-").concat(h),h),Object(c.a)(n,"".concat(tt,"-").concat(O),O),Object(c.a)(n,"".concat(tt,"-").concat(nt),nt),Object(c.a)(n,"".concat(tt,"-icon-only"),!E&&0!==E&&!!at),Object(c.a)(n,"".concat(tt,"-background-ghost"),T&&!I(h)),Object(c.a)(n,"".concat(tt,"-loading"),D),Object(c.a)(n,"".concat(tt,"-two-chinese-chars"),_&&et),Object(c.a)(n,"".concat(tt,"-block"),R),Object(c.a)(n,"".concat(tt,"-dangerous"),!!m),Object(c.a)(n,"".concat(tt,"-rtl"),"rtl"===Z),n),y),rt=k&&!D?k:o.createElement(N,{existIcon:!!k,prefixCls:tt,loading:!!D}),it=E||0===E?P(E,X()&&et):null,ot=Object(u.a)(z,["navigate"]);if(void 0!==ot.href)return o.createElement("a",Object(a.a)({},ot,{className:ct,onClick:Y,ref:$}),rt,it);var st=o.createElement("button",Object(a.a)({},z,{type:M,className:ct,onClick:Y,ref:$}),rt,it);return I(h)?st:o.createElement(p.a,null,st)},L=o.forwardRef(R);L.displayName="Button",L.Group=m,L.__ANT_BUTTON=!0;e.b=L},546:function(t,e,n){"use strict";var a=n(0),c={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"},r=n(524),i=function(t,e){return a.createElement(r.a,Object.assign({},t,{ref:e,icon:c}))};i.displayName="LoadingOutlined";e.a=a.forwardRef(i)},560:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var a=n(123),c=n(82),r=n(90),i=n(182),o=n(183),s=n(0),l=n(568),d=n(532),u=n(527),b=0,f={};function j(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=b++,a=e;function c(){(a-=1)<=0?(t(),delete f[n]):f[n]=Object(u.a)(c)}return f[n]=Object(u.a)(c),n}j.cancel=function(t){void 0!==t&&(u.a.cancel(f[t]),delete f[t])},j.ids=f;var h,m=n(448),p=n(529);function O(t){return!t||null===t.offsetParent||t.hidden}function g(t){var e=(t||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return!(e&&e[1]&&e[2]&&e[3])||!(e[1]===e[2]&&e[2]===e[3])}var v=function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(){var t;return Object(a.a)(this,n),(t=e.apply(this,arguments)).containerRef=s.createRef(),t.animationStart=!1,t.destroyed=!1,t.onClick=function(e,n){var a,c;if(!(!e||O(e)||e.className.indexOf("-leave")>=0)){var i=t.props.insertExtraNode;t.extraNode=document.createElement("div");var o=Object(r.a)(t).extraNode,s=t.context.getPrefixCls;o.className="".concat(s(""),"-click-animating-node");var d=t.getAttributeName();if(e.setAttribute(d,"true"),n&&"#ffffff"!==n&&"rgb(255, 255, 255)"!==n&&g(n)&&!/rgba\((?:\d*, ){3}0\)/.test(n)&&"transparent"!==n){o.style.borderColor=n;var u=(null===(a=e.getRootNode)||void 0===a?void 0:a.call(e))||e.ownerDocument,b=u instanceof Document?u.body:null!==(c=u.firstChild)&&void 0!==c?c:u;h=Object(l.a)("\n      [".concat(s(""),"-click-animating-without-extra-node='true']::after, .").concat(s(""),"-click-animating-node {\n        --antd-wave-shadow-color: ").concat(n,";\n      }"),"antd-wave",{csp:t.csp,attachTo:b})}i&&e.appendChild(o),["transition","animation"].forEach((function(n){e.addEventListener("".concat(n,"start"),t.onTransitionStart),e.addEventListener("".concat(n,"end"),t.onTransitionEnd)}))}},t.onTransitionStart=function(e){if(!t.destroyed){var n=t.containerRef.current;e&&e.target===n&&!t.animationStart&&t.resetEffect(n)}},t.onTransitionEnd=function(e){e&&"fadeEffect"===e.animationName&&t.resetEffect(e.target)},t.bindAnimationEvent=function(e){if(e&&e.getAttribute&&!e.getAttribute("disabled")&&!(e.className.indexOf("disabled")>=0)){var n=function(n){if("INPUT"!==n.target.tagName&&!O(n.target)){t.resetEffect(e);var a=getComputedStyle(e).getPropertyValue("border-top-color")||getComputedStyle(e).getPropertyValue("border-color")||getComputedStyle(e).getPropertyValue("background-color");t.clickWaveTimeoutId=window.setTimeout((function(){return t.onClick(e,a)}),0),j.cancel(t.animationStartId),t.animationStart=!0,t.animationStartId=j((function(){t.animationStart=!1}),10)}};return e.addEventListener("click",n,!0),{cancel:function(){e.removeEventListener("click",n,!0)}}}},t.renderWave=function(e){var n=e.csp,a=t.props.children;if(t.csp=n,!s.isValidElement(a))return a;var c=t.containerRef;return Object(d.c)(a)&&(c=Object(d.a)(a.ref,t.containerRef)),Object(p.a)(a,{ref:c})},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this.containerRef.current;t&&1===t.nodeType&&(this.instance=this.bindAnimationEvent(t))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroyed=!0}},{key:"getAttributeName",value:function(){var t=this.context.getPrefixCls,e=this.props.insertExtraNode;return"".concat(t(""),e?"-click-animating":"-click-animating-without-extra-node")}},{key:"resetEffect",value:function(t){var e=this;if(t&&t!==this.extraNode&&t instanceof Element){var n=this.props.insertExtraNode,a=this.getAttributeName();t.setAttribute(a,"false"),h&&(h.innerHTML=""),n&&this.extraNode&&t.contains(this.extraNode)&&t.removeChild(this.extraNode),["transition","animation"].forEach((function(n){t.removeEventListener("".concat(n,"start"),e.onTransitionStart),t.removeEventListener("".concat(n,"end"),e.onTransitionEnd)}))}}},{key:"render",value:function(){return s.createElement(m.a,null,this.renderWave)}}]),n}(s.Component);v.contextType=m.b},744:function(t,e,n){"use strict";n.r(e);var a=n(530),c=n(561),r=n(643),i=n(728),o=n(746),s=n(734),l=n(747),d=n(540),u=(n(0),n(1)),b=i.a.Content,f=Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"thanh toan bang Vi MOMO"}),Object(u.jsx)("p",{children:"H\u1ea1n s\u1eed d\u1ee5ng: 20/12/2021"})]}),j=function(){return Object(u.jsxs)(b,{style:{margin:"25px 25px",padding:"50px 50px",backgroundColor:"white"},children:[Object(u.jsxs)(o.b,{direction:"horizontal",children:[Object(u.jsxs)(s.a,{title:"Momo",style:{width:300},extra:Object(u.jsx)("a",{href:"gg",children:Object(u.jsxs)(l.a,{content:f,title:"THanh toan bang vi MOMO",children:[" ",Object(u.jsx)(c.a,{})]})}),children:[Object(u.jsx)("p",{children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i: 02121028"}),Object(u.jsx)("p",{children:"Card content"})]}),Object(u.jsxs)(s.a,{title:"ZaloPay",style:{width:300},children:[Object(u.jsx)("p",{children:"Card content"}),Object(u.jsx)("p",{children:"Card content"})]})]}),Object(u.jsxs)(d.a,{type:"dashed",size:"large",style:{width:"100%",marginTop:"10px"},children:[Object(u.jsx)(r.a,{}),"Th\xeam ph\u01b0\u01a1ng th\u1ee9c thanh to\xe1n"]})]})},h=n(648),m=n(649);e.default=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(h.a,{children:[Object(u.jsx)(m.a,{span:3,children:Object(u.jsx)(a.a,{})}),Object(u.jsx)(m.a,{span:18,offset:2,children:Object(u.jsx)(h.a,{children:Object(u.jsx)(j,{})})})]})})}}}]);
//# sourceMappingURL=13.12d546c1.chunk.js.map