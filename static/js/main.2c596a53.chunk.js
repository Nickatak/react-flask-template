(this.webpackJsonpcomp=this.webpackJsonpcomp||[]).push([[0],{31:function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"login",(function(){return d}));var c=n(1),a=n(0),s=n.n(a),u=n(17),o=n.n(u),i=n(18),p=n(2),j=n(6),b=n.n(j),f=n(8),h=n(15),d=function(){var t=Object(f.a)(b.a.mark((function t(e,n){var r,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:n})},t.next=3,fetch("/auth/obtain",r).then((function(t){return t.json()}));case 3:return c=t.sent,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),l=function(){var t=s.a.useState(""),e=Object(h.a)(t,2),n=e[0],a=e[1],u=s.a.useState(""),o=Object(h.a)(u,2),i=o[0],p=o[1],j=function(){var t=Object(f.a)(b.a.mark((function t(e){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,r.login(n,i);case 3:c=t.sent,console.log(c);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(f.a)(b.a.mark((function t(e){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault();case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(f.a)(b.a.mark((function t(e){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault();case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(f.a)(b.a.mark((function t(e){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault();case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.jsxs)("div",{children:[Object(c.jsxs)("form",{onSubmit:j,children:[Object(c.jsx)("input",{type:"text",name:"username",placeholder:"username",onChange:function(t){return a(t.target.value)}}),Object(c.jsx)("input",{type:"password",name:"password",placeholder:"password",onChange:function(t){return p(t.target.value)}}),Object(c.jsx)("button",{type:"submit",children:"Login"})]}),Object(c.jsx)("hr",{}),Object(c.jsx)("form",{onSubmit:d,children:Object(c.jsx)("button",{type:"submit",children:"Test Protected"})}),Object(c.jsx)("hr",{}),Object(c.jsx)("form",{onSubmit:l,children:Object(c.jsx)("button",{type:"submit",children:"Test Refresh"})}),Object(c.jsx)("hr",{}),Object(c.jsx)("form",{onSubmit:O,children:Object(c.jsx)("button",{type:"submit",children:"Test Logout"})})]})},O=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(i.a,{children:Object(c.jsx)(p.c,{children:Object(c.jsx)(p.a,{path:"/",children:Object(c.jsx)(l,{})})})})})};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.2c596a53.chunk.js.map