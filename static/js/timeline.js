gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "none"});


var tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".timeline",
        toggleActions: 'restart none none none',
        start: 'top 60%',
        end: 'top 5%',
        scrub: 2
    }
});

tl.from('.timeline-container', {opacity: 0, duration: 1, x: 300, stagger: 1.5})