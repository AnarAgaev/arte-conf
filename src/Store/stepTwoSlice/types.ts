export type T_StepTwoState = {

    // тип трека
    trackType: {
        id: number,
		name: 'magnetic' | 'singlePhase' | 'onBelts'
        description: 'Магнитные' | 'Однофазные' | 'На ремнях'
        img: string
        selected: boolean
    }[]
}