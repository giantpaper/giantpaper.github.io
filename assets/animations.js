import gsap from "gsap";

// or get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let boxes = document.querySelectorAll('ul#content > li');

boxes.forEach((element, index) => {

	gsap.to(element, {
		scrollTrigger: {
			trigger: element,
			start: 'top 90%',
			end: 'bottom 10%',
			// markers: true,
			scrub: true,
			toggleClass: {
				className: index % 2 === 0 ? 'animate__fadeInLeft' : 'animate__fadeInRight',
				targets: element,
			}
		}
	});

});

// gsap.utils.toArray('#container').forEach((element) => {
// 	gsap.to(element, {
// 		scrollTrigger: {
// 			trigger: '#content',
// 			start: 'top 10%',
// 			end: 'bottom 90%',
// 			markers: true,
// 			scrub: true,
// 		},
// 		backgroundColor: 'black',
// 	});
// });