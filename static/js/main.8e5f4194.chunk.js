(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(10),i=n(3),s=n(1),c=n(0),r=Object(s.createContext)(),o=function(e){var t=e.children,n=Object(s.useState)("light"),a=Object(i.a)(n,2),o=a[0],l=a[1];Object(s.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");l(e.matches?"dark":"light"),e.addEventListener("change",(function(e){l(e.matches?"dark":"light")}))}),[]);return Object(c.jsx)(r.Provider,{value:[{themeName:o,toggleTheme:function(){var e="dark"===o?"light":"dark";localStorage.setItem("themeName",e),l(e)}}],children:t})},l="https://AbhinavTiruvee.github.io",h="AT",j="Abhinav Tiruveedhula",b="Software Developer",d="I am a Computer Science major currently enrolled at the University of Texas at Austin, driven by a strong passion for software development. With two previous internships completed, I am eagerly seeking an internship opportunity for the summer of 2024. If you have a role that aligns with my skill set, please get in touch with me.",u="https://drive.google.com/file/d/14-wHEKY9Ycu_M-iarIB8HMZLoNPiJjgn/view?usp=sharing",m={linkedin:"https://www.linkedin.com/in/abhinav-tiruveedhula/",github:"https://github.com/AbhinavTiruvee"},p=[{name:"LH Eats: Campus Dining Assistant",description:"Developed an app in a three person team that displays UT Austin dining hall menus",stack:["Swift","Python","SQL","AWS"],livePreview:"https://apps.apple.com/us/app/ut-dining/id6468611223"},{name:"Impact of Online Stock Recommendations",description:"Research report and presentation on validity of online stock recommendations before 2017",stack:["R","Python","Excel"],sourceCode:"https://github.com/AbhinavTiruvee/OnlineStockRecommendations",livePreview:"https://drive.google.com/file/d/1JookXmXfAVReXoR-X-JqSbEVscN8p-gT/view?usp=sharing"},{name:"Robot Learning Model to Play Ping Pong",description:"Developed a model that enables a Sawyer robot to autonomously play ping pong versus a human",stack:["Python","PyTorch","ROS"],sourceCode:"https://github.com/Bfolefack/FRIPingPong",livePreview:"https://drive.google.com/file/d/1kAI6itkNmM-1RVrLwQZjXwWHT1S-3EEK/view?usp=sharing"},{name:"Personal Portfolio Website",description:"Made a website that provides information about my software development background",stack:["HTML","CSS","JavaScript","React"],sourceCode:"https://github.com/AbhinavTiruvee/newportfolio",livePreview:"https://abhinavtiruvee.github.io/"},{name:"NFL Betting Guidance Program",description:"Developed a project that uses APIs and a web scraper to compute best NFL bets",stack:["Python"],sourceCode:"https://github.com/AbhinavTiruvee/NFLBetHelper"},{name:"Texas Luminescence Website",description:"Helped make a club website that provides useful information for members and visitors",stack:["HTML","CSS","JavaScript","WordPress"],livePreview:"https://texasluminescence.org/"},{name:"Valorant Statistics using APIs",description:"From a given Valorant player's username, advanced metrics are given using the Valorant API",stack:["Python"],sourceCode:"https://github.com/AbhinavTiruvee/ValorantStats"},{name:"Dots & Boxes using Networking",description:"Dots & Boxes game that two players can play across a network connection",stack:["Java"],sourceCode:"https://github.com/AbhinavTiruvee/DotsAndBoxes"},{name:"Connect 4 using Networking",description:"Connect 4 game that two players can play across a network connection",stack:["Java"],sourceCode:"https://github.com/AbhinavTiruvee/ConnectFour"}],v=[{name:"Tecmend",position:"Full Stack Intern",dates:"Jan 2023 - May 2023",description:"Utilized skills in Python and Django to add to three projects's backends over the course of the internship. Gained project-based experience in web applications, APIs, and databases.",stack:["Python","SQL","React","JavaScript"]},{name:"Springworks",position:"SWE Intern",dates:"May 2022 - August 2022",description:"Contributed to four machine learning projects, culminating in the creation of a OCR program. Gained valuable experience in project management and agile development methodologies.",stack:["Python","AWS","Docker","Postman"]},{name:"UT Austin Robot Manipulation Lab",position:"Research Assistant",dates:"January 2024 - Present",description:"Assisting in robotics projects in the Robot Learning Lab. Working on software that enables a Sawyer robot to autonomously play table tennis against a human opponent.",stack:["Python","ROS","PyTorch"]}],x=["Python","Java","C","Assembly","R","SQL","JavaScript","React","Django","Pytorch","ROS","Excel","AWS","Docker","Postman","Git"],O="abhinav.tiruveedhula@utexas.edu",f=n(17),g=n.n(f),k=n(15),N=n.n(k),_=n(19),w=n.n(_),y=n(18),P=n.n(y),S=(n(28),function(){var e=Object(s.useContext)(r),t=Object(i.a)(e,1)[0],n=t.themeName,a=t.toggleTheme,o=Object(s.useState)(!1),l=Object(i.a)(o,2),h=l[0],j=l[1],b=function(){return j(!h)};return Object(c.jsxs)("nav",{className:"center nav",children:[Object(c.jsxs)("ul",{style:{display:h?"flex":null},className:"nav__list",children:[v.length?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#exps",onClick:b,className:"link link--nav",children:"Experience"})}):null,p.length?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#projects",onClick:b,className:"link link--nav",children:"Projects"})}):null,x.length?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#skills",onClick:b,className:"link link--nav",children:"Skills"})}):null,O?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#contact",onClick:b,className:"link link--nav",children:"Contact"})}):null]}),Object(c.jsx)("button",{type:"button",onClick:a,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(c.jsx)(N.a,{}):Object(c.jsx)(g.a,{})}),Object(c.jsx)("button",{type:"button",onClick:b,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:h?Object(c.jsx)(P.a,{}):Object(c.jsx)(w.a,{})})]})}),C=(n(32),function(){var e=l,t=h;return Object(c.jsxs)("header",{className:"header center",children:[Object(c.jsx)("h3",{children:e?Object(c.jsx)("a",{href:e,className:"link",children:t}):t}),Object(c.jsx)(S,{})]})}),A=n(8),T=n.n(A),R=n(20),L=n.n(R),E=(n(33),function(){var e=j,t=b,n=d,a=u,i=m;return Object(c.jsxs)("div",{className:"about center",children:[e&&Object(c.jsx)("h1",{children:Object(c.jsx)("span",{className:"about__name",children:e})}),t&&Object(c.jsx)("h2",{className:"about__role",children:t}),Object(c.jsx)("p",{className:"about__desc",children:n&&n}),Object(c.jsxs)("div",{className:"about__contact center",children:[a&&Object(c.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:Object(c.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),i&&Object(c.jsxs)(c.Fragment,{children:[i.github&&Object(c.jsx)("a",{href:i.github,target:"_blank",rel:"noopener noreferrer","aria-label":"github",className:"link link--icon",children:Object(c.jsx)(T.a,{})}),i.linkedin&&Object(c.jsx)("a",{href:i.linkedin,target:"_blank",rel:"noopener noreferrer","aria-label":"linkedin",className:"link link--icon",children:Object(c.jsx)(L.a,{})})]})]})]})}),I=n(4),J=n.n(I),D=n(12),M=n.n(D),W=(n(35),function(e){var t=e.project;return Object(c.jsxs)("div",{className:"project",children:[Object(c.jsx)("h3",{children:t.name}),Object(c.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(c.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(c.jsx)("li",{className:"project__stack-item",children:e},J()())}))}),t.sourceCode&&Object(c.jsx)("a",{href:t.sourceCode,target:"_blank",rel:"noopener noreferrer","aria-label":"source code",className:"link link--icon",children:Object(c.jsx)(T.a,{})}),t.livePreview&&Object(c.jsx)("a",{href:t.livePreview,target:"_blank",rel:"noopener noreferrer","aria-label":"live preview",className:"link link--icon",children:Object(c.jsx)(M.a,{})})]})}),B=(n(36),function(){return p.length?Object(c.jsxs)("section",{id:"projects",className:"section projects",children:[Object(c.jsx)("h2",{className:"section__title",children:"Projects"}),Object(c.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(c.jsx)(W,{project:e},J()())}))})]}):null}),F=(n(37),function(e){var t=e.exp;return Object(c.jsxs)("div",{className:"exp",children:[Object(c.jsx)("h3",{children:t.name}),Object(c.jsx)("h4",{children:t.position}),Object(c.jsx)("h6",{children:t.dates}),Object(c.jsx)("p",{className:"exp__description",children:t.description}),t.stack&&Object(c.jsx)("ul",{className:"exp__stack",children:t.stack.map((function(e){return Object(c.jsx)("li",{className:"exp__stack-item",children:e},J()())}))}),t.sourceCode&&Object(c.jsx)("a",{href:t.sourceCode,target:"_blank",rel:"noopener noreferrer","aria-label":"source code",className:"link link--icon",children:Object(c.jsx)(T.a,{})}),t.livePreview&&Object(c.jsx)("a",{href:t.livePreview,target:"_blank",rel:"noopener noreferrer","aria-label":"live preview",className:"link link--icon",children:Object(c.jsx)(M.a,{})})]})}),H=(n(38),function(){return v.length?Object(c.jsxs)("section",{id:"exps",className:"section exps",children:[Object(c.jsx)("h2",{className:"section__title",children:"Experience"}),Object(c.jsx)("div",{className:"exps__grid",children:v.map((function(e){return Object(c.jsx)(F,{exp:e},J()())}))})]}):null}),V=(n(39),function(){return x.length?Object(c.jsxs)("section",{className:"section skills",id:"skills",children:[Object(c.jsx)("h2",{className:"section__title",children:"Skills"}),Object(c.jsx)("ul",{className:"skills__list",children:x.map((function(e){return Object(c.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},J()())}))})]}):null}),X=n(21),G=n.n(X),Q=(n(40),function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?a(!0):a(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(c.jsx)("div",{className:"scroll-top",children:Object(c.jsx)("a",{href:"#top",children:Object(c.jsx)(G.a,{fontSize:"large"})})}):null}),U=(n(41),function(){return O?Object(c.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(c.jsx)("h2",{className:"section__title",children:"Contact"}),Object(c.jsx)("a",{href:"mailto:".concat(O),children:Object(c.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),Y=(n(42),function(){return Object(c.jsx)("footer",{className:"footer",children:Object(c.jsx)("a",{href:"https://www.linkedin.com/in/abhinav-tiruveedhula/",target:"_blank",rel:"noopener noreferrer",className:"link footer__link",children:"Abhinav Tiruveedhula "})})}),z=(n(43),function(){var e=Object(s.useContext)(r),t=Object(i.a)(e,1)[0].themeName;return Object(c.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(c.jsx)(C,{}),Object(c.jsxs)("main",{children:[Object(c.jsx)(E,{}),Object(c.jsx)(H,{}),Object(c.jsx)(B,{}),Object(c.jsx)(V,{}),Object(c.jsx)(U,{})]}),Object(c.jsx)(Q,{}),Object(c.jsx)(Y,{})]})});n(44);Object(a.render)(Object(c.jsx)(o,{children:Object(c.jsx)(z,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.8e5f4194.chunk.js.map