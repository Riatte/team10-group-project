let t=document.querySelector("header");$(document).on("click",'a[href^="#"]',(function(e){e.preventDefault(),"fixed"==getComputedStyle(t).position?$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top+-72},1e3):$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top},1e3)}));
//# sourceMappingURL=index.691c4824.js.map
