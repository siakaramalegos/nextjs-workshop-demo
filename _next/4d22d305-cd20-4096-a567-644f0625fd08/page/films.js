module.exports=__NEXT_REGISTER_PAGE("/films",function(){var e=webpackJsonp([2],{224:function(e,r,t){e.exports=t(225)},225:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:true});var n=t(24);var a=t.n(n);var u=t(1);var c=t.n(u);var i=t(110);var o=t.n(i);var l=t(70);var s=t(69);var p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e};function v(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,t){function n(a,u){try{var c=r[a](u);var i=c.value}catch(e){t(e);return}if(!c.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}return n("next")})}}var f=function e(r){var t=r.title,n=r.opening_crawl,a=r.episode_id,u=r.director,i=r.producer,o=r.release_date;var p=new Date(o);return c.a.createElement(l["a"],null,c.a.createElement(s["a"],null,c.a.createElement("h1",null,t,", Episode ",a),c.a.createElement("p",null,"Directed by ",u),c.a.createElement("p",null,"Produced by ",i),c.a.createElement("p",null,n),c.a.createElement("p",null,"Released ",p.toDateString())))};f.getInitialProps=function(){var e=v(a.a.mark(function e(r){var t=r.query;var n,u;return a.a.wrap(function e(r){while(1)switch(r.prev=r.next){case 0:r.next=2;return o()("https://swapi.co/api/films/"+t.id);case 2:n=r.sent;r.next=5;return n.json();case 5:u=r.sent;return r.abrupt("return",p({},u));case 7:case"end":return r.stop()}},e,this)}));return function(r){return e.apply(this,arguments)}}();r["default"]=f}},[224]);return{page:e.default}});