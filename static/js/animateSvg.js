let ticking = false;
let last_known_scroll_position = 0;
let updatePath = false;

const element = document.querySelector('svg');
const path = element.querySelector('svg > .theLine')
let totalLength = 0;

initPath(path)

function initPath(path){
   totalLength = path.getTotalLength();
   path.style.strokeDasharray = `${totalLength}`;
   path.style.strokeDashoffset = totalLength;
}


function handleEntries(entries) {
  console.log(entries)
   entries.forEach(entry => {
    console.log(entry)
    if(entry.isIntersecting) {
      console.log(entry.target)
    }
    
  })
}

let observer = new IntersectionObserver((entries, observer) => { 
		entries.forEach(entry => {
		if(entry.isIntersecting){
			console.log(entry);
      updatePath = true;
		} else {
      updatePath = false;
    }
		});
	}, {rootMargin: "0px 0px 0px 0px"});


  observer.observe(element);

function updateAnimation(scroll_pos) {
  if(!updatePath) {
    return;
  }
  window.requestAnimationFrame(()=>{
    const center = window.innerHeight / 2;
    const boundaries = path.getBoundingClientRect();
    const top = boundaries.top;
    const height = boundaries.height;
    const percentage = (center - top ) / height;
    const drawLength = percentage > 0 ? totalLength * percentage : 0;
    path.style.strokeDashoffset = drawLength < totalLength ? totalLength - drawLength : 0;
 
  })

}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      updateAnimation(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});