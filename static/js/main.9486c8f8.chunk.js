(this.webpackJsonpcomp=this.webpackJsonpcomp||[]).push([[0],{37:function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"handleResponse",(function(){return S}));var c={};n.r(c),n.d(c,"login",(function(){return I}));var a={};n.r(a),n.d(a,"login",(function(){return D}));var u=n(2),s=n(0),o=n.n(s),i=n(13),p=n.n(i),f=n(25),j=n(3),l=n(15),d=n(9),b=n(24),h=JSON.parse(localStorage.getItem("user")),O=h?{loggedIn:!0,user:h}:{loggedIn:!1};var m=Object(d.c)({user:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"LOGIN_SUCCEEDED":return{loggedIn:!0,user:e.payload};case"LOGIN_FAILED":case"LOGOUT":return{loggedIn:!1};default:return t}}}),v=function(){return Object(d.d)(m,Object(d.a)(b.a))},x=n(7),g=n.n(x),y=n(10),w=n(21),S=function(t){return t.text().then((function(e){var n=e&&JSON.parse(e);if(!t.ok){401===t.status||t.status;var r=n||t.statusText;return Promise.reject(r)}return n}))},I=function(){var t=Object(y.a)(g.a.mark((function t(e,n){var c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:n})},t.abrupt("return",fetch("/auth/obtain",c).then(r.handleResponse).then((function(t){localStorage.setItem("user",JSON.stringify(t))})));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),D=function(t,e){return function(n){c.login(t,e).then((function(t){n(function(t){return{type:"LOGIN_SUCCEEDED",payload:t}}(t))}),(function(t){n({type:"LOGIN_FAILED",payload:t})}))}},E=Object(l.b)((function(t){return{user:t.user}}))((function(t){var e=o.a.useState(""),n=Object(w.a)(e,2),r=n[0],c=n[1],s=o.a.useState(""),i=Object(w.a)(s,2),p=i[0],f=i[1];console.log(t);var j=t.dispatch,l=function(){var t=Object(y.a)(g.a.mark((function t(e){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),j(a.login(r,p));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(y.a)(g.a.mark((function t(e){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault();case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(y.a)(g.a.mark((function t(e){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault();case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(y.a)(g.a.mark((function t(e){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault();case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsxs)("div",{children:[Object(u.jsxs)("form",{onSubmit:l,children:[Object(u.jsx)("input",{type:"text",name:"username",placeholder:"username",onChange:function(t){return c(t.target.value)}}),Object(u.jsx)("input",{type:"password",name:"password",placeholder:"password",onChange:function(t){return f(t.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"Login"})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("form",{onSubmit:d,children:Object(u.jsx)("button",{type:"submit",children:"Test Protected"})}),Object(u.jsx)("hr",{}),Object(u.jsx)("form",{onSubmit:b,children:Object(u.jsx)("button",{type:"submit",children:"Test Refresh"})}),Object(u.jsx)("hr",{}),Object(u.jsx)("form",{onSubmit:h,children:Object(u.jsx)("button",{type:"submit",children:"Test Logout"})})]})})),L=function(){return Object(u.jsx)(l.a,{store:v(),children:Object(u.jsx)(f.a,{children:Object(u.jsx)(j.c,{children:Object(u.jsx)(j.a,{path:"/",children:Object(u.jsx)(E,{})})})})})};p.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(L,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.9486c8f8.chunk.js.map