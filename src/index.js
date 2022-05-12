import {
	modal
}
from './modules/modal'
import {
	timer
} from './modules/timer'

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

timer('20 may 2022 21:00')