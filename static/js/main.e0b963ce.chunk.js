(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{101:function(e,t,a){},116:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(6),o=a.n(r),c=(a(101),a(10)),l=a(12),s=a(150),m=a(33),p=a(158),d=a(57),u=a(17),g=a(7),h=a(155),b=a(56),f=a(152),E=a(153),v=a(154),w=Object(s.a)((function(e){return{root:Object(l.a)({width:"100%",display:"flex",flexDirection:"column",color:"white",padding:e.spacing(2),backgroundColor:b.a[900]},e.breakpoints.up("sm"),{width:300,backgroundColor:"black"}),icon:{margin:e.spacing(.5,1)},btn:{margin:e.spacing(1),alignSelf:"center",backgroundColor:"white"},title:{color:b.a[300]}}})),y=function(){var e=w();return i.a.createElement("div",{className:e.root},i.a.createElement(d.a,{variant:"button",className:e.title},g.career),i.a.createElement("div",null,i.a.createElement(f.a,{className:e.icon}),i.a.createElement(d.a,{variant:"caption",className:e.title},g.email)),i.a.createElement("div",null,i.a.createElement(E.a,{className:e.icon}),i.a.createElement(d.a,{variant:"caption",className:e.title},g.education)),i.a.createElement("div",null,i.a.createElement(v.a,{className:e.icon}),i.a.createElement(d.a,{variant:"caption",className:e.title},g.location)),i.a.createElement("div",{className:e.btn},i.a.createElement(h.a,{href:g.resume},"Resume")))},j=a(4),k=a(91),O=a(157),x=a(66),S=a(69),N=a(156),A=a(87),C=a.n(A),I=a(86),D=a.n(I),R=a(85),T=a.n(R),z=(a(115),a(116),Object(s.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",paddingBottom:e.spacing(2)},title:{paddingBottom:e.spacing(1),fontWeight:600},details:Object(l.a)({padding:e.spacing(1,0)},e.breakpoints.down("xs"),{padding:e.spacing(0)}),tag:{color:"black",background:"white",border:"solid 2px rgb(201, 163, 143)",padding:e.spacing(.5,1),margin:e.spacing(1),marginLeft:e.spacing(0),display:"inline"},btn:{borderRadius:0,color:"white",background:"black",margin:e.spacing(1),"&:hover":{color:"inherit",background:"rgb(201, 163, 143)"}},tags:{display:"flex",flexWrap:"wrap",margin:e.spacing(0,1)},media:{height:"100%",maxWidth:350,padding:e.spacing(2),display:"flex",justifyContent:"center",alignItems:"center"}}}))),H=function(e){var t=e.video;return i.a.createElement("div",{className:"video-wrapper"},i.a.createElement("iframe",{width:"100%",title:"video",src:t,frameBorder:"0",allowFullScreen:!0}))},L=function(e){var t=e.project,a=Object(n.useState)(!0),r=Object(S.a)(a,2),o=r[0],c=r[1],l=Object(n.useState)(0),s=Object(S.a)(l,2),m=s[0],p=s[1],u=z(),g=t.media.map((function(e){var t=e.type,a=e.src;return"image"===t?{original:a,thumbnail:a}:{renderItem:function(){return i.a.createElement(H,{video:a})},embedUrl:a,thumbnail:"https://via.placeholder.com/150?text=VIDEO"}})),b=function(e){var t=e.value;return i.a.createElement("div",{className:u.tag},t)};return i.a.createElement("div",{className:u.root},i.a.createElement(N.a,{container:!0},i.a.createElement(N.a,{item:!0,xs:12,sm:8}," ",i.a.createElement("div",null,i.a.createElement(d.a,{className:u.title,variant:"h4"}," ",t.title),i.a.createElement(d.a,{variant:"body1"}," ",i.a.createElement("strong",null,t.description)),i.a.createElement("div",{className:u.details},i.a.createElement("ul",null,t.details.map((function(e,t){return i.a.createElement("li",{key:t},i.a.createElement(d.a,{variant:"body1"},e))})))),i.a.createElement("div",null,i.a.createElement(d.a,{variant:"caption"},"TECHNOLOGIES"),i.a.createElement("div",{className:u.tags},t.technologies.map((function(e,t){return i.a.createElement(b,{key:t,value:e})})))),i.a.createElement("div",null,i.a.createElement(h.a,{className:u.btn,href:t.repo},"Github Repo"),t.application&&i.a.createElement(h.a,{className:u.btn,href:t.application},"Open Application")))),i.a.createElement(N.a,{item:!0,xs:12,sm:4},i.a.createElement("div",{className:u.media},i.a.createElement(T.a,{renderFullscreenButton:function(e,t){var a=function(){return i.a.createElement("button",{type:"button",className:"image-gallery-icon image-gallery-fullscreen-button".concat(o?" active":""),onClick:e,"aria-label":"Open Fullscreen"},t?i.a.createElement(D.a,{fontSize:"large"}):i.a.createElement(C.a,{fontSize:"large"}))};if(o)return i.a.createElement(a,null)},startIndex:m,onThumbnailClick:function(e,a){console.log(a),"image"===t.media[a].type?c(!0):c(!1),p(a)},items:g,defaultImage:g[0],showThumbnails:!0,showNav:!1,lazyLoad:!0,showIndex:!1,showPlayButton:!1})))))},P=function(){return i.a.createElement(x.Timeline,null,g.projects.map((function(e,t){return i.a.createElement(n.Fragment,{key:t},i.a.createElement(x.TimelineEvent,{title:e.time,titleStyle:{color:"rgb(168, 92, 47)",fontSize:"1.2em"},bubbleStyle:{border:"solid 2px rgb(201, 163, 143)"},contentStyle:{backgroundColor:"transparent",boxShadow:"none"}},i.a.createElement(L,{project:e}),i.a.createElement(O.a,null)))})))},B=Object(s.a)((function(e){var t;return{root:(t={display:"flex",flexDirection:"column",padding:e.spacing(4)},Object(l.a)(t,e.breakpoints.down("xs"),{padding:e.spacing(2)}),Object(l.a)(t,"backgroundColor",b.a[100]),t),text:{paddingBottom:e.spacing(2)},description:{padding:e.spacing(.5),display:"flex",color:"white",backgroundColor:"black"}}})),W=function(){var e=B();return i.a.createElement("div",{className:e.root,id:"portfolio"},i.a.createElement(d.a,{className:e.text,variant:"h4"},"PORTFOLIO"),i.a.createElement("div",{className:e.description}," ",i.a.createElement(d.a,{variant:"body1",dangerouslySetInnerHTML:{__html:g.description}})),i.a.createElement(P,null))},_=Object(s.a)((function(e){return{root:{display:"flex",flexDirection:"column"},landing:{padding:e.spacing(2),paddingTop:e.spacing(10),height:"100vh",width:"100%",backgroundImage:"url(".concat(g.profilePic2,")"),backgroundSize:"cover",backgroundPosition:"center",position:"relative"},writer:{padding:e.spacing(.5),color:"white",backgroundColor:"black",display:"inline",fontSize:"1.5em"},content:{margin:e.spacing(2)},intro:{fontWeight:500,color:"white",textShadow:"1px 1px 1px rgb(0, 0, 0)",marginBottom:e.spacing(1)},mobile_info:{padding:e.spacing(4),display:"flex",justifyContent:"center",backgroundColor:b.a[300]},info:{position:"absolute",bottom:e.spacing(4),right:e.spacing(4)}}})),M=function(){var e,t=_(),a=Object(m.a)(),n=Object(p.a)(a.breakpoints.only("xs")),r=Object(u.c)((function(e){return e.layout.drawerSize})),o=Object(p.a)("(orientation: landscape) and (max-width: ".concat(r+900,"px)")),c=function(){var e=g.shortAboutMe.base,a=[];return g.shortAboutMe.loop.forEach((function(t){a.push(e,150,e+t,150)})),i.a.createElement(k.a,{steps:a,loop:1/0,className:t.writer})};return i.a.createElement("div",{className:t.root,id:"home"},i.a.createElement("div",{className:t.landing},i.a.createElement("div",{className:t.content},i.a.createElement(d.a,{className:t.intro,variant:"h3"},"I'm ",g.fullName,","),i.a.createElement(c,null))),i.a.createElement("div",{className:Object(j.default)((e={},Object(l.a)(e,t.mobile_info,n||o),Object(l.a)(e,t.info,!(n||o)),e))},i.a.createElement(y,null)),i.a.createElement(W,null))},G=a(25),F=a(164),J=a(159),U=a(160),X=a(161),Z=Object(s.a)((function(e){return{toolbar:{paddingRight:"0px"},iconButton:{color:"white"}}})),K=function(){var e=Object(u.b)(),t=Z();return i.a.createElement(J.a,{classes:{gutters:t.toolbar}},i.a.createElement(U.a,{"aria-label":"open drawer",edge:"start",className:t.iconButton,onClick:function(){return e({type:"TOGGLE_DRAWER"})}},i.a.createElement(X.a,null)))},Q=a(162),V=a(163),q=Object(s.a)((function(e){return{root:{display:"flex",margin:e.spacing(2)},icon:{margin:e.spacing(.5,1),color:"white"}}})),Y=function(){var e=q();return i.a.createElement("div",{className:e.root},i.a.createElement("a",{href:"mailto:"+g.email},i.a.createElement(f.a,{className:e.icon})),i.a.createElement("a",{href:"https://github.com/"+g.github},i.a.createElement(Q.a,{className:e.icon})),i.a.createElement("a",{href:"https://www.linkedin.com/in/"+g.linkedin},i.a.createElement(V.a,{className:e.icon})))},$=Object(s.a)((function(e){return{toolbar:{paddingLeft:"0px"}}})),ee=function(){var e=$();return i.a.createElement(J.a,{classes:{gutters:e.toolbar}},i.a.createElement(Y,null))},te=Object(s.a)((function(e){return{grow:{flexGrow:1},appBar:{backgroundColor:"black",display:"flex",flexDirection:"row",zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})}}})),ae=function(){var e=te();return i.a.createElement("div",null,i.a.createElement(F.a,{elevation:0,position:"fixed",className:e.appBar},i.a.createElement(K,null),i.a.createElement("div",{className:e.grow}),i.a.createElement(ee,null)))},ne=a(167),ie=a(166),re=a(88),oe=a(168),ce=a(165),le=Object(s.a)((function(e){return{active:{backgroundColor:b.a[300],"&:hover":{backgroundColor:b.a[400]}},icon:{padding:e.spacing(0,1)},listItem:{textAlign:"center"},link:{color:"inherit"},text:{fontSize:"1.3em",fontWeight:100,"&:hover":{textDecoration:"underline"},cursor:"pointer"}}})),se=function(e){var t=e.to,a=e.title,n=e.onClick,r=le(),o=i.a.createElement(oe.a,{className:r.listItem,onClick:n},i.a.createElement(ce.a,{primary:a,classes:{primary:r.text}}));return t?i.a.createElement(re.Link,{to:t,smooth:!0,duration:1e3,className:r.link},o):i.a.createElement(i.a.Fragment,null," ",o," ")},me=Object(s.a)((function(e){return{root:{height:"100%",display:"flex",flexDirection:"column"},img:{width:110,height:110,borderRadius:"50%"},mainNavLinks:{height:"30%",display:"flex",flexDirection:"column",justifyContent:"center"},profile:{display:"flex",flexDirection:"column",alignItems:"center"},title:{marginTop:e.spacing(2),fontWeight:700,lineHeight:"1em"},subtitle:{color:b.a[500]},contacts:{alignSelf:"center"},grow:{flexGrow:1}}})),pe=function(){var e=Object(m.a)(),t=me(),a=Object(p.a)(e.breakpoints.up("md")),n=Object(u.b)(),r=function(){a||n({type:"TOGGLE_DRAWER"})},o=function(e){var a=e.name,n=e.career;return i.a.createElement("div",{className:t.profile},i.a.createElement("img",{alt:"profile",className:t.img,src:g.profilePic1}),i.a.createElement(d.a,{variant:"h5",className:t.title},a),i.a.createElement(d.a,{variant:"button",className:Object(j.default)(t.subtitle)},n))};return i.a.createElement(ie.a,{className:t.root},i.a.createElement(o,{name:g.fullName,career:g.career}),i.a.createElement("div",{className:t.mainNavLinks},i.a.createElement(se,{to:"home",title:"Home",onClick:r})," ",i.a.createElement(se,{to:"portfolio",title:"Portfolio",onClick:r})),i.a.createElement("div",{className:t.grow}),i.a.createElement("div",{className:t.contacts},i.a.createElement(Y,null)))},de=Object(s.a)((function(e){return{drawer:{backgroundColor:"black",color:"white",width:300,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:300,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:{transition:e.transitions.create(["width","margin","visibility"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:0},navHead:Object(G.a)({},e.mixins.toolbar)}})),ue=function(){var e,t,a=Object(m.a)(),n=Object(p.a)(a.breakpoints.down("sm")),r=0!==Object(u.c)((function(e){return e.layout.drawerSize})),o=de();return i.a.createElement(ne.a,{variant:n?"temporary":"persistent",open:r,className:Object(j.default)(o.drawer,(e={},Object(l.a)(e,o.drawerOpen,r),Object(l.a)(e,o.drawerClose,!r),e)),classes:{paper:Object(j.default)(o.drawer,(t={},Object(l.a)(t,o.drawerOpen,r),Object(l.a)(t,o.drawerClose,!r),t))}},i.a.createElement("div",{className:o.navHead},n&&i.a.createElement(K,null)),i.a.createElement(pe,null))},ge=Object(s.a)((function(e){return{root:{display:"flex"},content:{flex:1,display:"flex",flexDirection:"column",minHeight:"100vh",overflow:"hidden"},toolbar:Object(G.a)({},e.mixins.toolbar)}})),he=function(e){var t=e.children,a=ge(),r=Object(m.a)(),o=Object(u.b)(),c=Object(p.a)(r.breakpoints.down("sm")),s=0!==Object(u.c)((function(e){return e.layout.drawerSize}));return Object(n.useEffect)((function(){null!==c&&o({type:"SET_DRAWER",payload:{drawerSize:c?0:300}})}),[c]),i.a.createElement("div",{className:a.root},c&&!s&&i.a.createElement(ae,null),i.a.createElement(ue,null),i.a.createElement("div",{className:a.content},i.a.createElement("div",{className:Object(j.default)(Object(l.a)({},a.toolbar,c))}),t))};var be=function(){return i.a.createElement("div",null,i.a.createElement(he,null,i.a.createElement(c.d,null,i.a.createElement(c.b,{exact:!0,path:"/",render:function(e){return i.a.createElement(M,e)}}),i.a.createElement(c.b,{render:function(){return i.a.createElement(c.a,{to:"/"})}}))))},fe=a(64),Ee=a(38),ve=a(29),we=a(89),ye={drawerSize:0},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_DRAWER":return Object(G.a)(Object(G.a)({},e),{},{drawerSize:0===e.drawerSize?300:0});case"SET_DRAWER":return Object(G.a)(Object(G.a)({},e),t.payload);default:return e}},ke=Object(ve.c)({layout:je}),Oe=a(90),xe=a.n(Oe),Se=(a(128),[we.a,xe.a]);var Ne=ve.a.apply(void 0,Object(Ee.a)(Se)),Ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ve.d,Ce=Object(ve.e)(ke,Ae(Ne));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(u.a,{store:Ce},i.a.createElement(fe.a,null,i.a.createElement(be,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e){e.exports=JSON.parse('{"profilePic1":"https://avatars0.githubusercontent.com/u/29187338?s=460&u=82a7f99ca32bdc071b2c28b7179c51a782cae270&v=4","profilePic2":"https://images.unsplash.com/photo-1587614297096-ae5dfdb05181?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80","fullName":"Samuel Fils","career":"Software Engineer","resume":"https://docs.google.com/document/d/1XSLMufzAiU8ePbKctS1uxjaukTt9SPMTGw6J_lLwzt4/edit","shortAboutMe":{"base":"a  software engineer specialized in ","loop":["back-end technologies.","front-end technologies."]},"education":"Computer Science, B.S.","location":"New York City","email":"smfils1@gmail.com","linkedin":"samuel-fils","github":"smfils1","description":" See my journey as a software engineer. I specialize in building web applications using technologies such as <strong>React.js</strong>, <strong>Spring Boot</strong>, <strong>Node.js</strong>, and <strong>AWS microservices</strong>. I\u2019ve been involved in multiple software projects which required proficiency in languages such as <strong>C#</strong>, <strong>JavaScript</strong>, and <strong>Java</strong>. Unless explicitly stated otherwise, <strong> all project back-end and front-end parts were completely done by me. </strong>","projects":[{"title":"YouTube Clone","description":"This is an implementation of Google\'s YouTube responsive UI/UX, and backend features as a Restful API using the MERN stack.","time":"2020","details":["Google login","Video uploading, streaming, commenting, and rating","Trending, recommended, and categorized videos"],"technologies":["MongoDB","Mongoose","Node.js","FFMPEG","Google Drive API","Google OAuth2","React.js","Redux","Material UI"],"media":[{"type":"image","src":"https://i.imgur.com/68MnqX6.jpg"},{"type":"image","src":"https://i.imgur.com/o38NoNI.jpg"}],"repo":"https://github.com/smfils1/youtube-clone","application":"https://smfils1-youtube-clone.herokuapp.com/"},{"title":"Granny\'s Sweets","description":"This is a web application for a restaurant that manages restaurant employees and customers. Customers can order dishes, deposit money, and review dishes and employees. Employees are chefs and delivery people who are managed by the manager/owner. As part of an agile team, I was involved in building the backend Restful API to meet usecases specified in our project specifications. I also helped in connecting the frontend with our backend.","time":"2020","details":["Customer and employee accounts","VIP customers","Automated censorship","Warning, ordering, and rating systems","Delivery job market"],"technologies":["Spring Boot","Spring Security","MySQL","Spring Data JPA","Json Web Tokens","React.js","Redux","Material UI","Bootstrap"],"media":[{"type":"image","src":"https://i.imgur.com/AAoHBHA.jpg"},{"type":"image","src":"https://i.imgur.com/6reZrfx.png"},{"type":"image","src":"https://i.imgur.com/aamFflc.png"},{"type":"image","src":"https://i.imgur.com/SWi5cZg.png"},{"type":"image","src":"https://i.imgur.com/ahihF41.png"},{"type":"image","src":"https://i.imgur.com/4zkIkwA.png"},{"type":"image","src":"https://i.imgur.com/tlg9AZ6.png"}],"repo":"https://github.com/syedsadman16/Online-Restaurant-Backend","application":"https://syedsadman16.github.io/Online-Restaurant-System-Frontend/"},{"title":"SoS","description":"SoS is an C# Unity FPS game. As project manager of an agile team, I was involved in building some game mechanics, controls, the entire beta website, and setting up CI/CD using Github Actions.","time":"2020","details":["A online web FPS survival game","Plug and play (keyboard or gamepad controls)"],"technologies":["C#","Unity3D","React.js","Bootstrap 4","Github Actions"],"media":[{"type":"image","src":"https://i.imgur.com/xJnyo8w.jpg"},{"type":"video","src":"https://www.youtube.com/embed/5rKN7FuBIOA"}],"repo":"https://github.com/smfils1/SoS","application":"https://smfils1.github.io/SoS-web/"},{"title":"Centrix","description":"Centrix is rhythmic bullet hell game highly inspired by the game called Soundodger+. As part of an agile team, I implemented beat detection, rhythmic visualizations, player movement, and controls.","time":"2020","details":["a PC rhythmic game","plug and play (keyboard or gamepad controls)"],"technologies":["C#","Unity2D"],"media":[{"type":"image","src":"https://i.imgur.com/L7nsnQz.png"},{"type":"image","src":"https://i.imgur.com/ZzmervP.png"},{"type":"video","src":"https://www.youtube.com/embed/11l-kFBESAw"}],"repo":"https://github.com/AbtahiChowdhury/Centrix","application":null},{"title":"Counter App","description":"A complex counter app. The main goal of this project was to implement an authentication system and show updates in realtime using Web Sockets across multiple users using the MERN stack.","time":"2020","details":["Google login","Email & password login","Forgot password","Realtime updates","History logs"],"technologies":["Socket.io","Sendgrid API","MongoDB","Mongoose","Node.js","Json Web Tokens","React.js","Redux","Formik"],"media":[{"type":"image","src":"https://i.imgur.com/Xs1rjTO.png"},{"type":"image","src":"https://i.imgur.com/zkaH3Id.png"},{"type":"image","src":"https://i.imgur.com/E2nKKDi.png"}],"repo":"https://github.com/smfils1/mern-boilerplate","application":"https://smfils1-mern-boilerplate.herokuapp.com/"},{"title":"HashTag HotLine","description":"HashTag Hotline is an online, location-based twitter communications application for NGO\'s in the Global South. As part of an agile team, I was involved in building the frontend & backend architecture and unit tests using AWS microservices like DynamoDB, Lambda, and Amplify.","time":"2019","details":["Dashboard filters reports through defined tags","Automated and non-automated twitter report responses","Live report feed & map view"],"technologies":["React.js","Node.js","Material UI","GraphQL","AWS Amplify","DynamoDB","AWS Lambda","AWS Cognito","Twitter API","Testing Library","Jest","Pupputeer"],"media":[{"type":"image","src":"https://github.com/Hongzred/HashTag_HotLine/raw/master/README_images/image-20191221002258455.png"},{"type":"image","src":"https://github.com/Hongzred/HashTag_HotLine/raw/master/README_images/image-20191221000649380.png"},{"type":"image","src":"https://github.com/Hongzred/HashTag_HotLine/raw/master/README_images/ezgif-1-12eed0724411.gif"},{"type":"image","src":"https://github.com/Hongzred/HashTag_HotLine/raw/master/README_images/image-20191220182526362.png"}],"repo":"https://github.com/Hongzred/HashTag_HotLine","application":"https://master.d2nb81n0vt6kb5.amplifyapp.com/"},{"title":"Weather App","description":"This is a server-side location based weather app using Node.js.","time":"2019","details":["Local weather reports","Weather search","Location autocomplete"],"technologies":["Bootstrap 4","EJS","Node.js","Express.js","Mapbox API","Darksky API","Algolia Places API"],"media":[{"type":"image","src":"https://i.imgur.com/pCo1ZIG.jpg"}],"repo":"https://github.com/smfils1/weather-app","application":"http://smfils1-weather-app.herokuapp.com/"}]}')},96:function(e,t,a){e.exports=a(129)}},[[96,1,2]]]);
//# sourceMappingURL=main.e0b963ce.chunk.js.map