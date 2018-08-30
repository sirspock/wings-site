/*!
 * Bootstrap Table of Contents v0.4.1 (http://afeld.github.io/bootstrap-toc/)
 * Copyright 2015 Aidan Feldman
 * Licensed under MIT (https://github.com/afeld/bootstrap-toc/blob/gh-pages/LICENSE.md) */
!function(e){"use strict";window.Toc={helpers:{findOrFilter:function(e,t){var a=e.find(t);return e.filter(t).add(a).filter(":not([data-toc-skip])")},generateUniqueIdBase:function(t){var a=e(t).text(),r=a.trim().toLowerCase().replace(/[^A-Za-z0-9]+/g,"-");return r||t.tagName.toLowerCase()},generateUniqueId:function(e){for(var t=this.generateUniqueIdBase(e),a=0;;a++){var r=t;if(a>0&&(r+="-"+a),!document.getElementById(r))return r}},generateAnchor:function(e){if(e.id)return e.id;var t=this.generateUniqueId(e);return e.id=t,t},createNavList:function(){return e('<ul class="nav"></ul>')},createChildNavList:function(e){var t=this.createNavList();return e.append(t),t},generateNavEl:function(t,a){var r=e("<a></a>");r.attr("href","#"+t),r.text(a);var n=e("<li></li>");return n.append(r),n},generateEmptyNavEl:function(){var t=e("<li></li>");return t},generateNavItem:function(t){var a=this.generateAnchor(t),r=e(t),n=r.data("toc-text")||r.text();return this.generateNavEl(a,n)},getTopLevel:function(e){for(var t=1;t<=6;t++){var a=this.findOrFilter(e,"h"+t);if(a.length>1)return t}return 1},getHeadings:function(e,t,a){for(var r="",n=a;n<a+t;n++)r+="h"+n,n<a+t-1&&(r+=",");return this.findOrFilter(e,r)},getNavLevel:function(e){return parseInt(e.tagName.charAt(1),10)},populateNav:function(e,t,a,r){var n=new Array(t),i=this;n[0]=e,e.lastNav=null,r.each(function(e,t){var r,o=i.generateNavItem(t),u=i.getNavLevel(t),s=u-a;for(r=s+1;r<n.length;r++)n[r]=null;if(null===n[s])for(r=0;r<s;r++)if(!n[r+1]){if(!n[r].lastNav){var l=i.generateEmptyNavEl();n[r].append(l),n[r].lastNav=l}n[r+1]=i.createChildNavList(n[r].lastNav)}n[s].append(o),n[s].lastNav=o})},parseOps:function(t){var a;return a=t.jquery?{$nav:t}:t,a.$scope=a.$scope||e(document.body),a.depth=a.depth||2,a}},init:function(e){e=this.helpers.parseOps(e),e.$nav.attr("data-toggle","toc");var t=this.helpers.createChildNavList(e.$nav),a=this.helpers.getTopLevel(e.$scope),r=this.helpers.getHeadings(e.$scope,e.depth,a);this.helpers.populateNav(t,e.depth,a,r)}},e(function(){e('nav[data-toggle="toc"]').each(function(t,a){var r=e(a);Toc.init(r)})})}(jQuery);