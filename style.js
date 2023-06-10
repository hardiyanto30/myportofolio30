const humberger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

humberger.addEventListener("click", () => {
    humberger.classList.toggle("is-active");
    menu.classList.toggle("menu-active");
});

// footer
function showFooterContent() {
    var footerContent = document.querySelector('.footer-content');
    footerContent.classList.add('show');
  }
  
  window.addEventListener('load', showFooterContent);
  