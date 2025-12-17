const clipUp = () => {
  const elements = gsap.utils.toArray(".clip-up");

  elements.forEach((el) => {
    gsap.fromTo(
      el,
      {
        y: "80",
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        ease: "power4.out",
      },
      {
        y: "0",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 50%",
          end: "bottom bottom",
          // markers: true, // set to false when you're done debugging
        },
      }
    );
  });
};

export default clipUp;
