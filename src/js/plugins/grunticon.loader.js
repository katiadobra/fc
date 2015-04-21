/*! grunt-grunticon Stylesheet Loader - v2.1.2 | https://github.com/filamentgroup/grunticon | (c) 2015 Scott Jehl, Filament Group, Inc. | MIT license. */
(function(e){function n(n,t,o,a){"use strict";var i=e.document.createElement("link"),r=t||e.document.getElementsByTagName("script")[0],d=e.document.styleSheets;return i.rel="stylesheet",i.href=n,i.media="only x",a&&(i.onload=a),r.parentNode.insertBefore(i,r),i.onloadcssdefined=function(e){for(var t,o=0;d.length>o;o++)d[o].href&&d[o].href.indexOf(n)>-1&&(t=!0);t?e():setTimeout(function(){i.onloadcssdefined(e)})},i.onloadcssdefined(function(){i.media=o||"all"}),i}function t(e,n){e.onload=function(){e.onload=null,n&&n.call(e)},"isApplicationInstalled"in navigator&&"onloadcssdefined"in e&&e.onloadcssdefined(n)}var o=function(a,i){"use strict";if(a&&3===a.length){var r=e.Image,d=!(!document.createElementNS||!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect||!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")||e.opera&&-1===navigator.userAgent.indexOf("Chrome")||-1!==navigator.userAgent.indexOf("Series40")),c=new r;c.onerror=function(){o.method="png",o.href=a[2],n(a[2])},c.onload=function(){var e=1===c.width&&1===c.height,r=a[e&&d?0:e?1:2];o.method=e&&d?"svg":e?"datapng":"png",o.href=r,t(n(r),i)},c.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",document.documentElement.className+=" grunticon"}};o.loadCSS=n,o.onloadCSS=t,e.grunticon=o})(this);(function(e,n){"use strict";var t=n.document,o="grunticon:",r=function(e){if(t.attachEvent?"complete"===t.readyState:"loading"!==t.readyState)e();else{var n=!1;t.addEventListener("readystatechange",function(){n||(n=!0,e())},!1)}},a=function(e){return n.document.querySelector('link[href$="'+e+'"]')},i=function(e){var n,t,r,a,i,c,d={};if(n=e.sheet,!n)return d;t=n.cssRules?n.cssRules:n.rules;for(var s=0;t.length>s;s++)r=t[s].cssText,a=o+t[s].selectorText,i=r.split(");")[0].match(/US\-ASCII\,([^"']+)/),i&&i[1]&&(c=decodeURIComponent(i[1]),d[a]=c);return d},c=function(e){var n,r,a;r="data-grunticon-embed";for(var i in e){a=i.slice(o.length);try{n=t.querySelectorAll(a+"["+r+"]")}catch(c){continue}if(n.length)for(var d=0;n.length>d;d++)n[d].innerHTML=e[i],n[d].style.backgroundImage="none",n[d].removeAttribute(r)}return n},d=function(n){"svg"===e.method&&r(function(){c(i(a(e.href))),"function"==typeof n&&n()})};e.embedIcons=c,e.getCSS=a,e.getIcons=i,e.ready=r,e.svgLoadedCallback=d,e.embedSVG=d})(grunticon,this);
