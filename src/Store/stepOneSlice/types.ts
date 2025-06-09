export type T_StepOneState = {

    // тип потолка
    ceilingType: {
        id: number,
		name: 'rack' | 'straining' | 'gkl'
        description: 'реечный' | 'натяжной' | 'ГКЛ'
        img: string
        selected: boolean
    }[]

	// тип монтажа
	mountingType: {
		id: number,
		name: 'suspension' | 'overhead' | 'built-in'
        description: 'подвесной' | 'накладной' | 'встроенный'
        selected: boolean
	}[]

	// форма конструкции
	constructionForm: {
		id: number,
		name: 'l-shaped' | 'rectangle' | 'line' | 'u-shaped' | 'snake'
        description: 'L-образная' | 'Прямоугольник' | 'Прямая' | 'П-образная' | 'Змейка'
        img: string
        selected: boolean
	}[]

	// Стороны на скетче
	sides: {
		id: 1 | 2 | 3 | 4
		length: number
		isActive: boolean
		name: string
		value: number | null
	}[]
}