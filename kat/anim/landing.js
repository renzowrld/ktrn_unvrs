gsap.registerPlugin(ScrollTrigger);

gsap.from(".left", {
    x: -150,
    opacity: 0,
    duration: 0.7,
    
    scrollTrigger: {
        trigger: ".about"
    }
})

gsap.from(".right", {
    y: 150,
    opacity: 0,
    duration: 0.7,
    
    scrollTrigger: {
        trigger: ".about"
    }
})

gsap.from(".skills", {
    y: 150,
    opacity: 0,
    duration: 0.8,
    
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".skills"
    }
})

gsap.from(".model", {
    y: 150,
    opacity: 0,
    duration: 1,
    
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".center"
    }
})

gsap.from(".hero-header", {
    x: -150,
    opacity: 0,
    duration: 1,
    
    stagger: 0.2,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".center"
    }
})

gsap.from(".slider", {
    x: 150,
    opacity: 0,
    duration: 2,
    
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".center"
    }
})

gsap.from(".footer-element", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    
    stagger: 0.3,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".f-upper"
    }
})

