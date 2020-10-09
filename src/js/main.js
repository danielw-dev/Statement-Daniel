var mySwiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,
  centeredSlides: true,
  grabCursor: true,
  simulateTouch: true,
  effect: "coverflow",

  pagination: true,
  pagination: {
    el: ".swiper-pagination",
  },

  coverflowEffect: {
    rotate: 0,
    slideShadows: false,
    depth: 200,
    stretch: -20,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      initialSlide: 0,
    },
    1024: {
      slidesPerView: 3,
      initialSlide: 1,
      pagination: false,
    }
  }
});

// Mobile Navigation
var burgerMenu = document.getElementById('burgerMenu');
var navigation = document.getElementById('navigation');

console.log();
burgerMenu.addEventListener('click', function(){
  if(navigation.classList.contains("show")){
    navigation.classList.remove('show');
    navigation.classList.add('hide');
    burgerMenu.children[0].src = "./assets/svg/menu.svg";
    burgerMenu.children[0].classList.toggle('active');
  } else {
    navigation.classList.remove('hide');
    navigation.classList.add('show');
    burgerMenu.children[0].src = "./assets/svg/cross.svg";
    burgerMenu.children[0].classList.toggle('active');
  }
});