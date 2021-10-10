

$(document).ready(()=>{
    var tl = gsap.timeline({
        onComplete: function(){
            $('.intro').addClass('hidden')
        }
    })

    tl.from('.hide', { opacity: 0, duration: 1, y: -50, stagger: 0.6})
    .to('.intro', {opacity: 0, duration: 1})
    .from('.big-text, .canvas', { opacity: 0, duration: 1, stagger: 0.6 })
    .from('nav', { duration: 1, x: -50 })
});


$( '.carousel' ).carousel({

});