const loader = (body) => {
  const imgLoad = imagesLoaded(body);

  // Loader Timeline - Waiting for Assets to load
  const loadingTl = gsap.timeline();
  loadingTl.to(".loader__spinner", {
    rotate: "360deg",
    duration: 1.3,
    ease: "none",
    repeat: -1,
  });

  // Page Reveal Timeline - Runs the Router
  const pageRevealTl = gsap.timeline({
    paused: true,
    // onComplete: () => router(siteName),
  });
  pageRevealTl
    .to(".loader", {
      opacity: 0,
    })
    .to(".loader", { display: "none" }, "<1");

  // ImagesLoaded
  imgLoad.on("done", () => {
    // console.log("Done");
    pageRevealTl.play();
  });
};

export default loader;
