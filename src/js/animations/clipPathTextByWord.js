const clipPathTextByWord = () => {
  let typeSplit = new SplitType("[animate='word']", {
    types: "words",
    tagName: "span",
  });
  gsap.fromTo(
    "[animate='word'] .word",
    {
      y: "200%",
      // opacity: 0,
      // ease: "power1.out",
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",

      ease: "power4.out",
    },
    {
      y: "0%",
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      // opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      // ease: "power1.out",
      ease: "power4.out",

      scrollTrigger: {
        trigger: "[animate='word']",
        start: "top 50%",
        end: "bottom bottom",
        // markers: true,
      },
    }
  );
};

export default clipPathTextByWord;
