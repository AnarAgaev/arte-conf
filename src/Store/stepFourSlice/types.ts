export type T_StepFourState = {

    // Блоки питания
    powerSupplies: {
        id: number
		article: string
        img: string
		price: string | number

        description?: string
		power?: string
		mountingType?: string
		brand?: string
		collection?: string
		dimmer?: boolean

		selected: boolean
    }[]
}