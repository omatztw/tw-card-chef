var Graph=function(t){var r=function(t){var r,n=[];for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(r);return n},n=function(t,r){return parseFloat(t)-parseFloat(r)},e=function(t,e,o,a){a=a||1/0;var i,u={},c={0:[e]},l={},p=function(t,r){var n=""+t;c[n]||(c[n]=[]),c[n].push(r)};for(u[e]=0;c&&(i=r(c)).length;){i.sort(n);var h=i[0],f=c[h],s=f.shift(),v=parseFloat(h),y=t[s]||{};for(var g in f.length||delete c[h],y)if(Object.prototype.hasOwnProperty.call(y,g)){var b=y[g]+v,d=u[g];(void 0===d||d>b)&&(u[g]=b,p(b,g),l[g]=s)}}return void 0===u[o]?null:l},o=function(t,r){for(var n=[],e=r;void 0!==e;)n.push(e),e=t[e];return n.reverse(),n},a=function(t,r){for(var n,a,i,u=r.shift(),c=[];r.length;){if(n=r.shift(),!(a=e(t,u,n)))return null;if(i=o(a,n),!r.length)return c.concat(i);c.push.apply(c,i.slice(0,-1)),u=n}},i=function(t,r){try{return Array.prototype.slice.call(t,r)}catch(a){for(var n=[],e=r||0,o=t.length;e<o;++e)n.push(t[e]);return n}},u=function(t){this.map=t};return u.prototype.findShortestPath=function(t,r){return"[object Array]"===Object.prototype.toString.call(t)?a(this.map,t):a(this.map,2===arguments.length?[t,r]:i(arguments))},u.findShortestPath=function(t,r,n){return"[object Array]"===Object.prototype.toString.call(r)?a(t,r):a(t,3===arguments.length?[r,n]:i(arguments,1))},u}();