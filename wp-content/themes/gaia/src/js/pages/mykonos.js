const mykonos = () => {
  console.log("Hello from Mykonos");

  var swiper = new Swiper(".carousel-text", {
    slidesPerView: "auto",
    spaceBetween: 300,
    speed: 1000,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false, // continue autoplay after user interactions
    },
    allowTouchMove: false,
  });

  var swiper2 = new Swiper(".carousel-image", {
    slidesPerView: 1,
    effect: "fade",
    speed: 1000,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false, // continue autoplay after user interactions
    },
    allowTouchMove: false,
  });

  // Gallery
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 10,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  const lightbox = document.querySelector(".lightbox");
  const lightboxOpenButton = document.querySelector(".lightbox__open");
  const lightboxCloseButton = document.querySelector(".lightbox__close");

  lightboxOpenButton.addEventListener("click", () => {
    lightbox.classList.remove("hidden");
  });

  lightboxCloseButton.addEventListener("click", () => {
    lightbox.classList.add("hidden");
  });
};

mykonos();

export default mykonos;
