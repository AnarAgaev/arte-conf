import { T_StepThreeState } from "./types";

const initialState: T_StepThreeState = {

	// цвет светильников
	lampColors: [
		{
			id: 0,
			name: 'black',
			description: 'Черный',
			hex: '#000000',
			selected: false,
			img: '/images/color-black.svg'
		},
		{
			id: 1,
			name: 'white',
			description: 'Белый',
			img: '/images/color-white.svg',
			hex: '#ffffff',
			selected: false
		}
	],

    // тип управления
	controlTypes: [
		{
			id: 0,
			name: 'Tuya Bluetooth',
			description: 'Управление',
			img: '/images/control-bluetooth.webp',
			selected: false
		},
		{
			id: 1,
			name: 'DIM-1-10V',
			description: 'Управление',
			img: '/images/control-dim.webp',
			selected: false
		},
		{
			id: 2,
			name: 'NO DIM',
			description: 'Недиммируемые',
			img: '/images/control-nodim.webp',
			selected: false
		},
	],

	// температура свечения
	glowTemperatures: [
		{
			id: 0,
			value: 'Не выбрано',
			selected: true
		},
		{
			id: 1,
			value: 2700,
			selected: false
		},
		{
			id: 2,
			value: 3000,
			selected: false
		},
		{
			id: 3,
			value: 4000,
			selected: false
		},
	],

	// мощность светильников
	lampPowers: [
		{
			id: 0,
			value: 'Не выбрано',
			selected: true
		},
		{
			id: 1,
			value: 8,
			selected: false
		},
		{
			id: 2,
			value: 12,
			selected: false
		},
		{
			id: 3,
			value: 13,
			selected: false
		},
		{
			id: 4,
			value: 15,
			selected: false
		},
		{
			id: 5,
			value: 20,
			selected: false
		},
	],


	// стороны
	sides: [
		{
			id: 0,
			name: 'side1',
			description: 'Сторона 1',
			selected: true
		},
		{
			id: 1,
			name: 'side2',
			description: 'Сторона 2',
			selected: false
		},
		{
			id: 2,
			name: 'side3',
			description: 'Сторона 3',
			selected: false
		},
		{
			id: 3,
			name: 'side4',
			description: 'Сторона 4',
			selected: false
		}
	]

}

export default initialState
