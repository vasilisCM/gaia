const moveUpTextByLine = () => {
  let typeSplit = new SplitType("[animate='line']", {
    types: "lines",
    tagName: "span",
  });
  gsap.fromTo(
    "[animate='line'] .line",
    {
      y: "100%",
      webkitFilter: "blur(30px)",
      opacity: 0,
    },
    {
      y: "0%",
      webkitFilter: "blur(0px)",
      opacity: 1,
      duration: 1.3,
      stagger: 0.3,
      // ease: "power1.out",
      ease: "power4.out",
      delay: 0.4,
    }
  );
};

export default moveUpTextByLine;
