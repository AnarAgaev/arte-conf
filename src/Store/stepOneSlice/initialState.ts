import { T_StepOneState } from "./types";

const initialState: T_StepOneState = {

	// Типы потолков
	ceilingType: [
		{
			id: 0,
			name: 'rack',
			description: 'Реечный',
			img: '/images/reechnyi.webp',
			selected: false
		},
		{
			id: 1,
			name: 'straining',
			description: 'Натяжной',
			img: '/images/straining.webp',
			selected: false
		},
		{
			id: 2,
			name: 'gkl',
			description: 'ГКЛ',
			img: '/images/gkl.webp',
			selected: false
		}
	],


	// Типы монтажа
	mountingType: [
		{
			id: 0,
			name: 'suspension',
			description: 'Подвесной',
			selected: false
		},
		{
			id: 1,
			name: 'overhead',
			description: 'Накладной',
			selected: false
		},
		{
			id: 2,
			name: 'built-in',
			description: 'Встроенный',
			selected: false
		}
	],


	// Форма конструкции
	constructionForm: [
		{
			id: 0,
			name: 'l-shaped',
			description: 'L-образная',
			img: '/images/l-shaped.webp',
			selected: false
		},
		{
			id: 1,
			name: 'rectangle',
			description: 'Прямоугольник',
			img: '/images/rectangle.webp',
			selected: false
		},
		{
			id: 2,
			name: 'line',
			description: 'Прямая',
			img: '/images/line.webp',
			selected: false
		},
		{
			id: 3,
			name: 'u-shaped',
			description: 'П-образная',
			img: '/images/u-shaped.webp',
			selected: false
		},
		{
			id: 4,
			name: 'snake',
			description: 'Змейка',
			img: '/images/snake.webp',
			selected: false
		},
	],


	// Стороны на скетче
	sides: [
		{
			id: 1,
			length: null,
			isActive: false,
			name: 'Сторона 1',
		},
		{
			id: 2,
			length: null,
			isActive: false,
			name: 'Сторона 2',
		},
		{
			id: 3,
			length: null,
			isActive: false,
			name: 'Сторона 3',
		},
		{
			id: 4,
			length: null,
			isActive: false,
			name: 'Сторона 4',
		}
	],


	// Переход на стену
	movingToWall: false,

	moveItems: [
		{
			id: 1,
			isActive: false,
			length: null,
			description: '1'
		},
		{
			id: 2,
			isActive: false,
			length: null,
			description: '2'
		}
	]

}

export default initialState
