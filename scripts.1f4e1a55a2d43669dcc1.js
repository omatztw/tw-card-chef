var Graph=function(t){var r=function(t){var r,n=[];for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(r);return n},n=function(t,r){return parseFloat(t)-parseFloat(r)},e=function(e,o,a,u){u=u||1/0;var c,i={},l={0:[o]},p={},h=function(t,r){var n=""+t;l[n]||(l[n]=[]),l[n].push(r)};for(i[o]=0;l&&(c=r(l)).length;){c.sort(n);var f=c[0],s=l[f],y=s.shift(),v=parseFloat(f),g=e[y]||{};for(var b in s.length||delete l[f],g)if(Object.prototype.hasOwnProperty.call(g,b)){var j=g[b]+v,O=i[b];(O===t||O>j)&&(i[b]=j,h(j,b),p[b]=y)}}return i[a]===t?null:p},o=function(r,n){for(var e=[],o=n;o!==t;)e.push(o),o=r[o];return e.reverse(),e},a=function(t,r){for(var n,a,u,c=r.shift(),i=[];r.length;){if(n=r.shift(),!(a=e(t,c,n)))return null;if(u=o(a,n),!r.length)return i.concat(u);i.push.apply(i,u.slice(0,-1)),c=n}},u=function(t,r){try{return Array.prototype.slice.call(t,r)}catch(a){for(var n=[],e=r||0,o=t.length;e<o;++e)n.push(t[e]);return n}},c=function(t){this.map=t};return c.prototype.findShortestPath=function(t,r){return"[object Array]"===Object.prototype.toString.call(t)?a(this.map,t):a(this.map,2===arguments.length?[t,r]:u(arguments))},c.findShortestPath=function(t,r,n){return"[object Array]"===Object.prototype.toString.call(r)?a(t,r):a(t,3===arguments.length?[r,n]:u(arguments,1))},c}();