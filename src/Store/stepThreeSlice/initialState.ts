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
			img: 'images/color-black.svg'
		},
		{
			id: 1,
			name: 'white',
			description: 'Белый',
			img: 'images/color-white.svg',
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
			img: 'images/control-bluetooth.webp',
			selected: false
		},
		{
			id: 1,
			name: 'DIM-1-10V',
			description: 'Управление',
			img: 'images/control-dim.webp',
			selected: false
		},
		{
			id: 2,
			name: 'NO DIM',
			description: 'Недиммируемые',
			img: 'images/control-nodim.webp',
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
	],


	// Каталог
	catalog: [
		{
			id: 0,
			name: 'functionalLighting',
			description: 'Функциональное освещение',
			img: 'images/functionalLighting.webp',
			selected: false,
			list: [
				{
					id: 1,
					linkText: 'Потолочные светильники',
					linkSrc: '/',
					active: false,
					list: [
						{
							id: 11,
							linkText: 'Встраиваемые светильники',
							linkSrc: '/',
							active: false,
							list: [
								{
									id: 111,
									linkText: 'Встраиваемые светильники под лампу',
									linkSrc: '/',
									active: false,
								},
								{
									id: 112,
									linkText: 'Встраиваемые светодиодные светильники',
									linkSrc: '/',
									active: false,
								},
								{
									id: 113,
									linkText: 'Гипсовые светильники',
									linkSrc: '/',
									active: false,
								},
							]
						},
						{
							id: 12,
							linkText: 'Накладные светильники',
							linkSrc: '/',
							active: false,
							list: [
								{
									id: 121,
									linkText: 'Накладные светильники под лампу',
									linkSrc: '/',
									active: false,
								},
								{
									id: 122,
									linkText: 'Накладные светодиодные светильники',
									linkSrc: '/',
									active: false,
								},
								{
									id: 123,
									linkText: 'Гипсовые светильники',
									linkSrc: '/',
									active: false,
								},
							]
						},
						{
							id: 13,
							linkText: 'Подвесные светильники',
							linkSrc: '/',
							active: false,
							list: [
								{
									id: 131,
									linkText: 'Подвесные светильники под лампу',
									linkSrc: '/',
									active: false,
								},
								{
									id: 132,
									linkText: 'Подвесные светодиодные светильники',
									linkSrc: '/',
									active: false,
								}
							]
						},
					]
				},
				{
					id: 2,
					linkText: 'Системы освещения',
					linkSrc: '/',
					active: false,
					list: [
						{
							id: 21,
							linkText: 'Магнитная трековая система LINEA',
							linkSrc: '/',
							active: false,
							list: [
									{
										id: 211,
										linkText: 'Магнитный трековый светильник LINEA',
										linkSrc: '/',
										active: false,
									},
									{
										id: 212,
										linkText: 'Магнитный шинопровод LINEA',
										linkSrc: '/',
										active: false,
									},
									{
										id: 213,
										linkText: 'Аксессуары для магнитной трековой системы LINEA',
										linkSrc: '/',
										active: false,
									},
									{
										id: 214,
										linkText: 'Блок питания в шинопровод (трек) LINEA',
										linkSrc: '/',
										active: false,
									}
							]
						},
						{
							id: 22,
							linkText: 'Магнитная трековая система OPTIMA',
							linkSrc: '/',
							active: false,
							list: [
								{
									id: 221,
										linkText: 'Магнитный трековый светильник OPTIMA',
										linkSrc: '/',
										active: false,
								},
								{
									id: 222,
									linkText: 'Магнитный шинопровод OPTIMA',
									linkSrc: '/',
									active: false,
								},
								{
									id: 223,
									linkText: 'Аксессуары для магнитной трековой системы OPTIMA',
									linkSrc: '/',
									active: false,
								},
								{
									id: 224,
									linkText: 'Блок питания в шинопровод (трек) OPTIMA',
									linkSrc: '/',
									active: false,
								}
							]
						},
					]
				},
				{
					id: 3,
					linkText: 'Настенные светильники',
					linkSrc: '/',
					active: false,
					list: [
						{
							id: 31,
							linkText: 'Настенные светильники',
							linkSrc: '/',
							active: false,
						},
						{
							id: 32,
							linkText: 'Прикроватные светильники',
							linkSrc: '/',
							active: false,
						},
					]
				},
				{
					id: 4,
					linkText: 'Гибкий неон',
					linkSrc: '/',
					active: false,
				},
				{
					id: 5,
					linkText: 'Витринные светильники',
					linkSrc: '/',
					active: false,
				},
			]
		},
		{
			id: 1,
			name: 'lightControl',
			description: 'Управление светом',
			img: 'images/lightControl.webp',
			selected: false,
			list: []
		},
		{
			id: 2,
			name: 'powerSupplies',
			description: 'Источники питания',
			img: 'images/powerSupplies.webp',
			selected: false,
			list: []
		},
		{
			id: 3,
			name: 'lightSources',
			description: 'Источники света',
			img: 'images/lightSources.webp',
			selected: false,
			list: []
		},
	]

}

export default initialState
