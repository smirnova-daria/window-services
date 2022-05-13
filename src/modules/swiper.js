import Swiper, {
	Navigation
} from 'swiper';
import 'swiper/css';

export const swiperBenefits = new Swiper('.swiper-benefits', {
	loop: true,
	modules: [Navigation],
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	slidesPerView: 3,

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		576: {
			slidesPerView: 3,
		}
	}
})

export const swiperServices = new Swiper('.swiper-services', {
	loop: true,
	modules: [Navigation],
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	slidesPerView: 2,

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		576: {
			slidesPerView: 2,
		}
	}
})