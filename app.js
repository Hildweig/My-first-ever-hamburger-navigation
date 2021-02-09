const hamburger = document.querySelector('.menu-bar');
const navigation_links = document.querySelector('.navigation-links');
hamburger.addEventListener('click',()=>{
     navigation_links.classList.toggle('show');
})