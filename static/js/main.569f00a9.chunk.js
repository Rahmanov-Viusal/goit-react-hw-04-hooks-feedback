(this["webpackJsonpgoit-react-hw-04-feedback"]=this["webpackJsonpgoit-react-hw-04-feedback"]||[]).push([[0],[,,function(t,e,c){t.exports={statistic__list:"Statistic_statistic__list__16dvK",statistic__item:"Statistic_statistic__item__1HOW3"}},,,function(t,e,c){t.exports={section:"Section_section__Ap5Zy",title:"Section_title__2S6oE"}},,function(t,e,c){t.exports={btn:"FeedbackOptions_btn__1rp9P"}},function(t,e,c){t.exports={message:"Notification_message__eciZi"}},function(t,e,c){t.exports={container:"Container_container__3RIox"}},,,,,function(t,e,c){},,function(t,e,c){"use strict";c.r(e);var s=c(1),i=c.n(s),n=c(6),a=c.n(n),r=(c(14),c(3)),o=c(7),l=c.n(o),b=c(0),u=function(t){var e=t.options,c=t.onLeaveFeedback;return e.map((function(t){return Object(b.jsx)("button",{className:l.a.btn,type:"button","data-feedback":t,onClick:function(){return c(t)},children:t},t)}))},j=c(2),d=c.n(j),_=function(t){var e=t.good,c=t.neutral,s=t.bad,i=t.total,n=t.positivePercentage;return Object(b.jsxs)("ul",{className:d.a.statistic__list,children:[Object(b.jsxs)("li",{className:d.a.statistic__item,children:["good:",e]}),Object(b.jsxs)("li",{className:d.a.statistic__item,children:["neutral:",c]}),Object(b.jsxs)("li",{className:d.a.statistic__item,children:["bad:",s]}),Object(b.jsxs)("li",{className:d.a.statistic__item,children:["total:",i()]}),Object(b.jsxs)("li",{className:d.a.statistic__item,children:["Positive feedback:",e?n():0,"%"]})]})},O=c(5),f=c.n(O),m=function(t){var e=t.title,c=t.children;return Object(b.jsxs)("section",{className:f.a.section,children:[e&&Object(b.jsx)("h2",{className:f.a.title,children:e}),c]})},h=c(8),x=c.n(h);function p(t){var e=t.message;return Object(b.jsx)("p",{className:x.a.message,children:e})}var v=c(9),N=c.n(v);var g=function(t){var e=t.children;return Object(b.jsx)("div",{className:N.a.container,children:e})},k={GOOD:"good",NEUTRAL:"neutral",BAD:"bad"},S=function(){var t=Object(s.useState)(0),e=Object(r.a)(t,2),c=e[0],i=e[1],n=Object(s.useState)(0),a=Object(r.a)(n,2),o=a[0],l=a[1],j=Object(s.useState)(0),d=Object(r.a)(j,2),O=d[0],f=d[1],h=function(){return c+o+O},x=Object.values(k);return Object(b.jsxs)(g,{className:"App",children:[Object(b.jsx)(m,{title:"please leave feedback",children:Object(b.jsx)(u,{options:x,onLeaveFeedback:function(t){switch(t){case k.GOOD:i((function(t){return t+1}));break;case k.NEUTRAL:l((function(t){return t+1}));break;case k.BAD:f((function(t){return t+1}));break;default:throw new Error}}})}),Object(b.jsx)(m,{title:"statistics",children:h()?Object(b.jsx)(_,{good:c,neutral:o,bad:O,total:h,positivePercentage:function(){return Math.floor(c/h()*100)}}):Object(b.jsx)(p,{message:"No feedback given"})})]})};a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.569f00a9.chunk.js.map