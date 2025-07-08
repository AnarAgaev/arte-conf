import { T_StepFourState } from "../types"

export const powerSuppliesSelector = (state: T_StepFourState) => state.powerSupplies

export const catalogSelector = (state: T_StepFourState) => state.catalog

export const catalogActiveCategoryListSelector = (state: T_StepFourState) => {
	const selectedCategory = state.catalog.find(({ selected }) => selected)

	if (!selectedCategory) return undefined

	return selectedCategory.list
}
