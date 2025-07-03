import { T_StepTwoState } from "./types";

const initialState: T_StepTwoState = {

	// Тип трека
	trackTypes: [
		{
			id: 0,
			name: 'magnetic',
			description: 'Магнитные',
			img: 'images/magnetic.webp',
			selected: false
		},
		{
			id: 1,
			name: 'singlePhase',
			description: 'Однофазные',
			img: 'images/single-phase.webp',
			selected: false
		},
		{
			id: 2,
			name: 'onBelts',
			description: 'На ремнях',
			img: 'images/on-belts.webp',
			selected: false
		}
	],

	// цвет трека
	trackColors: [
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

	// Коллекция
	trackCollections: [
		{
			id: 0,
			description: 'ВСЕ',
			name: 'all',
			selected: true
		},
		{
			id: 1,
			description: 'OPTIMA',
			name: 'optima',
			selected: false
		},
		{
			id: 2,
			description: 'RAPID',
			name: 'rapid',
			selected: false
		},
		{
			id: 3,
			description: 'EXPERT',
			name: 'expert',
			selected: false
		},
		{
			id: 4,
			description: 'PRESTO',
			name: 'presto',
			selected: false
		},
		{
			id: 5,
			description: 'LINEA',
			name: 'linea',
			selected: false
		},
	]

}

export default initialState
