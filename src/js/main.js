// Best Sellers Carousel 
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

// Modal Close Function
var modal = document.querySelector('.modal');

function closeModal(){
  console.log(this);
  modal.classList.add('animateOut');

  setTimeout(function(){
    modal.classList.remove('visible', 'animateIn', 'animateOut');
  }, 1000)
}

// Modal Open

var modalTrigger = document.querySelectorAll('.btn--signup');

modalTrigger.forEach(addTrigger);

function addTrigger(button, i){
  button.addEventListener('click', function() {

    modal.classList.add('visible', 'animateIn');
    // console.log(modal.childNodes);
  });
}