(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{161:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){},180:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"worklogAddedToCart",(function(){return ie})),a.d(n,"allworklogsRemovedFromCart",(function(){return le})),a.d(n,"worklogRemoved",(function(){return ce})),a.d(n,"worklogCopy",(function(){return oe})),a.d(n,"addNewWorklog",(function(){return se})),a.d(n,"worklogDownload",(function(){return me})),a.d(n,"worklogFavorite",(function(){return de})),a.d(n,"showFavoritesWorklogs",(function(){return ue})),a.d(n,"showModal",(function(){return ve})),a.d(n,"stopWorklog",(function(){return Ee})),a.d(n,"startTimerCounter",(function(){return pe})),a.d(n,"edToEditWorklog",(function(){return fe})),a.d(n,"editingWorklog",(function(){return Ne})),a.d(n,"fetchworklogs",(function(){return Ae}));var r=a(0),i=a.n(r),l=a(30),c=a.n(l),o=a(5),s=a(50),m=a(32),d=a(1),u=a(7),v=a(52),E=a.n(v),p={worklogList:{"12.02.2020":[{id:1,title:"Team standup",info:"JRM_320",timeStart:"32630",timeStop:"36200",isLoad:!1,isStarting:!1,allTime:"3.00"},{id:2,title:"Meeting with QA",info:"JRM_320",timeStart:"36200",timeStop:"39700",isLoad:!1,isStarting:!1,allTime:"1.30"},{id:3,title:"Project design development",info:"JRM_320",timeStart:"43200",timeStop:"50400",isLoad:!1,isStarting:!1,allTime:"3.00"},{id:4,title:"Report for the previous week",info:"JRM_20",timeStart:"64800",timeStop:"70200",isLoad:!1,isStarting:!1,allTime:"3.00"}],"14.02.2020":[{id:5,title:"Have a lunch",info:"JRM_250",timeStart:"28800",timeStop:"43540",isLoad:!1,isStarting:!1,allTime:"3.00"},{id:6,title:"Make an app",info:"JRM_500",timeStart:"50400",timeStop:"54400",isLoad:!1,isStarting:!1,allTime:"1.30"}]},error:null,modal:{isOpen:!1,status:"add"},activeWorklogs:[],favorites:[],showFavoriteList:!1,timeCounter:0,editWorklog:[],toolTip:{}},f=6,N=function(e,t){f++;var a=e.worklogs,n=e.timeCounter,r=a.find((function(e){return e.id===t})),i={},l=r.timeStart+n;return i.id=f,i.info=r.info,i.title=r.title,i.timeStart=r.timeStart,i.timeStop=l,i.allTime=n,i.isStarting=!0,Object(d.a)(Object(d.a)({},e),{},{activeWorklogs:i})},A=function(e,t,a){var n=e.worklogList,r=e.favorites;if(a){var i=n[a].findIndex((function(e){return e.id===t})),l=[].concat(Object(u.a)(n[a].slice(0,i)),Object(u.a)(n[a].slice(i+1))),c=n;return c[a]=l,Object(d.a)(Object(d.a)({},e),{},{worklogList:Object(d.a)({},c)})}var o,s,m=r.findIndex((function(e){return e.id===t}));return Object(d.a)(Object(d.a)({},e),{},{favorites:(o=r,s=m,[].concat(Object(u.a)(o.slice(0,s)),Object(u.a)(o.slice(s+1))))})},g=function(e,t,a,n){f++;var r=e.worklogList,i=e.activeWorklogs,l=e.modal,c=r[a].findIndex((function(e){return e.id===t})),o=[r[a][c]],s=E()(r),m=o,u=60*n.h*60+60*n.min,v=n.d+"."+n.m+"."+n.y,p=m.findIndex((function(e){return e.id===t}));m[p].isStarting=!0,m[p].id=f,m[p].timeStart=u,m[p].timeStop=n.h+"-"+n.min,s["".concat(v)]?s["".concat(v)].push(o[0]):s["".concat(v)]=m;var N=m;return N[0].data="".concat(v),console.log(l.status),l.status="edit",i.id?Object(d.a)({},e):Object(d.a)(Object(d.a)({},e),{},{worklogList:s,activeWorklogs:N[0],modal:k(l,"edit",!1)})},w=function(e,t){var a=e.worklogs,n=a.findIndex((function(e){return e.id===t})),r=a[n];return Object(d.a)(Object(d.a)({},e),{},{worklogs:a.map((function(e){return e.id===r.id&&(e.isLoad=!0),e}))})},b=function(e,t,a){var n,r,i=e.worklogList,l=e.favorites,c=i[a].findIndex((function(e){return e.id===t})),o=i[a][c];return o.favorite=!0,console.log(o),Object(d.a)(Object(d.a)({},e),{},{favorites:(n=l,r=o,[].concat(Object(u.a)(n),[r]))})},O=function(e,t,a,n,r,i){f++;var l=e.worklogList,c=e.timeCounter,o=E()(l);console.log(r);var s={id:f,info:t,title:a,allTime:c,timeStart:r,timeStop:r+c,isStarting:!0};o["".concat(i)]?o["".concat(i)].push(Object(d.a)({},s)):o["".concat(i)]=[Object(d.a)({},s)];var m=[Object(d.a)({},s)];return m[0].data="".concat(i),Object(d.a)(Object(d.a)({},e),{},{worklogList:o,activeWorklogs:m[0]})},k=function(e,t,a){var n;return t&&(n={isOpen:e.isOpen,status:"".concat(t)}),a&&(n={isOpen:!e.isOpen,status:e.status}),t&&a?n={isOpen:!e.isOpen,status:"".concat(t)}:console.log(" \u043d\u0435\u0442 \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439  \u0432 cgangeModal"),n},y=function(e,t,a){if(a){var n=e.modal,r=h(e,a,t);return r.data=a,Object(d.a)(Object(d.a)({},e),{},{editWorklog:[r],modal:k(n,"edit",!0)})}var i=e.favorites,l=e.modal,c=i.findIndex((function(e){return e.id===t})),o=i[c];return Object(d.a)(Object(d.a)({},e),{},{editWorklog:[o],modal:k(l,"edit",!0)})},h=function(e,t,a){var n=e.worklogList,r=n[t].findIndex((function(e){return e.id===a}));return n[t][r]},S=function(e,t,a,n,r){var i=e.worklogList,l=e.editWorklog,c=e.favorites,o=e.modal;return r?Object(d.a)(Object(d.a)({},e),{},{modal:k(o,"add",!1),favorites:c.map((function(e){return console.log(e.id,l.id),e.id===l[0].id&&(e.title=t,e.info=a,e.planingTime=n),e})),editWorklog:[]}):Object(d.a)(Object(d.a)({},e),{},{editWorklog:[],modal:k(o,"add",!1),worklogList:Object(d.a)(Object(d.a)({},i),{},Object(m.a)({},l[0].data,i[l[0].data].map((function(e){return e.id===l[0].id&&(e.title=t||e.title,e.info=a||e.info),e}))))})},_=function(e){var t=e.favorites,a=e.showFavoriteList;return Object(d.a)(Object(d.a)({},e),{},{showFavoriteList:!a,favorites:t.map((function(e){return e}))})},C=function(e){var t=e.modal,a={isOpen:!t.isOpen,status:t.status};return Object(d.a)(Object(d.a)({},e),{},{modal:a})},j=function(e){var t=e.worklogList,a=e.activeWorklogs,n=e.timeCounter;e.modal;t[a.data].map((function(e){return e.id===a.id&&(e.allTime=n,e.timeStop=e.timeStart+n),e}));return Object(d.a)(Object(d.a)({},e),{},{editWorklog:[Object(d.a)({},a)],activeWorklogs:[],timeCounter:0,modal:{isOpen:!0,status:"edit"}})},L=function(e,t){var a=e.timeCounter+1;return console.log(" \u043c\u044b \u0432 \u0441\u0442\u0430\u0440\u0442 \u043a\u0430\u0443\u043d\u0442\u0435\u0440 "),Object(d.a)(Object(d.a)({},e),{},{timeCounter:a})},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"WORKLOG_ADDED_TO_CART":return N(e,t.payload);case"WORKLOG_REMOVED":return A(e,t.payload,t.data);case"WORKLOG_COPY":return g(e,t.payload,t.data,t.nowDate);case"WORKLOG_DOWNLOAD":return w(e,t.payload);case"ADD_NEW_WL":return O(e,t.title,t.name,t.planingTime,t.second,t.todayDate);case"WORKLOG_FAVORITE":return b(e,t.payload,t.data);case"SHOW_FAVORITE":return _(e);case"SHOW_MODAL":return C(e);case"STOP_WORKLOG":return j(e);case"START_TIMER_COUNTER":return L(e,t.sec);case"ADD_TO_EDIT_WL":return y(e,t.payload,t.data);case"EDITING_WL":return S(e,t.name,t.title,t.planingTime,t.favorite,t.second,t.sec,t.data);default:return e}},W=a(13),R=a(75),T=Object(W.createStore)(D,Object(R.composeWithDevTools)()),I=a(3),M=(a(161),a(76)),F=a.n(M),x=a(77),H=a.n(x),B=a(78),U=a.n(B),G=function(){return i.a.createElement("div",{className:"header-wrap"},i.a.createElement("header",{className:"top-menu top-menu_mg"},i.a.createElement("div",{className:"top-menu-links"},i.a.createElement("div",{className:"top-menu-links__link"},"Home"),i.a.createElement("div",{className:"top-menu-links__link"},"Issues"),i.a.createElement("div",{className:"top-menu-links__link"},"Filter"),i.a.createElement("div",{className:"top-menu-links__link"},"Projects")),i.a.createElement("div",{className:"top-menu-user"},i.a.createElement("div",{className:"top-menu-user__item"},i.a.createElement("img",{src:F.a,alt:"icon"})),i.a.createElement("div",{className:"top-menu-user__item"},i.a.createElement("img",{src:H.a,alt:"icon"})),i.a.createElement("div",{className:"top-menu-user__item accountIn"},i.a.createElement("img",{src:U.a,alt:"icon"})))))},J=a(15),Y=a(16),Q=a(18),K=a(17),V=(a(162),a(4)),X=(a(163),a(81)),Z=a(34),P=a.n(Z),q=(a(164),function(e){var t=e.children,a=e.onClick,n=e.imgSrc,r=e.className,l=e.disabled,c=e.active,o=Object(X.a)(e,["children","onClick","imgSrc","className","disabled","active"]),s=function(e){if(l&&e.preventDefault(),c)return a(e);c=!0,console.log(" \u043a\u043b\u0438\u043a ")},m=P()("cart-icon",r,{active:c});return i.a.createElement("div",Object.assign({className:m,disabled:l,onClick:s},o),i.a.createElement("img",{onClick:s,className:"",src:n,alt:"icon"}),t)});q.defaultProps={children:"",onClick:function(){},className:"",disabled:!1,active:!1};var z=q,$=(a(165),function(e){Object(Q.a)(a,e);var t=Object(K.a)(a);function a(){var e;Object(J.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={visible:!1},e.show=function(){e.setVisibility(!0)},e.hide=function(){e.setVisibility(!1)},e.setVisibility=function(t){e.setState({visible:t})},e}return Object(Y.a)(a,[{key:"render",value:function(){var e=this.state.visible,t=this.props,a=t.children,n=t.content,r=t.style,l=t.position,c=P()("tooltip",l);return i.a.createElement("span",{className:"tooltipWrapper"},e&&i.a.createElement("span",{style:r,className:c},n),i.a.createElement("span",{className:"targetElement",onMouseEnter:this.show,onMouseLeave:this.hide},a))}}]),a}(r.Component));$.defaultProps={content:"Tooltip content",style:{},position:"top"};var ee=$,te=a(79),ae=a.n(te),ne=function(e){var t=e.worklog,a=e.onDelete,n=e.onEdit,l=e.onCopy,c=e.onDownload,o=e.onFavorite,s=(e.onFinish,e.data,t.title),m=t.info,d=t.timeStart,u=t.timeStop,v=t.allTime,E=t.timeNow,p=Object(r.useState)(!0),f=Object(V.a)(p,2),N=f[0],A=f[1],g=Object(r.useState)(!0),w=Object(V.a)(g,2),b=w[0],O=w[1],k={isLoad:{backgroundColor:"red",border:"1px solid black"},default:{backgroundColor:"white",border:"1px solid black"},isHide:{display:"none"},defaultForList:{display:"flex"}};function y(e){var t=Math.floor(e/60/60);return t+":"+(Math.floor(e/60)-60*t)}var h,S=y(d),_=y(u);return h=y(v),i.a.createElement("div",{className:"cart-block-wp2",onMouseEnter:function(){return O(!1)},onMouseLeave:function(){return O(!0)}},i.a.createElement("div",{className:"more-vertical",style:b?k.isHide:k.defaultForList,onMouseEnter:function(){return A(!1)},onMouseLeave:function(){return A(!0)}},i.a.createElement("div",{className:"more-vertical__circle"}),i.a.createElement("div",{className:"more-vertical__circle"})),!0===t.favorite?i.a.createElement("div",{className:"more-list ",onMouseEnter:function(){return A(!1)},onMouseLeave:function(){return A(!0)},style:N?k.isHide:k.defaultForList},i.a.createElement("span",{className:"more-list__item",onClick:n},"Edit"),i.a.createElement("span",{className:"more-list__item",onClick:a},"Delete"),i.a.createElement("span",{className:"more-list__item"},"Create favorite worklog")):i.a.createElement("div",{className:"more-list ",onMouseEnter:function(){return A(!1)},onMouseLeave:function(){return A(!0)},style:N?k.isHide:k.defaultForList},i.a.createElement("span",{className:"more-list__item",onClick:n},"Edit"),i.a.createElement("span",{className:"more-list__item",onClick:a},"Delete"),i.a.createElement("span",{className:"more-list__item"},"Jira link"),i.a.createElement("span",{className:"more-list__item",onClick:c},"Download"),i.a.createElement("span",{className:"more-list__item",onClick:o},"Add to favorite")),i.a.createElement("div",{className:"cart-block"},i.a.createElement("div",{className:"cart-timing"},i.a.createElement("div",{className:"cart-timing-wrap"},i.a.createElement("span",{className:"cart-timing-wrap--bold"},S)),i.a.createElement("span",null,_),i.a.createElement("div",{className:"vertic-line",style:t.isLoad?k.isLoad:k.default})),i.a.createElement("div",{className:"cart-main"},i.a.createElement("div",{className:"cart-info"},m),i.a.createElement("div",{className:"cart-info"}," ",E),i.a.createElement("div",{className:"cart-title"},s)),i.a.createElement("div",{className:"cart-time-info"},h),i.a.createElement(ee,{position:"top",content:"dublicate this worklog",style:{width:"90px"}},i.a.createElement(z,{onClick:l,imgSrc:ae.a}))))},re=a(181),ie=function(e){return{type:"WORKLOG_ADDED_TO_CART",payload:e}},le=function(e){return{type:"ALL_WORKLOGS_REMOVED_FROM_CART",payload:e}},ce=function(e,t){return{type:"WORKLOG_REMOVED",payload:e,data:t}},oe=function(e,t,a){return{type:"WORKLOG_COPY",payload:e,data:t,nowDate:a}},se=function(e,t,a,n,r){return{type:"ADD_NEW_WL",name:e,title:t,planingTime:a,second:n,todayDate:r}},me=function(e){return{type:"WORKLOG_DOWNLOAD",payload:e}},de=function(e,t){return{type:"WORKLOG_FAVORITE",payload:e,data:t}},ue=function(){return{type:"SHOW_FAVORITE"}},ve=function(){return{type:"SHOW_MODAL"}},Ee=function(e){return{type:"STOP_WORKLOG",payload:e}},pe=function(e){return{type:"START_TIMER_COUNTER",sec:e}},fe=function(e,t){return{type:"ADD_TO_EDIT_WL",payload:e,data:t,worklogId:e}},Ne=function(e,t,a,n,r,i,l){return{type:"EDITING_WL",name:e,title:t,planingTime:a,favorite:n,second:r,sec:i,data:l}};function Ae(e,t){return function(){t({type:"FETCH_WORKLOGS_REQUEST"}),e.getWorklogs().then((function(e){return t({type:"FETCH_WORKLOGS_SUCCESS",payload:e})})).catch((function(e){return t({type:"FETCH_WORKLOGS_FAILURE",payload:e})}))}}var ge=Object(o.b)(null,(function(e){return{onAddedToCart:function(t){return e(ie(t))},onDelete:function(t,a){return e(ce(t,a))},onCopy:function(t,a,n){return e(oe(t,a,n))},onDownload:function(t){return e(me(t))},onFavorite:function(t,a){return e(de(t,a))},onEdit:function(t,a){return e(fe(t,a))}}}))((function(e){var t=e.day,a=e.worklogList,n=e.onDelete,r=e.onEdit,l=e.onCopy,c=e.onDownload,o=e.onFavorite,s=new Date,m={y:s.getFullYear(),m:+(s.getMonth()+1),d:s.getDate(),h:s.getHours(),min:s.getMinutes(),s:s.getSeconds(),ms:s.getMilliseconds()};return i.a.createElement("div",{className:"cart-day"},i.a.createElement("div",{className:"cart"},i.a.createElement("div",{className:"cart-content"},Object.keys(a[t]).map((function(e){return i.a.createElement(ne,{key:Object(re.a)(),id:a[t][e].id,data:t,worklog:a[t][e],onDelete:function(){return n(a[t][e].id,t)},onCopy:function(){return l(a[t][e].id,t,m)},onEdit:function(){return r(a[t][e].id,t)},onDownload:function(){return c(e.id)},onFavorite:function(){return o(a[t][e].id,t)}})})))))})),we=(a(166),a(23)),be=a.n(we),Oe=Object(o.b)((function(e){return{toolTip:e.toolTip}}),null)((function(e){var t=e.toolTip,a=Object(r.useState)(!1),n=Object(V.a)(a,2),l=n[0],c=n[1],o={isHide:{display:"none"},defaultForList:{display:"flex"}};return t.importance?i.a.createElement("div",{style:l?o.isHide:o.defaultForList,className:"tool-tip"},i.a.createElement("div",{className:"tool-tip__ind"}),i.a.createElement("div",{onClick:function(){return c(!0)},className:"tool-tip__close"},i.a.createElement("img",{src:be.a,alt:"close-icon"})),i.a.createElement("div",{className:"tool-tip__text"},t.message)):i.a.createElement("div",null)})),ke=(a(167),a(80)),ye=a.n(ke),he=function(e){var t=e.day.split(".");t=t.reverse();var a=new Date(Number(t[0]),Number(t[1]-1),Number(t[2])),n=function(e){return["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e.getDay()]}(a),r=function(e){return["Jan","Feb","March","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"][e.getMonth()]}(a);return i.a.createElement("div",{className:"cart-top cart-top__pd"},i.a.createElement("div",{className:"cart-top__data-today"},i.a.createElement("span",{className:"cart-top__data-today--bold"},n,", "),i.a.createElement("span",null,r," ",a.getDate())),i.a.createElement("div",{className:"cart-time-wrap"},i.a.createElement("div",{className:"cart-time"},i.a.createElement("span",{className:"cart-time__gray"},"06.02.00"),i.a.createElement("progress",{max:"100",value:"25"},i.a.createElement("span",{id:"value"}))),i.a.createElement(ee,{position:"top",content:"Add worklogs to Jira",style:{width:"90px"}},i.a.createElement(z,{imgSrc:ye.a,className:"cart-time-downl"}))))},Se=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}},_e=a(35),Ce=a.n(_e),je=function(){return i.a.createElement("div",null,"loading...")},Le=(a(168),function(){return i.a.createElement("div",null,"Error!")}),De=(a(169),a(53)),We=a.n(De);var Re=Object(o.b)((function(e){return{activeWorklogs:e.activeWorklogs,statusModal:e.statusModal,modal:e.modal,editWorklog:e.editWorklog}}))((function(e){e.statusModal;var t=e.modal,a=e.editWorklog,n=e.dispatch,l=Object(r.useState)(""),c=Object(V.a)(l,2),o=c[0],s=c[1],m=Object(r.useState)(""),d=Object(V.a)(m,2),u=d[0],v=d[1],E=Object(r.useState)(""),p=Object(V.a)(E,2),f=p[0],N=p[1],A=new Date,g=A.getFullYear(),w=+(A.getMonth()+1),b=A.getDate(),O=A.getHours(),k=A.getMinutes(),y=(A.getSeconds(),A.getMilliseconds(),b+"."+w+"."+g),h=60*O*60+60*k;return console.log(t.status,"status modal"),a.length>0&&"edit"===t.status||"edit"===t.status?(console.log(a," this editwl"),i.a.createElement("div",{className:"new-wl-box"},i.a.createElement("div",{className:"new-wl-wrap"},i.a.createElement("div",{className:"app"},i.a.createElement("div",{className:"time"}),i.a.createElement("div",{className:"row"})),i.a.createElement("div",{className:"new-wl__title"},i.a.createElement("span",null,"Edit worklog")),i.a.createElement("div",{className:"new-wl"},i.a.createElement("div",{className:"new-wl-content"},i.a.createElement("div",{className:"progress-time"},i.a.createElement("div",{className:"slidecontainer"})),i.a.createElement("div",{className:"new-wl-form"},i.a.createElement("div",{className:"new-wl-form-item"},i.a.createElement("span",{className:"new-wl-form__title"},"Edit worklog name"),i.a.createElement("input",{value:o,onChange:function(e){return s(e.target.value)},type:"text",placeholder:a[0].title,className:"new-wl-input new-wl-input__issue"})),i.a.createElement("div",{className:"new-wl-form-item"},i.a.createElement("span",{className:"new-wl-form__title"},"Issue"),i.a.createElement("input",{type:"text",value:u,onChange:function(e){return v(e.target.value)},placeholder:a[0].info,className:"new-wl-input new-wl-input__name"})),i.a.createElement("div",{className:"new-wl-form-item"},i.a.createElement("input",{type:"text",value:f,placeholder:"\u043f\u043e\u0442\u0440\u0430\u0447\u0435\u043d\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u043b\u044f \u044d\u0442\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0438",onChange:function(e){return N(e.target.value)},className:"new-wl-input new-wl-input__name"}))),i.a.createElement("div",{className:"btn-block"},i.a.createElement("div",{onClick:function(e){e.preventDefault(),n(Ne(o,u,f,a[0].favorite?a[0].favorite:null)),n(ve(!0)),s(""),v(""),N("")},className:"btn-item btn-ok"},i.a.createElement("img",{src:We.a,alt:"btn-icon"})),i.a.createElement("div",{className:"btn-item btn-close",onClick:function(){return n(ve(!1))}},i.a.createElement("img",{src:be.a,alt:"btn-icon"})))))))):i.a.createElement("div",{className:"new-wl-box"},i.a.createElement("div",{className:"new-wl-wrap"},i.a.createElement("div",{className:"app"},i.a.createElement("div",{className:"time"}),i.a.createElement("div",{className:"row"})),i.a.createElement("div",{className:"new-wl__title"},i.a.createElement("span",null,"New worklog")),i.a.createElement("div",{className:"new-wl"},i.a.createElement("div",{className:"new-wl-content"},i.a.createElement("div",{className:"progress-time"},i.a.createElement("div",{className:"slidecontainer"})),i.a.createElement("div",{className:"new-wl-form"},i.a.createElement("div",{className:"new-wl-form-item"},i.a.createElement("span",{className:"new-wl-form__title"},"New worklog name"),i.a.createElement("input",{value:o,onChange:function(e){return s(e.target.value)},type:"text",placeholder:"enter the issue name",className:"new-wl-input new-wl-input__issue"})),i.a.createElement("div",{className:"new-wl-form-item"},i.a.createElement("span",{className:"new-wl-form__title"},"Issue"),i.a.createElement("input",{type:"text",value:u,onChange:function(e){return v(e.target.value)},placeholder:"enter the worklog name",className:"new-wl-input new-wl-input__name"})),i.a.createElement("div",{className:"new-wl-form-item"},i.a.createElement("input",{type:"text",value:f,placeholder:"\u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u043c\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u043b\u044f \u044d\u0442\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0438",onChange:function(e){return N(e.target.value)},className:"new-wl-input new-wl-input__name"}))),i.a.createElement("div",{className:"btn-block"},i.a.createElement("div",{onClick:function(e){e.preventDefault(),n(se(o,u,f,h,y)),n(ve(!0)),s(""),v(""),N("")},className:"btn-item btn-ok"},i.a.createElement("img",{src:We.a,alt:"btn-icon"})),i.a.createElement("div",{className:"btn-item btn-close",onClick:function(){return n(ve(!1))}},i.a.createElement("img",{src:be.a,alt:"btn-icon"})))))))})),Te=(a(170),a(171),function(e){var t=e.timeStart,a=e.timeStop,n=e.exist,r=64/60/60*(a-t),l={isEmpty:{backgroundColor:"#fff",width:"".concat(r,"px")},default:{backgroundColor:"#f8e5f7",width:"".concat(r,"px")}};return i.a.createElement("div",{className:"time-min",style:n?l.isEmpty:l.default})}),Ie=(a(172),function(e){e.item;var t=e.timeStart,a=e.timeStop,n=64/60/60*(a-t),r={isEmpty:{backgroundColor:"#fff",width:"".concat(n,"px")},default:{width:"".concat(n,"px")}};return i.a.createElement("div",{style:r.default,className:"EmptyTimeline"})}),Me=Object(o.b)((function(e){return{timelineList:e.timelineList}}),null)((function(e){var t=e.day,a=e.worklogList[t];return a=function(e){for(var t=[],a=0;a<e.length;a++)if([a]<e.length){if([a]<1&&"28800"===e[a].timeStart&&t.push(e[a]),[a]<1&&"28800"!==e[a].timeStart){var n={timeStart:"28800",timeStop:e[a].timeStart,status:"\u043f\u0443\u0441\u0442\u043e"};t.push(n),t.push(e[a])}if([a]>0&&e[a].timeStart===e[a-1].timeStop&&t.push(e[a]),[a]>0&&e[a].timeStart!==e[a-1].timeStop){var r={timeStart:e[a-1].timeStop,timeStop:e[a].timeStart,status:"\u043f\u0443\u0441\u0442\u043e"};t.push(r),t.push(e[a])}}return t.sort((function(e,t){return e.timeStart<t.timeStart?-1:e.timeStart>t.timeStart?1:void 0})),t}(a),i.a.createElement("div",{className:"t-wrap"},i.a.createElement("div",{className:"timeline-w"},a.map((function(e){return"\u043f\u0443\u0441\u0442\u043e"===e.status?i.a.createElement(Ie,{item:e,timeStart:e.timeStart,timeStop:e.timeStop,key:Object(re.a)()}):i.a.createElement(Te,{id:e.id,key:Object(re.a)(),timeStart:e.timeStart,timeStop:e.timeStop,item:e})}))),i.a.createElement("div",{className:"times"},i.a.createElement("div",{className:"times-el"},"07:00"),i.a.createElement("div",{className:"times-el"},"08:00"),i.a.createElement("div",{className:"times-el"},"09:00"),i.a.createElement("div",{className:"times-el"},"10:00"),i.a.createElement("div",{className:"times-el"},"11:00"),i.a.createElement("div",{className:"times-el"},"12:00"),i.a.createElement("div",{className:"times-el"},"13:00"),i.a.createElement("div",{className:"times-el"},"14:00"),i.a.createElement("div",{className:"times-el"},"15:00"),i.a.createElement("div",{className:"times-el"},"16:00"),i.a.createElement("div",{className:"times-el"},"17:00"),i.a.createElement("div",{className:"times-el"},"18:00"),i.a.createElement("div",{className:"times-el"},"19:00"),i.a.createElement("div",{className:"times-el"},"20:00")))})),Fe=(a(173),function(e){var t=e.favorite,a=e.worklogList,n=e.onDelete,r=e.onEdit;return t?i.a.createElement("div",null,a.map((function(e,t){return i.a.createElement("div",{key:Object(re.a)()},i.a.createElement(ne,{id:e.id,worklog:e,onDelete:function(){return n(e.id)},onEdit:function(){return r(e.id)}}))}))):i.a.createElement("div",null,Object.keys(a).map((function(e,t){return i.a.createElement("div",{className:"wrap-list",key:t},i.a.createElement(he,{day:e}),i.a.createElement(ge,{day:e,worklogList:a}),i.a.createElement(Me,{day:e,worklogList:a}))})))}),xe=function(e){Object(Q.a)(a,e);var t=Object(K.a)(a);function a(){return Object(J.a)(this,a),t.apply(this,arguments)}return Object(Y.a)(a,[{key:"render",value:function(){var e=this.props,t=e.worklogList,a=e.loading,n=e.error,r=e.modal,l=e.onAddedToCart,c=e.onDelete,o=e.onEdit,s=e.onCopy,m=e.onDownload,d=e.onFavorite,u=e.showFavoriteList,v=e.favorites;return console.log("modal, in wl",r),a?i.a.createElement(je,null):n?i.a.createElement(Le,null):r.isOpen?i.a.createElement("div",null,i.a.createElement(Fe,{worklogList:t}),i.a.createElement(Re,null)):u?v.length<1?i.a.createElement("div",null,i.a.createElement("div",{className:"empty"},"There is no favorite issues yet"),i.a.createElement("div",{className:""},i.a.createElement("div",{className:"add"},i.a.createElement("img",{src:Ce.a,alt:"icon"})))):i.a.createElement("div",null,i.a.createElement(Fe,{worklogList:v,favorite:!0,onAddedToCart:l,onDelete:c,onEdit:o,onCopy:s,onDownload:m,onFavorite:d})):i.a.createElement("div",null,i.a.createElement(Oe,null),i.a.createElement(Fe,{worklogList:t,onAddedToCart:l,onDelete:c,onEdit:o,onCopy:s,onDownload:m,onFavorite:d}))}}]),a}(r.Component),He=Se(Object(o.b)((function(e){var t=e.worklogList,a=e.seconds,n=e.loading,r=e.error,i=e.showFavoriteList,l=e.favorites;return{worklogList:t,seconds:a,loading:n,error:r,modal:e.modal,showFavoriteList:i,favorites:l}}),(function(e){return{onAddedToCart:function(t){return e(ie(t))},onDelete:function(t,a){return e(ce(t,a))},onCopy:function(t,a,n){return e(oe(t,a,n))},onDownload:function(t){return e(me(t))},onFavorite:function(t,a){return e(de(t,a))},onEdit:function(t,a){return e(fe(t,a))}}})))(xe),Be=(a(174),a(175),function(){var e=new Date,t=Number(e.getMonth()+1),a=Object(r.useState)(!1),n=Object(V.a)(a,2),l=n[0],c=n[1],o={default:{display:"flex",flexDirection:"column"},isHide:{display:"none"}},s=[{month:"January",days:30},{month:"February",days:30},{month:"March",days:31},{month:"April",days:30},{month:"May",days:30},{month:"Juny",days:31},{month:"July",days:30},{month:"August",days:31},{month:"October",days:31},{month:"November",days:3},{month:"December",days:31}][t-2];return i.a.createElement("div",null,i.a.createElement("div",{className:"data-today",onClick:function(){return c(!l)}},i.a.createElement("span",{className:"data-today__item"},e.getDate()+" "+s.month)),i.a.createElement("div",{className:"calendar-wrap",style:l?o.default:o.isHide},i.a.createElement("div",{className:"calendar"},i.a.createElement("div",{className:"calendar-item"},"S"),i.a.createElement("div",{className:"calendar-item"},"M"),i.a.createElement("div",{className:"calendar-item"},"T"),i.a.createElement("div",{className:"calendar-item"},"W"),i.a.createElement("div",{className:"calendar-item"},"T"),i.a.createElement("div",{className:"calendar-item"},"F"),i.a.createElement("div",{className:"calendar-item"},"S"),i.a.createElement("div",{className:"calendar-item"},"29"),i.a.createElement("div",{className:"calendar-item"},"30"),i.a.createElement("div",{className:"calendar-item"},"31"),i.a.createElement("div",{className:"calendar-item"},"1"),i.a.createElement("div",{className:"calendar-item"},"2"),i.a.createElement("div",{className:"calendar-item"},"3"),i.a.createElement("div",{className:"calendar-item"},"4"),i.a.createElement("div",{className:"calendar-item"},"5"),i.a.createElement("div",{className:"calendar-item"},"6"),i.a.createElement("div",{className:"calendar-item"},"7"),i.a.createElement("div",{className:"calendar-item"},"8"),i.a.createElement("div",{className:"calendar-item"},"9"),i.a.createElement("div",{className:"calendar-item"},"10"),i.a.createElement("div",{className:"calendar-item"},"11"),i.a.createElement("div",{className:"calendar-item"},"12"),i.a.createElement("div",{className:"calendar-item"},"13"),i.a.createElement("div",{className:"calendar-item"},"14"),i.a.createElement("div",{className:"calendar-item"},"15"),i.a.createElement("div",{className:"calendar-item"},"16"),i.a.createElement("div",{className:"calendar-item"},"17"),i.a.createElement("div",{className:"calendar-item"},"18"),i.a.createElement("div",{className:"calendar-item"},"19"),i.a.createElement("div",{className:"calendar-item"},"20"),i.a.createElement("div",{className:"calendar-item"},"21"),i.a.createElement("div",{className:"calendar-item"},"22"),i.a.createElement("div",{className:"calendar-item"},"23"),i.a.createElement("div",{className:"calendar-item"},"24"),i.a.createElement("div",{className:"calendar-item"},"25"),i.a.createElement("div",{className:"calendar-item"},"26"),i.a.createElement("div",{className:"calendar-item"},"27"),i.a.createElement("div",{className:"calendar-item"},"28"),i.a.createElement("div",{className:"calendar-item"},"29"),i.a.createElement("div",{className:"calendar-item"},"30"),i.a.createElement("div",{className:"calendar-item"},"31"),i.a.createElement("div",{className:"calendar-item"},"1"))))}),Ue=Object(o.b)((function(e){return{showFavoriteList:e}}),(function(e){return{showFavoritesWorklogs:Object(W.bindActionCreators)(n,e).showFavoritesWorklogs}}))((function(e){var t=e.showFavoritesWorklogs;return i.a.createElement("div",{className:"content-top content-top__mg"},i.a.createElement(Be,null),i.a.createElement("div",{className:"filter"},i.a.createElement("div",{className:"filter-item filter-item__all",onClick:t},"All"),i.a.createElement("div",{className:"filter-item filter-item__fav",onClick:t},"Favorites")))})),Ge=(a(176),a(177),{onshowModal:ve,onStopWorklog:Ee,onStartTimerCounter:pe}),Je=Object(o.b)((function(e){return{items:e.activeWorklogs,timeCounter:e.timeCounter}}),Ge)((function(e){var t=e.items,a=e.onshowModal,n=e.onStopWorklog,l=e.onStartTimerCounter,c=Object(r.useState)("00"),o=Object(V.a)(c,2),s=o[0],m=o[1],d=Object(r.useState)("00"),u=Object(V.a)(d,2),v=u[0],E=u[1],p=Object(r.useState)("00"),f=Object(V.a)(p,2),N=f[0],A=f[1],g=Object(r.useState)(!0),w=Object(V.a)(g,2),b=w[0],O=w[1],k=Object(r.useState)("add"),y=Object(V.a)(k,2),h=(y[0],y[1]);s>59&&(E((function(e){return+ +e+1})),m((function(e){return"00"}))),v>59&&(A((function(e){return+e+1})),E((function(e){return"00"}))),Object(r.useEffect)((function(){var e=null;return!0===t.isStarting&&!0===b?e=setInterval((function(){m((function(e){return+e+1})),l(s)}),1e3):t.isStarting||0===s||(clearInterval(e),O((function(e){return!0}))),function(){return clearInterval(e)}}),[t,s,b,l]);return t.length<1?i.a.createElement("div",{className:"wl"},i.a.createElement("div",{className:"wl-top wl-pd"},i.a.createElement("span",{className:"wl-top-title"},"Time tracking"),i.a.createElement("div",{className:"btn-more"},i.a.createElement("div",{className:"btn-more-item"}),i.a.createElement("div",{className:"btn-more-item"}),i.a.createElement("div",{className:"btn-more-item"}))),i.a.createElement("div",{className:"wl-cart"},i.a.createElement("span",{className:"wl-cart-issue"},"NEW WORKLOG"),i.a.createElement("div",{className:"wl-cart-btns"},i.a.createElement("div",{className:"btn-add btn--hover",onClick:a},i.a.createElement("img",{src:Ce.a,alt:"image3"}))))):i.a.createElement("div",{className:"wl"},i.a.createElement("div",{className:"wl-top wl-pd"},i.a.createElement("span",{className:"wl-top-title"},"Time tracking"),i.a.createElement("div",{className:"btn-more"},i.a.createElement("div",{className:"btn-more-item"}),i.a.createElement("div",{className:"btn-more-item"}),i.a.createElement("div",{className:"btn-more-item"}))),i.a.createElement("div",{className:"wl-cart"},i.a.createElement("div",null),i.a.createElement("span",{className:"wl-cart-title"},t.title),i.a.createElement("span",{className:"wl-cart-issue"},t.info),i.a.createElement("div",{className:"app"},i.a.createElement("div",{className:"time"}),i.a.createElement("div",{className:"row"})),i.a.createElement("div",{className:"wl-card-timer"},N<10&&0!=N?"0"+N:N,":",v<10&&0!=v?"0"+v:v,":",s<10&&0!=s?"0"+s:s),i.a.createElement("div",{className:"wl-cart-btns"}," "," ",i.a.createElement("div",{onClick:function(){O((function(e){return!1})),m("00"),a(),n(),h("edit")},className:"btn btn-stop btn--hover"}),i.a.createElement("div",{onClick:function(){return O((function(e){return!e}))},className:"btn btn-pause btn--hover"}))))})),Ye=function(){return i.a.createElement("div",null,i.a.createElement(G,null),i.a.createElement("div",{className:"content-wrap content-wrap__mg"},i.a.createElement("div",{className:"main-content"},i.a.createElement(Ue,null),i.a.createElement(He,null)),i.a.createElement(Je,null)))},Qe=function(){return i.a.createElement("div",null,"Cart Page")},Ke=(a(178),function(){return i.a.createElement("main",null,i.a.createElement(I.c,null,i.a.createElement(I.a,{path:"/",component:Ye,exact:!0}),i.a.createElement(I.a,{path:"/cart",component:Qe})))}),Ve=function(e){Object(Q.a)(a,e);var t=Object(K.a)(a);function a(){var e;Object(J.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e}return Object(Y.a)(a,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?i.a.createElement(Le,null):this.props.children}}]),a}(r.Component);c.a.render(i.a.createElement(o.a,{store:T},i.a.createElement(Ve,null,i.a.createElement(s.a,null,i.a.createElement(Ke,null)))),document.getElementById("root"))},23:function(e,t,a){e.exports=a.p+"static/media/x.138d4892.svg"},35:function(e,t,a){e.exports=a.p+"static/media/plus.079d28e6.svg"},53:function(e,t,a){e.exports=a.p+"static/media/Vector (Stroke).2786ee48.svg"},76:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgBrVTtEcFAEL0z/lMCHdABHeiADuhAOqADOqADOogOooNQwdrHxnB27zKJN7PJJPf23e3HrXMRENGefnFyTcHOpSJY1HXuw4JvC188S7CQE+3YJggtIoi1GdtWfE6h2ILaYw4tL0fO2QauHW5swy4/lgkxEM9s2Hgkbw34v4Kgj4hd2Kbee4giNQN+HUTYEn0SMyUnpQh8gV7V19opC4lhE5sNzGuHgHus1jofvF7gd3c2wjyW4Y5rI+SfAiANpIe8rggbspF/5lHyl0f4WTcRGqoJAVQblZ44u22eqBq7SBFr4Mo2dhLK367eG/S68Eg2LvyM0sMBA2QvPvpIo4bji6wRpmxQKGJlzKeT0Lwq/44xhwdmDI3mU9BOqAAAAABJRU5ErkJggg=="},77:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADjSURBVHgBrZWBDYIwEEWvhAEYASYgbqATyAbiBLoBbACbMIMTyAbFCXSD835sYiRID+hLrk3bn3/NtWmJJmDmROIi0UlY/nJ3cyfSIuJC4sl+rNdYBA0vp/pnVvF6mrFZydsp4GWcoZUunanGy/WJR5NF2J3HDOwkDh4NkpWxNEfykyuSgn2sFF5JR06KYqO+0KUKLUcUGBgOFI4ehj2F4wHDm0+F+pHu8DojYtwfFD6hbQzGmCySBjf8TNupf0ay05bXU0+mwAIvp6U5+PPyWIURHuGCtDjj8Rdg3Ry+h8lDfAMBSjXhLmVSngAAAABJRU5ErkJggg=="},78:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADBSURBVHgB5ZTREYIwDIZTzwEcoW7gCLqBI7gJbOAMbiATOALdgG4AG9S/WO7qQ5uU6xN8d6E5Gv4kTQ9yzg2unCslOMA0laNzglXZuCCGc6oqCHqI9rHwUfDRBHuFdcGE1b9vYB+I3pRSEzH3bYDpXDbstyF2rpSrsENWi8An/DsTe/GVSs9QkRSm5VHQchO3rLzH5LSwjv6H8sZRGC8Gv6XfkERDSfEI1Y1uxbXJcfaPubIagrHQwk7/NpbKMamNLzpOB+hebhOKAAAAAElFTkSuQmCC"},79:function(e,t,a){e.exports=a.p+"static/media/play.a2f51fff.svg"},80:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADZSURBVHgB1ZNBDoIwEEWnQw/AEfAGuCC6lBiMS4/gDbySN8ClkZiy1LjxBnIE1ko7ttEQWEBRDIlvNen8/PxJZwCGIoiEH0QH36ZDmwkjJZAcYTNjNhMtcN9PuWIyvCSLK3RNNF0KD0HFFRODi+DEptcpkRGSVAIIvIYZMuZgeNqHWXuiu5oBkRZRSnqcepNS02MP6VsTVZlEx1uZTCc5J/NRk7b11z7h34yIZWWtIIUhYK8NLlbQA+R8y80G69KDHlChNkhUO4MvnSDnWOBY8WINPSDJd/ArniFsUHUa5HNYAAAAAElFTkSuQmCC"},82:function(e,t,a){e.exports=a(180)}},[[82,1,2]]]);
//# sourceMappingURL=main.15cdcc07.chunk.js.map