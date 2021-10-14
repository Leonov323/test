(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{75:function(e,t,n){"use strict";n.r(t);var a,c,r,i,s,o,l,u,j,d,h,b,f,O=n(0),p=n.n(O),m=n(24),x=n.n(m),g=n(6),v=n(7),w=v.b.header(a||(a=Object(g.a)(["\n    background: black;\n    color: white;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),y=n(1),S=function(){return Object(y.jsx)(w,{children:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435 \u0434\u043b\u044f React dev"})},k=Object(v.a)(c||(c=Object(g.a)(["\n  html, body {\n    margin: 0;\n    padding: 0; \n  }\n\n  *, *::after, *::before {\n    box-sizing: border-box;\n  }\n  \n  body {\n    background: #f8f9fA;\n    width: 100%;\n    }\n  "]))),I=n(76),D=n(77),C=n(44),T=Object(v.b)(I.a)(r||(r=Object(g.a)(["\n    width: 100%;\n    min-height: calc(100vh - 50px);\n    .row {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border: 1px solid white;\n    }\n"]))),F=Object(v.b)(D.a)(i||(i=Object(g.a)(["\n    height: 20vh;\n"]))),M=Object(v.b)(D.a)(s||(s=Object(g.a)(["\n    min-height: 75vh;\n"]))),R=Object(v.b)(D.a)(o||(o=Object(g.a)(["\n    min-height: 30rem;\n    display: flex;\n    justify-content: space-around;\n    align-items: space-around;\n"]))),_=Object(v.b)(C.a)(l||(l=Object(g.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),A=Object(v.b)(C.a)(u||(u=Object(g.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),L=n(46),N=n(82),B=n(78),E=n(19),J=n.n(E),q=n(10),G=Object(q.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),H=G.actions,z=H.increment,P=(H.decrement,H.incrementByAmount,function(e){return e.counter.value}),W=G.reducer,K=Object(q.b)({name:"cityApi",initialState:{value:"Rome"},reducers:{setCity:function(e,t){var n=t.payload;e.value=n}}}),Q=K.actions.setCity,U=K.reducer,V=Object(q.b)({name:"resData",initialState:{value:{}},reducers:{setData:function(e,t){var n=t.payload;e.value=n}}}),X=V.actions.setData,Y=function(e){return e.resData.value},Z=V.reducer,$=Object(q.b)({name:"loading",initialState:{value:!0},reducers:{setFalse:function(e){e.value=!1}}}),ee=$.actions.setFalse,te=function(e){return e.loading.value},ne=$.reducer,ae=Object(q.b)({name:"input",initialState:{value:""},reducers:{setInput:function(e,t){var n=t.payload;e.value=n},refreshInput:function(e){e.value=""}}}),ce=ae.actions,re=ce.setInput,ie=ce.refreshInput,se=function(e){return e.input.value},oe=ae.reducer,le=Object(q.b)({name:"refreshData",initialState:{value:{}},reducers:{setRefreshData:function(e,t){var n=t.payload;e.value=n}}}),ue=le.actions.setRefreshData,je=le.reducer,de=Object(q.b)({name:"refreshLoading",initialState:{value:!0},reducers:{setFalse:function(e){e.value=!1},setTrue:function(e){e.value=!0}}}),he=de.actions,be=he.setFalse,fe=(he.setTrue,de.reducer),Oe=Object(q.a)({reducer:{counter:W,cityApi:U,resData:Z,loading:ne,input:oe,refreshData:je,refreshLoading:fe}}),pe=function(){var e=Oe.getState().cityApi.value,t="https://api.openweathermap.org/data/2.5/forecast?q=".concat(e,"&appid=").concat("bfda20ca597bc0f4138fa15d276de911");J.a.get(t).then((function(e){console.log("GetHoursTemp Res:",e.data)})).catch((function(e){return console.log(e)}))},me=function(){var e=Oe.getState().cityApi.value,t="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("bfda20ca597bc0f4138fa15d276de911");J.a.get(t).then((function(e){Oe.dispatch(X(e.data)),Oe.dispatch(ee()),Oe.dispatch(ie()),pe(),console.log("GetWeather Res:",e.data)})).catch((function(e){return console.log(e)}))},xe=n(11),ge=function(){var e=Object(xe.b)(),t=Object(xe.c)(se);return""!==t&&e(Q(t)),Object(O.useEffect)((function(){me()}),[]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(L.a,{label:"Enter city name",children:Object(y.jsx)(N.a.Control,{type:"text",onChange:function(t){return e(re(t.target.value))},value:t})}),Object(y.jsx)(B.a,{className:"ms-4 btn-success",onClick:me,children:"Search"})]})},ve=n(83),we=n(81),ye=n(79),Se=Object(v.b)(ve.a)(j||(j=Object(g.a)(["\n    width: 18rem;\n    margin: 0 auto;\n    @media (max-width: 321px) {\n        width: 100%;\n    }\n"]))),ke=Object(v.b)(B.a)(d||(d=Object(g.a)(["\n    width: 100%;\n"]))),Ie=function(e){return!1===Oe.getState().loading.value?e:null},De=function(){var e=Object(xe.c)(te),t=Object(xe.c)(Y),n=Object(xe.b)(),a=Ie(e?"":t.name),c=Math.floor(Ie(e?"":t.main.temp)-273.15),r=Math.floor(Ie(e?"":t.main.feels_like)-273.15),i=Ie(e?"50d":t.weather[0].icon),s=Ie(e?"":t.weather[0].main),o={name:a,temperature:c,feels_like:r,weatherImg:i,description:s};return Object(y.jsx)(Se,{children:Object(y.jsxs)(ve.a.Body,{children:[Object(y.jsx)(ve.a.Title,{children:a}),Object(y.jsxs)(we.a,{variant:"flush",children:[Object(y.jsx)(we.a.Item,{children:Object(y.jsx)("p",{children:s})}),Object(y.jsxs)(we.a.Item,{children:[Object(y.jsx)(ye.a,{src:"http://openweathermap.org/img/wn/".concat(i,"@2x.png"),alt:"weather",width:"50px",height:"50px"}),Object(y.jsxs)("span",{children:[c," \xb0C "]})]}),Object(y.jsx)(we.a.Item,{children:Object(y.jsxs)("p",{children:[" Feels like ",r," \xb0C"]})}),Object(y.jsx)(we.a.Item,{children:Object(y.jsx)(ke,{variant:"dark",onClick:function(){n(z()),localStorage.setItem(a,JSON.stringify(o))},children:"Save"})})]})]})})},Ce=function(){var e=Object(xe.c)(te),t=Object(xe.c)(Y),n=Ie(e?"":t.main.humidity),a=Ie(e?"":t.main.pressure),c=Math.floor(Ie(e?"":t.main.temp_max)-273.15),r=Math.floor(Ie(e?"":t.main.temp_min)-273.15),i=new Date("2015-02-24T21:23").toLocaleDateString(),s=(new Date).toLocaleTimeString();return Object(y.jsx)(I.a,{children:Object(y.jsxs)(D.a,{children:[Object(y.jsx)(C.a,{md:6,children:Object(y.jsx)(De,{})}),Object(y.jsxs)(C.a,{children:[Object(y.jsx)("hr",{}),Object(y.jsxs)("h5",{children:[i," ",s]}),Object(y.jsx)("hr",{}),Object(y.jsxs)("p",{children:["Humidity: ",n]}),Object(y.jsxs)("p",{children:["Pressure: ",a," "]}),Object(y.jsxs)("p",{children:["Max temperature: ",c]}),Object(y.jsxs)("p",{children:["Min temperature: ",r]}),Object(y.jsx)("hr",{})]})]})})},Te=n(14),Fe=n(80),Me=Object(v.b)(ve.a)(h||(h=Object(g.a)(["\n    width: 18rem;\n    height: 22rem;\n    margin: 20px auto;\n    \n    .list-group {\n        height: 11rem;\n        display: ","\n    }\n    .hide {\n        \n    }\n    .card-body {\n        cursor: pointer;\n    }\n"])),(function(e){return e.value?"none":"block"})),Re=Object(v.b)(B.a)(b||(b=Object(g.a)(["\n    width: 100%;\n    margin-bottom: 15px;\n    cursor: ",";\n"])),(function(e){return e.value?"wait":"pointer"})),_e=Object(v.b)(Fe.a)(f||(f=Object(g.a)(["\n    position: relative;\n    top: 25%;\n    margin: 0 auto;\n    display: ",";\n"])),(function(e){return e.value?"flex":"none"})),Ae=function(e){return!1===Oe.getState().refreshLoading.value?e:null},Le=function(e){var t=Oe.getState().refreshData.value,n=Oe.getState().refreshLoading.value,a=Math.floor(Ae(n?"":t.main.temp)-273.15),c=Math.floor(Ae(n?"":t.main.feels_like)-273.15),r=Ae(n?"50d":t.weather[0].icon),i=Ae(n?"":t.weather[0].main),s={name:e,temperature:a,feels_like:c,weatherImg:r,description:i},o="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("bfda20ca597bc0f4138fa15d276de911");J.a.get(o).then((function(e){Oe.dispatch(ue(e.data)),Oe.dispatch(be()),Oe.dispatch(z()),console.log("GetRefresh Res: ",e.data)})).then((function(){localStorage.setItem(e,JSON.stringify(s)),console.log(i)})).then((function(){return Oe.dispatch(z())})).catch((function(e){return console.log(e)}))},Ne=function(e){var t=e.name,n=Object(xe.b)(P),a=Object(O.useState)(!1),c=Object(Te.a)(a,2),r=c[0],i=c[1];return Object(y.jsxs)(Me,{value:r,children:[Object(y.jsxs)(ve.a.Body,{onClick:function(){n(Q(t)),me(),window.scrollTo(0,0)},children:[Object(y.jsx)(ve.a.Title,{children:e.name}),Object(y.jsxs)(we.a,{variant:"flush",children:[Object(y.jsx)(we.a.Item,{children:Object(y.jsx)("p",{children:e.description})}),Object(y.jsxs)(we.a.Item,{children:[Object(y.jsx)(ye.a,{src:"http://openweathermap.org/img/wn/".concat(e.weatherImg,"@2x.png"),alt:"weather",width:"50px",height:"50px"}),Object(y.jsxs)("span",{children:[e.temperature," \xb0C "]})]}),Object(y.jsx)(we.a.Item,{children:Object(y.jsxs)("p",{children:[" Feels like ",e.feels_like," \xb0C"]})})]}),Object(y.jsx)(_e,{animation:"border",variant:"warning",value:r})]}),Object(y.jsx)(Re,{variant:"success",onClick:function(){i(!0),Le(t),setTimeout((function(){Le(t)}),200),setTimeout((function(){i(!1)}),400)},value:r,children:"Refresh"}),Object(y.jsx)(Re,{variant:"danger",onClick:function(){localStorage.removeItem(e.delete),n(z())},children:"Delete"})]})},Be=function(){var e=Object.keys(localStorage),t=function(){var t=[];return e.forEach((function(e){var n=localStorage.getItem(e),a=JSON.parse(n);t.push(a)})),t}();console.log(e);return t.length>0?Object(y.jsx)(y.Fragment,{children:t.map((function(e,t){var n=e.name,a=e.temperature,c=e.feels_like,r=e.weatherImg,i=e.description;return Object(y.jsx)(Ne,{name:n,temperature:a,feels_like:c,weatherImg:r,description:i,delete:n},t)}))}):Object(y.jsx)("p",{className:"text-center mt-5",children:"No saved cards"})},Ee=function(){var e=Object(xe.c)(P);return p.a.useEffect((function(){Be()}),[e]),Object(y.jsxs)(T,{children:[Object(y.jsx)(F,{children:Object(y.jsx)(_,{children:Object(y.jsx)(ge,{})})}),Object(y.jsx)(M,{children:Object(y.jsx)(A,{children:Object(y.jsx)(Ce,{})})}),Object(y.jsx)(R,{children:Object(y.jsx)(Be,{})})]})},Je=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(k,{}),Object(y.jsx)(S,{}),Object(y.jsx)(Ee,{})]})};n(74);x.a.render(Object(y.jsx)(p.a.StrictMode,{children:Object(y.jsx)(xe.a,{store:Oe,children:Object(y.jsx)(Je,{})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.673b64cc.chunk.js.map