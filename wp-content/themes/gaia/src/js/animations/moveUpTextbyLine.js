const moveUpTextByLine = () => {
  let typeSplit = new SplitType("[animate]", {
    types: "lines, words, chars",
    tagName: "span",
  });
  gsap.from("[animate] .line", {
    y: "100%",
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "power1.out",
  });
};

export default moveUpTextByLine;
