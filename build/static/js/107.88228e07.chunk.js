"use strict";(self.webpackChunkaltura_frontend=self.webpackChunkaltura_frontend||[]).push([[107],{1107:function(n,t,i){i.r(t),i.d(t,{default:function(){return T}});var e=i(1413),r=i(4165),a=i(5861),s=i(9439),o=i(168),c=i(7313),d=i(7829),f=i(4097),u=i(3210),l=i(8733),x=i(4523);i(4264),i(991);var p,m,h=i.p+"static/media/deckIcons.6faba4989cd9387b8ce1b551b1df783c.svg",Z=(i(304),i(2374),i(6417)),y=((0,f.ZP)("div")((function(n){var t=n.visible;return"\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.9);\n    position: absolute;\n    width: 200px;\n    min-height: 100px;\n    top:150px;\n    right:0;\n    margin-right:0.5rem;\n    z-index:500;\n    flex-direction: column;\n    visibility: ".concat(t?"visible":"hidden",";\n    opacity: ").concat(t?"1":"0",";\n    transition: ").concat(t?"visibility 0s, opacity 0.5s linear":"opacity 0s, visibility 0.5s linear",";\n")})),f.ZP.div((function(){return"\n    position: relative\n"})),(0,f.ZP)("p")((function(){return"\n    color: #fff;\n    align-self: center;\n    font-family: Genesis;\n    font-size: 13px;\n"})),(0,f.ZP)("div")((function(){return"\n    display:flex;\n"})),f.ZP.div((function(){return"\n      color: #fff;\n      font-family: Genesis;\n      font-size: 10px;\n  "})),i(8305),i(1805)),w=i(7985),g=i(6406),v=i(8467),j=(0,f.ZP)(d.Z)({width:"100%",zIndex:-1,display:"flex",flexDirection:"row",justifyContent:"space-around"}),b=(0,f.ZP)(d.Z)({maxWidth:"1000px",width:"100%",display:"grid",gap:20,gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))!important"}),P=(0,f.ZP)("p")(p||(p=(0,o.Z)(['\n  color: #ffffff;\n  font-family: "Genesis";\n  font-size: 16px;\n  font-weight: 400;\n  text-align: center;\n  margin: 0;\n  @media (max-width: 1000px) {\n    font-size: 14px;\n  }\n  @media (max-width: 500px) {\n    font-size: 10px;\n  }\n']))),k=(0,f.ZP)(d.Z)(m||(m=(0,o.Z)(["\n  width: 200px;\n  height: 48px;\n  position: relative;\n  bottom: 5px;\n  @media (max-width: 1000px) {\n    width: 150px;\n  }\n  @media (max-width: 500px) {\n    width: 100px;\n  }\n"]))),z=(0,f.ZP)(d.Z)((function(){return"\n    display: flex;\n    justify-content: space-evenly;\n    width: 100%;\n    @media (max-width: 1000px) {\n      width: 90%;\n    }\n  "})),C=f.ZP.img((function(){return"\n  width: 20px;\n  @media (max-width: 1000px) {\n    width: 15px;\n  }\n  @media (max-width: 500px) {\n    width: 10px;\n  }\n"})),S=(0,f.ZP)(d.Z)((function(){return"\n  display: flex;\n  cursor: pointer;\n  &:active{\n    opacity: 0.1\n  }\n"})),G=(0,f.ZP)(d.Z)((function(){return"\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"})),D=(0,f.ZP)(d.Z)((function(){return"\n    margin-top: 10rem;\n    margin-left: 20rem;\n  "})),I=f.ZP.div((function(){return"\n\n"})),T=function(){var n=(0,c.useContext)(g.S).token,t=(0,v.s0)(),i=(0,c.useState)([]),o=(0,s.Z)(i,2),d=(o[0],o[1],(0,c.useState)(!1)),f=(0,s.Z)(d,2),p=(f[0],f[1]),m=(0,c.useState)(!1),T=(0,s.Z)(m,2),A=(T[0],T[1],(0,c.useState)([])),B=(0,s.Z)(A,2),E=B[0],M=B[1],_=(0,c.useState)(!1),F=(0,s.Z)(_,2),L=F[0],R=F[1],V=function(){var i=(0,a.Z)((0,r.Z)().mark((function i(){var e,a;return(0,r.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return R(!0),i.next=3,fetch("".concat(y.I,"/card-users/my-cards"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 3:return e=i.sent,i.next=6,e.json();case 6:401===(a=i.sent).statusCode&&t("/"),M(a.result.cards),R(!1);case 10:case"end":return i.stop()}}),i)})));return function(){return i.apply(this,arguments)}}();return(0,c.useEffect)((function(){V()}),[]),(0,Z.jsx)(u.A,{notFooter:!0,children:(0,Z.jsx)(j,{children:(0,Z.jsxs)(I,{children:[(0,Z.jsxs)(z,{children:[(0,Z.jsxs)(G,{style:{width:"80%",marginLeft:"13rem"},children:[(0,Z.jsx)(P,{children:"Deck Builder"}),(0,Z.jsx)(k,{component:"img",src:x})]}),(0,Z.jsxs)(G,{children:[(0,Z.jsxs)(S,{onClick:function(){return p((function(n){return!n}))},children:[(0,Z.jsx)(C,{src:h,style:{marginRight:"0.5rem"}}),(0,Z.jsx)(P,{children:"My Decks"})]}),(0,Z.jsx)(k,{component:"img",src:x})]})]}),L&&(0,Z.jsx)(D,{children:(0,Z.jsx)(w.Z,{isVisible:L})}),(0,Z.jsx)(b,{children:E.map((function(n,t){return(0,Z.jsx)(l.Z,{item:(0,e.Z)((0,e.Z)({},n),{},{index:t})},"".concat(t,"-").concat(n.name,"-").concat(Math.random()))}))})]})})})}}}]);