!function(e){var t={};function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=2)}([function(e,t,i){!function(t){"use strict";var i,r,n=!1;function o(e){if("undefined"!=typeof document&&!n){var t=document.documentElement;r=window.pageYOffset,document.documentElement.scrollHeight>window.innerHeight?t.style.width="calc(100% - "+function(){if(void 0!==i)return i;var e=document.documentElement,t=document.createElement("div");return t.setAttribute("style","width:99px;height:99px;position:absolute;top:-9999px;overflow:scroll;"),e.appendChild(t),i=t.offsetWidth-t.clientWidth,e.removeChild(t),i}()+"px)":t.style.width="100%",t.style.position="fixed",t.style.top=-r+"px",t.style.overflow="hidden",n=!0}}function s(){if("undefined"!=typeof document&&n){var e=document.documentElement;e.style.width="",e.style.position="",e.style.top="",e.style.overflow="",window.scroll(0,r),n=!1}}var a={on:o,off:s,toggle:function(){n?s():o()}};void 0!==e.exports?e.exports=a:t.noScroll=a}(window)},function(e,t,i){"use strict";
/*! npm.im/object-fit-images 3.2.4 */var r="bfred-it:object-fit-images",n=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,o="undefined"==typeof Image?{style:{"object-position":1}}:new Image,s="object-fit"in o.style,a="object-position"in o.style,c="background-size"in o.style,l="string"==typeof o.currentSrc,u=o.getAttribute,d=o.setAttribute,f=!1;function p(e,t,i){var r="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+(t||1)+"' height='"+(i||0)+"'%3E%3C/svg%3E";u.call(e,"src")!==r&&d.call(e,"src",r)}function g(e,t){e.naturalWidth?t(e):setTimeout(g,100,e,t)}function v(e){var t=function(e){for(var t,i=getComputedStyle(e).fontFamily,r={};null!==(t=n.exec(i));)r[t[1]]=t[2];return r}(e),i=e[r];if(t["object-fit"]=t["object-fit"]||"fill",!i.img){if("fill"===t["object-fit"])return;if(!i.skipTest&&s&&!t["object-position"])return}if(!i.img){i.img=new Image(e.width,e.height),i.img.srcset=u.call(e,"data-ofi-srcset")||e.srcset,i.img.src=u.call(e,"data-ofi-src")||e.src,d.call(e,"data-ofi-src",e.src),e.srcset&&d.call(e,"data-ofi-srcset",e.srcset),p(e,e.naturalWidth||e.width,e.naturalHeight||e.height),e.srcset&&(e.srcset="");try{!function(e){var t={get:function(t){return e[r].img[t||"src"]},set:function(t,i){return e[r].img[i||"src"]=t,d.call(e,"data-ofi-"+i,t),v(e),t}};Object.defineProperty(e,"src",t),Object.defineProperty(e,"currentSrc",{get:function(){return t.get("currentSrc")}}),Object.defineProperty(e,"srcset",{get:function(){return t.get("srcset")},set:function(e){return t.set(e,"srcset")}})}(e)}catch(e){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}!function(e){if(e.srcset&&!l&&window.picturefill){var t=window.picturefill._;e[t.ns]&&e[t.ns].evaled||t.fillImg(e,{reselect:!0}),e[t.ns].curSrc||(e[t.ns].supported=!1,t.fillImg(e,{reselect:!0})),e.currentSrc=e[t.ns].curSrc||e.src}}(i.img),e.style.backgroundImage='url("'+(i.img.currentSrc||i.img.src).replace(/"/g,'\\"')+'")',e.style.backgroundPosition=t["object-position"]||"center",e.style.backgroundRepeat="no-repeat",e.style.backgroundOrigin="content-box",/scale-down/.test(t["object-fit"])?g(i.img,(function(){i.img.naturalWidth>e.width||i.img.naturalHeight>e.height?e.style.backgroundSize="contain":e.style.backgroundSize="auto"})):e.style.backgroundSize=t["object-fit"].replace("none","auto").replace("fill","100% 100%"),g(i.img,(function(t){p(e,t.naturalWidth,t.naturalHeight)}))}function h(e,t){var i=!f&&!e;if(t=t||{},e=e||"img",a&&!t.skipTest||!c)return!1;"img"===e?e=document.getElementsByTagName("img"):"string"==typeof e?e=document.querySelectorAll(e):"length"in e||(e=[e]);for(var n=0;n<e.length;n++)e[n][r]=e[n][r]||{skipTest:t.skipTest},v(e[n]);i&&(document.body.addEventListener("load",(function(e){"IMG"===e.target.tagName&&h(e.target,{skipTest:t.skipTest})}),!0),f=!0,e="img"),t.watchMQ&&window.addEventListener("resize",h.bind(null,e,{skipTest:t.skipTest}))}h.supportsObjectFit=s,h.supportsObjectPosition=a,function(){function e(e,t){return e[r]&&e[r].img&&("src"===t||"srcset"===t)?e[r].img:e}a||(HTMLImageElement.prototype.getAttribute=function(t){return u.call(e(this,t),t)},HTMLImageElement.prototype.setAttribute=function(t,i){return d.call(e(this,t),t,String(i))})}(),e.exports=h},function(e,t,i){e.exports=i(3)},function(e,t,i){"use strict";i.r(t);var r,n,o,s,a,c,l=i(1),u=i.n(l),d=(r=$(".js-slider-header-wrap"),n=$(".js-slider-products-wrap"),$(".js-slider-products"),o=$(".js-slider-reviews-wrap"),{initReviewsSlider:function(){o.each((function(e){var t=$(this);t.addClass("swiper-slider-review-"+e);var i=t.data("drag-size")?t.data("drag-size"):50;new Swiper(".swiper-slider-review-"+e,{direction:"horizontal",slidesPerView:1,autoHeight:!0,scrollbar:{el:".js-slider-reviews-scrollbar",draggable:!0,dragSize:i},breakpoints:{480:{slidesPerView:1},640:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:3}}})}))},initHeaderSlider:function(){r.each((function(e){var t=$(this);t.addClass("swiper-slider-header-"+e);var i=t.data("drag-size")?t.data("drag-size"):50;new Swiper(".swiper-slider-header-"+e,{direction:"horizontal",slidesPerView:1,autoplay:!0,effect:"fade",scrollbar:{el:".js-slider-header-scrollbar",draggable:!0,dragSize:i}})}))},initProductSlider:function(){$(".js-slider-product-for").not(".slick-initialized").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".js-slider-product-nav"}),$(".js-slider-product-nav").not(".slick-initialized").slick({slidesToShow:3,slidesToScroll:1,asNavFor:".js-slider-product-for",dots:!1,focusOnSelect:!0})},initProductsSlider:function(){n.each((function(e){var t=$(this);t.addClass("swiper-slider-"+e);var i=t.data("drag-size")?t.data("drag-size"):50;new Swiper(".swiper-slider-"+e,{direction:"horizontal",slidesPerView:1,scrollbar:{el:".js-slider-products-scrollbar",draggable:!0,dragSize:i},breakpoints:{480:{slidesPerView:2},640:{slidesPerView:2},768:{slidesPerView:2},1024:{slidesPerView:3}}})}))},destroyProductsSlider:function(){swiperProducts.destroy()},init:function(){d.initHeaderSlider(),d.initReviewsSlider()}}),f=d,p=function(){var e=$(".js-btn-accordeon"),t=$(".js-info-accordeon"),i=$(".js-tab"),r=$(".js-product-all"),n=$(".js-product-show"),o=$(".js-list-prod"),s=$(".js-catalog-count"),a=$(".js-product"),c=$(".js-btn-catalog"),l=$(".js-review"),u=$(".js-reviews-all"),d=$(".js-reviews-show"),f=$(".js-btn-reviews");function g(e){var t=$('.js-list-prod[data-target="'.concat(e,'"]'));o.removeClass("active"),t.addClass("active")}return{openFaqContent:function(){e.on("click",(function(i){i.preventDefault();var r=$(this),n=r.parents(".js-accordeon");r.hasClass("active")||(n.find(t).slideUp(700),n.find(e).removeClass("active")),r.toggleClass("active"),r.next(t).slideToggle()}))},highlightingActiveTab:function(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.href;e=e.replace(/[\[\]]/g,"\\$&");var i=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),r=i.exec(t);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}("id");if(e){var t=$("#".concat(e));i.removeClass("active"),t.addClass("active"),g(e)}},showListProducts:function(){i.click((function(e){e.preventDefault();var t=$(this),r=t.prop("id");i.removeClass("active"),t.addClass("active"),g(r),p.calculateProducts()}))},showCatalog:function(){c.click((function(e){e.preventDefault();var t=$(this);t.parent(o).find(".js-catalog-hide").addClass("show"),p.calculateProducts(),t.hide()}))},calculateProducts:function(){var e=s.parent(".js-list-prod.active"),t=e.find(a).length,i=e.find(".js-catalog-show").find(a).length;!function(e,t){e==t?c.hide():c.show()}(i,t),e.find(".js-catalog-hide").hasClass("show")?(e.find(n).html(t),e.find(c).hide()):(e.find(n).html(i),e.find(r).html(t))},calculateReviews:function(){$(".js-reviews-show-list").hasClass("show")?(d.html(l.length),c.hide()):u.html(l.length)},showReviews:function(){f.click((function(e){e.preventDefault();var t=$(this);$(".js-reviews-show-list").addClass("show"),p.calculateReviews(),t.hide()}))},init:function(){p.openFaqContent(),p.highlightingActiveTab(),p.showListProducts(),p.showCatalog(),p.calculateProducts(),p.calculateReviews(),p.showReviews()}}}(),g=p,v=i(0),h=i.n(v),w=(s=$(".js-popup"),a=$(".js-show-popup"),c=$(".js-overlay"),{initPopUp:function(){a.click((function(e){e.preventDefault();var t=$(this),i=$(t.data("target"));t.toggleClass("active"),i.toggleClass("active"),c.addClass("active"),$(".menu-mobile").removeClass("menu-mobile--active"),$(".js-burger").removeClass("burger--active"),h.a.on()}))},closePopup:function(){$(".js-close").click((function(e){e.preventDefault(),s.removeClass("active"),a.removeClass("active"),c.removeClass("active"),h.a.off()}))},init:function(){w.initPopUp(),w.closePopup()}}),m=w,b=$(document),j=$(window),y=function(){var e=$(".js-burger"),t=$(".js-scroll"),i=$(".js-overlay"),r=$(".js-fixed-menu"),n=r.height();function o(e){var t=e.offset().top;$("html, body").animate({scrollTop:t-15},800)}return{showFixedMenu:function(){b.scroll((function(){var e=b.scrollTop(),t="none",i="none";e<n?((e/n).toFixed(2),r.removeClass("menu--fixed")):(1,t="0px 0px 20px rgba(52, 49, 89, 0.1)",i="white",r.addClass("menu--fixed")),r.css({boxShadow:t,background:i})}))},showMobileMenu:function(){e.click((function(t){t.preventDefault(),$($(this).data("target")).toggleClass("menu-mobile--active"),e.toggleClass("burger--active"),i.toggleClass("active"),h.a.toggle()}))},scrollToTarget:function(){t.click((function(t){t.preventDefault(),h.a.off();var r=$(this),n=r.attr("href"),s=$(n);r.data("target")&&o($(r.data("target")));s.length&&o(s),$(".menu-mobile").removeClass("menu-mobile--active"),e.removeClass("burger--active"),i.removeClass("active")}))},init:function(){y.showMobileMenu(),y.showFixedMenu()}}}(),P=y;function S(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function C(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?S(Object(i),!0).forEach((function(t){T(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):S(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function T(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var O=function(){var e={WIN_WIDTH:0},t={afterResize:!1,onInit:!1};function i(){return{WIN_WIDTH:j.width()}}function r(){var r,n,o,s;j.resize((r=function(){e=i(),t.afterResize&&t.afterResize(e)},n=100,function(){var e=this,t=arguments,i=function(){s=null,o||r.apply(e,t)},a=o&&!s;clearTimeout(s),s=setTimeout(i,n),a&&r.apply(e,t)}))}return{layoutHandler:function(n){n&&(t=C(C({},t),n)),e=i(),t.onInit&&t.onInit(e),r()}}}();$((function(){for(var e=(new Date).getFullYear(),t=document.getElementsByClassName("year"),i=0;i<t.length;i++){t[i].innerHTML=e}f.init(),g.init(),m.init(),P.init(),u()(),O.layoutHandler({onInit:function(e){f.initProductSlider(),e.WIN_WIDTH>=480?f.initProductsSlider():e.WIN_WIDTH<=479&&f.destroyProductsSlider()},afterResize:function(e){f.initProductSlider(),e.WIN_WIDTH>=480?f.initProductsSlider():e.WIN_WIDTH<=479&&f.destroyProductsSlider()}})}))}]);