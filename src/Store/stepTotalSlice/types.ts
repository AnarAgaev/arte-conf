export type T_StepTotalState = {

	// Оптимизация расчета по остаткам
	calcOptimization: {
		id: number
		name: 'inStock' | 'toOrder'
		description: 'В наличие' | 'Под заказ'
        selected: boolean
	}[]
}