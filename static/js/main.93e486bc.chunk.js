(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{84:function(e,t,n){"use strict";n.r(t);var a,c,r,i,s,o,l,u,j,d,b,h,O,p,m,f=n(0),x=n.n(f),g=n(17),v=n.n(g),y=n(6),w=n(7),S=w.b.header(a||(a=Object(y.a)(["\n    background: black;\n    color: white;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),k=n(1),I=function(){return Object(k.jsx)(S,{children:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435 \u0434\u043b\u044f React dev"})},C=Object(w.a)(c||(c=Object(y.a)(["\n  html, body {\n    margin: 0;\n    padding: 0; \n  }\n\n  *, *::after, *::before {\n    box-sizing: border-box;\n  }\n  \n  body {\n    background: #f8f9fA;\n    width: 100%;\n    }\n  "]))),D=n(86),F=n(87),T=n(51),_=Object(w.b)(D.a)(r||(r=Object(y.a)(["\n    width: 100%;\n    min-height: calc(100vh - 50px);\n    .row {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border: 1px solid white;\n    }\n"]))),E=Object(w.b)(F.a)(i||(i=Object(y.a)(["\n    height: 20vh;\n"]))),M=Object(w.b)(F.a)(s||(s=Object(y.a)(["\n    min-height: 75vh;\n"]))),R=Object(w.b)(F.a)(o||(o=Object(y.a)(["\n    min-height: 30rem;\n    display: flex;\n    justify-content: space-around;\n    align-items: space-around;\n"]))),A=Object(w.b)(T.a)(l||(l=Object(y.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),L=n(53),N=n(92),B=n(88),J=n(28),q=n.n(J),G=n(9),z=Object(G.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),H=z.actions,P=H.increment,W=(H.decrement,H.incrementByAmount,function(e){return e.counter.value}),K=z.reducer,Q=Object(G.b)({name:"cityApi",initialState:{value:"Rome",error:!1},reducers:{setCity:function(e,t){var n=t.payload;e.value=n},setErrorTrue:function(e){e.error=!0},setErrorFalse:function(e){e.error=!1}}}),U=Q.actions,V=U.setCity,X=U.setErrorTrue,Y=U.setErrorFalse,Z=function(e){return e.cityApi.error},$=Q.reducer,ee=Object(G.b)({name:"resData",initialState:{value:{}},reducers:{setData:function(e,t){var n=t.payload;e.value=n}}}),te=ee.actions.setData,ne=function(e){return e.resData.value},ae=ee.reducer,ce=Object(G.b)({name:"loading",initialState:{value:!0},reducers:{setFalse:function(e){e.value=!1}}}),re=ce.actions.setFalse,ie=function(e){return e.loading.value},se=ce.reducer,oe=Object(G.b)({name:"input",initialState:{value:""},reducers:{setInput:function(e,t){var n=t.payload;e.value=n},refreshInput:function(e){e.value=""}}}),le=oe.actions,ue=le.setInput,je=le.refreshInput,de=function(e){return e.input.value},be=oe.reducer,he=Object(G.b)({name:"refreshData",initialState:{value:{}},reducers:{setRefreshData:function(e,t){var n=t.payload;e.value=n}}}),Oe=he.actions.setRefreshData,pe=he.reducer,me=Object(G.b)({name:"refreshLoading",initialState:{value:!0},reducers:{setFalse:function(e){e.value=!1},setTrue:function(e){e.value=!0}}}),fe=me.actions,xe=fe.setFalse,ge=(fe.setTrue,me.reducer),ve=Object(G.b)({name:"saved",initialState:{value:!1},reducers:{setSavedFalse:function(e){e.value=!1},setSavedTrue:function(e){e.value=!0}}}),ye=ve.actions,we=ye.setSavedFalse,Se=ye.setSavedTrue,ke=function(e){return e.saved.value},Ie=ve.reducer,Ce=Object(G.a)({reducer:{counter:K,cityApi:$,setErrorTrue:$,setErrorFalse:$,resData:ae,loading:se,input:be,refreshData:pe,refreshLoading:ge,saved:Ie}}),De=function(){var e=Ce.getState().cityApi.value,t="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("bfda20ca597bc0f4138fa15d276de911");q.a.get(t).then((function(e){Ce.dispatch(te(e.data)),Ce.dispatch(re()),Ce.dispatch(je()),Ce.dispatch(we()),Ce.dispatch(Y()),localStorage.removeItem("__agwt_rt"),console.log("GetWeather Res:",e.data)})).catch((function(e){Ce.dispatch(X()),console.log(e)}))},Fe=n(10),Te=w.b.h6(u||(u=Object(y.a)(["\n    position: absolute;\n    top: 55px;\n    margin: 0 auto;\n    color: red;\n    display: ","\n"])),(function(e){return e.value?"block":"none"})),_e=function(){var e=Object(Fe.b)(),t=Object(Fe.c)(de),n=Object(Fe.c)(Z);return""!==t&&e(V(t)),Object(f.useEffect)((function(){De()}),[]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(Te,{value:n,children:"City not found"}),Object(k.jsx)(L.a,{label:"Enter city name",children:Object(k.jsx)(N.a.Control,{type:"text",onChange:function(t){return e(ue(t.target.value))},value:t})}),Object(k.jsx)(B.a,{className:"ms-4 btn-success",onClick:De,children:"Search"})]})},Ee=n(94),Me=n(93),Re=n(89),Ae=n(91),Le=Object(w.b)(Ee.a)(j||(j=Object(y.a)(["\n    width: 18rem;\n    height: 21rem;\n    margin: 0 auto;\n    @media (max-width: 321px) {\n        width: 100%;\n    }\n"]))),Ne=Object(w.b)(B.a)(d||(d=Object(y.a)(["\n    width: 100%;\n"]))),Be=Object(w.c)(b||(b=Object(y.a)(["\n    0% { opacity: 0; }\n    10% { opacity: 1; }\n    50% { opacity: 1; }\n    100% { opacity: 0; }\n"]))),Je=Object(w.b)(Ae.a)(h||(h=Object(y.a)(["\n    animation: "," 3s ease-out;\n    text-align: center;\n    position: absolute;\n    transition: all 1s linear;\n    right: 0;\n    opacity: 0;\n    display: ",";\n"])),Be,(function(e){return e.animate?"block":"none"})),qe=function(e){return!1===Ce.getState().loading.value?e:null},Ge=function(){var e=Object(Fe.c)(ie),t=Object(Fe.c)(ne),n=Object(Fe.c)(ke),a=Object(Fe.b)(),c=qe(e?"":t.name),r=Math.floor(qe(e?"":t.main.temp)-273.15),i=Math.floor(qe(e?"":t.main.feels_like)-273.15),s=qe(e?"50d":t.weather[0].icon),o=qe(e?"":t.weather[0].main),l={name:c,temperature:r,feels_like:i,weatherImg:s,description:o};return Object(k.jsxs)(Le,{children:[Object(k.jsxs)(Ee.a.Body,{children:[Object(k.jsx)(Ee.a.Title,{children:c}),Object(k.jsxs)(Me.a,{variant:"flush",children:[Object(k.jsx)(Me.a.Item,{children:Object(k.jsx)("p",{children:o})}),Object(k.jsxs)(Me.a.Item,{children:[Object(k.jsx)(Re.a,{src:"https://openweathermap.org/img/wn/".concat(s,"@2x.png"),alt:"weather",width:"50px",height:"50px"}),Object(k.jsxs)("span",{children:[r," \xb0C "]})]}),Object(k.jsx)(Me.a.Item,{children:Object(k.jsxs)("p",{children:[" Feels like ",i," \xb0C"]})}),Object(k.jsx)(Me.a.Item,{children:Object(k.jsx)(Ne,{variant:"dark",onClick:function(){a(Se()),a(P()),localStorage.setItem(c,JSON.stringify(l))},children:"Save"})})]})]}),Object(k.jsx)(Je,{animate:n,children:"Saved"})]})},ze=function(){var e=Object(Fe.c)(ie),t=Object(Fe.c)(ne),n=qe(e?"":t.main.humidity),a=qe(e?"":t.main.pressure),c=Math.floor(qe(e?"":t.main.temp_max)-273.15),r=Math.floor(qe(e?"":t.main.temp_min)-273.15),i=new Date("2015-02-24T21:23").toLocaleDateString(),s=(new Date).toLocaleTimeString();return Object(k.jsx)(D.a,{children:Object(k.jsxs)(F.a,{children:[Object(k.jsx)(T.a,{md:6,children:Object(k.jsx)(Ge,{})}),Object(k.jsxs)(T.a,{children:[Object(k.jsx)("hr",{}),Object(k.jsxs)("h5",{children:[i," ",s]}),Object(k.jsx)("hr",{}),Object(k.jsxs)("p",{children:["Humidity: ",n]}),Object(k.jsxs)("p",{children:["Pressure: ",a," "]}),Object(k.jsxs)("p",{children:["Max temperature: ",c]}),Object(k.jsxs)("p",{children:["Min temperature: ",r]}),Object(k.jsx)("hr",{})]})]})})},He=n(13),Pe=n(90),We=Object(w.b)(Ee.a)(O||(O=Object(y.a)(["\n    width: 18rem;\n    height: 22rem;\n    margin: 20px auto;\n    .list-group {\n        height: 11rem;\n        display: ","\n    }\n    .card-body {\n        cursor: pointer;\n    }\n"])),(function(e){return e.value?"none":"block"})),Ke=Object(w.b)(B.a)(p||(p=Object(y.a)(["\n    width: 100%;\n    margin-bottom: 15px;\n    cursor: ",";\n"])),(function(e){return e.value?"wait":"pointer"})),Qe=Object(w.b)(Pe.a)(m||(m=Object(y.a)(["\n    position: relative;\n    top: 25%;\n    margin: 0 auto;\n    display: ",";\n"])),(function(e){return e.value?"flex":"none"})),Ue=function(e){return!1===Ce.getState().refreshLoading.value?e:null},Ve=function(e){var t=Ce.getState().refreshData.value,n=Ce.getState().refreshLoading.value,a=Math.floor(Ue(n?"":t.main.temp)-273.15),c=Math.floor(Ue(n?"":t.main.feels_like)-273.15),r=Ue(n?"50d":t.weather[0].icon),i=Ue(n?"":t.weather[0].main),s={name:e,temperature:a,feels_like:c,weatherImg:r,description:i},o="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("bfda20ca597bc0f4138fa15d276de911");q.a.get(o).then((function(e){Ce.dispatch(Oe(e.data)),Ce.dispatch(xe()),Ce.dispatch(P()),console.log("GetRefresh Res: ",e.data)})).then((function(){localStorage.setItem(e,JSON.stringify(s))})).then((function(){return Ce.dispatch(P())})).catch((function(e){return console.log(e)}))},Xe=function(e){var t=e.name,n=Object(Fe.b)(),a=Object(f.useState)(!1),c=Object(He.a)(a,2),r=c[0],i=c[1];return Object(k.jsxs)(We,{value:r,children:[Object(k.jsxs)(Ee.a.Body,{onClick:function(){n(V(t)),De(),window.scrollTo(0,0)},children:[Object(k.jsx)(Ee.a.Title,{children:e.name}),Object(k.jsxs)(Me.a,{variant:"flush",children:[Object(k.jsx)(Me.a.Item,{children:Object(k.jsx)("p",{children:e.description})}),Object(k.jsxs)(Me.a.Item,{children:[Object(k.jsx)(Re.a,{src:"https://openweathermap.org/img/wn/".concat(e.weatherImg,"@2x.png"),alt:"weather",width:"50px",height:"50px"}),Object(k.jsxs)("span",{children:[e.temperature," \xb0C "]})]}),Object(k.jsx)(Me.a.Item,{children:Object(k.jsxs)("p",{children:[" Feels like ",e.feels_like," \xb0C"]})})]}),Object(k.jsx)(Qe,{animation:"border",variant:"warning",value:r})]}),Object(k.jsx)(Ke,{variant:"success",onClick:function(){i(!0),Ve(t),setTimeout((function(){Ve(t)}),400),setTimeout((function(){i(!1)}),600)},value:r,children:"Refresh"}),Object(k.jsx)(Ke,{variant:"danger",onClick:function(){localStorage.removeItem(e.delete),n(P())},children:"Delete"})]})},Ye=function(){var e=Object.keys(localStorage),t=function(){var t=[];return e.forEach((function(e){var n=localStorage.getItem(e),a=JSON.parse(n);t.push(a)})),t}();return e.length>0?Object(k.jsx)(k.Fragment,{children:t.map((function(e,t){var n=e.name,a=e.temperature,c=e.feels_like,r=e.weatherImg,i=e.description;return Object(k.jsx)(Xe,{name:n,temperature:a,feels_like:c,weatherImg:r,description:i,delete:n},t)}))}):Object(k.jsx)("p",{className:"text-center mt-5",children:"No saved cards"})},Ze=function(){var e=Object(Fe.c)(W);return x.a.useEffect((function(){Ye()}),[e]),Object(k.jsxs)(_,{children:[Object(k.jsx)(E,{children:Object(k.jsx)(A,{children:Object(k.jsx)(_e,{})})}),Object(k.jsx)(M,{children:Object(k.jsx)(A,{children:Object(k.jsx)(ze,{})})}),Object(k.jsx)(R,{children:Object(k.jsx)(Ye,{})})]})},$e=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(C,{}),Object(k.jsx)(I,{}),Object(k.jsx)(Ze,{})]})};n(83);v.a.render(Object(k.jsx)(x.a.StrictMode,{children:Object(k.jsx)(Fe.a,{store:Ce,children:Object(k.jsx)($e,{})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.93e486bc.chunk.js.map