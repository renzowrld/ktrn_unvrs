gsap.from(".anim", {
    y: 100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.25,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".inner-container"
    }
})

gsap.to(".image-holder", {
    y: 0,
    opacity: 1,
    duration: 0.3,
    stagger: 0.15,
    ease: "power.out",
    scrollTrigger: {
        trigger: ".main-container"
    }
})

gsap.to(".image-holder-x", {
    x: 0,
    opacity: 1,
    duration: 0.3,
    stagger: 0.15,
    ease: "power.out",
    scrollTrigger: {
        trigger: ".image-holder-x"
    }
})

gsap.to(".image-holder-y", {
    y: 0,
    opacity: 1,
    duration: 0.3,
    stagger: 0.1,
    ease: "power.out",
    scrollTrigger: {
        trigger: ".image-middle"
    }
})




