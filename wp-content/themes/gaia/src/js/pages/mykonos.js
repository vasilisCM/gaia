const mykonos = () => {
  var swiper = new Swiper(".carousel-text", {
    slidesPerView: "auto",
    spaceBetween: 150,
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
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false, // continue autoplay after user interactions
    },
    allowTouchMove: false,
  });
};

mykonos();

export default mykonos;
