(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{29:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(21),o=n.n(c),s=n(10),r=n(12),i=n(40),d=n(39),l=(n(28),n(29),n(5));var j=function(e){var t=e.todo,n=e.index,a=e.markTodo,c=e.removeTodo;return Object(l.jsxs)("div",{className:"todo",children:[Object(l.jsx)("span",{style:{textDecoration:t.isDone?"line-through":""},children:t.text}),Object(l.jsxs)("div",{children:[Object(l.jsx)(i.a,{variant:"outline-success",onClick:function(){return a(n)},children:"\u2713"})," ",Object(l.jsx)(i.a,{variant:"outline-danger",onClick:function(){return c(n)},children:"\u2715"})]})]})},u=n(38);var b=function(e){var t=e.addTodo,n=Object(a.useState)(""),c=Object(r.a)(n,2),o=c[0],s=c[1];return Object(l.jsxs)(u.a,{onSubmit:function(e){e.preventDefault(),o&&(t(o),s(""),e.keyCode)},children:[Object(l.jsx)(u.a.Group,{children:Object(l.jsx)(u.a.Control,{type:"text",className:"input",value:o,onChange:function(e){return s(e.target.value)},placeholder:"Add a task"},Date.now())}),Object(l.jsx)(i.a,{variant:"primary mb-3",type:"submit",children:"Add"})]})};var O=function(){var e=Object(a.useState)([{text:"This is a sample todo",key:Date.now(),isDone:!1}]),t=Object(r.a)(e,2),n=t[0],c=t[1],o=function(e){var t=Object(s.a)(n);t[e].isDone=!0,c(t)},u=function(e){var t=Object(s.a)(n);t.splice(e,1),c(t)};return Object(a.useEffect)((function(){c(JSON.parse(window.localStorage.getItem("todos")))}),[]),Object(a.useEffect)((function(){window.localStorage.setItem("todos",JSON.stringify(n))}),[n]),Object(l.jsx)("div",{className:"app",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"text-center mb-4",children:"TASK Manager"}),Object(l.jsx)(i.a,{onClick:function(e){var t=Object(s.a)(n);t.splice(e,n.length),c(t)},variant:"outline-danger",className:"custom_delete_button",children:"Delete all tasks"}),Object(l.jsx)(b,{addTodo:function(e){var t=[{text:e}].concat(Object(s.a)(n));c(t)}}),Object(l.jsx)("div",{className:".container",children:n.map((function(e,t){return Object(l.jsx)(d.a,{className:"custom_card",children:Object(l.jsx)(d.a.Body,{children:Object(l.jsx)(j,{index:t,todo:e,markTodo:o,removeTodo:u},Date.now())})})}))})]})})},x=n(23);o.a.render(Object(l.jsx)(x.a,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.92aa37f8.chunk.js.map