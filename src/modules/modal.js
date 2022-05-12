import {
	animate
} from './helpers'

export const modal = ({
	elementSelector,
	modalSelector,
	overlaySelector,
	closeSelector,
	animationDuration = 300
}) => {
	try {
		const buttons = document.querySelectorAll(elementSelector)
		const modal = document.querySelector(modalSelector)
		const overlay = document.querySelector(overlaySelector)
		const closeBtn = modal.querySelector(closeSelector)

		const openModal = (e) => {
			e.preventDefault()
			modal.style.display = 'block'
			overlay.style.display = 'block'
			animate({
				duration: animationDuration,
				timing(timeFraction) {
					return timeFraction;
				},
				draw(progress) {
					modal.style.opacity = progress
				}
			})
		}

		const closeModal = () => {
			animate({
				duration: animationDuration,
				timing(timeFraction) {
					return timeFraction;
				},
				draw(progress) {
					modal.style.opacity = 1 - progress
				}
			})
			setTimeout(() => {
				modal.style.display = 'none'
				overlay.style.display = 'none'
			}, animationDuration)

		}

		buttons.forEach(button => {
			button.addEventListener('click', openModal)
		})

		closeBtn.addEventListener('click', closeModal)

	} catch (error) {
		console.log(error.message)
	}
}