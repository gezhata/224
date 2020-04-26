"use strict";(function(e){var t={languages:{en:{lang:"EN",content:{copyright:"Copyright. All rights reserved.",links:['<a href="terms.html" target="_blank"></a><span style="font-size:inherit;line-height:1.4;"> </span>','<a href="privacy.html" target="_blank">Privacy Policy</a><span style="font-size:inherit;line-height:1.4;"></span>','<a class="footer__feedback-btn" href="feedback.html" target="_blank"></a>'],confirmMassage:'By clicking the «order» button you confirm that you have read <a href="privacy.html" target="_blank">Privacy Policy</a> and give your consent to the procession of your personal data'}}},getLang:function(e){return e?e:this.languages.en.lang},getStyle:function(e){return window.getComputedStyle?getComputedStyle(e,""):e.currentStyle},createElement:function(t,i){t=t||"DIV",i=i||"default-class";var n=e.createElement(t);return n.className=i,n},appendElement:function(t,i){var n=e.querySelector(i);n.appendChild(t)},showElement:function(e){e.style.display="block"},hideElement:function(e){e.style.display="none"},init:function(){var t=this.appendElement,i=(this.getStyle,this.getLang()),n=0,a=this.languages,r=this.createElement("DIV","footer"),o=this.createElement("DIV","footer__list"),l=this.createElement("DIV","footer__copyright"),c=this.createElement("P","footer__cm");t(r,"BODY"),r.innerHTML='<div class="footer__in"></div>',t(l,".footer__in"),t(o,".footer__in"),t(c,".footer__in");for(var A in a)a[A].lang===i&&(n=a[A].content);0===n&&(n=a.en.content);for(var s in n){if("copyright"===s){var g=n[s];l.innerHTML=(new Date).getFullYear()+" "+g}if("links"===s){var h=n[s].join("");o.innerHTML=h}if("confirmMassage"===s){var d=n[s];c.innerHTML=d}}var y=e.querySelectorAll(".footer a"),m=e.querySelector(".footer__feedback-btn");o.style.cssText="padding:0px;margin:10px 0 0;line-height:1.4;",r.style.cssText="text-align:center;font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:1;color:#474747;padding:40px 0;background: #fff;",y.forEach(function(e){e.style.cssText="display:inline-block;vertical-align:bottom;padding:0 5px;font-size:inherit;line-height:inherit;color:inherit;text-decoration:none;"}),m.style.cssText='display:inline-block;text-align:center;font-family:Helvetica,Arial,sans-serif;font-size:inherit;line-height:inherit;color:inherit;text-decoration:none;padding-left:27px;cursor:pointer;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAMCAYAAAHzImYpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0NmFlN2NhOS0yMDM3LWJkNDYtOTlmMi0yMjI1ZjJjZDM4YmYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODU0RUNENzAxRUUwMTFFOEIyODRFMEU4NzMyRTQ4NEQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODU0RUNENkYxRUUwMTFFOEIyODRFMEU4NzMyRTQ4NEQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTA3NzI0NjctNmFmMy00MGFjLWIyNDktNjlkNmQ4NTcyZDhlIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YTBhMTc2ZDgtNjRiNC04MTRhLWI5ZjctMTQxNjY3YjYzMTcyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+89GJJAAAAVpJREFUeNpibGqbPJuBgeEvEDOzAIkXQPwciCUBAogRKDMDyGAAiWaAGAABxAhVex6IpwFxLhDrAQQQXBkMgJQvA+JDUL4dE5CYgKRgAkAAgbTcBTIMgfgTAybgA9kB0rUfqqAOiOdDJRcAcQ1UfD/ILhcgZkNSIAvEtVA2SNwFIIBA1vUDGZwM2MF3kCkyQByKQ8EaJqjkJSySV4E4hAXK0QPiz0AsD+U/AmIeWKD4A7EyEPMCsQ4Q/4dKFgHxXZCCc1AM8sFHJN+sBjEAAgzki3tA2gbqd0EG4sE7IOYH4iNM0LhxA+KjQKwKxI+JwBpAfAKqbxnIEAloTOgD8WWooT04bAfF/XJostGF6pMAGcIEVSANxCuB+CcQVwNxKRDvBOJGIN4O5ZeBIgqIV0HVgwATKNDMgHgdNE04IdnaDcXoIAlKawHxZCBWAxlyHBpveQykgwdA/BYAbmlSeKHjCzAAAAAASUVORK5CYII=");background-position:2px 50%;background-repeat:no-repeat;',c.style.cssText="margin: 20px 0 0;font-family:inherit;line-height:inherit;padding:0 5px";var p=function(e){var t=e.target;"A"===t.tagName&&(t.style.textDecoration="underline")},I=function(e){var t=e.target;"A"===t.tagName&&(t.style.textDecoration="none")};r.addEventListener("mouseover",p),r.addEventListener("mouseout",I)}};t.init()})(document);