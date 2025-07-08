import { T_StepFourState } from "./types";

const initialState: T_StepFourState = {

	// Блоки питания
	powerSupplies: [
		{
			id: 0,
			article: '033092',
			img: 'images/033092.webp',
			price: 4321.03,

			power: '300 W',
			mountingType: 'Выносной',
			collection: 'LINEA',
			dimmer: false,

			selected: false
		},
		{
			id: 1,
			article: '517150',
			img: 'images/517150.webp',
			price: 5678,

			power: '200 W',
			mountingType: 'Накладной',
			collection: 'Elegance',
			dimmer: true,

			selected: false
		},
		{
			id: 2,
			article: '010996',
			img: 'images/010996.webp',
			price: 5678.2,

			power: '340 W',
			mountingType: 'Накладной',
			collection: 'Glossa',
			dimmer: true,

			selected: false
		},
		{
			id: 3,
			article: '077333',
			img: 'images/077333.webp',
			price: 13678,

			power: '420 W',
			mountingType: 'Выносной',
			collection: 'Glossa',
			dimmer: true,

			selected: false
		},
		{
			id: 4,
			article: '517150',
			img: 'images/517150.webp',
			price: 5678,

			power: '200 W',
			mountingType: 'Накладной',
			collection: 'Elegance',
			dimmer: true,

			selected: false
		},
		{
			id: 5,
			article: '010996',
			img: 'images/010996.webp',
			price: 5678.2,

			power: '340 W',
			mountingType: 'Накладной',
			collection: 'Glossa',
			dimmer: true,

			selected: false
		},
		{
			id: 6,
			article: '033092',
			img: 'images/033092.webp',
			price: 4321.03,

			power: '300 W',
			mountingType: 'Выносной',
			collection: 'LINEA',
			dimmer: false,

			selected: false
		},
		{
			id: 7,
			article: '077333',
			img: 'images/077333.webp',
			price: 13678,

			power: '420 W',
			mountingType: 'Выносной',
			collection: 'Glossa',
			dimmer: true,

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
