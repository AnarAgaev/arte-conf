import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

// Import Async Funcs
import {} from './Funcs'


// Import Actions
import {
	resetStepTotalAction,
	setCalcOptimizationAction,
} from './Actions'


// Register Actions
const reducers = {
	resetStepTotal: resetStepTotalAction,
	setCalcOptimization: setCalcOptimizationAction,
}


// Import Selectors
import {
	calcOptimizationSelector,
} from './Selectors'


// Register Selectors
const selectors = {
	selectCalcOptimization: calcOptimizationSelector,
}


// Create slice
const stepTotalSlice = createSlice({
    name: 'stepTotal',
    initialState,
    reducers,
    selectors
})


// Exports ...
export default stepTotalSlice.reducer


// Export Actions
export const {
	resetStepTotal,
	setCalcOptimization,
} = stepTotalSlice.actions


// Export Selectors
export const {
	selectCalcOptimization,
} = stepTotalSlice.selectors