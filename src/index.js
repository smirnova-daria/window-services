import {
	modal
}
from './modules/modal'
import {
	timer
} from './modules/timer'
import {
	smoothScroll
} from './modules/smoothScroll'
import {
	swiperBenefits,
	swiperServices
} from './modules/swiper'
import {
	calculate
} from './modules/calculate'
import {
	sendForm
} from './modules/sendForm'
import {
	comments
} from './modules/comments'

modal({
	elementSelector: '.callback',
	modalSelector: '.header-modal',
	overlaySelector: '.overlay',
	closeSelector: '.header-modal__close',
})

modal({
	elementSelector: '.measurer-call',
	modalSelector: '.services-modal',
	overlaySelector: '.overlay',
	closeSelector: '.services-modal__close',
})

modal({
	elementSelector: '.document-overlay',
	modalSelector: '.image-modal',
	overlaySelector: '.overlay',
	closeSelector: '.image-modal__close',
	isImageModal: true,
	boxElementSelector: '.sertificate-document',
	modalBodySelector: '.image-modal__body'
})

timer('20 may 2022 21:00')

smoothScroll()

calculate()

sendForm({
	formSelector: '[name="action-form"]',
	additionalData: [{
		type: 'input',
		selector: '#calc-total'
	}]
})
sendForm({
	formSelector: '[name="action-form2"]',
	additionalData: [{
		type: 'input',
		selector: '#calc-total'
	}]
})

comments()