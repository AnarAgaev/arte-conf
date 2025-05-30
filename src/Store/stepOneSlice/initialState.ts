import { T_StepOneState } from "./types";

const initialState: T_StepOneState = {
	// Типы потолков
	ceilingType: [
		{
			id: 0,
			name: 'реечный',
			img: '/images/reechnyi.jpg',
			selected: false
		},
		{
			id: 1,
			name: 'натяжной',
			img: '/images/natyazhnoy.jpg',
			selected: false
		},
		{
			id: 2,
			name: 'ГКЛ',
			img: '/images/gkl.png',
			selected: false
		}
	],

	// Типы монтажа
	mountingType: [
		{
			id: 0,
			name: 'подвесной',
			selected: false
		},
		{
			id: 1,
			name: 'накладной',
			selected: false
		},
		{
			id: 2,
			name: 'встроенный',
			selected: false
		}
	]
}

export default initialState
