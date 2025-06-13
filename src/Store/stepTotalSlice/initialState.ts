import { T_StepTotalState } from "./types";

const initialState: T_StepTotalState = {

	// Оптимизация расчета по остаткам
	calcOptimization: [
		{
			id: 1,
			name: 'inStock',
			description: 'В наличие',
			selected: true,
		},
		{
			id: 2,
			name: 'toOrder',
			description: 'Под заказ',
			selected: false,
		}
	]
}

export default initialState
