// Best Sellers Carousel

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,

    navText: [
      '<img src="./assets/svg/chevron-prev.svg" />',
      '<img src="./assets/svg/chevron-next.svg" />',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
      },
      768: {
        items: 2,
        dots: true,
        nav: true,
      },
      1024: {
        center: true,
        dots: false,
        nav: true,
        margin: 20,
        startPosition: 1,
      },
    },
  });
});

// Mobile Navigation
// var burgerMenu = document.getElementById("burgerMenu");
// var navigation = document.getElementById("navigation");
// var header = document.getElementsByTagName("header");

// burgerMenu.addEventListener("click", function () {
//   if (navigation.classList.contains("visible")) {
//     navigation.classList.add("animateOut");
//     header[0].classList.remove("fixed");

//     setTimeout(function () {
//       navigation.classList.remove("visible", "animateIn", "animateOut");
//       burgerMenu.children[0].src = "./assets/svg/menu.svg";
//       burgerMenu.children[0].classList.toggle("active");
//     }, 1000);
//   } else {
//     navigation.classList.add("visible", "animateIn");
//     burgerMenu.children[0].src = "./assets/svg/cross.svg";
//     burgerMenu.children[0].classList.toggle("active");
//     header[0].classList.add("fixed");
//   }
// });

var burgerMenu = $("#burgerMenu");
var burgerIcon = $(".burger__icon");
var navigation = $("#navigation");
var header = $("header");

//Could Also use .fadeIn() and .fadeOut() or .toggleFade();

$(burgerMenu).on("click", function () {
  if ($(navigation).hasClass("visible")) {
    $(navigation).addClass("animateOut");
    $(header).removeClass("fixed");

    setTimeout(function () {
      $(navigation).removeClass("visible animateIn animateOut");
      $(burgerIcon).attr("src", "./assets/svg/menu.svg").toggleClass("active");
    }, 1000);
  } else {
    $(navigation).addClass("visible animateIn");
    $(burgerIcon).attr("src", "./assets/svg/cross.svg").toggleClass("active");
    $(header).addClass("fixed");
  }
});

// Modal Open
// var modal = document.querySelector(".modal");

// var modalTrigger = document.querySelectorAll(".btn--signup");

// for (var i = 0; i < modalTrigger.length; i++) {
//   modalTrigger[i].addEventListener("click", function () {
//     modal.classList.add("visible", "animateIn");
//   });
// }

// Modal Close

// function closeModal() {
//   modal.classList.add("animateOut");

//   setTimeout(function () {
//     modal.classList.remove("visible", "animateIn", "animateOut");
//   }, 1000);
// }

var modal = $(".modal");

$(".btn--signup").on("click", function () {
  $(modal).addClass("visible animateIn");
});

function closeModal() {
  $(modal).addClass("animateOut");

  setTimeout(function () {
    $(modal).removeClass("visible animateIn animateOut");
  }, 1000);
}
