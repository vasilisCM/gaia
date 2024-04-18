const moveUpTextByLine = () => {
  let typeSplit = new SplitType("[animate]", {
    types: "lines, words, chars",
    tagName: "span",
  });
  gsap.from("[animate] .line", {
    y: "100%",
    opacity: 0,
    duration: 1.5,
    stagger: 0.3,
    // ease: "power1.out",
    ease: "power4.out",
    delay: 0.2,
  });
};

export default moveUpTextByLine;
