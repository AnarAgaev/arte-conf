import { T_StepThreeState } from "../types"

export const lampColorsSelector = (state: T_StepThreeState) => state.lampColors

export const controlTypesSelector = (state: T_StepThreeState) => state.controlTypes

export const glowTemperaturesSelector = (state: T_StepThreeState) => state.glowTemperatures

export const lampPowersSelector = (state: T_StepThreeState) => state.lampPowers

export const sidesSelector = (state: T_StepThreeState) => state.sides

export const catalogSelector = (state: T_StepThreeState) => state.catalog

export const catalogActiveCategoryListSelector = (state: T_StepThreeState) => {
	const selectedCategory = state.catalog.find(({ selected }) => selected)

	if (!selectedCategory) return undefined

	return selectedCategory.list
}