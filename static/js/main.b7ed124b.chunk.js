(this.webpackJsonpcomp=this.webpackJsonpcomp||[]).push([[0],{37:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"handleResponse",(function(){return S}));var c={};n.r(c),n.d(c,"login",(function(){return I}));var a={};n.r(a),n.d(a,"login",(function(){return D}));var o=n(2),u=n(0),s=n.n(u),i=n(13),p=n.n(i),l=n(25),f=n(3),j=n(15),b=n(10),h=n(24),d=JSON.parse(localStorage.getItem("user")),O=d?{loggedIn:!0,user:d}:{loggedIn:!1,user:null};var m=Object(b.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCEEDED":return{loggedIn:!0,user:t.payload};case"LOGIN_FAILED":case"LOGOUT":return{loggedIn:!1,user:null};default:return e}}}),g=function(){return Object(b.d)(m,Object(b.a)(h.a))},v=n(5),x=n.n(v),y=n(9),w=n(21),S=function(e){return e.text().then((function(t){var n=t&&JSON.parse(t);if(!e.ok){401!==e.status&&400!==e.status||localStorage.removeItem("user");var r=n||e.statusText;return Promise.reject(r)}return n}))},I=function(){var e=Object(y.a)(x.a.mark((function e(t,n){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:n})},e.abrupt("return",fetch("/auth/obtain",c).then(r.handleResponse).then((function(e){return localStorage.setItem("user",JSON.stringify(e)),e})));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),D=function(e,t){return function(n){c.login(e,t).then((function(e){console.log("WORKING",e),n(function(e){return{type:"LOGIN_SUCCEEDED",payload:e}}(e))}),(function(e){n({type:"LOGIN_FAILED",payload:e})}))}},L=Object(j.b)((function(e){return{user:e.user}}))((function(e){var t=s.a.useState(""),n=Object(w.a)(t,2),r=n[0],c=n[1],u=s.a.useState(""),i=Object(w.a)(u,2),p=i[0],l=i[1],f=e.user,j=e.dispatch,b=function(){var e=Object(y.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),j(a.login(r,p));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(y.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(y.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(y.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var t=Object(y.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),console.log("Props",e),console.log("User",f),console.log("local storage",localStorage.getItem("user"));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(o.jsxs)("div",{children:[Object(o.jsxs)("form",{onSubmit:b,children:[Object(o.jsx)("input",{type:"text",name:"username",placeholder:"username",onChange:function(e){return c(e.target.value)}}),Object(o.jsx)("input",{type:"password",name:"password",placeholder:"password",onChange:function(e){return l(e.target.value)}}),Object(o.jsx)("button",{type:"submit",children:"Login"})]}),Object(o.jsx)("hr",{}),Object(o.jsx)("form",{onSubmit:h,children:Object(o.jsx)("button",{type:"submit",children:"Test Protected"})}),Object(o.jsx)("hr",{}),Object(o.jsx)("form",{onSubmit:d,children:Object(o.jsx)("button",{type:"submit",children:"Test Refresh"})}),Object(o.jsx)("hr",{}),Object(o.jsx)("form",{onSubmit:O,children:Object(o.jsx)("button",{type:"submit",children:"Test Logout"})}),Object(o.jsx)("hr",{}),Object(o.jsx)("form",{onSubmit:m,children:Object(o.jsx)("button",{type:"submit",children:"Log the state of things"})})]})})),k=function(){return Object(o.jsx)(j.a,{store:g(),children:Object(o.jsx)(l.a,{children:Object(o.jsx)(f.c,{children:Object(o.jsx)(f.a,{path:"/",children:Object(o.jsx)(L,{})})})})})};p.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.b7ed124b.chunk.js.map