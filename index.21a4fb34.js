!function(){var e,t,n,o;e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),o=function(){var n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open")},t.addEventListener("click",(function(){o(),document.body.style.overflow=""})),n.addEventListener("click",(function(){o(),document.body.style.overflow=""})),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("is-open"),document.body.style.overflow="",t.setAttribute("aria-expanded",!1))}))}();
//# sourceMappingURL=index.21a4fb34.js.map