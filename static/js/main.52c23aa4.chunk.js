(this["webpackJsonpmy-music-player"]=this["webpackJsonpmy-music-player"]||[]).push([[0],{18:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),r=c(12),o=c.n(r),i=c(4),s=c.n(i),l=c(7),u=c(3),d=c(6),b=(c(18),c(8)),p=c(5),h=c(0),j=function(e){var t=e.isPlaying,c=e.setIsPlaying,n=e.currentSong,a=e.setCurrentSong,r=e.songInfo,o=e.setSongInfo,i=e.audioRef,d=e.songs,j=e.setSongs,m=function(){var e=Object(l.a)(s.a.mark((function e(c){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=d.findIndex((function(e){return e.id===n.id})),"skip-back"!==c){e.next=8;break}return r-1===-1&&(r+=d.length),e.next=5,a(d[r-1]);case 5:f(d[r-1]),e.next=11;break;case 8:return e.next=10,a(d[(r+1)%d.length]);case 10:f(d[(r+1)%d.length]);case 11:t&&i.current.play();case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=d.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{active:!0}):Object(u.a)(Object(u.a)({},t),{},{active:!1})}));j(t)},g=function(e){return("0"+Math.floor(e/60)).slice(-2)+":"+("0"+Math.floor(e%60)).slice(-2)};return Object(h.jsxs)("div",{className:"player",children:[Object(h.jsxs)("div",{className:"time-container",children:[Object(h.jsx)("p",{children:g(r.currentTime)}),Object(h.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(n.color[0],", ").concat(n.color[1],")")},className:"track",children:[Object(h.jsx)("input",{min:0,max:r.duration||0,value:r.currentTime,onChange:function(e){i.current.currentTime=e.target.value,o(Object(u.a)(Object(u.a)({},r),{},{currentTime:e.target.value}))},type:"range"}),Object(h.jsx)("div",{className:"animate-track",style:{transform:"translateX(".concat(r.animationPercentage,"%)")}})]}),Object(h.jsx)("p",{children:r.duration?g(r.duration):"00:00"})]}),Object(h.jsxs)("div",{className:"play-control",children:[Object(h.jsx)(b.a,{onClick:function(){return m("skip-back")},className:"skip-back",size:"2x",icon:p.a}),Object(h.jsx)(b.a,{onClick:function(){t?i.current.pause():i.current.play(),c(!t)},className:"play",size:"2x",icon:t?p.d:p.e}),Object(h.jsx)(b.a,{onClick:function(){return m("skip-forward")},className:"skip-forward",size:"2x",icon:p.b})]})]})},m=function(e){var t=e.currentSong;return Object(h.jsxs)("div",{className:"song",children:[Object(h.jsx)("img",{src:t.cover,alt:t.name+" : Image could'nt be loaded"}),Object(h.jsx)("h2",{children:t.name}),Object(h.jsx)("h3",{children:t.artist})]})},f=c(27);var g=function(){return[{name:"Melodiya",cover:"https://chillhop.com/wp-content/uploads/2021/03/75adfe0661d06a9ea66d9c2e99b31e92ae450ebe-1024x1024.jpg",artist:"Psalm Trees, FloFilz",audio:"https://mp3.chillhop.com/serve.php/?mp3=16060",color:["#FBB438","#EC4933"],id:Object(f.a)(),active:!1},{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(f.a)(),active:!1},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(f.a)(),active:!0},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(f.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(f.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(f.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(f.a)(),active:!1}]};var y=function(e){var t=e.libraryStatus,c=e.setLibraryStatus,n=e.theme,a=e.setTheme,r=e.libraryPut;return Object(h.jsxs)("nav",{children:[Object(h.jsx)("h1",{onClick:function(){a("dark"===n?"light":"dark")},children:"Fudge"}),Object(h.jsxs)("button",{id:"libButton",onClick:function(){return c(!t)},children:[window.matchMedia("screen and (max-width: 768px)").matches?r:"Library",Object(h.jsx)(b.a,{id:"libSvg",icon:p.c})]})]})},v=function(e){var t=e.audioRef,c=e.song,n=e.setCurrentSong,a=e.songs,r=e.isPlaying,o=e.setSongs,i=function(){var e=Object(l.a)(s.a.mark((function e(){var i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(c);case 2:i=a.map((function(e){return e.id===c.id?Object(u.a)(Object(u.a)({},e),{},{active:!0}):Object(u.a)(Object(u.a)({},e),{},{active:!1})})),o(i),r&&t.current.play();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{onClick:i,className:"library-song ".concat(c.active?"selected":""),children:[Object(h.jsx)("img",{src:c.cover,alt:c.name+" : Image could'nt be loaded"}),Object(h.jsxs)("div",{className:"song-description",children:[Object(h.jsx)("h3",{children:c.name}),Object(h.jsx)("h4",{children:c.artist})]})]})},O=function(e){var t=e.audioRef,c=e.songs,n=e.setCurrentSong,a=e.isPlaying,r=e.setSongs,o=e.libraryStatus;return Object(h.jsxs)("div",{className:"library ".concat(o?"active-library":""),children:[Object(h.jsx)("h2",{children:"Library"}),Object(h.jsx)("div",{className:"library-songs",children:c.map((function(e){return Object(h.jsx)(v,{audioRef:t,isPlaying:a,songs:c,setSongs:r,setCurrentSong:n,song:e},e.id)}))})]})};function x(e,t,c,n){document.querySelector("body").style.background=e,document.querySelectorAll("svg").forEach((function(e){e.style.color=t})),document.querySelectorAll("h1").forEach((function(e){e.style.color=t})),document.querySelectorAll("h2").forEach((function(e){e.style.color=t})),document.querySelectorAll("h3").forEach((function(e){e.style.color=t})),document.querySelectorAll("h4").forEach((function(e){e.style.color=t})),document.querySelector(".animate-track").style.background=n;var a=document.getElementById("libButton");a.style.color=t,a.style.border="2px solid ".concat(t),a.onmouseover=function(){a.style.background=t,a.style.color=e,document.getElementById("libSvg").style.color=e},a.onmouseleave=function(){a.style.background="transparent",a.style.color=t,document.getElementById("libSvg").style.color=t},document.querySelector(".library").style.background=e,document.querySelector(".library").style.boxShadow=c,document.querySelector(".time-container").style.color=t}var S=function(){var e=Object(n.useState)("dark"),t=Object(d.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){"dark"===c?x("rgb(9,9,9)","white","5px 5px 130px rgb(0, 0, 0)","#3b3b3b"):x("white","rgb(65,65,65)","2px 2px 50px rgb(204, 204, 204)","rgb(204, 204, 204)")}),[c]);var r=Object(n.useRef)(null),o=Object(n.useState)(g()),i=Object(d.a)(o,2),b=i[0],p=i[1],f=Object(n.useState)(b[2]),v=Object(d.a)(f,2),S=v[0],k=v[1],w=Object(n.useState)(!1),C=Object(d.a)(w,2),E=C[0],P=C[1],I=Object(n.useState)({currentTime:0,duration:0,animationPercentage:0}),N=Object(d.a)(I,2),A=N[0],T=N[1],F=Object(n.useState)(!1),q=Object(d.a)(F,2),B=q[0],L=q[1],M=function(e){T(Object(u.a)(Object(u.a)({},A),{},{currentTime:e.target.currentTime,duration:e.target.duration,animationPercentage:(e.target.currentTime/e.target.duration*100).toFixed(3)}))},R=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=b.findIndex((function(e){return e.id===S.id})),e.next=3,k(b[(t+1)%b.length]);case 3:E&&r.current.play();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"App ".concat(B?"library-active":""),children:[Object(h.jsx)(y,{libraryStatus:B,setLibraryStatus:L,theme:c,setTheme:a,libraryPut:B?"":"Library"}),Object(h.jsx)(m,{currentSong:S}),Object(h.jsx)(j,{audioRef:r,setSongInfo:T,songInfo:A,isPlaying:E,setIsPlaying:P,currentSong:S,songs:b,setCurrentSong:k,setSongs:p}),Object(h.jsx)(O,{audioRef:r,isPlaying:E,songs:b,setSongs:p,setCurrentSong:k,libraryStatus:B}),Object(h.jsx)("audio",{onTimeUpdate:M,onLoadedMetadata:M,ref:r,src:S.audio,onEnded:R})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,28)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),r(e),o(e)}))};o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root")),k()}},[[25,1,2]]]);
//# sourceMappingURL=main.52c23aa4.chunk.js.map