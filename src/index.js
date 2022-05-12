import {
	modal
}
from './modules/modal'

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