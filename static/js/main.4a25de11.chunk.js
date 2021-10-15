(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{84:function(e,t,n){"use strict";n.r(t);var a,c,r,i,s,o,l,u,j,d,b,h,O,m,p=n(0),f=n.n(p),x=n(17),v=n.n(x),g=n(7),w=n(8),y=w.b.header(a||(a=Object(g.a)(["\n    background: black;\n    color: white;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),S=n(1),k=function(){return Object(S.jsx)(y,{children:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435 \u0434\u043b\u044f React dev"})},I=Object(w.a)(c||(c=Object(g.a)(["\n  html, body {\n    margin: 0;\n    padding: 0; \n  }\n\n  *, *::after, *::before {\n    box-sizing: border-box;\n  }\n  \n  body {\n    background: #f8f9fA;\n    width: 100%;\n    }\n  "]))),D=n(86),_=n(87),C=n(51),R=Object(w.b)(D.a)(r||(r=Object(g.a)(["\n    width: 100%;\n    min-height: calc(100vh - 50px);\n    .row {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border: 1px solid white;\n    }\n"]))),T=Object(w.b)(_.a)(i||(i=Object(g.a)(["\n    height: 20vh;\n"]))),E=Object(w.b)(_.a)(s||(s=Object(g.a)(["\n    min-height: 75vh;\n"]))),F=Object(w.b)(_.a)(o||(o=Object(g.a)(["\n    min-height: 30rem;\n    display: flex;\n    justify-content: space-around;\n    align-items: space-around;\n"]))),M=Object(w.b)(C.a)(l||(l=Object(g.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),A=n(53),N=n(92),L=n(88),B=n(28),J=n.n(B),q=n(9),G=Object(q.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),H=G.actions,Q=H.increment,z=(H.decrement,H.incrementByAmount,function(e){return e.counter.value}),P=G.reducer,U=Object(q.b)({name:"cityApi",initialState:{value:"Rome"},reducers:{setCity:function(e,t){var n=t.payload;e.value=n}}}),W=U.actions.setCity,K=U.reducer,V=Object(q.b)({name:"resData",initialState:{value:{}},reducers:{setData:function(e,t){var n=t.payload;e.value=n}}}),X=V.actions.setData,Y=function(e){return e.resData.value},Z=V.reducer,$=Object(q.b)({name:"loading",initialState:{value:!0},reducers:{setFalse:function(e){e.value=!1}}}),ee=$.actions.setFalse,te=function(e){return e.loading.value},ne=$.reducer,ae=Object(q.b)({name:"input",initialState:{value:""},reducers:{setInput:function(e,t){var n=t.payload;e.value=n},refreshInput:function(e){e.value=""}}}),ce=ae.actions,re=ce.setInput,ie=ce.refreshInput,se=function(e){return e.input.value},oe=ae.reducer,le=Object(q.b)({name:"refreshData",initialState:{value:{}},reducers:{setRefreshData:function(e,t){var n=t.payload;e.value=n}}}),ue=le.actions.setRefreshData,je=le.reducer,de=Object(q.b)({name:"refreshLoading",initialState:{value:!0},reducers:{setFalse:function(e){e.value=!1},setTrue:function(e){e.value=!0}}}),be=de.actions,he=be.setFalse,Oe=(be.setTrue,de.reducer),me=Object(q.b)({name:"saved",initialState:{value:!1},reducers:{setSavedFalse:function(e){e.value=!1},setSavedTrue:function(e){e.value=!0}}}),pe=me.actions,fe=pe.setSavedFalse,xe=pe.setSavedTrue,ve=function(e){return e.saved.value},ge=me.reducer,we=Object(q.a)({reducer:{counter:P,cityApi:K,resData:Z,loading:ne,input:oe,refreshData:je,refreshLoading:Oe,saved:ge}}),ye=function(){var e=we.getState().cityApi.value,t="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("bfda20ca597bc0f4138fa15d276de911");J.a.get(t).then((function(e){we.dispatch(X(e.data)),we.dispatch(ee()),we.dispatch(ie()),we.dispatch(fe()),console.log("GetWeather Res:",e.data)})).catch((function(e){return console.log(e)}))},Se=n(12),ke=function(){var e=Object(Se.b)(),t=Object(Se.c)(se);return""!==t&&e(W(t)),Object(p.useEffect)((function(){ye()}),[]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(A.a,{label:"Enter city name",children:Object(S.jsx)(N.a.Control,{type:"text",onChange:function(t){return e(re(t.target.value))},value:t})}),Object(S.jsx)(L.a,{className:"ms-4 btn-success",onClick:ye,children:"Search"})]})},Ie=n(94),De=n(93),_e=n(89),Ce=n(91),Re=Object(w.b)(Ie.a)(u||(u=Object(g.a)(["\n    width: 18rem;\n    height: 21rem;\n    margin: 0 auto;\n    @media (max-width: 321px) {\n        width: 100%;\n    }\n"]))),Te=Object(w.b)(L.a)(j||(j=Object(g.a)(["\n    width: 100%;\n"]))),Ee=Object(w.c)(d||(d=Object(g.a)(["\n    0% { opacity: 0; }\n    10% { opacity: 1; }\n    50% { opacity: 1; }\n    100% { opacity: 0; }\n"]))),Fe=Object(w.b)(Ce.a)(b||(b=Object(g.a)(["\n    animation: "," 3s ease-out;\n    text-align: center;\n    position: absolute;\n    transition: all 1s linear;\n    right: 0;\n    opacity: 0;\n    display: ",";\n"])),Ee,(function(e){return e.animate?"block":"none"})),Me=function(e){return!1===we.getState().loading.value?e:null},Ae=function(){var e=Object(Se.c)(te),t=Object(Se.c)(Y),n=Object(Se.c)(ve),a=Object(Se.b)(),c=Me(e?"":t.name),r=Math.floor(Me(e?"":t.main.temp)-273.15),i=Math.floor(Me(e?"":t.main.feels_like)-273.15),s=Me(e?"50d":t.weather[0].icon),o=Me(e?"":t.weather[0].main),l={name:c,temperature:r,feels_like:i,weatherImg:s,description:o};return Object(S.jsxs)(Re,{children:[Object(S.jsxs)(Ie.a.Body,{children:[Object(S.jsx)(Ie.a.Title,{children:c}),Object(S.jsxs)(De.a,{variant:"flush",children:[Object(S.jsx)(De.a.Item,{children:Object(S.jsx)("p",{children:o})}),Object(S.jsxs)(De.a.Item,{children:[Object(S.jsx)(_e.a,{src:"https://openweathermap.org/img/wn/".concat(s,"@2x.png"),alt:"weather",width:"50px",height:"50px"}),Object(S.jsxs)("span",{children:[r," \xb0C "]})]}),Object(S.jsx)(De.a.Item,{children:Object(S.jsxs)("p",{children:[" Feels like ",i," \xb0C"]})}),Object(S.jsx)(De.a.Item,{children:Object(S.jsx)(Te,{variant:"dark",onClick:function(){a(xe()),a(Q()),localStorage.setItem(c,JSON.stringify(l))},children:"Save"})})]})]}),Object(S.jsx)(Fe,{animate:n,children:"Saved"})]})},Ne=function(){var e=Object(Se.c)(te),t=Object(Se.c)(Y),n=Me(e?"":t.main.humidity),a=Me(e?"":t.main.pressure),c=Math.floor(Me(e?"":t.main.temp_max)-273.15),r=Math.floor(Me(e?"":t.main.temp_min)-273.15),i=new Date("2015-02-24T21:23").toLocaleDateString(),s=(new Date).toLocaleTimeString();return Object(S.jsx)(D.a,{children:Object(S.jsxs)(_.a,{children:[Object(S.jsx)(C.a,{md:6,children:Object(S.jsx)(Ae,{})}),Object(S.jsxs)(C.a,{children:[Object(S.jsx)("hr",{}),Object(S.jsxs)("h5",{children:[i," ",s]}),Object(S.jsx)("hr",{}),Object(S.jsxs)("p",{children:["Humidity: ",n]}),Object(S.jsxs)("p",{children:["Pressure: ",a," "]}),Object(S.jsxs)("p",{children:["Max temperature: ",c]}),Object(S.jsxs)("p",{children:["Min temperature: ",r]}),Object(S.jsx)("hr",{})]})]})})},Le=n(13),Be=n(90),Je=Object(w.b)(Ie.a)(h||(h=Object(g.a)(["\n    width: 18rem;\n    height: 22rem;\n    margin: 20px auto;\n    .list-group {\n        height: 11rem;\n        display: ","\n    }\n    .card-body {\n        cursor: pointer;\n    }\n"])),(function(e){return e.value?"none":"block"})),qe=Object(w.b)(L.a)(O||(O=Object(g.a)(["\n    width: 100%;\n    margin-bottom: 15px;\n    cursor: ",";\n"])),(function(e){return e.value?"wait":"pointer"})),Ge=Object(w.b)(Be.a)(m||(m=Object(g.a)(["\n    position: relative;\n    top: 25%;\n    margin: 0 auto;\n    display: ",";\n"])),(function(e){return e.value?"flex":"none"})),He=function(e){return!1===we.getState().refreshLoading.value?e:null},Qe=function(e){var t=we.getState().refreshData.value,n=we.getState().refreshLoading.value,a=Math.floor(He(n?"":t.main.temp)-273.15),c=Math.floor(He(n?"":t.main.feels_like)-273.15),r=He(n?"50d":t.weather[0].icon),i=He(n?"":t.weather[0].main),s={name:e,temperature:a,feels_like:c,weatherImg:r,description:i},o="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("bfda20ca597bc0f4138fa15d276de911");J.a.get(o).then((function(e){we.dispatch(ue(e.data)),we.dispatch(he()),we.dispatch(Q()),console.log("GetRefresh Res: ",e.data)})).then((function(){localStorage.setItem(e,JSON.stringify(s))})).then((function(){return we.dispatch(Q())})).catch((function(e){return console.log(e)}))},ze=function(e){var t=e.name,n=Object(Se.b)(),a=Object(p.useState)(!1),c=Object(Le.a)(a,2),r=c[0],i=c[1];return Object(S.jsxs)(Je,{value:r,children:[Object(S.jsxs)(Ie.a.Body,{onClick:function(){n(W(t)),ye(),window.scrollTo(0,0)},children:[Object(S.jsx)(Ie.a.Title,{children:e.name}),Object(S.jsxs)(De.a,{variant:"flush",children:[Object(S.jsx)(De.a.Item,{children:Object(S.jsx)("p",{children:e.description})}),Object(S.jsxs)(De.a.Item,{children:[Object(S.jsx)(_e.a,{src:"https://openweathermap.org/img/wn/".concat(e.weatherImg,"@2x.png"),alt:"weather",width:"50px",height:"50px"}),Object(S.jsxs)("span",{children:[e.temperature," \xb0C "]})]}),Object(S.jsx)(De.a.Item,{children:Object(S.jsxs)("p",{children:[" Feels like ",e.feels_like," \xb0C"]})})]}),Object(S.jsx)(Ge,{animation:"border",variant:"warning",value:r})]}),Object(S.jsx)(qe,{variant:"success",onClick:function(){i(!0),Qe(t),setTimeout((function(){Qe(t)}),400),setTimeout((function(){i(!1)}),600)},value:r,children:"Refresh"}),Object(S.jsx)(qe,{variant:"danger",onClick:function(){localStorage.removeItem(e.delete),n(Q())},children:"Delete"})]})},Pe=function(){var e=Object.keys(localStorage),t=function(){var t=[];return e.forEach((function(e){var n=localStorage.getItem(e),a=JSON.parse(n);t.push(a)})),t}();return function(e){var t;try{t=window[e];var n="__agwt_rt";return t.setItem(n,n),t.removeItem(n),!0}catch(a){return a instanceof DOMException&&(22===a.code||1014===a.code||"QuotaExceededError"===a.name||"NS_ERROR_DOM_QUOTA_REACHED"===a.name)&&t&&0!==t.length}}("localStorage")?Object(S.jsx)(S.Fragment,{children:t.map((function(e,t){var n=e.name,a=e.temperature,c=e.feels_like,r=e.weatherImg,i=e.description;return Object(S.jsx)(ze,{name:n,temperature:a,feels_like:c,weatherImg:r,description:i,delete:n},t)}))}):Object(S.jsx)("p",{className:"text-center mt-5",children:"No saved cards"})},Ue=function(){var e=Object(Se.c)(z);return f.a.useEffect((function(){Pe()}),[e]),Object(S.jsxs)(R,{children:[Object(S.jsx)(T,{children:Object(S.jsx)(M,{children:Object(S.jsx)(ke,{})})}),Object(S.jsx)(E,{children:Object(S.jsx)(M,{children:Object(S.jsx)(Ne,{})})}),Object(S.jsx)(F,{children:Object(S.jsx)(Pe,{})})]})},We=function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(I,{}),Object(S.jsx)(k,{}),Object(S.jsx)(Ue,{})]})};n(83);v.a.render(Object(S.jsx)(f.a.StrictMode,{children:Object(S.jsx)(Se.a,{store:we,children:Object(S.jsx)(We,{})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.4a25de11.chunk.js.map