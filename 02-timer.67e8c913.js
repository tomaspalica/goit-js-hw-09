!function(){var e=document.querySelector("#datetime-picker"),t=document.querySelector("button[data-start]"),n=document.querySelector("span[data-days]"),a=document.querySelector("span[data-hours]"),o=document.querySelector("span[data-minutes]"),r=document.querySelector("span[data-seconds]");t.setAttribute("disabled","");var u,s=null,d={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:function(e){e[0]<=new Date?(window.alert("Please choose a date in the future"),t.setAttribute("disabled","")):(setInterval((function(){var t,n,a,o,r,s,d,c,i;t=e[0].getTime()-new Date,r=24*(o=60*(a=60*(n=1e3))),s=Math.floor(t/r),d=Math.floor(t%r/o),c=Math.floor(t%r%o/a),i=Math.floor(t%r%o%a/n),u={days:s,hours:d,minutes:c,seconds:i}}),1e3),t.removeAttribute("disabled"))}},c=function(e){return e.toString().padStart(2,"0")};t.addEventListener("click",(function(){clearInterval(s),s=setInterval((function(){n.textContent=c(u.days),a.textContent=c(u.hours),o.textContent=c(u.minutes),r.textContent=c(u.seconds)}),1e3)})),flatpickr(e,d)}();
//# sourceMappingURL=02-timer.67e8c913.js.map
