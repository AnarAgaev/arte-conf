
export type T_StepThreeState = {

	// цвет светильников
		lampColors: ({
        id: number
        name: 'black' | 'white';
        description: 'Черный' | 'Белый';
        selected: boolean;
    } & (
        {
			hex: string
			img?: string
		} |
        {
			hex?: string
			img: string
		} |
        {
			hex: string
			img: string
		}
    ))[]


    // тип управления
	controlTypes: {
		id: number
		name: 'Tuya Bluetooth' | 'DIM-1-10V' | 'NO DIM'
		description: 'Управление' | 'Недиммируемые'
		img: string
		selected: boolean
	}[]


	// температура свечения
	glowTemperatures: {
		id: number
		value: number| string
		selected: boolean
	}[]


	// мощность светильников
	lampPowers: {
		id: number
		value: number | string
		selected: boolean
	}[]

}