// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}


/*
 * jQuery Anystretch
 * Version 1.1
 * https://github.com/danmillar/jquery-anystretch
 *
 * Add a dynamically-resized background image to the body
 * of a page or any other block level element within it
 *
 * Copyright (c) 2012 Dan Millar (@danmillar / decode.uk.com)
 * Dual licensed under the MIT and GPL licenses.
 *
 * This is a fork of jQuery Backstretch (v1.2)
 * Copyright (c) 2011 Scott Robbin (srobbin.com)
*/
;(function($){$.fn.anystretch=function(src,options,callback){var isBody=this.selector.length?false:true;return this.each(function(i){var defaultSettings={positionX:'center',positionY:'center',speed:0,elPosition:'relative'},el=$(this),container=isBody?$('.anystretch'):el.children(".anystretch"),settings=container.data("settings")||defaultSettings,existingSettings=container.data('settings'),imgRatio,bgImg,bgWidth,bgHeight,bgOffset,bgCSS;if(options&&typeof options=="object")$.extend(settings,options);if(options&&typeof options=="function")callback=options;$(document).ready(_init);return this;function _init(){if(src){var img;if(!isBody){el.css({position:settings.elPosition,background:"none"})}if(container.length==0){container=$("<div />").attr("class","anystretch").css({left:0,top:0,position:(isBody?"fixed":"absolute"),overflow:"hidden",zIndex:(isBody?-999999:-999998),margin:0,padding:0,height:"100%",width:"100%"})}else{container.find("img").addClass("deleteable")}img=$("<img />").css({position:"absolute",display:"none",margin:0,padding:0,border:"none",zIndex:-999999}).bind("load",function(e){var self=$(this),imgWidth,imgHeight;self.css({width:"auto",height:"auto"});imgWidth=this.width||$(e.target).width();imgHeight=this.height||$(e.target).height();imgRatio=imgWidth/imgHeight;_adjustBG(function(){self.fadeIn(settings.speed,function(){container.find('.deleteable').remove();if(typeof callback=="function")callback()})})}).appendTo(container);if(el.children(".anystretch").length==0){if(isBody){$('body').append(container)}else{el.append(container)}}container.data("settings",settings);img.attr("src",src);$(window).resize(_adjustBG)}}function _adjustBG(fn){try{bgCSS={left:0,top:0};bgWidth=_width();bgHeight=bgWidth/imgRatio;if(bgHeight>=_height()){bgOffset=(bgHeight-_height())/2;if(settings.positionY=='center'||settings.centeredY){$.extend(bgCSS,{top:"-"+bgOffset+"px"})}else if(settings.positionY=='bottom'){$.extend(bgCSS,{top:"auto",bottom:"0px"})}}else{bgHeight=_height();bgWidth=bgHeight*imgRatio;bgOffset=(bgWidth-_width())/2;if(settings.positionX=='center'||settings.centeredX){$.extend(bgCSS,{left:"-"+bgOffset+"px"})}else if(settings.positionX=='right'){$.extend(bgCSS,{left:"auto",right:"0px"})}}container.children("img:not(.deleteable)").width(bgWidth).height(bgHeight).filter("img").css(bgCSS)}catch(err){}if(typeof fn=="function")fn()}function _width(){return isBody?el.width():el.innerWidth()}function _height(){return isBody?el.height():el.innerHeight()}})};$.anystretch=function(src,options,callback){var el=("onorientationchange"in window)?$(document):$(window);el.anystretch(src,options,callback)}})(jQuery);

// Pinterest plugin
// https://github.com/skibblenybbles/PinterestPlus
(function(){function p(a){var k,a=a||document;if(a.getElementsByClassName){k=[];var a=a.getElementsByClassName(c.buttonClass),d,f,b;b=0;for(f=a.length;b<f;b+=1)d=a[b],d.nodeName.toLowerCase()=="a"&&k.push(d)}else if(a.getElementsByTagName){k=[];a=a.getElementsByTagName("a");d=c.buttonClassRx;var i;i=0;for(b=a.length;i<b;i+=1)f=a[i],d.test(f.getAttribute("class")||"")&&k.push(f)}else return null;a=k;k=[];var g,j,l,n,m,h,o,e;i=0;for(b=a.length;i<b;i+=1)if(g=a[i],d={element:g,valid:!1},k.push(d),j=g.getAttribute("href"),
f=g.getAttribute(c.attrs.layout)||"horizontal",g=g.getAttribute(c.attrs.count)||!1,j&&c.buttonHrefRx.test(j)&&c.layoutRx.test(f)){m={};l=j.split("?")[1].split("#")[0].split("&");e=0;for(j=l.length;e<j;e+=1)n=l[e].split("="),m[n[0]]=n[1];o=[];n=!0;l=c.params.required;e=0;for(j=l.length;e<j;e+=1)if(h=l[e],h in m)o.push(h+"="+m[h]);else{n=!1;break}try{if(n&&c.urlRx.test(decodeURIComponent(m.url))&&c.urlRx.test(decodeURIComponent(m.media))){l=c.params.optional;e=0;for(j=l.length;e<j;e+=1)h=l[e],h in m&&
o.push(h+"="+m[h]);g!==!1&&o.push("count=1");d.layout=f;d.query=o.join("&");d.valid=!0}}catch(p){}}h=[];g=0;for(i=k.length;g<i;g+=1)a=k[g],d=a.element,a.valid?(f=a.layout,b=document.createElement("iframe"),b.setAttribute("src",c.url+"?"+a.query),b.setAttribute("scrolling","no"),b.setAttribute("allowtransparency","true"),b.setAttribute("frameborder","0"),b.style.border="none",b.style.width=c.layout[f].width+"px",b.style.height=c.layout[f].height+"px",d.parentNode.replaceChild(b,d),h.push(b)):d.parentNode.removeChild(d);
return h}if(!window.PinterestPlus){window.___pincfg=window.___pincfg&&typeof window.___pincfg==="object"?window.___pincfg:{};var c={url:window.location.protocol==="https:"?"https://assets.pinterest.com/pinit.html":"http://pinit-cdn.pinterest.com/pinit.html",attrs:{layout:"count-layout",count:"always-show-count"},buttonHrefRx:/^http(s?):\/\/pinterest.com\/pin\/create\/button\/\?.+/,buttonClass:"pin-it-button",buttonClassRx:/(.*\s)?pin-it-button(\s.*)?/,urlRx:/^http(s?):\/\/.+/i,params:{required:["url",
"media"],optional:["title","description"]},layout:{none:{width:43,height:20},vertical:{width:43,height:58},horizontal:{width:90,height:20}},layoutRx:/^(none)|(vertical)|(horizontal)$/,parseTags:window.___pincfg.parsetags||"onload",onReady:window.___pincfg.onready||null};c.parseTags!=="explicit"&&p();window.PinterestPlus={pinit:p};if(c.onReady&&typeof c.onReady==="function")c.onReady()}})();


/*global jQuery */
/*jshint multistr:true browser:true */
/*!
* FitVids 1.0
*
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/

(function( $ ){

  "use strict";

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null
    };

    var div = document.createElement('div'),
        ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];

    div.className = 'fit-vids-style';
    div.innerHTML = '&shy;<style>         \
      .fluid-width-video-wrapper {        \
         width: 100%;                     \
         position: relative;              \
         padding: 0;                      \
      }                                   \
                                          \
      .fluid-width-video-wrapper iframe,  \
      .fluid-width-video-wrapper object,  \
      .fluid-width-video-wrapper embed {  \
         position: absolute;              \
         top: 0;                          \
         left: 0;                         \
         width: 100%;                     \
         height: 100%;                    \
      }                                   \
    </style>';

    ref.parentNode.insertBefore(div,ref);

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='www.youtube.com']",
        "iframe[src*='www.kickstarter.com']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var $allVideos = $(this).find(selectors.join(','));

      $allVideos.each(function(){
        var $this = $(this);
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
})( jQuery );


/* ImageMapster
   Version: see $.mapster.version

Copyright 2011-2012 James Treworgy
http://www.outsharked.com/imagemapster
https://github.com/jamietre/ImageMapster

A jQuery plugin to enhance image maps.

Versions 1.2.4.067+ include "when.js": http://github.com/cujos/when in the
distribution build.

*/
(function(a){a(function(){var i,p,u,w;x.defer=h;x.reject=r;x.isPromise=j;x.all=d;
x.some=v;x.any=e;x.map=k;x.reduce=o;x.chain=f;i=Object.freeze||function(y){return y;
};function n(){}n.prototype=i({always:function(y,z){return this.then(y,y,z);},otherwise:function(y){return this.then(w,y);
}});function t(z){var y=new n();y.then=function(A){var C;try{if(A){C=A(z);}return m(C===w?z:C);
}catch(B){return s(B);}};return i(y);}function s(z){var y=new n();y.then=function(A,C){var D;
try{if(C){D=C(z);return m(D===w?z:D);}return s(z);}catch(B){return s(B);}};return i(y);
}function r(y){return x(y,function(z){return s(z);});}function h(){var B,F,C,E,z,y,A;
C=[];E=[];z=function J(K,M,N){var L=h();C.push(function(O){O.then(K,M).then(L.resolve,L.reject,L.progress);
});N&&E.push(N);return L.promise;};function I(K,L,M){return z(K,L,M);}function H(K){A(t(K));
}function G(K){A(s(K));}y=function(M){var L,K=0;while(L=E[K++]){L(M);}};function D(K){y(K);
}A=function(L){var N,M=0;z=L.then;A=y=function K(){throw new Error("already completed");
};E=w;while(N=C[M++]){N(L);}C=[];};B={};F=new n();F.then=B.then=I;B.promise=i(F);
B.resolver=i({resolve:(B.resolve=H),reject:(B.reject=G),progress:(B.progress=D)});
return B;}function j(y){return y&&typeof y.then==="function";}function x(B,y,z,A){var C=m(B);
return C.then(y,z,A);}function m(A){var z,y;if(A instanceof n){z=A;}else{y=h();if(j(A)){A.then(y.resolve,y.reject,y.progress);
z=y.promise;}else{y.resolve(A);z=y.promise;}}return z;}function v(C,A,y,z,B){g(2,arguments);
return x(C,function(J){var Q,O,P,E,N,L,F,H,G;H=J.length>>>0;Q=Math.max(0,Math.min(A,H));
O=[];E=h();P=x(E,y,z,B);function M(R){N(R);}function K(R){L(R);}function I(R){F(R);
}function D(){N=L=F=l;}if(!Q){E.resolve(O);}else{N=function(R){O.push(R);if(!--Q){D();
E.resolve(O);}};L=function(R){D();E.reject(R);};F=E.progress;for(G=0;G<H;++G){if(G in J){x(J[G],M,K,I);
}}}return P;});}function d(B,y,z,A){g(1,arguments);return x(B,function(C){return c(C,q,[]);
}).then(y,z,A);}function q(y,A,z){y[z]=A;return y;}function e(B,y,z,A){function C(D){return y?y(D[0]):D[0];
}return v(B,1,C,z,A);}function k(z,y){return x(z,function(A){return b(A,y);});}function b(B,A){var C,z,y;
z=B.length>>>0;C=new Array(z);for(y=0;y<z;y++){if(y in B){C[y]=x(B[y],A);}}return c(C,q,C);
}function o(A,B,z){var y=u.call(arguments,1);return x(A,function(C){return c.apply(w,[C].concat(y));
});}function c(A,B,z){var C,y;C=A.length;y=[function(D,F,E){return x(D,function(G){return x(F,function(H){return B(G,H,E,C);
});});}];if(arguments.length>2){y.push(z);}return p.apply(A,y);}function f(y,z,A){var B=arguments.length>2;
return x(y,function(C){if(B){C=A;}z.resolve(C);return C;},function(C){z.reject(C);
return s(C);},z.progress);}function g(B,z){var y,A=z.length;while(A>B){y=z[--A];if(y!=null&&typeof y!="function"){throw new Error("callback is not a function");
}}}function l(){}u=[].slice;p=[].reduce||function(D){var z,y,C,B,A;A=0;z=Object(this);
B=z.length>>>0;y=arguments;if(y.length<=1){for(;;){if(A in z){C=z[A++];break;}if(++A>=B){throw new TypeError();
}}}else{C=y[1];}for(;A<B;++A){if(A in z){C=D(C,z[A],A,z);}}return C;};return x;});
})(typeof define=="function"?define:function(a){typeof module!="undefined"?(module.exports=a()):(jQuery.mapster_when=a());
});(function(a){a.fn.mapster=function(d){var c=a.mapster.impl;if(a.isFunction(c[d])){return c[d].apply(this,Array.prototype.slice.call(arguments,1));
}else{if(typeof d==="object"||!d){return c.bind.apply(this,arguments);}else{a.error("Method "+d+" does not exist on jQuery.mapster");
}}};a.mapster={version:"1.2.6",render_defaults:{isSelectable:true,isDeselectable:true,fade:false,fadeDuration:150,altImage:null,fill:true,fillColor:"000000",fillColorMask:"FFFFFF",fillOpacity:0.7,highlight:null,stroke:false,strokeColor:"ff0000",strokeOpacity:1,strokeWidth:1,includeKeys:"",alt_image:null},defaults:{clickNavigate:false,wrapClass:null,wrapCss:null,onGetList:null,sortList:false,listenToList:false,mapKey:"",mapValue:"",singleSelect:false,listKey:"value",listSelectedAttribute:"selected",listSelectedClass:null,onClick:null,onMouseover:null,onMouseout:null,mouseoutDelay:0,onStateChange:null,boundList:null,onConfigured:null,configTimeout:30000,noHrefIsMask:true,scaleMap:true,safeLoad:false,areas:[]},shared_defaults:{render_highlight:{fade:true},render_select:{fade:false},staticState:null,selected:null},area_defaults:{includeKeys:"",isMask:false},canvas_style:{position:"absolute",left:0,top:0,padding:0,border:0},hasCanvas:null,isTouch:null,windowLoaded:false,map_cache:[],hooks:{},addHook:function(d,c){this.hooks[d]=(this.hooks[d]||[]).push(c);
},callHooks:function(d,c){a.each(this.hooks[d]||[],function(g,f){f.apply(c);});},utils:{subclass:function(c,d){var e=function(){var g=this,f=Array.prototype.slice.call(arguments,0);
g.base=c.prototype;g.base.init=function(){c.prototype.constructor.apply(g,f);};d.apply(g,f);
};e.prototype=new c();e.prototype.constructor=e;return e;},asArray:function(c){return c.constructor===Array?c:this.split(c);
},split:function(g,d){var f,e,c=g.split(",");for(f=0;f<c.length;f++){e=a.trim(c[f]);
if(e===""){c.splice(f,1);}else{c[f]=d?d(e):e;}}return c;},updateProps:function(c,d){var e,f=c||{},g=a.isEmptyObject(f)?d:c;
e=[];a.each(g,function(h){e.push(h);});a.each(Array.prototype.slice.call(arguments,1),function(h,j){a.each(j||{},function(k){if(!e||a.inArray(k,e)>=0){var i=j[k];
if(a.isPlainObject(i)){f[k]=a.extend(f[k]||{},i);}else{if(i&&i.constructor===Array){f[k]=i.slice(0);
}else{if(typeof i!=="undefined"){f[k]=j[k];}}}}});});return f;},isElement:function(c){return(typeof HTMLElement==="object"?c instanceof HTMLElement:c&&typeof c==="object"&&c.nodeType===1&&typeof c.nodeName==="string");
},indexOfProp:function(c,d,f){var e=c.constructor===Array?-1:null;a.each(c,function(h,g){if(g&&(d?g[d]:g)===f){e=h;
return false;}});return e;},boolOrDefault:function(d,c){return this.isBool(d)?d:c||false;
},isBool:function(c){return typeof c==="boolean";},ifFunction:function(d,e,c){if(a.isFunction(d)){d.call(e,c);
}},size:function(c){var d=a.mapster.utils;return{width:d.imgWidth(c,true),height:d.imgHeight(c,true),complete:function(){return !!this.height&&!!this.width;
}};},setOpacity:function(c,d){c.style.opacity=d;},fader:(function(){var c={},e=0,d=function(g,k,h,f){var i,j,l=a.mapster.utils;
if(typeof g==="number"){j=c[g];if(!j){return;}}else{i=l.indexOfProp(c,null,g);if(i){delete c[i];
}c[++e]=j=g;g=e;}h=h||1;k=(k+(h/10)>h-0.01)?h:k+(h/10);l.setOpacity(j,k);if(k<h){setTimeout(function(){d(g,k,h,f);
},f?f/10:15);}};return d;}())},getBoundList:function(g,e){if(!g.boundList){return null;
}var c,d,h=a(),f=a.mapster.utils.split(e);g.boundList.each(function(k,j){for(c=0;
c<f.length;c++){d=f[c];if(a(j).is("["+g.listKey+'="'+d+'"]')){h=h.add(j);}}});return h;
},setBoundListProperties:function(c,e,d){e.each(function(g,f){if(c.listSelectedClass){if(d){a(f).addClass(c.listSelectedClass);
}else{a(f).removeClass(c.listSelectedClass);}}if(c.listSelectedAttribute){a(f).attr(c.listSelectedAttribute,d);
}});},getMapDataIndex:function(e){var d,c;switch(e.tagName&&e.tagName.toLowerCase()){case"area":c=a(e).parent().attr("name");
d=a("img[usemap='#"+c+"']")[0];break;case"img":d=e;break;}return d?this.utils.indexOfProp(this.map_cache,"image",d):-1;
},getMapData:function(d){var c=this.getMapDataIndex(d.length?d[0]:d);if(c>=0){return c>=0?this.map_cache[c]:null;
}},queueCommand:function(e,f,d,c){if(!e){return false;}if(!e.complete||e.currentAction){e.commands.push({that:f,command:d,args:c});
return true;}return false;},unload:function(){this.impl.unload();this.utils=null;
this.impl=null;a.fn.mapster=null;a.mapster=null;a("*").unbind();}};var b=a.mapster;
a.each(["width","height"],function(f,d){var c=d.substr(0,1).toUpperCase()+d.substr(1);
b.utils["img"+c]=function(e,g){return(g?a(e)[d]():0)||e[d]||e["natural"+c]||e["client"+c]||e["offset"+c];
};});b.Method=function(g,d,c,f){var e=this;e.name=f.name;e.output=g;e.input=g;e.first=f.first||false;
e.args=f.args?Array.prototype.slice.call(f.args,0):[];e.key=f.key;e.func_map=d;e.func_area=c;
e.name=f.name;e.allowAsync=f.allowAsync||false;};b.Method.prototype.go=function(){var f,e,c,g,j,k=this.input,d=[],h=this;
g=k.length;for(f=0;f<g;f++){e=a.mapster.getMapData(k[f]);if(e){if(!h.allowAsync&&b.queueCommand(e,h.input,h.name,h.args)){if(this.first){j="";
}continue;}c=e.getData(k[f].nodeName==="AREA"?k[f]:this.key);if(c){if(a.inArray(c,d)<0){d.push(c);
}}else{j=this.func_map.apply(e,h.args);}if(this.first||typeof j!=="undefined"){break;
}}}a(d).each(function(m,l){j=h.func_area.apply(l,h.args);});if(typeof j!=="undefined"){return j;
}else{return this.output;}};a.mapster.impl=(function(){var e={},d=a.mapster,i=a.mapster.utils,h,c;
c=function(j){return d.map_cache.push(j)-1;};h=function(k){d.map_cache.splice(k.index,1);
for(var j=d.map_cache.length-1;j>=this.index;j--){d.map_cache[j].index--;}};function f(n,k){var j,l,m=n.options.areas;
if(k){a.each(k,function(p,o){if(this){l=i.indexOfProp(m,"key",this.key);if(l>=0){a.extend(m[l],this);
}else{m.push(this);}j=n.getDataForKey(this.key);if(j){a.extend(j.options,this);}}});
}}function g(j,k){var l=i.updateProps({},k);delete l.areas;i.updateProps(j.options,l);
f(j,k.areas);i.updateProps(j.area_options,j.options);}e.get=function(j){var k=d.getMapData(this);
if(!(k&&k.complete)){throw ("Can't access data until binding complete.");}return(new d.Method(this,function(){return this.getSelected();
},function(){return this.isSelected();},{name:"get",args:arguments,key:j,first:true,allowAsync:true,defaultReturn:""})).go();
};e.data=function(j){return(new d.Method(this,null,function(){return this;},{name:"data",args:arguments,key:j})).go();
};e.highlight=function(j){return(new d.Method(this,function(){if(j===false){this.ensureNoHighlight();
}else{var k=this.highlightId;return k>=0?this.data[k].key:null;}},function(){this.highlight();
},{name:"highlight",args:arguments,key:j,first:true})).go();};e.keys=function(l,k){var m=[],n=d.getMapData(this);
if(!(n&&n.complete)){throw ("Can't access data until binding complete.");}function j(o){var p,q=[];
if(!k){q.push(o.key);}else{p=o.areas();a.each(p,function(s,r){q=q.concat(r.keys);
});}a.each(q,function(s,r){if(a.inArray(r,m)<0){m.push(r);}});}if(!(n&&n.complete)){return"";
}if(typeof l==="string"){if(k){j(n.getDataForKey(l));}else{m=[n.getKeysForGroup(l)];
}}else{k=l;this.each(function(p,o){if(o.nodeName==="AREA"){j(n.getDataForArea(o));
}});}return m.join(",");};e.select=function(){e.set.call(this,true);};e.deselect=function(){e.set.call(this,false);
};e.set=function(s,m,q){var o,p,r=q,n,k;function t(u){if(u){switch(s){case true:u.addSelection(r);
break;case false:u.removeSelection(true);break;default:u.toggleSelection(r);break;
}}}function j(u){if(u&&a.inArray(u,k)<0){k.push(u);n+=(n===""?"":",")+u.key;}}function l(u){a.each(k,function(w,v){t(v);
});if(!s){u.removeSelectionFinish();}if(u.options.boundList){d.setBoundListProperties(u.options,d.getBoundList(u.options,n),s);
}}this.filter("img,area").each(function(v,u){var w;p=d.getMapData(u);if(p!==o){if(o){l(o);
}k=[];n="";}if(p){w="";if(u.nodeName.toUpperCase()==="IMG"){if(!d.queueCommand(p,a(u),"set",[s,m,r])){if(m instanceof Array){if(m.length){w=m.join(",");
}}else{w=m;}if(w){a.each(i.split(w),function(x,y){j(p.getDataForKey(y.toString()));
o=p;});}}}else{r=m;if(!d.queueCommand(p,a(u),"set",[s,r])){j(p.getDataForArea(u));
o=p;}}}});if(p){l(p);}return this;};e.unbind=function(j){return(new d.Method(this,function(){this.clearEvents();
this.clearMapData(j);h(this);},null,{name:"unbind",args:arguments})).go();};e.rebind=function(j){return(new d.Method(this,function(){var k=this;
k.complete=false;k.configureOptions(j);k.bindImages(true,function(){k.buildDataset(true);
k.complete=true;});},null,{name:"rebind",args:arguments})).go();};e.get_options=function(l,k){var j=i.isBool(l)?l:k;
return(new d.Method(this,function(){var m=a.extend({},this.options);if(j){m.render_select=i.updateProps({},d.render_defaults,m,m.render_select);
m.render_highlight=i.updateProps({},d.render_defaults,m,m.render_highlight);}return m;
},function(){return j?this.effectiveOptions():this.options;},{name:"get_options",args:arguments,first:true,allowAsync:true,key:l})).go();
};e.set_options=function(j){return(new d.Method(this,function(){g(this,j);},null,{name:"set_options",args:arguments})).go();
};e.unload=function(){var j;for(j=d.map_cache.length-1;j>=0;j--){if(d.map_cache[j]){e.unbind.call(a(d.map_cache[j].image));
}}e.graphics=null;};e.snapshot=function(){return(new d.Method(this,function(){a.each(this.data,function(k,j){j.selected=false;
});this.base_canvas=this.graphics.createVisibleCanvas(this);a(this.image).before(this.base_canvas);
},null,{name:"snapshot"})).go();};e.state=function(){var j,k=null;a(this).each(function(m,l){if(l.nodeName==="IMG"){j=d.getMapData(l);
if(j){k=j.state();}return false;}});return k;};e.bind=function(j){return this.each(function(l,k){var m,n,p,o;
m=a(k);m.css("border",0);o=d.getMapData(k);if(o){e.unbind.apply(m);if(!o.complete){m.bind();
return true;}o=null;}p=this.getAttribute("usemap");n=p&&a('map[name="'+p.substr(1)+'"]');
if(!(m.is("img")&&p&&n.size()>0)){return true;}if(!o){o=new d.MapData(this,j);o.index=c(o);
o.map=n;o.bindImages(true);}});};e.init=function(l){var k,j;d.hasCanvas=(document.namespaces&&document.namespaces.g_vml_)?false:a("<canvas></canvas>")[0].getContext?true:false;
d.isTouch="ontouchstart" in document.documentElement;if(!(d.hasCanvas||document.namespaces)){a.fn.mapster=function(){return this;
};return;}if(!i.isBool(a.mapster.defaults.highlight)){d.render_defaults.highlight=!d.isTouch;
}a.extend(d.defaults,d.render_defaults,d.shared_defaults);a.extend(d.area_defaults,d.render_defaults,d.shared_defaults);
if(i.isBool(l)){d.hasCanvas=l;}if(a.browser.msie&&!d.hasCanvas&&!document.namespaces.v){document.namespaces.add("v","urn:schemas-microsoft-com:vml");
k=document.createStyleSheet();j=["shape","rect","oval","circ","fill","stroke","imagedata","group","textbox"];
a.each(j,function(n,m){k.addRule("v\\:"+m,"behavior: url(#default#VML); antialias:true");
});}a(window).bind("load",function(){d.windowLoaded=true;a(d.map_cache).each(function(n,m){if(!m.complete&&m.isReadyToBind()){m.initialize();
}});});};e.test=function(j){return eval(j);};return e;}());a.mapster.impl.init();
}(jQuery));(function(a){var d,c=a.mapster,e=c.utils;function b(g,f,k){var j=g,i=j.map_data,h=k.isMask;
a.each(f.areas(),function(m,l){k.isMask=h||(l.nohref&&i.options.noHrefIsMask);j.addShape(l,k);
});k.isMask=h;}c.Graphics=function(f){var g=this;g.active=false;g.canvas=null;g.width=0;
g.height=0;g.shapes=[];g.masks=[];g.map_data=f;};d=c.Graphics.prototype={constructor:c.Graphics,begin:function(g,h){var f=a(g);
this.elementName=h;this.canvas=g;this.width=f.width();this.height=f.height();this.shapes=[];
this.masks=[];this.active=true;},addShape:function(g,h){var f=h.isMask?this.masks:this.shapes;
f.push({mapArea:g,options:h});},createVisibleCanvas:function(f){return a(this.createCanvasFor(f)).addClass("mapster_el").css(c.canvas_style)[0];
},addShapeGroup:function(f,k,m){var j=this,h,l,g,i=this.map_data,n=f.effectiveRenderOptions(k);
if(m){a.extend(n,m);}if(k==="select"){l="static_"+f.areaId.toString();g=i.base_canvas;
}else{g=i.overlay_canvas;}j.begin(g,l);if(n.includeKeys){h=e.split(n.includeKeys);
a.each(h,function(q,p){var o=i.getDataForKey(p.toString());b(j,o,o.effectiveRenderOptions(k));
});}b(j,f,n);j.render();if(n.fade){e.fader(c.hasCanvas?g:a(g).find("._fill").not(".mapster_mask"),0,c.hasCanvas?1:n.fillOpacity,n.fadeDuration);
}}};if(c.hasCanvas){d.hex_to_decimal=function(f){return Math.max(0,Math.min(parseInt(f,16),255));
};d.css3color=function(f,g){return"rgba("+this.hex_to_decimal(f.substr(0,2))+","+this.hex_to_decimal(f.substr(2,2))+","+this.hex_to_decimal(f.substr(4,2))+","+g+")";
};d.renderShape=function(g,j,k){var h,f=j.coords(null,k);switch(j.shape){case"rect":g.rect(f[0],f[1],f[2]-f[0],f[3]-f[1]);
break;case"poly":g.moveTo(f[0],f[1]);for(h=2;h<j.length;h+=2){g.lineTo(f[h],f[h+1]);
}g.lineTo(f[0],f[1]);break;case"circ":case"circle":g.arc(f[0],f[1],f[2],0,Math.PI*2,false);
break;}};d.addAltImage=function(f,g,h,i){f.beginPath();this.renderShape(f,h);f.closePath();
f.clip();f.globalAlpha=i.altImageOpacity||i.fillOpacity;f.drawImage(g,0,0,h.owner.scaleInfo.width,h.owner.scaleInfo.height);
};d.render=function(){var h,i,j=this,g=j.masks.length,k=j.createCanvasFor(j.map_data),l=k.getContext("2d"),f=j.canvas.getContext("2d");
if(g){h=j.createCanvasFor(j.map_data);i=h.getContext("2d");i.clearRect(0,0,h.width,h.height);
a.each(j.masks,function(n,m){i.save();i.beginPath();j.renderShape(i,m.mapArea);i.closePath();
i.clip();i.lineWidth=0;i.fillStyle="#000";i.fill();i.restore();});}a.each(j.shapes,function(m,n){l.save();
if(n.options.fill){if(n.options.alt_image){j.addAltImage(l,n.options.alt_image,n.mapArea,n.options);
}else{l.beginPath();j.renderShape(l,n.mapArea);l.closePath();l.fillStyle=j.css3color(n.options.fillColor,n.options.fillOpacity);
l.fill();}}l.restore();});a.each(j.shapes.concat(j.masks),function(m,o){var n=o.options.strokeWidth===1?0.5:0;
if(o.options.stroke){l.save();l.strokeStyle=j.css3color(o.options.strokeColor,o.options.strokeOpacity);
l.lineWidth=o.options.strokeWidth;l.beginPath();j.renderShape(l,o.mapArea,n);l.closePath();
l.stroke();l.restore();}});if(g){i.globalCompositeOperation="source-out";i.drawImage(k,0,0);
f.drawImage(h,0,0);}else{f.drawImage(k,0,0);}j.active=false;return j.canvas;};d.createCanvasFor=function(f){return a('<canvas width="'+f.scaleInfo.width+'" height="'+f.scaleInfo.height+'"></canvas>')[0];
};d.clearHighlight=function(){var f=this.map_data.overlay_canvas;f.getContext("2d").clearRect(0,0,f.width,f.height);
};d.removeSelections=function(){};d.refreshSelections=function(){var f,g=this.map_data;
f=g.base_canvas;g.base_canvas=this.createVisibleCanvas(g);a(g.base_canvas).hide();
a(f).before(g.base_canvas);g.redrawSelections();a(g.base_canvas).show();a(f).remove();
};}else{e.setOpacity=function(f,g){a(f).each(function(j,h){if(typeof h.opacity!=="undefined"){h.opacity=g;
}else{a(h).css("opacity",g);}});};d.renderShape=function(l,n,g){var m=this,k,o,h,p,j,i,q,f=l.coords();
j=m.elementName?'name="'+m.elementName+'" ':"";i=g?'class="'+g+'" ':"";p='<v:fill color="#'+n.fillColor+'" class="_fill" opacity="'+(n.fill?n.fillOpacity:0)+'" /><v:stroke class="_fill" opacity="'+n.strokeOpacity+'"/>';
o=n.stroke?" strokeweight="+n.strokeWidth+' stroked="t" strokecolor="#'+n.strokeColor+'"':' stroked="f"';
k=n.fill?' filled="t"':' filled="f"';switch(l.shape){case"rect":q="<v:rect "+i+j+k+o+' style="zoom:1;margin:0;padding:0;display:block;position:absolute;left:'+f[0]+"px;top:"+f[1]+"px;width:"+(f[2]-f[0])+"px;height:"+(f[3]-f[1])+'px;">'+p+"</v:rect>";
break;case"poly":q="<v:shape "+i+j+k+o+' coordorigin="0,0" coordsize="'+m.width+","+m.height+'" path="m '+f[0]+","+f[1]+" l "+f.slice(2).join(",")+' x e" style="zoom:1;margin:0;padding:0;display:block;position:absolute;top:0px;left:0px;width:'+m.width+"px;height:"+m.height+'px;">'+p+"</v:shape>";
break;case"circ":case"circle":q="<v:oval "+i+j+k+o+' style="zoom:1;margin:0;padding:0;display:block;position:absolute;left:'+(f[0]-f[2])+"px;top:"+(f[1]-f[2])+"px;width:"+(f[2]*2)+"px;height:"+(f[2]*2)+'px;">'+p+"</v:oval>";
break;}h=a(q);a(m.canvas).append(h);return h;};d.render=function(){var g,f=this;a.each(this.shapes,function(j,h){f.renderShape(h.mapArea,h.options);
});if(this.masks.length){a.each(this.masks,function(j,h){g=e.updateProps({},h.options,{fillOpacity:1,fillColor:h.options.fillColorMask});
f.renderShape(h.mapArea,g,"mapster_mask");});}this.active=false;return this.canvas;
};d.createCanvasFor=function(g){var i=g.scaleInfo.width,f=g.scaleInfo.height;return a('<var width="'+i+'" height="'+f+'" style="zoom:1;overflow:hidden;display:block;width:'+i+"px;height:"+f+'px;"></var>')[0];
};d.clearHighlight=function(){a(this.map_data.overlay_canvas).children().remove();
};d.removeSelections=function(f){if(f>=0){a(this.map_data.base_canvas).find('[name="static_'+f.toString()+'"]').remove();
}else{a(this.map_data.base_canvas).children().remove();}};d.refreshSelections=function(){return null;
};}}(jQuery));(function(a){var c,b=a.mapster,d=b.utils;b.MapData=function(e,g){var f=this;
function h(l,i,j){function k(m){if(f.currentAreaId!==m&&f.highlightId>=0){j();}}if(f.activeAreaEvent){window.clearTimeout(f.activeAreaEvent);
f.activeAreaEvent=0;}if(l<0){return;}if(i.owner.currentAction||l){f.activeAreaEvent=window.setTimeout((function(){return function(){h(0,i,j);
};}(i)),l||100);}else{k(i.areaId);}}this.image=e;this.imgCssText=e.style.cssText||null;
this.initializeDefaults();this.configureOptions(g);this.mousedown=function(i){if(!a.mapster.hasCanvas){this.blur();
}i.preventDefault();};this.mouseover=function(k){var j=f.getAllDataForArea(this),i=j.length?j[0]:null;
if(!i||i.isNotRendered()||i.owner.currentAction){return;}if(f.currentAreaId===i.areaId){return;
}if(f.highlightId!==i.areaId){f.clearEffects();i.highlight();if(f.options.showToolTip){a.each(j,function(m,l){if(l.effectiveOptions().toolTip){l.showTooltip();
}});}}f.currentAreaId=i.areaId;if(a.isFunction(f.options.onMouseover)){f.options.onMouseover.call(this,{e:k,options:i.effectiveOptions(),key:i.key,selected:i.isSelected()});
}};this.mouseout=function(j){var k,i=f.getDataForArea(this),l=f.options;if(f.currentAreaId<0||!i){return;
}k=f.getDataForArea(j.relatedTarget);if(k===i){return;}f.currentAreaId=-1;i.area=null;
h(l.mouseoutDelay,i,f.clearEffects);if(a.isFunction(l.onMouseout)){l.onMouseout.call(this,{e:j,options:l,key:i.key,selected:i.isSelected()});
}};this.clearEffects=function(){var i=f.options;f.ensureNoHighlight();if(i.toolTipClose&&a.inArray("area-mouseout",i.toolTipClose)>=0&&f.activeToolTip){f.clearTooltip();
}};this.click=function(m){var r,n,o,p,j,k,s,t=this,i=f.getDataForArea(this),q=f.options;
function l(u){var v;j=(u.isSelectable()&&(u.isDeselectable()||!u.isSelected()));if(j){p=!u.isSelected();
}else{p=u.isSelected();}o=b.getBoundList(q,u.key);if(a.isFunction(q.onClick)){k=q.onClick.call(t,{e:m,listTarget:o,key:u.key,selected:p});
if(d.isBool(k)){if(!k){return false;}s=a(u.area).attr("href");if(s!=="#"){window.location.href=s;
return false;}}}if(j){r=u.toggleSelection();}if(q.boundList&&q.boundList.length>0){b.setBoundListProperties(q,o,u.isSelected());
}v=u.effectiveOptions();if(v.includeKeys){n=d.split(v.includeKeys);a.each(n,function(y,x){var w=f.getDataForKey(x.toString());
if(!w.options.isMask){l(w);}});}}f.mousedown.call(this,m);if(q.clickNavigate&&i.href){window.location.href=i.href;
return;}if(i&&!i.owner.currentAction){q=f.options;l(i);}};this.graphics=new b.Graphics(this);
};c=b.MapData.prototype;c.configureOptions=function(e){this.area_options=d.updateProps({},b.area_defaults,e);
this.options=d.updateProps({},b.defaults,e);this.bindTries=this.options.configTimeout/200;
};c.initializeDefaults=function(){a.extend(this,{images:[],imageSources:[],imageStatus:[],altImagesXref:{},map:null,base_canvas:null,overlay_canvas:null,imagesLoaded:false,complete:false,commands:[],data:[],mapAreas:[],_xref:{},highlightId:-1,currentAreaId:-1,_tooltip_events:[],scaleInfo:null,index:-1,activeAreaEvent:null});
};c.isActive=function(){return !this.complete||this.currentAction;};c.state=function(){return{complete:this.complete,resizing:this.currentAction==="resizing",zoomed:this.zoomed,zoomedArea:this.zoomedArea,scaleInfo:this.scaleInfo};
};c.isReadyToBind=function(){return this.imagesLoaded&&(!this.options.safeLoad||b.windowLoaded);
};c.addImage=function(h,l,e){var g,k,j=this,f=function(n){return a.inArray(n,j.images);
},i=function(){var n=f(this);if(n>=0){j.imageStatus[n]=true;if(a.inArray(false,j.imageStatus)<0&&(!j.options.safeLoad||b.windowLoaded)){j.initialize();
}}},m=function(n){var o=j.images.push(n)-1;j.imageSources[o]=k;j.imageStatus[o]=false;
if(e){j.altImagesXref[e]=o;}};if(!h&&!l){return;}g=h;k=l||a(g).attr("src");if(!k){throw ("Missing image source");
}if(!g){g=a('<img class="mapster_el" />').hide()[0];a("body").append(g);m(g);a(g).bind("onload",i).bind("onerror",function(n){j.imageLoadError.call(j,n);
});a(g).attr("src",k);}else{m(g);}};c.isImageLoaded=function(f){var h,e,g=this;if(g.imageStatus[f]){return true;
}e=g.images[f];if(typeof e.complete!=="undefined"){h=e.complete;}else{h=!!d.imgWidth(e);
}g.imageStatus[f]=h;return h;};c.bindImages=function(f,e){var g,j=this,h=true,k=j.options,l=function(){j.bindImages.call(j,false,e);
};if(f){j.complete=false;j.triesLeft=j.bindTries;j.imagesLoaded=false;if(j.images.length>2){j.images=j.images.slice(0,2);
j.imageSources=j.imageSources.slice(0,2);j.imageStatus=j.imageStatus.slice(0,2);j.altImagesXref={};
}j.altImagesXref={};if(j.images.length===0){j.addImage(j.image);j.addImage(null,j.image.src);
}if(a.mapster.hasCanvas){j.addImage(null,k.render_highlight.altImage||k.altImage,"highlight");
j.addImage(null,k.render_select.altImage||k.altImage,"select");}}if(j.imagesLoaded){return;
}g=j.images.length;while(g-->0){if(!j.isImageLoaded(g)){h=false;break;}}j.imagesLoaded=h;
if(j.isReadyToBind()){if(e){e();}else{j.initialize();}}else{if(j.triesLeft-->0){j.imgTimeout=window.setTimeout(l,200);
}else{j.imageLoadError.call(j);}}};c.imageLoadError=function(f){clearTimeout(this.imgTimeout);
this.triesLeft=0;var g=f?"The image "+f.target.src+" failed to load.":"The images never seemed to finish loading. You may just need to increase the configTimeout if images could take a long time to load.";
throw g;};c.altImage=function(e){return this.images[this.altImagesXref[e]];};c.wrapId=function(){return"mapster_wrap_"+this.index;
};c._idFromKey=function(e){return typeof e==="string"&&this._xref.hasOwnProperty(e)?this._xref[e]:-1;
};c.getSelected=function(){var e="";a.each(this.data,function(g,f){if(f.isSelected()){e+=(e?",":"")+this.key;
}});return e;};c.getAllDataForArea=function(f,g){var h,e,l,k=this,j=a(f).filter("area").attr(k.options.mapKey);
if(j){l=[];j=d.split(j);for(h=0;h<(g||j.length);h++){e=k.data[k._idFromKey(j[h])];
e.area=f.length?f[0]:f;l.push(e);}}return l;};c.getDataForArea=function(f){var e=this.getAllDataForArea(f,1);
return e?e[0]||null:null;};c.getDataForKey=function(e){return this.data[this._idFromKey(e)];
};c.getKeysForGroup=function(f){var e=this.getDataForKey(f);return !e?"":e.isPrimary?e.key:this.getPrimaryKeysForMapAreas(e.areas()).join(",");
};c.getPrimaryKeysForMapAreas=function(e){var f=[];a.each(e,function(h,g){if(a.inArray(g.keys[0],f)<0){f.push(g.keys[0]);
}});return f;};c.getData=function(e){if(typeof e==="string"){return this.getDataForKey(e);
}else{if(e&&e.mapster||d.isElement(e)){return this.getDataForArea(e);}else{return null;
}}};c.ensureNoHighlight=function(){var e;if(this.highlightId>=0){this.graphics.clearHighlight();
e=this.data[this.highlightId];e.changeState("highlight",false);this.setHighlightId(-1);
}};c.setHighlightId=function(e){this.highlightId=e;};c.clearSelections=function(){a.each(this.data,function(g,f){if(f.selected){f.removeSelection(true);
}});this.removeSelectionFinish();};c.setAreaOptions=function(g){var h,f,e;g=g||[];
for(h=g.length-1;h>=0;h--){f=g[h];if(f){e=this.getDataForKey(f.key);if(e){d.updateProps(e.options,f);
if(d.isBool(f.selected)){e.selected=f.selected;}}}}};c.drawSelections=function(g){var e,f=d.asArray(g);
for(e=f.length-1;e>=0;e--){this.data[f[e]].drawSelection();}};c.redrawSelections=function(){a.each(this.data,function(g,f){if(f.isSelectedOrStatic()){f.drawSelection();
}});};c.initialize=function(){var j,e,m,s,n,f,g,p,h,q,r,o,k=this,l=k.options;if(k.complete){return;
}h=a(k.image);n=h.parent().attr("id");if(n&&n.length>=12&&n.substring(0,12)==="mapster_wrap"){s=h.parent();
s.attr("id",k.wrapId());}else{s=a('<div id="'+k.wrapId()+'"></div>');if(l.wrapClass){if(l.wrapClass===true){s.addClass(h[0].className);
}else{s.addClass(l.wrapClass);}}}k.wrapper=s;k.scaleInfo=o=d.scaleMap(k.images[0],k.images[1],l.scaleMap);
e=k.graphics.createVisibleCanvas(k);m=k.graphics.createVisibleCanvas(k);k.base_canvas=e;
k.overlay_canvas=m;j=a(k.images[1]).addClass("mapster_el").addClass(k.images[0].className).attr({id:null,usemap:null});
p=d.size(k.images[0]);if(p.complete){j.css({width:p.width,height:p.height});}k.buildDataset();
f={display:"block",position:"relative",padding:0,width:o.width,height:o.height};if(l.wrapCss){a.extend(f,l.wrapCss);
}if(h.parent()[0]!==k.wrapper[0]){h.before(k.wrapper);}s.css(f);a(k.images.slice(2)).hide();
for(g=1;g<k.images.length;g++){s.append(k.images[g]);}s.append(e).append(m).append(h.css(b.canvas_style));
d.setOpacity(k.images[0],0);a(k.images[1]).show();d.setOpacity(k.images[1],1);if(l.isSelectable&&l.onGetList){r=k.data.slice(0);
if(l.sortList){if(l.sortList==="desc"){q=function(i,t){return i===t?0:(i>t?-1:1);
};}else{q=function(i,t){return i===t?0:(i<t?-1:1);};}r.sort(function(i,t){i=i.value;
t=t.value;return q(i,t);});}k.options.boundList=l.onGetList.call(k.image,r);}k.complete=true;
k.processCommandQueue();if(l.onConfigured&&typeof l.onConfigured==="function"){l.onConfigured.call(h,true);
}};c.buildDataset=function(w){var x,i,p,h,e,g,k,s,q,r,t,n,l,o,u=this,v=u.options,m;
function f(y,z){var j=new b.AreaData(u,y,z);j.areaId=u._xref[y]=u.data.push(j)-1;
return j.areaId;}u._xref={};u.data=[];if(!w){u.mapAreas=[];}m=!v.mapKey;if(m){v.mapKey="data-mapster-key";
}x=(a.browser.msie&&a.browser.version<=7)?"area":(m?"area[coords]":"area["+v.mapKey+"]");
i=a(u.map).find(x).unbind(".mapster");for(t=0;t<i.length;t++){h=0;g=i[t];e=a(g);if(!g.coords){continue;
}if(m){k=String(t);e.attr("data-mapster-key",k);}else{k=g.getAttribute(v.mapKey);
}if(w){s=u.mapAreas[e.data("mapster")-1];s.configure(k);}else{s=new b.MapArea(u,g,k);
u.mapAreas.push(s);}r=s.keys;for(p=r.length-1;p>=0;p--){q=r[p];if(v.mapValue){n=e.attr(v.mapValue);
}if(m){h=f(u.data.length,n);l=u.data[h];l.key=q=h.toString();}else{h=u._xref[q];if(h>=0){l=u.data[h];
if(n&&!u.data[h].value){l.value=n;}}else{h=f(q,n);l=u.data[h];l.isPrimary=p===0;}}s.areaDataXref.push(h);
l.areasXref.push(t);}o=e.attr("href");if(o&&o!=="#"&&!l.href){l.href=o;}if(!s.nohref){e.bind("mouseover.mapster",u.mouseover).bind("mouseout.mapster",u.mouseout).bind("click.mapster",u.click).bind("mousedown.mapster",u.mousedown);
}e.data("mapster",t+1);}u.setAreaOptions(v.areas);u.redrawSelections();};c.processCommandQueue=function(){var e,f=this;
while(!f.currentAction&&f.commands.length){e=f.commands[0];f.commands.splice(0,1);
b.impl[e.command].apply(e.that,e.args);}};c.clearEvents=function(){a(this.map).find("area").unbind(".mapster");
a(this.images).unbind(".mapster");};c._clearCanvases=function(e){if(!e){a(this.base_canvas).remove();
}a(this.overlay_canvas).remove();};c.clearMapData=function(f){var e=this;this._clearCanvases(f);
a.each(this.data,function(h,g){g.reset();});this.data=null;if(!f){this.image.style.cssText=this.imgCssText;
a(this.wrapper).before(this.image).remove();}a.each(this.images,function(h,g){if(e.images[h]!==g.image){e.images[h]=null;
}});e.images=[];this.image=null;d.ifFunction(this.clearTooltip,this);};c.removeSelectionFinish=function(){var e=this.graphics;
e.refreshSelections();e.clearHighlight();};}(jQuery));(function(a){var c,b=a.mapster,d=b.utils;
b.AreaData=function(f,e,g){a.extend(this,{owner:f,key:e||"",isPrimary:true,areaId:-1,href:"",value:g||"",options:{},selected:null,areasXref:[],area:null,optsCache:null});
};c=b.AreaData.prototype;c.areas=function(){var e,f=[];for(e=0;e<this.areasXref.length;
e++){f.push(this.owner.mapAreas[this.areasXref[e]]);}return f;};c.coords=function(f){var e=[];
a.each(this.areas(),function(h,g){e=e.concat(g.coords(f));});return e;};c.reset=function(){a.each(this.areas(),function(g,f){f.reset();
});this.areasXref=[];this.options=null;};c.isSelectedOrStatic=function(){var e=this.effectiveOptions();
return d.isBool(e.staticState)?e.staticState:this.isSelected();};c.isSelected=function(){return d.isBool(this.selected)?this.selected:d.isBool(this.owner.area_options.selected)?this.owner.area_options.selected:false;
};c.isSelectable=function(){return d.isBool(this.effectiveOptions().staticState)?false:(d.isBool(this.owner.options.staticState)?false:d.boolOrDefault(this.effectiveOptions().isSelectable,true));
};c.isDeselectable=function(){return d.isBool(this.effectiveOptions().staticState)?false:(d.isBool(this.owner.options.staticState)?false:d.boolOrDefault(this.effectiveOptions().isDeselectable,true));
};c.isNotRendered=function(){var e=a(this.area);return e.attr("nohref")||!e.attr("href")||this.effectiveOptions().isMask;
};c.effectiveOptions=function(f){var e=d.updateProps({},this.owner.area_options,this.options,f||{},{id:this.areaId});
e.selected=this.isSelected();return e;};c.effectiveRenderOptions=function(f,h){var e,g=this.optsCache;
if(!g||f==="highlight"){e=this.effectiveOptions(h);g=d.updateProps({},e,e["render_"+f],{alt_image:this.owner.altImage(f)});
if(f!=="highlight"){this.optsCache=g;}}return a.extend({},g);};c.changeState=function(f,e){if(a.isFunction(this.owner.options.onStateChange)){this.owner.options.onStateChange.call(this.owner.image,{key:this.key,state:f,selected:e});
}};c.highlight=function(f){var e=this.owner;if(this.effectiveOptions().highlight){e.graphics.addShapeGroup(this,"highlight",f);
}e.setHighlightId(this.areaId);this.changeState("highlight",true);};c.drawSelection=function(){this.owner.graphics.addShapeGroup(this,"select");
};c.addSelection=function(f){var e=this.owner;if(e.options.singleSelect){e.clearSelections();
}if(!this.isSelected()){if(f){this.optsCache=a.extend(this.effectiveRenderOptions("select"),f);
}this.drawSelection();if(f){this.optsCache=null;}this.selected=true;this.changeState("select",true);
}if(e.options.singleSelect){e.graphics.refreshSelections();}};c.removeSelection=function(e){this.selected=false;
this.changeState("select",false);this.optsCache=null;this.owner.graphics.removeSelections(this.areaId);
if(!e){this.owner.removeSelectionFinish();}};c.toggleSelection=function(e){if(!this.isSelected()){this.addSelection(e);
}else{this.removeSelection();}return this.isSelected();};b.MapArea=function(h,e,f){if(!h){return;
}var g=this;g.owner=h;g.area=e;g.areaDataXref=[];g.originalCoords=[];a.each(d.split(e.coords),function(k,j){g.originalCoords.push(parseFloat(j));
});g.length=g.originalCoords.length;g.shape=e.shape.toLowerCase();g.nohref=e.nohref||!e.href;
g.configure(f);};b.MapArea.prototype.configure=function(e){this.keys=d.split(e);};
b.MapArea.prototype.reset=function(){this.area=null;};b.MapArea.prototype.coords=function(e){return a.map(this.originalCoords,function(f){return e?f:f+e;
});};}(jQuery));(function(a){var b=a.mapster.utils;b.areaCorners=function(e,x,o){var n,t,u,r,s,h,f,i,g,l,m,v,q,p,w,c,d,k=[];
for(q=0;q<e.length;q++){d=e[q];p=b.split(d.coords,parseInt);switch(d.shape){case"circle":l=p[0];
m=p[1];w=p[2];k=[];for(q=0;q<360;q+=20){c=q*Math.PI/180;k.push(l+w*Math.cos(c),m+w*Math.sin(c));
}break;case"rect":k.push(p[0],p[1],p[2],p[1],p[2],p[3],p[0],p[3]);break;default:k=k.concat(p);
break;}}t=u=h=i=999999;r=s=f=g=-1;for(q=k.length-2;q>=0;q-=2){l=parseInt(k[q],10);
m=parseInt(k[q+1],10);if(l<t){t=l;g=m;}if(l>r){r=l;i=m;}if(m<u){u=m;f=l;}if(m>s){s=m;
h=l;}}if(x&&o){n=false;a.each([[f-x,u-o],[h,u-o],[t-x,g-o],[t-x,i],[r,g-o],[r,i],[f-x,s],[h,s]],function(y,j){if(!n&&(j[0]>0&&j[1]>0)){v=j;
n=true;return false;}});if(!n){v=[r,s];}}return{tl:[t,u],br:[r,s],tt:v};};}(jQuery));
(function(a){var e=a.mapster_when,b=a.mapster,d=b.utils,c=b.MapArea.prototype;b.utils.getScaleInfo=function(g,f){var h;
if(!f){h=1;f=g;}else{h=g.width/f.width||g.height/f.height;if(h>0.98&&h<1.02){h=1;
}}return{scale:(h!==1),scalePct:h,realWidth:f.width,realHeight:f.height,width:g.width,height:g.height,ratio:g.width/g.height};
};b.utils.scaleMap=function(f,g,i){var j=d.size(f),h=d.size(g);if(!h.complete){throw ("Another script, such as an extension, appears to be interfering with image loading. Please let us know about this.");
}if(!j.complete){j=h;}return this.getScaleInfo(j,i?h:null);};b.MapData.prototype.resize=function(r,o,i,f){var t,u,m,v,y,l,h,s={callback:f||i},q,j,n=this;
function x(p,A,z){if(a.mapster.hasCanvas){p.width=A;p.height=z;}else{a(p).width(A);
a(p).height(z);}}function g(){n.currentAction="";if(a.isFunction(s.callback)){s.callback();
}n.processCommandQueue();}function k(){x(n.overlay_canvas,y,l);if(s.highlight&&m>=0){var p=n.data[m];
p.tempOptions={fade:false};n.getDataForKey(p.key).highlight();p.tempOptions=null;
}x(n.base_canvas,y,l);n.redrawSelections();g();}function w(){a(n.image).css(q);n.scaleInfo=d.getScaleInfo({width:y,height:l},{width:n.scaleInfo.realWidth,height:n.scaleInfo.realHeight});
a.each(n.data,function(z,p){a.each(p.areas(),function(B,A){A.resize();});});}if(typeof r==="object"){s=r;
}else{s.width=r;s.height=o;s.duration=i||0;}y=s.width;l=s.height;h=s.duration;if(n.scaleInfo.width===y&&n.scaleInfo.height===l){return;
}m=n.highlightId;if(!y){v=l/n.scaleInfo.realHeight;y=Math.round(n.scaleInfo.realWidth*v);
}if(!l){v=y/n.scaleInfo.realWidth;l=Math.round(n.scaleInfo.realHeight*v);}q={width:String(y)+"px",height:String(l)+"px"};
if(!a.mapster.hasCanvas){a(n.base_canvas).children().remove();}j=a(n.wrapper).find(".mapster_el").add(n.wrapper);
if(h){u=[];n.currentAction="resizing";j.each(function(z,p){t=e.defer();u.push(t);
a(p).animate(q,{duration:h,complete:t.resolve,easing:"linear"});});t=e.defer();u.push(t);
e.all(u).then(k);w();t.resolve();}else{j.css(q);w();k();}};b.MapArea=d.subclass(b.MapArea,function(){this.base.init();
if(this.owner.scaleInfo.scale){this.resize();}});c.coords=function(l,f){var g,h=[],k=l||this.owner.scaleInfo.scalePct,i=f||0;
if(k===1&&f===0){return this.originalCoords;}for(g=0;g<this.length;g++){h.push(Math.round(this.originalCoords[g]*k)+i);
}return h;};c.resize=function(){this.area.coords=this.coords().join(",");};c.reset=function(){this.area.coords=this.coords(1).join(",");
};b.impl.resize=function(h,g,f){if(!h&&!g){return false;}var i=(new b.Method(this,function(){this.resize(h,g,f);
},null,{name:"resize",args:arguments})).go();return i;};b.impl.zoom=function(f,h){var g=h||{};
function i(j){var x,k,n,B,u,l,m,v,w,r,s,q,p,z,A,t=g.padding||0,y=j?20:0,o=this,C=false;
if(j){if(!o.zoomed){o.zoomed=true;o.preZoomWidth=o.scaleInfo.width;o.preZoomHeight=o.scaleInfo.height;
o.zoomedArea=j;if(g.scroll){o.wrapper.css({overflow:"auto"});}}k=a.mapster.utils.areaCorners(j.coords(1,0));
B=o.wrapper.innerWidth()-y-t*2;n=o.wrapper.innerHeight()-y-t*2;l=k.maxX-k.minX;m=k.maxY-k.minY;
v=B/l;w=n/m;u=Math.min(v,w);r=(B-l*u)/2;s=(n-m*u)/2;q=o.scaleInfo.realWidth*u;p=o.scaleInfo.realHeight*u;
z=(k.minX)*u-t-r;A=(k.minY)*u-t-s;}else{if(!o.zoomed){return;}C=true;q=o.preZoomWidth;
p=o.preZoomHeight;z=null;A=null;}this.resize({width:q,height:p,duration:g.duration,scroll:x,scrollLeft:z,scrollTop:A,callback:(function(){var E=C,F=g.scroll,D=j;
return function(){if(E){o.preZoomWidth=null;o.preZoomHeight=null;o.zoomed=false;o.zoomedArea=false;
if(F){o.wrapper.css({overflow:"inherit"});}}else{o.zoomedArea=D;}};}())});}return(new b.Method(this,function(j){i.call(this);
},function(){i.call(this.owner,this);},{name:"zoom",args:arguments,first:true,key:f})).go();
};}(jQuery));(function(a){var b=a.mapster,c=b.utils;a.extend(b.defaults,{toolTipContainer:'<div style="border: 2px solid black; background: #EEEEEE; position:absolute; width:160px; padding:4px; margin: 4px; -moz-box-shadow: 3px 3px 5px #535353; -webkit-box-shadow: 3px 3px 5px #535353; box-shadow: 3px 3px 5px #535353; -moz-border-radius: 6px 6px 6px 6px; -webkit-border-radius: 6px; border-radius: 6px 6px 6px 6px;"></div>',showToolTip:false,toolTipFade:true,toolTipClose:["area-mouseout","image-mouseout"],onShowToolTip:null,onCreateTooltip:null});
a.extend(b.area_defaults,{toolTip:null});b.MapData.prototype.clearTooltip=function(){if(this.activeToolTip){this.activeToolTip.stop().remove();
this.activeToolTip=null;this.activeToolTipID=-1;}a.each(this._tooltip_events,function(f,d){d.object.unbind(d.event);
});};b.MapData.prototype.bindTooltipClose=function(i,e,h,d){var f=e+".mapster-tooltip",g=this;
if(a.inArray(i,this.options.toolTipClose)>=0){h.unbind(f).bind(f,function(j){if(!d||d.call(this,j)){g.clearTooltip();
}});this._tooltip_events.push({object:h,event:f,callback:d});}};b.AreaData.prototype.showTooltip=function(){var i,l,m,g,d,f,j=this.effectiveOptions(),h=this.owner,e=h.options,k=h.options.toolTipContainer;
h.cancelClear=true;if(h.activeToolTipID===this.areaId){return;}if(typeof k==="string"){f=a(k);
}else{f=a(k).clone();}l=f.html(j.toolTip).hide();h.clearTooltip();a("body").append(l);
h.activeToolTip=l;h.activeToolTipID=this.areaId;c.setOpacity(l[0],0);l.show();d=this.area?[this.area]:a.map(this.areas(),function(n){return n.area;
});g=c.areaCorners(d,l.outerWidth(true),l.outerHeight(true));i=a(h.image).offset();
m={left:i.left+g.tt[0]+"px",top:i.top+g.tt[1]+"px"};if(parseInt(l.css("z-index"),10)===0||l.css("z-index")==="auto"){m["z-index"]=9999;
}l.css(m).addClass("mapster_tooltip");h.bindTooltipClose("area-click","click",a(h.map));
h.bindTooltipClose("tooltip-click","click",l);h.bindTooltipClose("image-mouseout","mouseout",a(h.image),function(n){return(n.relatedTarget.nodeName!=="AREA"&&n.relatedTarget!==this);
});if(h.options.toolTipFade){c.fader(l[0],0,1,j.fadeDuration);}else{c.setOpacity(l[0],1);
}c.ifFunction(e.onShowToolTip,this.area||null,{toolTip:l,areaOptions:j,key:this.key,selected:this.isSelected()});
};b.impl.tooltip=function(d){return(new b.Method(this,function(){this.clearTooltip();
},function(){if(this.effectiveOptions().toolTip){this.showTooltip();}},{name:"tooltip",args:arguments,key:d})).go();
};}(jQuery));