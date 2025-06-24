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
} from './Actions'


// Register Actions
const reducers = {
	resetThreeStep: resetThreeStepAction,
	setLampColor: setLampColorAction,
	setControlType: setControlTypeAction,
	setGlowTemperature: setGlowTemperatureAction,
	setLampPower: setLampPowerAction,
	setLampsSide: setLampsSideAction,
}


// Import Selectors
import {
	lampColorsSelector,
	controlTypesSelector,
	glowTemperaturesSelector,
	lampPowersSelector,
	sidesSelector,
} from './Selectors'


// Register Selectors
const selectors = {
	selectLampColors: lampColorsSelector,
	selectControlTypes: controlTypesSelector,
	selectGlowTemperatures: glowTemperaturesSelector,
	selectLampPowers: lampPowersSelector,
	selectSides: sidesSelector,
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
} = stepThreeSlice.actions


// Export Selectors
export const {
	selectLampColors,
	selectControlTypes,
	selectGlowTemperatures,
	selectLampPowers,
	selectSides,
} = stepThreeSlice.selectors