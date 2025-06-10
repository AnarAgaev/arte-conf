import { T_StepTwoState } from "./types";

const initialState: T_StepTwoState = {

	// Тип трека
	trackType: [
		{
			id: 0,
			name: 'magnetic',
			description: 'Магнитные',
			img: '/images/magnetic.webp',
			selected: false
		},
		{
			id: 1,
			name: 'singlePhase',
			description: 'Однофазные',
			img: '/images/single-phase.webp',
			selected: false
		},
		{
			id: 2,
			name: 'onBelts',
			description: 'На ремнях',
			img: '/images/on-belts.webp',
			selected: false
		}
	],

}

export default initialState
