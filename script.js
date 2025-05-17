var tl = gsap.timeline();
tl.from(".line h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5,
  // opacity: 0,
  // scale: 0
});
tl.from("#line1-part1", {
  opacity: 0,
  onStart: function () {
    var h5timer = document.querySelector("#line1-part1 h5");
    var grow = 0;
    setInterval(function () {
      if (grow < 100) {
        h5timer.innerHTML = grow++;
      } else {
        h5timer.innerHTML = grow;
      }
    }, 15);
  },
});
tl.to(".line h2",{
    animationName: "anime",
    opacitY:1
})
tl.to("#loader", {
  opacity: 0,
  duration: 0.2,
  delay: 2.5,
});
tl.from("#page1",{
    y: 1600,
    opacity:0.5,
    delay:0.2,
    duration:0.5,
    ease: Power4
})
ti.to("#loader",{
    display: "none"
})