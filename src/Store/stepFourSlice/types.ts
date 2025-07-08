export type T_CatalogCategoryNames = 'functionalLighting' | 'lightControl' | 'powerSupplies' | 'lightSources'
export type T_CatalogCategoryDescriptions = 'Функциональное освещение' | 'Управление светом' | 'Источники питания' | 'Источники света'

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

	// Каталог
	catalog: {
		id: number
		name: T_CatalogCategoryNames
		description: T_CatalogCategoryDescriptions
		img: string
		selected: boolean
		list: {
			id: number
			linkText: string
			linkSrc: string
			active: boolean
			list?: T_StepFourState['catalog'][0]['list']
		}[]
	}[]
}