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
	]
}

export default initialState
