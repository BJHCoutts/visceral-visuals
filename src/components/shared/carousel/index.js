const track = document.querySelector('.carousel__track')
const slides = Array.from(track.children)

const prevButton = document.querySelector('.carousel__button--left') 
const nextButton = document.querySelector('.carousel__button--right') 

const dotsNav = document.querySelector('.carousel__nav')
const dots = [...dotsNav.children]

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
	slide.style.left = `${slideWidth * index}px`
}

slides.forEach(setSlidePosition);

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
	
	if (targetIndex === 0) {
		prevButton.classList.add('is-hidden')
	} else {
		prevButton.classList.remove('is-hidden')
	}

	if (targetIndex === (slides.length-1)) {

		nextButton.classList.add('is-hidden')
	} else {
		nextButton.classList.remove('is-hidden')
	}
}

const moveToSlide = (track, currentSlide, targetSlide) => {
	track.style.transform = `translateX(-${targetSlide.style.left})`
	currentSlide.classList.remove('current-slide')
	targetSlide.classList.add('current-slide')
}

const updateDots = (currentDot, targetDot) => {
	currentDot.classList.remove('current-slide')
	targetDot.classList.add('current-slide')
}

prevButton.addEventListener('click', e => {
	const currentSlide = track.querySelector('.current-slide')
	const prevSlide = currentSlide.previousElementSibling

	moveToSlide(track, currentSlide, prevSlide)

	const currentDot = dotsNav.querySelector('.current-slide')
	const targetDot = currentDot.previousElementSibling

	updateDots(currentDot, targetDot)
	
	const prevIndex = slides.findIndex(slide => slide === prevSlide)

	hideShowArrows(slides, prevButton, nextButton, prevIndex)
})

nextButton.addEventListener('click', e => {
	const currentSlide = track.querySelector('.current-slide')
	const nextSlide = currentSlide.nextElementSibling

	moveToSlide(track, currentSlide, nextSlide)

	const currentDot = dotsNav.querySelector('.current-slide')
	const targetDot = currentDot.nextElementSibling

	updateDots(currentDot, targetDot)

	const nextIndex = slides.findIndex(slide => slide === nextSlide)
	hideShowArrows(slides, prevButton, nextButton, nextIndex)
})

dotsNav.addEventListener('click', e => {
	const targetDot = e.target.closest('button');
	if (!targetDot) return

	const currentSlide = track.querySelector('.current-slide')
	const currentDot = dotsNav.querySelector('.current-slide')
	const targetIndex = dots.findIndex(dot => dot === targetDot)
	const targetSlide = slides[targetIndex]

	moveToSlide(track, currentSlide, targetSlide)

	updateDots(currentDot, targetDot)

	hideShowArrows(slides, prevButton, nextButton, targetIndex)
})