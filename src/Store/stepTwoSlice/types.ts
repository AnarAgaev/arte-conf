export type T_StepTwoState = {

    // тип трека
    trackTypes: {
        id: number
		name: 'magnetic' | 'singlePhase' | 'onBelts'
        description: 'Магнитные' | 'Однофазные' | 'На ремнях'
        img: string
        selected: boolean
    }[]

	// цвет трека
	trackColors: ({
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

	// Коллекция
	trackCollections: {
		id: number
		name: 'all' | 'optima' | 'rapid' | 'expert' | 'presto' | 'linea'
		description: string
        selected: boolean
	}[]
}