({607:function(){var t=(this&&this.__spreadArrays||function(){for(var t=0,r=0,n=arguments.length;r<n;r++)t+=arguments[r].length;var e=Array(t),o=0;for(r=0;r<n;r++)for(var a=arguments[r],i=0,l=a.length;i<l;i++,o++)e[o]=a[i];return e})(new Array(10).fill("").map((function(t,r){return""+r})),new Array(26).fill("").map((function(t,r){return String.fromCodePoint(r+65)}))).sort((function(){return Math.random()>.5?1:-1}));function r(){var r=t.length,n=Math.floor(Math.random()*r);return t[n]}window.onload=function(){var t=document.querySelector("#canvas"),n=document.body,e=n.clientWidth,o=n.clientHeight;t.width=e,t.height=o;var a=t.getContext("2d"),i=t.width,l=t.height,f=-1,h=new Array(Math.floor(i/15)).fill(0).map((function(){return Math.floor(Math.random()*l)}));!function t(){0==(f=(f+1)%5)&&function(t){a.clearRect(0,0,i,l),a.save(),a.fillStyle="rgb(0,0,0)",a.fillRect(0,0,i,l),a.restore(),a.save(),a.fillStyle="rgb(0, 255, 0)",a.font="18px",a.textAlign="start",a.textBaseline="middle",a.restore();for(var n=7.5;n<i;n+=15)for(var e=0;e<l;e+=10)a.save(),t[Math.floor(n/15)]>=e?a.fillStyle="rgb(0,255,0)":a.fillStyle="rgb(0,0,0)",a.fillText(r(),n,e),a.restore()}(h=h.map((function(t){return t+10>l?Math.floor(Math.random()*l/4):t+10}))),window.requestAnimationFrame(t)}()}}})[607]();