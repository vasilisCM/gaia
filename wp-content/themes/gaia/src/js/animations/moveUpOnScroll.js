// Animation on Scroll (Now it works only for one section)
const moveUpOnScroll = (trigger, item) => {
  const tl = gsap.timeline();

  tl.to(item, {
    y: -100,
    scrollTrigger: {
      trigger: trigger,
      // markers: true,
      start: "top center",
      end: "bottom center",
      ease: "power4.out",
      scrub: true,
    },
  });
};

export default moveUpOnScroll;
