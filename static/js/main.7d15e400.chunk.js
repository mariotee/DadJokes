(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(67)},29:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(14),s=a.n(r),i=(a(29),a(4)),c=a.n(i),l=a(15),u=a(16),h=a(17),d=a(22),p=a(18),m=a(23),f=a(19),g=a.n(f),k=a(20),b=a.n(k),w=a(21),v=a.n(w),x=["what","do","you","call","a","about","around","in","does","do","an","it","why","don't","the","because","then","they","they'd","they're","be","how","can","tell","has","had","many","take","to","or","did","kind","of","is","also","its","on","doesn't","you're","for","me","i","thought","it's","well","was","my","watched","watch","he's","got","goes","what's","with","without","have","hear","heard","his","that","takes","he","like","know","their","where","him","get","if","say","saw","from","her","says","she","what's","and","type","gave","all","difference","between","tried","went","asked","said","told","would","but","used","as","been","only","want","you'd","can't","out","are","aren't","this","never","knew","i've","always","wanted","when","were","no","am","going","called","there","yesterday","so","much","two","walk","into","just","won't","bar","bartender","back","we","trust","cause","go","didn't","man","alright","change","lightbulb","matter","other","day","days","who","that's","thanks","someone","something","one","really","very","make","made","makes","start","first","form","happen","happens","happened","ah","nah","need","will","cross","road","find","hungry","fired","put","broke","down","sudden","bad","job","factory","wear","them","group","somebody","from","asks","some","people","nice","don't","intently","chances","you'll","shouldn't","ate","now","i'm","feeling","learn","couldn't","pretty","sure","it's","at","not","there's"],y=function(e){return o.a.createElement("p",{style:{borderRadius:"8px",padding:"8px",fontSize:"24px",color:e.textColor,backgroundColor:e.backgroundColor+"99",boxShadow:"0 0 4px 0 ".concat(e.backgroundColor)}},e.text)},C=function(e){var t=e.hover?"0 0 4px 0 #f00":"0 0 4px 0 ".concat(e.backgroundColor),a={padding:"4px 8px",border:"none",borderRadius:"8px",color:e.hover?"maroon":e.textColor,backgroundColor:e.backgroundColor+"66",boxShadow:t};return o.a.createElement("button",{style:a,onClick:e.onClick,onMouseEnter:e.toggleHover,onMouseLeave:e.toggleHover},"next joke")},j=function(e){var t={borderRadius:"8px",padding:"8px",position:"absolute",right:"8px",bottom:"0",textAlign:"right",fontSize:"12px",color:e.textColor,backgroundColor:e.backgroundColor+"66",boxShadow:"0 0 4px 0 ".concat(e.backgroundColor)};return o.a.createElement("div",{style:t},"Photo By: ",o.a.createElement("a",{href:e.unsplashLink+"?utm_source=Dad%20Jokes&utm_medium=referral"},e.artistName),e.twitterUsername&&E(e.twitterUsername),e.instagramUsername&&R(e.instagramUsername))},E=function(e){return o.a.createElement("div",null,"Tweeter: ",o.a.createElement("a",{href:"https://twitter.com/".concat(e)},"@",e))},R=function(e){return o.a.createElement("div",null,"Instagram: ",o.a.createElement("a",{href:"https://instagram.com/".concat(e)},"@",e))},S=3e3,B=3,I=new b.a({applicationId:"7db31c8681a6ccbe7f7bae7ea5acb20bdfbd7b84bf323b78ac155f5a3ff34d95",callbackUrl:""}),U=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).fetchData=Object(l.a)(c.a.mark(function e(){var t,n,o,r,s,i,l,u,h,d,p;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.state.jokes.length<B)){e.next=38;break}return e.next=3,g.a.get("https://icanhazdadjoke.com",{headers:{Accept:"application/json"}});case 3:for(t=e.sent,n=String(t.data.joke),o=n.toLowerCase().replace(/[-.,!;:{}()?&"]/g,"").split(" "),r="",s=!0,i=!1,l=void 0,e.prev=10,u=o[Symbol.iterator]();!(s=(h=u.next()).done);s=!0)d=h.value,x.includes(d)||(r=r+d+" ");e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),i=!0,l=e.t0;case 18:e.prev=18,e.prev=19,s||null==u.return||u.return();case 21:if(e.prev=21,!i){e.next=24;break}throw l;case 24:return e.finish(21);case 25:return e.finish(18);case 26:return e.next=28,I.search.photos(r,1);case 28:if(200!==(p=e.sent).status){e.next=36;break}return e.next=32,p.json();case 32:p=(p=e.sent).results[0],e.next=37;break;case 36:p={urls:{raw:"https://images.unsplash.com/photo-1504151932400-72d4384f04b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"},links:{html:"https://unsplash.com/photos/EQlTyDZRx7U"},user:{name:"Picsea",links:{html:"https://unsplash.com/@picsea"}}};case 37:a.setState(function(e){var t=e.jokes;t.push(n);var a=e.pics;return a.push(p),{jokes:t,pics:a}});case 38:case"end":return e.stop()}},e,this,[[10,14,18,26],[19,,21,25]])})),a.toggleInterval=function(){null===a.intervalRef?a.intervalRef=window.setInterval(a.fetchData,S):window.clearInterval(a.intervalRef)},a.toggleHover=function(){a.setState(function(e){return{hoverRefreshButton:!e.hoverRefreshButton}})},a.clickNextJoke=function(){a.setState(function(e){var t=e.jokes;t.shift();var a=e.pics;return a.shift(),{jokes:t,pics:a}})},a.state={jokes:[],pics:[],hoverRefreshButton:!1},a.intervalRef=null,a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.toggleInterval(),this.fetchData(),window.onkeydown=function(t){"ArrowRight"===t.key&&e.clickNextJoke()}}},{key:"render",value:function(){var e=this.state,t=e.jokes,a=e.pics,n=e.hoverRefreshButton,r=a[0]||{},s=t[0]||"",i=r.color||"#ffffff",c=v()(i),l=(r.user&&r.user.links||"").html||"",u=(r.urls||"").raw||"",h=r.user||"",d=h.name||"",p=h.twitter_username||"",m=h.instagram_username||"";return o.a.createElement("div",{style:{height:"100%",textAlign:"center",padding:"128px 32px",backgroundImage:"url(".concat(u,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"}},o.a.createElement(y,{backgroundColor:i,textColor:c,text:s}),o.a.createElement(C,{backgroundColor:i,textColor:c,hover:n,toggleHover:this.toggleHover,onClick:this.clickNextJoke}),o.a.createElement(j,{backgroundColor:i,textColor:c,artistName:d,unsplashLink:l,twitterUsername:p,instagramUsername:m}))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,2,1]]]);