// Animation on Scroll (Now it works only for one section)
const moveUpOnScroll = (trigger, item) => {
  const tl = gsap.timeline();

  document.querySelectorAll(trigger).forEach((triggerElement) => {
    // .closest("div") should be refactored
    tl.fromTo(
      triggerElement.closest("div").querySelectorAll(item),
      { y: 0 },

      {
        y: -50,
        scrollTrigger: {
          trigger: triggerElement,
          // markers: true,
          start: "top center",
          end: "bottom center",
          ease: "power4.out",
          scrub: 1,
        },
      }
    );
  });
};

export default moveUpOnScroll;
