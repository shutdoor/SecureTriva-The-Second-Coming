(this.webpackJsonpfontend=this.webpackJsonpfontend||[]).push([[0],{34:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(28),r=a.n(s),i=(a(34),a(2)),l=a(11),o=a(4),u=a(3),j=a.n(u),b=a(7),d=a(5),h=a.n(d),m=a(0),p=Object(n.createContext)();function O(e){var t=Object(n.useState)(void 0),a=Object(i.a)(t,2),c=a[0],s=a[1];function r(){return l.apply(this,arguments)}function l(){return(l=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://10.0.115.231:3000/api/user/loggedIn",e.next=3,h.a.get("http://10.0.115.231:3000/api/user/loggedIn");case 3:t=e.sent,s(t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){r()}),[]),Object(m.jsx)(p.Provider,{value:{loggedIn:c,getLoggedIn:r},children:e.children})}var x=p;var v=function(){var e=Object(n.useState)(void 0),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useContext)(x).loggedIn,r=Object(n.useState)(localStorage.getItem("isValid")),l=Object(i.a)(r,2),u=l[0];function d(){return(d=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(u),"http://10.0.115.231:3000/api/trivia/all",e.next=4,h.a.get("http://10.0.115.231:3000/api/trivia/all");case 4:t=e.sent,c(t.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(b.a)(j.a.mark((function e(t,n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(n),c=0;case 2:if(!(c<a.length)){e.next=11;break}if(n!==c){e.next=8;break}return"http://10.0.115.231:3000/api/trivia/update",console.log(a[c]),e.next=8,h.a.post("http://10.0.115.231:3000/api/trivia/update",a[c]);case 8:c++,e.next=2;break;case 11:window.location.reload();case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return l[1],Object(o.f)(),Object(n.useEffect)((function(){!function(){d.apply(this,arguments)}()}),[]),Object(m.jsx)(m.Fragment,{children:!0===s&&Object(m.jsx)(m.Fragment,{children:"true"===u&&Object(m.jsx)("div",{children:Object(m.jsx)("table",{className:"adminTable",children:Object(m.jsxs)("tbody",{className:"adminTbody",children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{className:"adminTh",children:"Category"}),Object(m.jsx)("th",{className:"adminTh",children:"Question"}),Object(m.jsx)("th",{className:"adminTh",children:"Answer"}),Object(m.jsx)("th",{className:"adminTh",children:"IsAccepted"}),Object(m.jsx)("th",{className:"adminTh",id:"createdAt",children:"CreatedAt"})]}),a&&a.map((function(e,t){var n=e._id,c=e.category,s=e.question,r=e.createdAt,i=e.answer;return e.isAccepted,Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{className:"adminTd",children:c}),Object(m.jsx)("td",{className:"adminTd",children:s}),Object(m.jsx)("td",{className:"adminTd",children:i}),Object(m.jsx)("td",{className:"adminTd",children:Object(m.jsxs)("select",{onChange:function(e){a[t].isAccepted=e.target.value},children:[Object(m.jsx)("option",{value:"true",children:"True"}),Object(m.jsx)("option",{selected:"selected",default:!0,value:"false",children:"False"})]})}),Object(m.jsx)("td",{className:"adminTd",children:r}),Object(m.jsx)("td",{children:Object(m.jsx)("button",{onClick:function(e){return function(e,t){return p.apply(this,arguments)}(e,t)},children:"Update"})})]},n)}))]})})})})})};var f=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(i.a)(s,2),l=r[0],u=r[1],d=Object(n.useState)(""),p=Object(i.a)(d,2),O=p[0],v=p[1],f=Object(n.useState)(""),g=Object(i.a)(f,2),N=g[0],y=g[1],C=Object(n.useState)(""),w=Object(i.a)(C,2),S=w[0],L=w[1],T=Object(n.useState)(0),I=Object(i.a)(T,2),F=I[0],k=I[1],A=Object(n.useState)(""),q=Object(i.a)(A,2),E=q[0],M=q[1],V=Object(n.useState)(""),B=Object(i.a)(V,2),P=B[0],_=B[1],z=Object(n.useContext)(x).loggedIn,D=Object(o.f)();function G(){return(G=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),"http://10.0.115.231:3000/api/user/update",n={firstName:a,lastName:l,street:O,city:N,state:S,zip_code:F,phone:E,email:P},e.next=5,h.a.post("http://10.0.115.231:3000/api/user/update",n);case 5:D.push("/");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(){return(Q=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://10.0.115.231:3000/api/user/update",e.next=3,h.a.get("http://10.0.115.231:3000/api/user/update");case 3:t=e.sent,console.log(t.data),c(t.data.firstName),u(t.data.lastName),v(t.data.street),y(t.data.city),L(t.data.state),k(t.data.zip_code),M(t.data.phone),_(t.data.email);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){Q.apply(this,arguments)}()}),[]),Object(m.jsx)(m.Fragment,{children:!0===z&&Object(m.jsxs)("form",{className:"form",method:"POST",onSubmit:function(e){return G.apply(this,arguments)},children:[Object(m.jsx)("h3",{children:"Edit Account Information"}),Object(m.jsxs)("div",{className:"combiner",children:[Object(m.jsxs)("div",{className:"inputLabelContainer",children:[Object(m.jsx)("label",{htmlFor:"firstName",className:"editInformationLabel",children:"First Name"}),Object(m.jsx)("input",{required:!0,name:"firstName",className:"input",value:a,onChange:function(e){c(e.target.value)}})]}),Object(m.jsx)("p",{className:"spacer"}),Object(m.jsxs)("div",{className:"inputLabelContainer",children:[Object(m.jsx)("label",{htmlFor:"lastName",className:"editInformationLabel",children:"Last Name"}),Object(m.jsx)("input",{required:!0,name:"lastName",className:"input",value:l,onChange:function(e){u(e.target.value)}})]})]}),Object(m.jsxs)("div",{className:"combiner",children:[Object(m.jsxs)("div",{className:"inputLabelContainer",children:[Object(m.jsx)("label",{htmlFor:"street",className:"editInformationLabel",children:"Street"}),Object(m.jsx)("input",{required:!0,name:"street",className:"input",value:O,onChange:function(e){v(e.target.value)}})]}),Object(m.jsx)("p",{className:"spacer"}),Object(m.jsxs)("div",{className:"inputLabelContainer",children:[Object(m.jsx)("label",{htmlFor:"city",className:"editInformationLabel",children:"City"}),Object(m.jsx)("input",{required:!0,name:"city",className:"input",value:N,onChange:function(e){y(e.target.value)}})]}),Object(m.jsx)("p",{className:"spacer"}),Object(m.jsxs)("div",{className:"inputLabelContainer",children:[Object(m.jsx)("label",{htmlFor:"state",className:"editInformationLabel",children:"State"}),Object(m.jsx)("input",{required:!0,name:"state",pattern:"[A-Z]{2}",className:"inputsm",value:S,onChange:function(e){L(e.target.value)}})]}),Object(m.jsx)("p",{className:"spacer"}),Object(m.jsxs)("div",{className:"inputLabelContainer",children:[Object(m.jsx)("label",{htmlFor:"zip_code",className:"editInformationLabel",children:"Zip Code"}),Object(m.jsx)("input",{required:!0,type:"number",pattern:"[0-9]{6}",name:"zip_code",className:"inputm",value:F,onChange:function(e){k(e.target.value)}})]})]}),Object(m.jsxs)("div",{className:"inputLabelContainer",children:[Object(m.jsx)("label",{htmlFor:"phone",className:"editInformationLabel",children:"Phone"}),Object(m.jsx)("input",{required:!0,name:"phone",type:"tel",className:"input",value:E,onChange:function(e){M(e.target.value)}})]}),Object(m.jsxs)("div",{className:"inputLabelContainer",children:[Object(m.jsx)("label",{htmlFor:"email",className:"editInformationLabel",children:"Email"}),Object(m.jsx)("input",{required:!0,name:"email",type:"email",className:"input",value:P,onChange:function(e){_(e.target.value)}})]}),Object(m.jsx)("button",{type:"submit",className:"buttonForm",children:"Save Information"})]})})};var g=function(){var e=Object(n.useState)("Music"),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(i.a)(s,2),l=r[0],o=r[1],u=Object(n.useState)(""),d=Object(i.a)(u,2),p=d[0],O=d[1],x=Object(n.useState)(""),v=Object(i.a)(x,2),f=v[0],g=v[1],N=Object(n.useState)(void 0),y=Object(i.a)(N,2),C=y[0],w=y[1];function S(e){e.preventDefault();var t=e.target.getAttribute("value");c(t),L()}function L(){return T.apply(this,arguments)}function T(){return(T=Object(b.a)(j.a.mark((function e(){var t,n,c,s,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://10.0.115.231:3000/api/trivia/get/".concat(a),e.next=3,h.a.get(t);case 3:n=e.sent,c=n.data.length,s=Math.floor(Math.random()*c),(r=n.data[s])&&(o(r.question),O(r.answer));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){L()})),Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"categoryContainer",children:[Object(m.jsx)("h2",{children:"Select a category"}),Object(m.jsxs)("div",{className:"categoryButtonContainer",children:[Object(m.jsx)("div",{className:"categoryButton",value:"Music",onClick:function(e){S(e)},children:"Music"}),Object(m.jsx)("div",{className:"categoryButton",value:"TV",onClick:function(e){S(e)},children:"TV"}),Object(m.jsx)("div",{className:"categoryButton",value:"Celebrity",onClick:function(e){S(e)},children:"Celebrity"}),Object(m.jsx)("div",{className:"categoryButton",value:"Toys",onClick:function(e){S(e)},children:"Toys"}),Object(m.jsx)("div",{className:"categoryButton",value:"Games",onClick:function(e){S(e)},children:"Games"})]}),l&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{children:[Object(m.jsxs)("h3",{children:["Question: ",l]}),Object(m.jsxs)("div",{className:"inputLabelContainer",children:[Object(m.jsx)("label",{htmlFor:"userAnswer",children:"Answer: "}),Object(m.jsx)("input",{name:"userAnswer",required:!0,value:f,onChange:function(e){g(e.target.value)}})]})]}),Object(m.jsx)("button",{onClick:function(){f.toLowerCase()===p.toLowerCase()?w(!0):w(!1)},children:"Submit Answer"})]}),!0===C&&Object(m.jsx)("p",{children:"Answer is correct."}),!1===C&&Object(m.jsx)("p",{children:"Answer is not correct."})]})})};var N=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(i.a)(s,2),l=r[0],u=r[1],d=Object(n.useContext)(x).getLoggedIn,p=Object(o.f)();function O(){return(O=Object(b.a)(j.a.mark((function e(t){var n,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={email:a,password:l},"http://10.0.115.231:3000/api/user/login",c="http://10.0.115.231:3000/api/user/isAdmin",e.next=7,h.a.post("http://10.0.115.231:3000/api/user/login",n);case 7:return e.next=9,h.a.get(c);case 9:return s=e.sent,e.next=12,localStorage.setItem("isValid",s.data);case 12:return e.next=14,d();case 14:p.push("/"),window.location.reload(),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})))).apply(this,arguments)}return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("form",{className:"form",method:"post",onSubmit:function(e){return O.apply(this,arguments)},children:[Object(m.jsx)("h2",{children:"Log in"}),Object(m.jsxs)("div",{className:"inputLabelContainer",children:[Object(m.jsx)("label",{className:"loginFormLabel",htmlFor:"email",children:"Email"}),Object(m.jsx)("input",{required:!0,className:"inputl",type:"email",name:"email",value:a,onChange:function(e){return c(e.target.value)}})]}),Object(m.jsxs)("div",{className:"inputLabelContainer",children:[Object(m.jsx)("label",{className:"loginFormLabel",htmlFor:"password",children:"Password"}),Object(m.jsx)("input",{required:!0,className:"inputl",type:"password",name:"password",value:l,onChange:function(e){return u(e.target.value)}})]}),Object(m.jsx)("button",{type:"submit",className:"buttonForm",children:"Log In"})]})})};var y=function(){var e=Object(n.useContext)(x).getLoggedIn,t=Object(o.f)();function a(){return(a=Object(b.a)(j.a.mark((function a(){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return"http://10.0.115.231:3000/api/user/logout",a.next=3,h.a.get("http://10.0.115.231:3000/api/user/logout");case 3:return localStorage.clear("IsValid"),a.next=6,e();case 6:t.push("/"),window.location.reload();case 8:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return Object(m.jsx)("button",{onClick:function(){return a.apply(this,arguments)},children:"Log out"})};var C=function(){var e=Object(n.useContext)(x).loggedIn,t=Object(n.useState)(void 0),a=Object(i.a)(t,2),c=a[0],s=a[1];return Object(n.useEffect)((function(){s(localStorage.getItem("isValid"))}),[!c]),Object(m.jsxs)("div",{className:"navbar",children:[Object(m.jsxs)("div",{className:"leftNav",children:[Object(m.jsx)(l.b,{to:{pathname:"/"},children:Object(m.jsx)("h3",{className:"navText",children:"Home"})}),e&&Object(m.jsx)(l.b,{to:{pathname:"/submit"},children:Object(m.jsx)("h3",{className:"navText",children:"Submit Question"})})]}),Object(m.jsxs)("div",{className:"rightNav",children:[e&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(l.b,{to:{pathname:"/edit"},children:Object(m.jsx)("h3",{style:{marginRight:"25px"},className:"navText",children:"Edit Information"})}),"true"===c&&Object(m.jsx)(l.b,{to:{pathname:"/admin"},children:Object(m.jsx)("h3",{className:"navText",children:"Admin Page"})})]}),e&&Object(m.jsx)(y,{}),!e&&Object(m.jsx)(l.b,{to:{pathname:"/login"},children:Object(m.jsx)("h3",{style:{marginRight:"25px"},className:"navText",children:"Log In"})})]})]})};var w=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(i.a)(s,2),l=r[0],o=r[1],u=Object(n.useState)("Music"),d=Object(i.a)(u,2),p=d[0],O=d[1];function x(){return(x=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),"http://10.0.115.231:3000/api/trivia/create",n={category:p,question:a,answer:l},e.next=5,h.a.post("http://10.0.115.231:3000/api/trivia/create",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.jsxs)("form",{className:"form",method:"POST",onSubmit:function(e){return x.apply(this,arguments)},children:[Object(m.jsx)("h3",{children:"Add New Trivia"}),Object(m.jsxs)("div",{className:"inputLabelContainer",children:[Object(m.jsx)("label",{className:"submitTrivaLabel",htmlFor:"question",children:"Question"}),Object(m.jsx)("input",{className:"input",required:!0,name:"question",value:a,onChange:function(e){c(e.target.value)}})]}),Object(m.jsxs)("div",{className:"inputLabelContainer",children:[Object(m.jsx)("label",{className:"submitTrivaLabel",htmlFor:"answer",children:"Answer"}),Object(m.jsx)("input",{className:"input",required:!0,name:"answer",value:l,onChange:function(e){o(e.target.value)}})]}),Object(m.jsxs)("div",{className:"inputLabelContainer",children:[Object(m.jsx)("label",{htmlFor:"category",className:"submitTrivaLabel",children:"category"}),Object(m.jsxs)("select",{name:"category",className:"select",onChange:function(e){O(e.target.value)},children:[Object(m.jsx)("option",{default:!0,value:"Music",children:"Music"}),Object(m.jsx)("option",{value:"TV",children:"TV"}),Object(m.jsx)("option",{value:"Celebrity",children:"Celebrity"}),Object(m.jsx)("option",{value:"Toys",children:"Toys"}),Object(m.jsx)("option",{value:"Games",children:"Games"})]})]}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{type:"submit",className:"buttonForm",children:"Submit"})]})};var S=function(){var e=Object(n.useContext)(x).loggedIn,t=Object(n.useState)(void 0),a=Object(i.a)(t,2),c=a[0],s=a[1];return Object(n.useEffect)((function(){s(localStorage.getItem("isValid"))}),[!c]),Object(m.jsxs)(l.a,{children:[Object(m.jsx)(C,{}),Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{path:"/",exact:!0,children:Object(m.jsx)(g,{})}),e&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(o.a,{path:"/edit",children:Object(m.jsx)(f,{})}),Object(m.jsx)(o.a,{path:"/submit",children:Object(m.jsx)(w,{})}),"true"==c&&Object(m.jsx)(o.a,{path:"/admin",children:Object(m.jsx)(v,{})})]}),!e&&Object(m.jsx)(o.a,{path:"/login",children:Object(m.jsx)(N,{})})]})]})};h.a.defaults.withCredentials=!0;var L=function(){return Object(m.jsx)(O,{children:Object(m.jsx)(S,{})})};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(L,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.da87a9bf.chunk.js.map