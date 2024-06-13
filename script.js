var tl = gsap.timeline();

tl.from("li", {
  y: -20,
  opacity: 0,
  duration: 1,
  scale: 0.2,
  stagger: 0.2,
});

gsap.from("h3", {
  y: 100,
  opacity: 1,
});

gsap.to(".about p", {
  y: 20,
  opacity: 1,
  duration: 1,
  delay: 1,
  scale: 1,
  scrollTrigger: {
    trigger: ".about",
    // start: "top 50%",
    // end: "bottom 80%",
  },
});
gsap.to("#skill", {
  y: 10,
  opacity: 1,
  duration: 1,
  delay: 1,

  scrollTrigger: {
    trigger: "#skill",
    start: "top 80%",
    end: "bottom 80%",
  },
});
gsap.to(".cards", {
  y: 10,
  opacity: 1,
  duration: 1,
  delay: 1,

  stagger: 0.2,
  scrollTrigger: {
    trigger: "#skill",
    start: "top 80%",
    end: "bottom 80%",
  },
});

gsap.to(".skill-card", {
  y: 10,
  opacity: 1,
  duration: 1,
  delay: 1,

  stagger: 0.2,
  scrollTrigger: {
    trigger: "#skill",
    // start: "top 80%",
    // end: "bottom 80%",
  },
});

gsap.to(".projects", {
  y: 20,
  opacity: 1,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".prog",
    start: "top 80%",
    end: "bottom 80%",
  },
});

gsap.to(".prog", {
  y: 10,
  opacity: 1,
  duration: 1,
  delay: 1,

  stagger: 0.2,
  scrollTrigger: {
    trigger: ".prog",
    start: "top 80%",
    end: "bottom 80%",
  },
});
