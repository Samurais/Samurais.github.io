webpackJsonp([62,60],[function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var o=a(388),r=n(o),i=a(387),s=n(i),u=a(379),c=n(u),l=a(380),v=n(l),f=a(383),p=n(f),d=a(382),h=n(d),g=a(381),m=n(g),y=a(384),x=n(y),_=a(385),b=n(_);r.default.use(s.default);var w=new s.default({hashbang:!1,history:!0,linkActiveClass:"active"});w.map({"/":{component:c.default,subRoutes:{"/home":{component:h.default},"/categories":{component:m.default},"/tags":{component:x.default},"/archives":{component:v.default},"/:category/:year/:month/:day/:title/":{component:p.default},"/:category/:year/:month/:day/":{component:p.default},"/videos":{component:b.default}}}}),w.redirect({"/":"/archives"}),w.start(r.default.extend({}),"#app")},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{show:!1}},methods:{toggle:function(){this.show=!this.show}}}},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t){var e={},a=!0,n=!1,o=void 0;try{for(var r,s=(0,i.default)(t);!(a=(r=s.next()).done);a=!0){var u=r.value;u.year in e||(e[u.year]=[]),e[u.year].push(u)}}catch(t){n=!0,o=t}finally{try{!a&&s.return&&s.return()}finally{if(n)throw o}}var c=[];for(var l in e)c.push([l,e[l]]);return c.sort(function(t,e){return parseInt(e[0])>parseInt(t[0])?1:-1}),c}Object.defineProperty(e,"__esModule",{value:!0});var r=a(10),i=n(r);e.default={data:function(){return{archives:[],yearSelected:""}},methods:{select:function(t){this.$router.go({path:"/archives",query:{year:t}})}},computed:{yearArchive:function(){var t=this,e=this.archives.find(function(e){return e[0]===t.yearSelected});return e?e[1]:[]}},route:{data:function(t){var e=t.to.query.year;a.e(0,function(n){var r=a(3),i=o(r);e||(e=i[0][0]),t.next({archives:i,yearSelected:e})})}}}},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t){var e={},a=!0,n=!1,o=void 0;try{for(var r,i=(0,u.default)(t);!(a=(r=i.next()).done);a=!0){var s=r.value;s.category in e||(e[s.category]=[]),e[s.category].push(s)}}catch(t){n=!0,o=t}finally{try{!a&&i.return&&i.return()}finally{if(n)throw o}}return e}Object.defineProperty(e,"__esModule",{value:!0});var r=a(18),i=n(r),s=a(10),u=n(s);e.default={data:function(){return{categories:[],categorySelected:""}},methods:{select:function(t){this.$router.go({path:"/categories",query:{category:t}})}},route:{data:function(t){var e=t.to.query.category;a.e(0,function(n){var r=a(3),s=o(r);e||(e=(0,i.default)(s)[0]),t.next({categories:s,categorySelected:e})})}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{posts:[]}},methods:{},ready:function(){}}},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a(370),r=n(o),i=a(386),s=n(i),u=new r.default.Renderer;u.heading=function(t,e){return"<h"+e+' class="ui dividing header">'+t+"</h"+e+">"},u.image=function(t,e,a){return'<img class="ui image" src="'+t+'" alt="'+a+'" >'},r.default.setOptions({renderer:u,gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,highlight:function(t,e){return a(134).highlightAuto(t,[e]).value}}),e.default={components:{Disqus:s.default},data:function(){return{content:"<h1>loading...</h1>",year:"",month:"",day:"",title:"",shortname:"chatbot-master-core"}},route:{data:function(t){var e=t.to.params.year,n=t.to.params.month,o=t.to.params.day,i=t.to.params.title,s=e+"-"+n+"-"+o+"-"+(i?String(i):"");a(389)("./"+s+".md")(function(a){t.next({content:(0,r.default)(a.rawContent),year:e,month:n,day:o,title:a.metaData.title})})}},watch:{title:function t(e,a){var t=document.getElementsByTagName("title")[0];t.textContent=e}}}},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t){var e={},a=!0,n=!1,o=void 0;try{for(var r,i=(0,u.default)(t);!(a=(r=i.next()).done);a=!0){var s=r.value,c=!0,l=!1,v=void 0;try{for(var f,p=(0,u.default)(s.tags);!(c=(f=p.next()).done);c=!0){var d=f.value;d in e||(e[d]=[]),e[d].push(s)}}catch(t){l=!0,v=t}finally{try{!c&&p.return&&p.return()}finally{if(l)throw v}}}}catch(t){n=!0,o=t}finally{try{!a&&i.return&&i.return()}finally{if(n)throw o}}return e}Object.defineProperty(e,"__esModule",{value:!0});var r=a(18),i=n(r),s=a(10),u=n(s);e.default={data:function(){return{tags:[],tagSelected:""}},methods:{select:function(t){this.$router.go({path:"/tags",query:{tag:t}})}},route:{data:function(t){var e=t.to.query.tag;a.e(0,function(n){var r=a(3),s=o(r);e||(e=(0,i.default)(s)[0]),t.next({tags:s,tagSelected:e})})}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{posts:[]}},methods:{},ready:function(){}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{shortname:{type:String,required:!0}},ready:function(){return window.DISQUS?void this.reset(window.DISQUS):void this.init()},methods:{reset:function(t){var e=this;t.reset({reload:!0,config:function(){this.page.identifier=e.$route.path||window.location.pathname,this.page.url=e.$el.baseURI}})},init:function(){var t=this,e=this;window.disqus_config=function(){this.page.url=e.$route.path||window.location.pathname,this.page.url=e.$el.baseURI},setTimeout(function(){var e=document,a=e.createElement("script");a.type="text/javascript",a.async=!0,a.setAttribute("id","embed-disqus"),a.setAttribute("data-timestamp",+new Date),a.src="//"+t.shortname+".disqus.com/embed.js",(e.head||e.body).appendChild(a)},0)}}}},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(59,function(t){n=a(311);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(58,function(t){n=a(312);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(57,function(t){n=a(313);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(56,function(t){n=a(314);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(55,function(t){n=a(315);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(54,function(t){n=a(316);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(53,function(t){n=a(317);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(52,function(t){n=a(318);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(51,function(t){n=a(319);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(50,function(t){n=a(320);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(49,function(t){n=a(321);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(48,function(t){n=a(322);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(47,function(t){n=a(323);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(46,function(t){n=a(324);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(45,function(t){n=a(325);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(44,function(t){n=a(326);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(43,function(t){n=a(327);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(42,function(t){n=a(328);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(41,function(t){n=a(329);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(40,function(t){n=a(330);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(39,function(t){n=a(331);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(38,function(t){n=a(332);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(37,function(t){n=a(333);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(36,function(t){n=a(334);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(35,function(t){n=a(335);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(34,function(t){n=a(336);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(33,function(t){n=a(337);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(32,function(t){n=a(338);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(31,function(t){n=a(339);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(30,function(t){n=a(340);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(29,function(t){n=a(341);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(28,function(t){n=a(342);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(27,function(t){n=a(343);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(26,function(t){n=a(344);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(25,function(t){n=a(345);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(24,function(t){n=a(346);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(23,function(t){n=a(347);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(22,function(t){n=a(348);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(21,function(t){n=a(349);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(20,function(t){n=a(350);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(19,function(t){n=a(351);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(18,function(t){n=a(352);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(17,function(t){n=a(353);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(16,function(t){n=a(354);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(15,function(t){n=a(355);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(14,function(t){n=a(356);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(13,function(t){n=a(357);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(12,function(t){n=a(358);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(11,function(t){n=a(359);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(10,function(t){n=a(360);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(9,function(t){n=a(361);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(8,function(t){n=a(362);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(7,function(t){n=a(363);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(6,function(t){n=a(364);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(5,function(t){n=a(365);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(4,function(t){n=a(366);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(3,function(t){n=a(367);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(2,function(t){n=a(368);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},function(t,e,a){var n,o=[];t.exports=function(t){o?o.push(t):t(n)},a.e(1,function(t){n=a(369);var e=o;o=null;for(var r=0,i=e.length;r<i;r++)e[r](n)})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){t.exports=' <div class="ui container"> <div class="ui large secondary teal pointing menu" :class="{\'stackable\': show}"> <a class="toc item"> <i class="sidebar icon" @click=toggle></i> </a> <a class=item v-link="{path: \'/archives\'}">Archives</a> <a class=item v-link="{path: \'/categories\'}">Categories</a> <a class=item v-link="{path: \'/videos\'}">Videos</a> <a class=item v-link="{path: \'/tags\'}">Tags</a> <a class=item v-link="{path: \'/home\'}">Intro</a> <a class=item href=/atom.xml>RSS</a> <a class=item href=https://www.chatopera.com/ target=_blank>About us</a> </div> <router-view></router-view> <div class="ui center aligned segment"> <p> Copyright＠2019 <a href=https://www.chatopera.com/ >Chatopera Inc.</a> All rights reversed. </p> <p>Built with <a href=https://github.com/reverland/blog-next>blog-next</a>.</p> </div> </div> '},function(t,e){t.exports=" <div id=disqus_thread></div> "},function(t,e){t.exports=' <div class=tags _v-07812490=""> <template v-if=!$loadingRouteData> <h1 class="ui teal huge header" _v-07812490="">Chatopera Engineering</h1> <h2 class="ui grey small header" _v-07812490="">Chatbot Service for Enterprise.</h2> <div class="ui labels" _v-07812490=""> <a class="ui label" v-for="(tag, posts) of tags" :class="{\'teal\': tag == tagSelected}" @click=select(tag) _v-07812490="">{{ tag }} <span class=detail _v-07812490="">{{ posts.length }}</span></a> </div> <div class="ui cards" _v-07812490=""> <div class="ui card" v-for="post in tags[tagSelected]" _v-07812490=""> <div class=content _v-07812490=""> <a class=header v-link="{\n          path: \'/\' + post.category + \'/\' + post.year + \'/\' + post.month + \'/\' + post.day + \'/\' + (post._title ? post._title + \'/\' : \'\')\n        }" _v-07812490=""> {{post.title}} </a> <div class=meta _v-07812490=""> <span _v-07812490=""> {{ post.year }}-{{ post.month }}-{{ post.day }} </span> <i class="heartbeat icon" _v-07812490=""></i> <a v-link="{path: \'/categories\', query: { category: post.category } }" _v-07812490=""> {{ post.category }} </a> </div> <div class=description v-link="{\n          path: \'/\' + post.category + \'/\' + post.year + \'/\' + post.month + \'/\' + post.day + \'/\' + (post._title ? post._title + \'/\' : \'\')\n        }" _v-07812490=""> <span _v-07812490=""> {{ post.excerpt }} </span> </div> </div> <div class="extra content" _v-07812490=""> <a v-for="tag in post.tags" class="ui tag label" v-link="{path: \'/tags\', query: { tag: tag } }" _v-07812490=""> {{ tag }} </a> </div> </div> </div> </template> <div v-if=$loadingRouteData class="ui myloading segment" _v-07812490=""> <div class="ui active loader" _v-07812490=""></div> </div> </div> '},function(t,e){t.exports=' <div class=home _v-0bc05b7e=""> <div class="ui piled segments" _v-0bc05b7e=""> <div class="ui clearing segment" _v-0bc05b7e=""> <h1 class="ui teal huge header" _v-0bc05b7e="">Chatopera Engineering</h1> <div class="ui grey small right floated header" _v-0bc05b7e=""> <a href=https://zh.wikipedia.org/wiki/%E8%8E%B1%E7%89%B9%E5%85%84%E5%BC%9F _v-0bc05b7e=""> Chatbot Service for Enterprise.</a> </div> </div> <div class="ui centered card" _v-0bc05b7e=""> <div class=image _v-0bc05b7e=""> <img :src="\'https://unsplash.it/320/240?random&amp;\' + Math.random()" v-link="{path: \'archives\'}" _v-0bc05b7e=""> </div> <div class=content _v-0bc05b7e=""> <div class=meta _v-0bc05b7e=""> <span class=date _v-0bc05b7e=""> <i class="rocket icon" _v-0bc05b7e=""></i> Blog since Mar. 2017</span> </div> </div> </div> </div> </div> '},function(t,e){t.exports=' <div class="posts ui raised segments" _v-55da36bf=""> <template v-if=!$loadingRouteData> <div class="title ui ribbon label" _v-55da36bf=""> <h1 _v-55da36bf="">{{ title }}</h1> <div class=small _v-55da36bf=""><i class="history icon" _v-55da36bf=""></i>{{year}}-{{month}}-{{day}}</div> </div> <div class="ui segment" _v-55da36bf=""> {{{ content }}} </div> <div class="ui segment" _v-55da36bf=""> <disqus :shortname=shortname _v-55da36bf=""></disqus> </div> </template> <div v-if=$loadingRouteData class="load ui segment" _v-55da36bf=""> <div class="ui active loader" _v-55da36bf=""></div> </div> </div> '},function(t,e){t.exports=' <div class=videos _v-71919092=""> <h1 class="ui teal huge header" _v-71919092="">Chatopera Engineering</h1> <h2 class="ui grey small header" _v-71919092="">Chatbot Service for Enterprise.</h2> <div class="ui cards" _v-71919092=""> <div class="ui card" _v-71919092=""> <h4 _v-71919092="">SuperScript: A dialog system and bot engine</h4> <iframe class=social-videos frameborder=0 height=249 src="https://v.qq.com/iframe/player.html?vid=u0392y7e4xo&amp;tiny=0&amp;auto=0" allowfullscreen="" _v-71919092=""></iframe> <p _v-71919092=""><a href=http://www.leiphone.com/news/201704/JvBW78wfyvcfB4xW.html target=_blank _v-71919092="">@Leiphone Talk</a> / Apr. 7, 2017</p> </div> <div class="ui card" _v-71919092=""> <h4 _v-71919092="">Get started with DeepLearning and TensorFlow</h4> <iframe class=social-videos frameborder=0 height=249 src="https://v.qq.com/iframe/player.html?vid=u0380c9l3qg&amp;tiny=0&amp;auto=0" allowfullscreen="" _v-71919092=""></iframe> <p _v-71919092=""><a href=https://github.com/rockq-org/chatbot-master-core target=_blank _v-71919092="">@Chatbot Master</a> / Feb. 26, 2017</p> </div> <div class="ui card" _v-71919092=""> <h4 _v-71919092="">Artificial Intelligence and Chatbot&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </h4> <iframe class=social-videos frameborder=0 width=280 height=249 src="http://v.qq.com/iframe/player.html?vid=v0318almc1k&amp;tiny=0&amp;auto=0" allowfullscreen="" _v-71919092=""></iframe> <p _v-71919092=""><a href=https://github.com/rockq-org/node-party target=_blank _v-71919092="">@NodeParty</a> / Jul. 23, 2016</p> </div> </div> </div> '},function(t,e){t.exports=' <div class=postsList _v-7380abe0=""> <template v-if=!$loadingRouteData> <h1 class="ui teal huge header" _v-7380abe0="">Chatopera Engineering</h1> <h2 class="ui grey small header" _v-7380abe0="">Chatbot Service for Enterprise.</h2> <div class="ui labels" _v-7380abe0=""> <a class="ui label" v-for="keyvalue of archives" :class="{\'teal\': keyvalue[0] == yearSelected}" @click=select(keyvalue[0]) _v-7380abe0="">{{ keyvalue[0] }} <span class=detail _v-7380abe0="">{{ keyvalue[1].length }}</span></a> </div> <div class="ui cards" _v-7380abe0=""> <div class="ui card" v-for="post in yearArchive" _v-7380abe0=""> <div class=content _v-7380abe0=""> <a class=header v-link="{\n          path: \'/\' + post.category + \'/\' + post.year + \'/\' + post.month + \'/\' + post.day + \'/\' + (post._title ? post._title + \'/\' : \'\')\n        }" _v-7380abe0=""> {{post.title}} </a> <div class=meta _v-7380abe0=""> <span _v-7380abe0=""> {{ post.year }}-{{ post.month }}-{{ post.day }} </span> <i class="heartbeat icon" _v-7380abe0=""></i> <a v-link="{path: \'/categories\', query: { category: post.category } }" _v-7380abe0=""> {{ post.category }} </a> </div> <div class=description v-link="{\n          path: \'/\' + post.category + \'/\' + post.year + \'/\' + post.month + \'/\' + post.day + \'/\' + (post._title ? post._title + \'/\' : \'\')\n        }" _v-7380abe0=""> <span _v-7380abe0=""> {{ post.excerpt }} </span> </div> </div> <div class="extra content" _v-7380abe0=""> <a v-for="tag in post.tags" class="ui tag label" v-link="{path: \'/tags\', query: { tag: tag } }" _v-7380abe0=""> {{ tag }} </a> </div> </div> </div> </template> <div v-if=$loadingRouteData class="ui myloading segment" _v-7380abe0=""> <div class="ui active loader" _v-7380abe0=""></div> </div> </div> '},function(t,e){t.exports=' <div class=categories _v-fa9a760a=""> <template v-if=!$loadingRouteData> <h1 class="ui teal huge header" _v-fa9a760a="">Chatopera Engineering</h1> <h2 class="ui grey small header" _v-fa9a760a="">Chatbot Service for Enterprise.</h2> <div class="ui labels" _v-fa9a760a=""> <a class="ui label" v-for="(category, posts) of categories" :class="{\'teal\': category == categorySelected}" @click=select(category) _v-fa9a760a="">{{ category }} <span class=detail _v-fa9a760a="">{{ posts.length }}</span></a> </div> <div class="ui cards" _v-fa9a760a=""> <div class="ui card" v-for="post in categories[categorySelected]" _v-fa9a760a=""> <div class=content _v-fa9a760a=""> <a class=header v-link="{\n          path: \'/\' + post.category + \'/\' + post.year + \'/\' + post.month + \'/\' + post.day + \'/\' + (post._title ? post._title + \'/\' : \'\')\n        }" _v-fa9a760a=""> {{post.title}} </a> <div class=meta _v-fa9a760a=""> <span _v-fa9a760a=""> {{ post.year }}-{{ post.month }}-{{ post.day }} </span> <i class="heartbeat icon" _v-fa9a760a=""></i> <a v-link="{path: \'/categories\', query: { category: post.category } }" _v-fa9a760a=""> {{ post.category }} </a> </div> <div class=description v-link="{\n          path: \'/\' + post.category + \'/\' + post.year + \'/\' + post.month + \'/\' + post.day + \'/\' + (post._title ? post._title + \'/\' : \'\')\n        }" _v-fa9a760a=""> <span _v-fa9a760a=""> {{ post.excerpt }} </span> </div> </div> <div class="extra content" _v-fa9a760a=""> <a v-for="tag in post.tags" class="ui tag label" v-link="{path: \'/tags\', query: { tag: tag} }" _v-fa9a760a=""> {{ tag }} </a> </div> </div> </div> </template> <div v-if=$loadingRouteData class="ui myloading segment" _v-fa9a760a=""> <div class="ui active loader" _v-fa9a760a=""></div> </div> </div> '},function(t,e,a){var n,o,r={};a(126),n=a(30),o=a(371),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default);var i="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(i.template=o),i.computed||(i.computed={}),Object.keys(r).forEach(function(t){var e=r[t];i.computed[t]=function(){return e}})},function(t,e,a){var n,o,r={};a(131),n=a(31),o=a(377),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default);var i="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(i.template=o),i.computed||(i.computed={}),Object.keys(r).forEach(function(t){var e=r[t];i.computed[t]=function(){return e}})},function(t,e,a){var n,o,r={};a(132),n=a(32),o=a(378),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default);var i="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(i.template=o),i.computed||(i.computed={}),Object.keys(r).forEach(function(t){var e=r[t];i.computed[t]=function(){return e}})},function(t,e,a){var n,o,r={};a(128),n=a(33),o=a(374),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default);var i="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(i.template=o),i.computed||(i.computed={}),Object.keys(r).forEach(function(t){var e=r[t];i.computed[t]=function(){return e}})},function(t,e,a){var n,o,r={};a(129),n=a(34),o=a(375),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default);var i="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(i.template=o),i.computed||(i.computed={}),Object.keys(r).forEach(function(t){var e=r[t];i.computed[t]=function(){return e}})},function(t,e,a){var n,o,r={};a(127),n=a(35),o=a(373),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default);var i="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(i.template=o),i.computed||(i.computed={}),Object.keys(r).forEach(function(t){var e=r[t];i.computed[t]=function(){return e}})},function(t,e,a){var n,o,r={};a(130),n=a(36),o=a(376),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default);var i="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(i.template=o),i.computed||(i.computed={}),Object.keys(r).forEach(function(t){var e=r[t];i.computed[t]=function(){return e}})},function(t,e,a){var n,o,r={};n=a(37),o=a(372),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default);var i="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(i.template=o),i.computed||(i.computed={}),Object.keys(r).forEach(function(t){var e=r[t];i.computed[t]=function(){return e}})},,,function(t,e,a){function n(t){return a(o(t))}function o(t){return r[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var r={"./2016-07-31-creative-facebook.md":38,"./2016-11-04-launch-linux-gpu-acc-machine-in-aws.md":39,"./2016-11-07-chatbot-based-on-ubuntu-dialogue-corpus.md":40,"./2016-11-27-ci-xiang-liang-word-embeddings-yu-xiang-guan-ying-yong.md":41,"./2016-11-28-use-stanford-word-segmenter-to-process-chinese-data.md":42,"./2016-11-29-how-to-use-tensorboard.md":43,"./2016-11-30-how-does-tf-app-run-work.md":44,"./2016-12-02-quickstart-tf-contrib-learn.md":45,"./2016-12-04-chatbot-trends.md":46,"./2016-12-07-distributed-tensorflow-example.md":47,"./2016-12-12-items-and-model-understanding-in-tensorflow.md":48,"./2016-12-17-chatbot-stops-here.md":49,"./2016-12-19-building-machine-learning-estimator-in-tensorflow.md":50,"./2016-12-23-rnn-lstm-and-sequence2sequence.md":51,"./2016-12-25-xian-xing-dai-shu-ji-chu.md":52,"./2017-01-01-approaching-a-chatbot-service-part-1.md":53,"./2017-01-02-approaching-a-chatbot-service-part-2-bot-engine.md":54,"./2017-01-23-guo-nei-ke-yong-mian-fei-yu-liao-ku.md":55,"./2017-01-29-kedaxunfei-nodejs-sdk.md":56,"./2017-02-07-approaching-a-chatbot-service-part-3-bot-model.md":57,"./2017-03-01-chatbot-age-is-coming.md":58,"./2017-03-02-1506.05869-A%20Neural%20Conversational%20Model.md":59,"./2017-03-03-1601.04589-Combining%20Markov%20Random%20Fields%20and%20Convolutional%20Neural%20Networks%20for%20Image%20Synthesis.md":60,"./2017-03-03-1701.06547-Adversarial%20Learning%20for%20Neural%20Dialogue%20Generation.md":61,"./2017-03-16-dont-stop-by-criticize.md":62,"./2017-04-28-chinese-pos-tagging.md":63,"./2017-05-04-seq2seq-att-beam-search.md":64,"./2017-05-05-nlp-dict.md":65,"./2017-05-08-seq2seq-beam-Search.md":66,"./2017-05-12-tts-service.md":67,"./2017-05-19-ss-wechaty.md":68,"./2017-06-14-cosine-similarity.md":69,"./2017-06-14-elasticsearch-query.md":70,"./2017-06-14-tf-idf.md":71,"./2017-06-14-trietree.md":72,"./2017-06-16-cpp-regex.md":73,"./2017-06-17-cpp-longest-common-string.md":74,"./2017-06-17-word2vec.md":75,"./2017-06-22-1705.10513-IRGAN:%20A%20Minimax%20Game%20for%20Unifying%20Generative%20and%20Discriminative%20Information%20Retrieve.md":76,"./2017-06-24-machine-learning-glossary.md":77,"./2017-06-24-practical-naive-bayes-classifier.md":78,"./2017-06-25-Deeplearning-for-natural-language-processing.md":79,"./2017-06-25-what-is-the-difference-between-slot-filling-in.md":80,"./2017-06-26-Markov-Chain.md":81,"./2017-06-26-freebase-introduction.md":82,"./2017-06-26-hmm-viterbi.md":83,"./2017-07-29-cosine-similarity-2.md":84,"./2017-07-31-hadoop-get-started.md":85,"./2017-08-01-numpy-interfaces.md":86,"./2017-08-03-maximum-likelihood-estimation.md":87,"./2017-08-03-numpy-interfaces-2.md":88,"./2017-08-09-insuranceqa-corpus-zh.md":89,"./2018-02-20-synonyms-1.md":90,"./2018-02-23-chatbot-trends.md":91,"./2018-03-03-fitting-hyper-params.md":92,"./2018-03-09-forward-arpaformat.md":93,"./2018-03-15-dependency-parser-CoNLL-format.md":94,"./2018-05-04-forward-arpaformat.md":95,"./2018-10-05-bot-emulator-get-started.md":96};n.keys=function(){return Object.keys(r)},n.resolve=o,t.exports=n,n.id=389}]);