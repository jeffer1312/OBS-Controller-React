(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[286,179],{1605:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return f}});var r=e(809),i=e.n(r),a=e(5893),o=e(2447),u=e(7294),c=(e(1664),e(3098)),s=e(1580),p=e(5448);function f(){var n=(0,u.useState)([]),t=n[0],e=n[1],r=(0,u.useState)({}),f=r[0],d=r[1],h=(0,u.useState)(""),x=h[0],l=h[1],m=(0,u.useState)(),g=m[0],w=m[1],v=(0,u.useState)({}),b=v[0],y=v[1],Z=(0,u.useState)([]),k=Z[0],S=Z[1],C=(0,u.useState)(),j=C[0],T=C[1];function _(n){return E.apply(this,arguments)}function E(){return(E=(0,o.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.Z.post("/start",{start:t});case 2:"Transmissao iniciada"===n.sent.data.message?T(!0):T(!1),F();case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function N(){return B.apply(this,arguments)}function B(){return(B=(0,o.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.Z.post("/settings",{key:g});case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function I(){return K.apply(this,arguments)}function K(){return(K=(0,o.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.Z.get("/settings");case 2:t=n.sent,y(t.data.data.settings);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function O(){return P.apply(this,arguments)}function P(){return(P=(0,o.Z)(i().mark((function n(){var t,r,a,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.Z.get("/obs");case 3:t=n.sent,r=t.data,a=r.scenes,o=r.currentScene,S(o),e(a),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function z(){return(z=(0,o.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.Z.put("/obs",{sceneName:t.name});case 2:S(t.name),t.sources>[]?(e=JSON.stringify(t.sources),r=JSON.stringify(t.name),localStorage.setItem("scene",e),localStorage.setItem("sceneName",r)):console.log("sources vazio");case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function F(){return A.apply(this,arguments)}function A(){return(A=(0,o.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.Z.get("/status");case 2:t=n.sent,e=t.data.data.streaming,d(e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function J(){return X.apply(this,arguments)}function X(){return(X=(0,o.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.Z.get("/status");case 2:t=n.sent,e=t.data.data.streamTimecode,l(e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function L(){return(L=(0,o.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:N();case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function R(){return(R=(0,o.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=t.target.value,w(e);case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,u.useEffect)((function(){O(),F(),I()}),[]),(0,u.useEffect)((function(){O(),F(),I()}),[k]),(0,u.useEffect)((function(){O(),F()}),[j]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(c.Container,{children:[(0,a.jsx)(s.Kh,{duration:"0.8s",delay:"0.4s",children:(0,a.jsx)(c.Title,{children:" Cenas "})}),(0,a.jsx)(c.Scenes,{children:t.map((function(n){return(0,a.jsx)(c.Button,{active:k===n.name,onClick:function(){!function(n){z.apply(this,arguments)}(n)},children:n.name},n.name)}))})]}),(0,a.jsxs)(c.ContainerStream,{children:[(0,a.jsx)(c.KeyButton,{onClick:function(n){return L.apply(this,arguments)},children:"Trocar Chave de Stream"}),(0,a.jsx)(c.InputKey,{type:"text",placeholder:b.key,onChange:function(n){return R.apply(this,arguments)}})]}),(0,a.jsxs)(c.Footer,{children:[(0,a.jsxs)(c.Controls,{children:[(0,a.jsx)(c.ButtonControls,{onClick:function(){return _(!0)},trasmission:!0===f,children:"Iniciar Trasmissao"}),(0,a.jsx)(c.ButtonControls,{onClick:function(){return _(!1)},trasmission:!0===f,children:"Parar Transmissao"})]}),function(){if(J(),setInterval((function(){J()}),6e4),void 0!==x){var n=x.substring(0,x.length-4);return(0,a.jsx)(c.TimeStream,{children:n})}return(0,a.jsx)(c.TimeStream,{children:"Parado"})}()]})]})}},3098:function(n,t,e){"use strict";e.r(t),e.d(t,{Container:function(){return m},ContainerStream:function(){return g},Scenes:function(){return w},Footer:function(){return v},Button:function(){return b},ButtonControls:function(){return y},Title:function(){return Z},Controls:function(){return k},TimeStream:function(){return S},KeyButton:function(){return C},InputKey:function(){return j}});var r=e(7261),i=e(9163);function a(){var n=(0,r.Z)(["\n  width: 55%;\n  height: 6%;\n  padding-left: 0.7%;\n  align-self: center;\n  background-color: #fbf5f3;\n  border-radius: 18px;\n"]);return a=function(){return n},n}function o(){var n=(0,r.Z)(["\n  margin-bottom: 2%;\n  width: 8%;\n  height: 8%;\n  border-radius: 5px;\n  align-self: center;\n  background-color: #c42021;\n  color: #fbf5f3;\n"]);return o=function(){return n},n}function u(){var n=(0,r.Z)(["\n  height: 4vh;\n  color: #fbf5f3;\n  align-self: center;\n"]);return u=function(){return n},n}function c(){var n=(0,r.Z)(["\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%);\n"]);return c=function(){return n},n}function s(){var n=(0,r.Z)(["\n  color: #fbf5f3;\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%);\n  top: 0;\n  margin: 15px;\n"]);return s=function(){return n},n}function p(){var n=(0,r.Z)(["\n  height: 60px;\n  width: 120px;\n  background-color: ",";\n  color: white;\n  border-radius: 10px;\n  margin-left: 15px;\n  &:hover {\n    cursor: pointer;\n\n    height: 80px;\n    width: 140px;\n  }\n  &:focus {\n    outline: none;\n  }\n\n  @media (max-width: 960px) {\n    height: 30px;\n    width: 80px;\n  }\n  @media (max-width: 652px) {\n    height: 30px;\n    width: 80px;\n  }\n  @media (max-width: 1030px) {\n    height: 30px;\n    width: 90px;\n    border-radius: 5px;\n    &:hover {\n      cursor: pointer;\n\n      height: 40px;\n      width: 100px;\n    }\n  }\n"]);return p=function(){return n},n}function f(){var n=(0,r.Z)(["\n  height: ",";\n  width: ",";\n\n  background-color: #1fc8db;\n  background-image: linear-gradient(\n    141deg,\n    #9fb8ad 0%,\n    #1fc8db 51%,\n    #2cb5e8 75%\n  );\n  color: #fbf5f3;\n  border: 0;\n  border-radius: 50px;\n  transition: 0.5s;\n  -webkit-box-shadow: 0px 0px 19px 5px rgba(168, 150, 168, 1);\n  -moz-box-shadow: 0px 0px 19px 5px rgba(168, 150, 168, 1);\n  box-shadow: 0px 0px 19px 5px rgba(168, 150, 168, 1);\n  margin: 20px;\n  &:hover {\n    cursor: pointer;\n    -webkit-box-shadow: 0px 0px 10px 2px rgba(30, 160, 240, 1);\n    -moz-box-shadow: 0px 0px 10px 2px rgba(30, 160, 240, 1);\n    box-shadow: 0px 0px 10px 2px rgba(30, 160, 240, 1);\n    height: 220px;\n    width: 220px;\n  }\n  &:focus {\n    outline: none;\n  }\n  @media (max-width: 1268px) {\n    height: ",";\n    width: ",";\n    border-radius: 25px;\n    &:hover {\n      height: 180px;\n      width: 180px;\n    }\n  }\n  @media (max-width: 1030px) and (max-height: 860px) {\n    height: ",";\n    width: ",";\n    border-radius: 10px;\n    &:hover {\n      height: 120px;\n      width: 120px;\n    }\n  }\n  @media (max-width: 960px) {\n    height: ",";\n    width: ",";\n    border-radius: 10px;\n    &:hover {\n      height: 140px;\n      width: 140px;\n    }\n  }\n  @media (max-width: 655px) {\n    height: ",";\n    width: ",";\n    border-radius: 10px;\n    &:hover {\n      height: 140px;\n      width: 140px;\n    }\n  }\n"]);return f=function(){return n},n}function d(){var n=(0,r.Z)(["\n  position: absolute;\n  bottom: 0px;\n  left: 50%;\n\n  transform: translate(-50%);\n  border-top: 14px solid #313d5a;\n  border-left: 14px solid #313d5a;\n  border-right: 14px solid #313d5a;\n  width: 35vw;\n  height: 10vh;\n  @media (max-width: 1268px) {\n    width: 50vw;\n    height: 10vh;\n  }\n"]);return d=function(){return n},n}function h(){var n=(0,r.Z)(["\n  text-align: center;\n  margin: 5%;\n"]);return h=function(){return n},n}function x(){var n=(0,r.Z)(["\n  margin-top: 3%;\n  height: 100%;\n  max-height: 10vh;\n  @media (max-width: 1268px) {\n    display: none;\n  }\n  @media (max-width: 652px) {\n    display: none;\n  }\n  @media (max-height: 860px) {\n    display: none;\n  }\n"]);return x=function(){return n},n}function l(){var n=(0,r.Z)(["\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  width: 1360px;\n  height: 100%;\n  max-height: 85vh;\n  overflow: hidden;\n  padding: 0 2%;\n  margin: 0 auto;\n\n  @media (max-width: 1268px) {\n    max-width: 1000px;\n  }\n  @media (max-width: 960px) {\n    max-width: 700px;\n  }\n  @media (max-width: 652px) {\n    max-width: 500px;\n  }\n"]);return l=function(){return n},n}var m=i.default.div(l()),g=(0,i.default)(m)(x()),w=i.default.div(h()),v=i.default.footer(d()),b=i.default.button(f(),(function(n){return n.active?"220px":"160px"}),(function(n){return n.active?"220px":"160px"}),(function(n){return n.active?"200px":"140px"}),(function(n){return n.active?"200px":"140px"}),(function(n){return n.active?"140px":"80px"}),(function(n){return n.active?"140px":"80px"}),(function(n){return n.active?"180px":"120px"}),(function(n){return n.active?"180px":"120px"}),(function(n){return n.active?"150px":"110px"}),(function(n){return n.active?"150px":"110px"})),y=i.default.button(p(),(function(n){return n.trasmission?"#399E5A":"#73628A"})),Z=i.default.h1(s()),k=i.default.div(c()),S=i.default.div(u()),C=i.default.button(o()),j=i.default.input(a())},5448:function(n,t,e){"use strict";var r=e(9669),i=e.n(r)().create({baseURL:"http://192.168.15.99:3333"});t.Z=i},5985:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Obs",function(){return e(1605)}])},4453:function(){}},function(n){n.O(0,[774,597,530,170,580],(function(){return t=5985,n(n.s=t);var t}));var t=n.O();_N_E=t}]);