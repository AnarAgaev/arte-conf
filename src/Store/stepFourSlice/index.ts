import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

// Import Async Funcs
import {} from './Funcs'


// Import Actions
import {
	resetStepFourAction,
	setPowerSupplyAction
} from './Actions'


// Register Actions
const reducers = {
	resetStepFour: resetStepFourAction,
	setPowerSupply: setPowerSupplyAction
}


// Import Selectors
import {
	powerSuppliesSelector,
} from './Selectors'


// Register Selectors
const selectors = {
	selectPowerSupplies: powerSuppliesSelector
}


// Create slice
const stepFourSlice = createSlice({
    name: 'stepFour',
    initialState,
    reducers,
    selectors
})


// Exports ...
export default stepFourSlice.reducer


// Export Actions
export const {
	resetStepFour,
	setPowerSupply
} = stepFourSlice.actions


// Export Selectors
export const {
	selectPowerSupplies
} = stepFourSlice.selectors