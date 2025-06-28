import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

// Import Async Funcs
import {} from './Funcs'


// Import Actions
import {
	resetThreeStepAction,
	setLampColorAction,
	setControlTypeAction,
	setGlowTemperatureAction,
	setLampPowerAction,
	setLampsSideAction,
	setCatalogCategoryAction
} from './Actions'


// Register Actions
const reducers = {
	resetThreeStep: resetThreeStepAction,
	setLampColor: setLampColorAction,
	setControlType: setControlTypeAction,
	setGlowTemperature: setGlowTemperatureAction,
	setLampPower: setLampPowerAction,
	setLampsSide: setLampsSideAction,
	setCatalogCategory: setCatalogCategoryAction,
}


// Import Selectors
import {
	lampColorsSelector,
	controlTypesSelector,
	glowTemperaturesSelector,
	lampPowersSelector,
	sidesSelector,
	catalogSelector,
	catalogActiveCategoryListSelector,
} from './Selectors'


// Register Selectors
const selectors = {
	selectLampColors: lampColorsSelector,
	selectControlTypes: controlTypesSelector,
	selectGlowTemperatures: glowTemperaturesSelector,
	selectLampPowers: lampPowersSelector,
	selectSides: sidesSelector,
	selectCatalog: catalogSelector,
	selectCatalogActiveCategoryList: catalogActiveCategoryListSelector,
}


// Create slice
const stepThreeSlice = createSlice({
    name: 'stepThree',
    initialState,
    reducers,
    selectors
})


// Exports ...
export default stepThreeSlice.reducer


// Export Actions
export const {
	resetThreeStep,
	setLampColor,
	setControlType,
	setGlowTemperature,
	setLampPower,
	setLampsSide,
	setCatalogCategory
} = stepThreeSlice.actions


// Export Selectors
export const {
	selectLampColors,
	selectControlTypes,
	selectGlowTemperatures,
	selectLampPowers,
	selectSides,
	selectCatalog,
	selectCatalogActiveCategoryList,
} = stepThreeSlice.selectors