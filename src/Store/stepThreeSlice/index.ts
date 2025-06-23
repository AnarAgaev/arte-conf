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
} from './Actions'


// Register Actions
const reducers = {
	resetThreeStep: resetThreeStepAction,
	setLampColor: setLampColorAction,
	setControlType: setControlTypeAction,
	setGlowTemperature: setGlowTemperatureAction,
	setLampPower: setLampPowerAction,
}


// Import Selectors
import {
	lampColorsSelector,
	controlTypesSelector,
	glowTemperaturesSelector,
	lampPowersSelector
} from './Selectors'


// Register Selectors
const selectors = {
	selectLampColors: lampColorsSelector,
	selectControlTypes: controlTypesSelector,
	selectGlowTemperatures: glowTemperaturesSelector,
	selectLampPowers: lampPowersSelector
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
} = stepThreeSlice.actions


// Export Selectors
export const {
	selectLampColors,
	selectControlTypes,
	selectGlowTemperatures,
	selectLampPowers,
} = stepThreeSlice.selectors