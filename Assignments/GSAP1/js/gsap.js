//square animation

gsap.from(".chucked", {
    duration: 5,
    rotation: 720,
    ease: "bounce",
    stagger: 0.5,
    x:-500,
    y:-500,
});

// text animation
gsap.from (".headline", {
    duration: 2.5,
    stagger: 2,
    opacity: 0,
});

//image animation
gsap.from (".image", {
    duration: 3,
    rotation: 100,
    opacity: 0,
    stagger: 2,
});

//paragraph animation
gsap.from (".paragraph", {
    duration: 3,
    opacity: 0,
    stagger: 2,
});

