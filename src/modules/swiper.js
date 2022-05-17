import Swiper, {
	Navigation,
	Grid
} from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';

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
	modules: [Navigation, Grid],
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	slidesPerView: 2,
	breakpoints: {
		320: {
			loop: true,
			slidesPerView: 1,
		},
		576: {
			loop: false,
			slidesPerView: 1,
			grid: {
				fill: 'row',
				rows: 2,
			}

		},
		1200: {
			loop: true,
			slidesPerView: 2,
			grid: {
				rows: 1,
			}
		}
	}
})