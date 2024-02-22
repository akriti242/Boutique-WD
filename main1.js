
AOS.init({

  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


let goTopBtn = document.getElementById("goTopBtn");
window.onscroll = function(){
  scrollFunction();
};

function scrollFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    goTopBtn.style.display = " flex"
  }
  else{
    goTopBtn.style.display  = "none"
  }
}



// typing try js
var typed = new Typed(".auto-type",{
  strings: ["SALE"],
  typeSpeed: 250,
 
  loop:true
})


// on scroll nav bar trial


// document.addEventListener('scroll', () =>{
//   const nav = document.querySelector('.b-g');
// if (window.scrollY > 0){
//   nav.classList.add('scrolled');
// }
// else{
//   nav.classList.remove('scrolled')
// }
// })