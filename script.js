
gsap.registerPlugin("ScrollTrigger", "Flip");

const arrayTest = gsap.utils.toArray('.section');

gsap.utils.toArray(".section").forEach(item => {
	ScrollTrigger.create({
		trigger: item,
		start: "top top",
		pin: true,
		pinSpacing: false,
		snap: true,
	})
})