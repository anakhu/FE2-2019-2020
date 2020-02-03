!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),o=r(2);function c(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.products=[],this.router=new i.Router,this.checkboxService=new o.CheckboxService,this.checkboxService.subscribe(this.onFilterChange),this.initSingleProductPage(),this.init()}return n(e,[{key:"init",value:function(){var e=this;fetch("http://localhost:3006/products",{headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e.products=t,e.generateAllProductsHTML(e.products),e.initRoutes(),window.dispatchEvent(new HashChangeEvent("hashchange"))}))}},{key:"initRoutes",value:function(){this.router.addRoute("",this.renderHomePage.bind(this)),this.router.addRoute("#filter",this.renderFilterResults.bind(this)),this.router.addRoute("#product",this.renderSingleProduct.bind(this)),this.router.addRoute("404",this.renderErrorPage.bind(this))}},{key:"onFilterChange",value:function(e){location.hash=e}},{key:"renderHomePage",value:function(){this.renderProductsPage(this.products)}},{key:"initSingleProductPage",value:function(){var e=this;this.singleProductPage=document.querySelector(".single-product"),this.singleProductPage.addEventListener("click",(function(t){if(e.singleProductPage.classList.contains("visible")){var r=t.target;(r.classList.contains("close")||r.classList.contains("overlay"))&&(location.hash=e.checkboxService.getCurrentState())}}))}},{key:"renderProductsPage",value:function(e){var t=document.querySelector(".all-products"),r=document.querySelectorAll(".all-products .products-list > li");[].concat(c(r)).forEach((function(e){e.classList.add("hidden")})),[].concat(c(r)).forEach((function(t){e.forEach((function(e){Number(t.dataset.index)===Number(e.id)&&t.classList.remove("hidden")}))})),t.classList.add("visible")}},{key:"renderFilterResults",value:function(){var e=location.hash.split("#filter/")[1].trim();try{e=JSON.parse(decodeURI(e))}catch(e){return window.location.hash="#",!1}var t=this.checkboxService.renderFilters(this.products,e);this.renderProductsPage(t)}},{key:"renderSingleProduct",value:function(){var e=document.querySelector(".single-product"),t=document.querySelector(".preview-large"),r=location.hash.split("#product/")[1].trim();this.products.length&&this.products.forEach((function(e){Number(e.id)===Number(r)&&(t.querySelector("h3").innerText=e.name,t.querySelector("img").setAttribute("src",e.image.large),t.querySelector("p").innerText=e.description)})),e.classList.add("visible")}},{key:"generateAllProductsHTML",value:function(e){var t=document.querySelector(".all-products .products-list"),r=document.getElementById("products-template").innerHTML,n=Handlebars.compile(r);t.innerHTML=n(e),t.querySelectorAll("li").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault(),window.location.hash="product/"+e.dataset.index}))}))}},{key:"renderErrorPage",value:function(){document.querySelector(".error").classList.add("visible")}}]),e}())},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();t.Router=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.routes={404:function(){console.log("Not found")}},this.mainContentPages=document.querySelectorAll(".main-content .page"),window.addEventListener("hashchange",(function(){t.render(decodeURI(window.location.hash))}))}return n(e,[{key:"addRoute",value:function(e,t){this.routes[e]=t}},{key:"render",value:function(e){var t=e.split("/")[0];[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(this.mainContentPages)).forEach((function(e){e.classList.remove("visible")})),this.routes[t]?this.routes[t]():this.routes[404]()}}]),e}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CheckboxService=void 0;var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(3);function o(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}t.CheckboxService=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._checkbox=document.querySelectorAll(".all-products input[type=checkbox]"),this._observable=new i.Observable,this.filters={},this.setInitialState(),this.init()}return n(e,[{key:"init",value:function(){var e=this,t=this;this._checkbox.forEach((function(r){r.addEventListener("click",e.onCheckboxClick.bind(t))})),document.querySelector(".filters button").addEventListener("click",(function(t){t.preventDefault(),e.filters={},e._observable.next("#")}))}},{key:"subscribe",value:function(e){this._observable.subscribe(e)}},{key:"onCheckboxClick",value:function(e){var t=e.target,r=t.getAttribute("name");if(t.checked)this.filters[r]&&this.filters[r].length||(this.filters[r]=[]),this.filters[r].push(t.value);else if(this.filters[r]&&this.filters[r].length&&-1!==this.filters[r].indexOf(t.value)){var n=this.filters[r].indexOf(t.value);this.filters[r].splice(n,1),this.filters[r].length||delete this.filters[r]}this._observable.next(this.createQueryHash(this.filters))}},{key:"setInitialState",value:function(){if(location.hash.includes("#filters/")){var e=location.hash.split("#filter/")[1].trim();try{this.filters=JSON.parse(decodeURI(e))}catch(e){this.filters={}}}}},{key:"clearCheckbox",value:function(){this._checkbox.forEach((function(e){e.checked=!1}))}},{key:"renderFilters",value:function(e,t){e=[].concat(o(e));var r=[],n=!1;return this.clearCheckbox(),["manufacturer","storage","os","camera"].forEach((function(i){t[i]&&t[i].length&&(n&&(e=r,r=[]),t[i].forEach((function(t){e.forEach((function(e){"number"==typeof e.specs[i]&&e.specs[i]===Number(t)&&(r.push(e),n=!0),"string"==typeof e.specs[i]&&-1!==e.specs[i].toLowerCase().indexOf(t)&&(r.push(e),n=!0)})),i&&t&&([].concat(o(document.querySelectorAll("input[name="+i+"]"))).filter((function(e){return e.value===t}))[0].checked=!0)})))})),r}},{key:"getCurrentState",value:function(){return this.createQueryHash(this.filters)}},{key:"createQueryHash",value:function(e){return Object.keys(e).length>0?"#filter/"+JSON.stringify(e):"#"}}]),e}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();t.Observable=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.subscribers=[]}return n(e,[{key:"subscribe",value:function(e){this.subscribers.push(e)}},{key:"next",value:function(e){this.subscribers.forEach((function(t){t(e)}))}}]),e}()}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGVja2JveC5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9vYnNlcnZhYmxlLmpzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwidGhpcyIsInByb2R1Y3RzIiwicm91dGVyIiwiUm91dGVyIiwiY2hlY2tib3hTZXJ2aWNlIiwiQ2hlY2tib3hTZXJ2aWNlIiwic3Vic2NyaWJlIiwib25GaWx0ZXJDaGFuZ2UiLCJpbml0U2luZ2xlUHJvZHVjdFBhZ2UiLCJpbml0IiwiZmV0Y2giLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZ2VuZXJhdGVBbGxQcm9kdWN0c0hUTUwiLCJpbml0Um91dGVzIiwid2luZG93IiwiZGlzcGF0Y2hFdmVudCIsIkhhc2hDaGFuZ2VFdmVudCIsImFkZFJvdXRlIiwicmVuZGVySG9tZVBhZ2UiLCJyZW5kZXJGaWx0ZXJSZXN1bHRzIiwicmVuZGVyU2luZ2xlUHJvZHVjdCIsInJlbmRlckVycm9yUGFnZSIsImxvY2F0aW9uIiwiaGFzaCIsInJlbmRlclByb2R1Y3RzUGFnZSIsInNlbGYiLCJzaW5nbGVQcm9kdWN0UGFnZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiY2xpY2tlZCIsInRhcmdldCIsImdldEN1cnJlbnRTdGF0ZSIsInBhZ2UiLCJhbGxQcm9kdWN0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwicHJvZHVjdCIsImFkZCIsIml0ZW0iLCJOdW1iZXIiLCJkYXRhc2V0IiwiaW5kZXgiLCJpZCIsInJlbW92ZSIsImZpbHRlciIsInNwbGl0IiwidHJpbSIsIkpTT04iLCJwYXJzZSIsImRlY29kZVVSSSIsImUiLCJyZXN1bHRzIiwicmVuZGVyRmlsdGVycyIsImNvbnRhaW5lciIsImxlbmd0aCIsImlubmVyVGV4dCIsInNldEF0dHJpYnV0ZSIsImltYWdlIiwibGFyZ2UiLCJkZXNjcmlwdGlvbiIsImxpc3QiLCJ0aGVUZW1wbGF0ZVNjcmlwdCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwidGhlVGVtcGxhdGUiLCJIYW5kbGViYXJzIiwiY29tcGlsZSIsImxpIiwicHJldmVudERlZmF1bHQiLCJyb3V0ZXMiLCJjb25zb2xlIiwibG9nIiwibWFpbkNvbnRlbnRQYWdlcyIsInJlbmRlciIsInJvdXRlIiwiYWN0aW9uIiwidXJsIiwidGVtcCIsIl9jaGVja2JveCIsIl9vYnNlcnZhYmxlIiwiT2JzZXJ2YWJsZSIsImZpbHRlcnMiLCJzZXRJbml0aWFsU3RhdGUiLCJvbkNoZWNrYm94Q2xpY2siLCJuZXh0IiwiZm4iLCJzcGVjTmFtZSIsImdldEF0dHJpYnV0ZSIsImNoZWNrZWQiLCJwdXNoIiwiaW5kZXhPZiIsInNwbGljZSIsImNyZWF0ZVF1ZXJ5SGFzaCIsImluY2x1ZGVzIiwiZXJyIiwicmVzdWx0IiwiaXNGaWx0ZXJlZCIsImNsZWFyQ2hlY2tib3giLCJzcGVjcyIsInRvTG93ZXJDYXNlIiwiY2hlY2tib3giLCJrZXlzIiwic3RyaW5naWZ5Iiwic3Vi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a0JQLEtBQUt1RCxVQUFVckIsR0FHOUIsUSwrVUM3SEZELFcsV0FDVCxjLDRGQUFjLFNBQ1Z4RixLQUFLK0csWUFBYyxHLDRDQUdiQyxHQUNOaEgsS0FBSytHLFlBQVlkLEtBQUtlLEssMkJBR3JCakcsR0FDRGYsS0FBSytHLFlBQVlwRSxTQUFRLFNBQUNxRSxHQUN2QkEsRUFBV2pHLFUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInO1xuaW1wb3J0IHsgQ2hlY2tib3hTZXJ2aWNlIH0gZnJvbSAnLi9jaGVja2JveC5zZXJ2aWNlJztcblxuY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xuICAgICAgICB0aGlzLnJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcbiAgICAgICAgdGhpcy5jaGVja2JveFNlcnZpY2UgPSBuZXcgQ2hlY2tib3hTZXJ2aWNlKCk7XG4gICAgICAgIHRoaXMuY2hlY2tib3hTZXJ2aWNlLnN1YnNjcmliZSh0aGlzLm9uRmlsdGVyQ2hhbmdlKTtcbiAgICAgICAgdGhpcy5pbml0U2luZ2xlUHJvZHVjdFBhZ2UoKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNi9wcm9kdWN0cycsIHsgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfX0pXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlQWxsUHJvZHVjdHNIVE1MKHRoaXMucHJvZHVjdHMpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFJvdXRlcygpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBIYXNoQ2hhbmdlRXZlbnQoJ2hhc2hjaGFuZ2UnKSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0Um91dGVzKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5hZGRSb3V0ZSgnJywgdGhpcy5yZW5kZXJIb21lUGFnZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIuYWRkUm91dGUoJyNmaWx0ZXInLCB0aGlzLnJlbmRlckZpbHRlclJlc3VsdHMuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMucm91dGVyLmFkZFJvdXRlKCcjcHJvZHVjdCcsIHRoaXMucmVuZGVyU2luZ2xlUHJvZHVjdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIuYWRkUm91dGUoJzQwNCcsIHRoaXMucmVuZGVyRXJyb3JQYWdlLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIG9uRmlsdGVyQ2hhbmdlKGRhdGEpIHtcbiAgICAgICAgbG9jYXRpb24uaGFzaCA9IGRhdGE7XG4gICAgfVxuXG4gICAgcmVuZGVySG9tZVBhZ2UoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyUHJvZHVjdHNQYWdlKHRoaXMucHJvZHVjdHMpO1xuICAgIH1cblxuICAgIGluaXRTaW5nbGVQcm9kdWN0UGFnZSgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2luZ2xlUHJvZHVjdFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLXByb2R1Y3QnKTtcbiAgICAgICAgdGhpcy5zaW5nbGVQcm9kdWN0UGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICBpZiAoc2VsZi5zaW5nbGVQcm9kdWN0UGFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc2libGUnKSkge1xuICAgICAgICAgICAgICAgY29uc3QgY2xpY2tlZCA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgICAgICAgICAgaWYgKGNsaWNrZWQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbG9zZScpIHx8IGNsaWNrZWQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvdmVybGF5JykpIHtcbiAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gc2VsZi5jaGVja2JveFNlcnZpY2UuZ2V0Q3VycmVudFN0YXRlKCk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyUHJvZHVjdHNQYWdlKGRhdGEpIHtcbiAgICAgICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtcHJvZHVjdHMnKTtcbiAgICAgICAgY29uc3QgYWxsUHJvZHVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWxsLXByb2R1Y3RzIC5wcm9kdWN0cy1saXN0ID4gbGknKTtcblxuICAgICAgICBbLi4uYWxsUHJvZHVjdHNdLmZvckVhY2goKHByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgcHJvZHVjdC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgWy4uLmFsbFByb2R1Y3RzXS5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgIGlmIChOdW1iZXIocHJvZHVjdC5kYXRhc2V0LmluZGV4KSA9PT0gTnVtYmVyKGl0ZW0uaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgcHJvZHVjdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcGFnZS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyRmlsdGVyUmVzdWx0cygpIHtcbiAgICAgICAgbGV0IGZpbHRlciA9IGxvY2F0aW9uLmhhc2guc3BsaXQoJyNmaWx0ZXIvJylbMV0udHJpbSgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZmlsdGVyID0gSlNPTi5wYXJzZShkZWNvZGVVUkkoZmlsdGVyKSlcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIyc7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHRzID0gdGhpcy5jaGVja2JveFNlcnZpY2UucmVuZGVyRmlsdGVycyh0aGlzLnByb2R1Y3RzLCBmaWx0ZXIpO1xuICAgICAgICB0aGlzLnJlbmRlclByb2R1Y3RzUGFnZShyZXN1bHRzKTtcbiAgICB9XG5cbiAgICByZW5kZXJTaW5nbGVQcm9kdWN0KCkge1xuICAgICAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpbmdsZS1wcm9kdWN0Jyk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3LWxhcmdlJyk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gbG9jYXRpb24uaGFzaC5zcGxpdCgnI3Byb2R1Y3QvJylbMV0udHJpbSgpO1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoaXRlbS5pZCkgPT09IE51bWJlcihpbmRleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2gzJykuaW5uZXJUZXh0ID0gaXRlbS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignaW1nJykuc2V0QXR0cmlidXRlKCdzcmMnLCBpdGVtLmltYWdlLmxhcmdlKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3AnKS5pbm5lclRleHQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFnZS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVBbGxQcm9kdWN0c0hUTUwoZGF0YSkge1xuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1wcm9kdWN0cyAucHJvZHVjdHMtbGlzdCcpO1xuICAgICAgICBjb25zdCB0aGVUZW1wbGF0ZVNjcmlwdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0cy10ZW1wbGF0ZScpLmlubmVySFRNTDtcblxuICAgICAgICAvL2NvbXBpbGVcbiAgICAgICAgY29uc3QgdGhlVGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUodGhlVGVtcGxhdGVTY3JpcHQpO1xuICAgICAgICBsaXN0LmlubmVySFRNTCA9IHRoZVRlbXBsYXRlKGRhdGEpO1xuICAgICAgICBsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJykuZm9yRWFjaCgobGkpID0+IHtcbiAgICAgICAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGBwcm9kdWN0LyR7bGkuZGF0YXNldC5pbmRleH1gO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyRXJyb3JQYWdlKCkge1xuICAgICAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJyk7XG4gICAgICAgIHBhZ2UuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgIH1cbn1cblxuY29uc3QgYXBwID0gbmV3IEFwcCgpOyIsImV4cG9ydCBjbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJvdXRlcyA9IHtcbiAgICAgICAgICAgICc0MDQnOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vdCBmb3VuZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubWFpbkNvbnRlbnRQYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLWNvbnRlbnQgLnBhZ2UnKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgdGhpcy5yZW5kZXIoZGVjb2RlVVJJKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZFJvdXRlKHJvdXRlLCBhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5yb3V0ZXNbcm91dGVdID0gYWN0aW9uO1xuICAgIH1cblxuXG4gICAgcmVuZGVyKHVybCkge1xuICAgICAgICBsZXQgdGVtcCA9IHVybC5zcGxpdCgnLycpWzBdO1xuICAgICAgICBbLi4udGhpcy5tYWluQ29udGVudFBhZ2VzXS5mb3JFYWNoKChwYWdlKSA9PiB7XG4gICAgICAgICAgICBwYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yb3V0ZXNbdGVtcF0gPyB0aGlzLnJvdXRlc1t0ZW1wXSgpIDogdGhpcy5yb3V0ZXNbJzQwNCddKCk7XG4gICAgfVxufSIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiLi9vYnNlcnZhYmxlXCI7XG5cbmV4cG9ydCBjbGFzcyBDaGVja2JveFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9jaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbGwtcHJvZHVjdHMgaW5wdXRbdHlwZT1jaGVja2JveF0nKTtcbiAgICAgICAgdGhpcy5fb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMuZmlsdGVycyA9IHt9O1xuICAgICAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5fY2hlY2tib3guZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNoZWNrYm94Q2xpY2suYmluZChzZWxmKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJzIGJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJzID0ge307XG4gICAgICAgICAgICB0aGlzLl9vYnNlcnZhYmxlLm5leHQoJyMnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlKGZuKSB7XG4gICAgICAgIHRoaXMuX29ic2VydmFibGUuc3Vic2NyaWJlKGZuKTtcbiAgICB9XG5cblxuICAgIG9uQ2hlY2tib3hDbGljayhldmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGNvbnN0IHNwZWNOYW1lID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuXG4gICAgICAgIGlmICh0YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgaWYoISh0aGlzLmZpbHRlcnNbc3BlY05hbWVdICYmIHRoaXMuZmlsdGVyc1tzcGVjTmFtZV0ubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyc1tzcGVjTmFtZV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmlsdGVyc1tzcGVjTmFtZV0ucHVzaCh0YXJnZXQudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyc1tzcGVjTmFtZV0gJiYgdGhpcy5maWx0ZXJzW3NwZWNOYW1lXS5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAodGhpcy5maWx0ZXJzW3NwZWNOYW1lXS5pbmRleE9mKHRhcmdldC52YWx1ZSkgIT09IC0xKSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZmlsdGVyc1tzcGVjTmFtZV0uaW5kZXhPZih0YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyc1tzcGVjTmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICAgICAgICAgIGlmKCAhdGhpcy5maWx0ZXJzW3NwZWNOYW1lXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZmlsdGVyc1tzcGVjTmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29ic2VydmFibGUubmV4dCh0aGlzLmNyZWF0ZVF1ZXJ5SGFzaCh0aGlzLmZpbHRlcnMpKTtcblxuICAgIH1cblxuICAgIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgaWYgKGxvY2F0aW9uLmhhc2guaW5jbHVkZXMoJyNmaWx0ZXJzLycpKSB7XG4gICAgICAgICAgICBsZXQgZmlsdGVyID0gbG9jYXRpb24uaGFzaC5zcGxpdCgnI2ZpbHRlci8nKVsxXS50cmltKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVycyA9IEpTT04ucGFyc2UoZGVjb2RlVVJJKGZpbHRlcikpO1xuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcnMgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY2xlYXJDaGVja2JveCgpIHtcbiAgICAgICAgdGhpcy5fY2hlY2tib3guZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlckZpbHRlcnMocHJvZHVjdHMsIGZpbHRlcikge1xuICAgICAgICBjb25zdCBjcml0ZXJpYSA9IFsnbWFudWZhY3R1cmVyJywgJ3N0b3JhZ2UnLCAnb3MnLCAnY2FtZXJhJ107XG4gICAgICAgIHByb2R1Y3RzID0gWy4uLnByb2R1Y3RzXTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBsZXQgaXNGaWx0ZXJlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNsZWFyQ2hlY2tib3goKTtcblxuICAgICAgICBjcml0ZXJpYS5mb3JFYWNoKChjKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChmaWx0ZXJbY10gJiYgZmlsdGVyW2NdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChpc0ZpbHRlcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmaWx0ZXJbY10uZm9yRWFjaCgoZmlsdGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzLmZvckVhY2goKHByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvZHVjdC5zcGVjc1tjXSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwcm9kdWN0LnNwZWNzW2NdID09PSBOdW1iZXIoZmlsdGVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwcm9kdWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGaWx0ZXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHByb2R1Y3Quc3BlY3NbY10gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocHJvZHVjdC5zcGVjc1tjXS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocHJvZHVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRmlsdGVyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYyAmJiBmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFtuYW1lPSR7Y31dYCldLmZpbHRlcigoY2hlY2tib3gpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGVja2JveC52YWx1ZSA9PT0gZmlsdGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlbMF0uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGdldEN1cnJlbnRTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUXVlcnlIYXNoKHRoaXMuZmlsdGVycyk7XG4gICAgfVxuXG4gICAgY3JlYXRlUXVlcnlIYXNoKGZpbHRlcnMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGZpbHRlcnMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBgI2ZpbHRlci8ke0pTT04uc3RyaW5naWZ5KGZpbHRlcnMpfWA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyMnO1xuICAgIH1cblxufSIsImV4cG9ydCBjbGFzcyBPYnNlcnZhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVycyA9IFtdO1xuICAgIH1cblxuICAgIHN1YnNjcmliZShzdWJzY3JpYmVyKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnMucHVzaChzdWJzY3JpYmVyKTtcbiAgICB9XG5cbiAgICBuZXh0KGRhdGEpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVycy5mb3JFYWNoKChzdWJzY3JpYmVyKSA9PiB7XG4gICAgICAgICAgIHN1YnNjcmliZXIoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=