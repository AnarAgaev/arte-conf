import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

// Import Async Funcs
import {} from './Funcs'


// Import Actions
import {
	resetTwoStepAction,
	setTrackTypeAction
} from './Actions'


// Register Actions
const reducers = {
	resetTwoStep: resetTwoStepAction,
	setTrackType: setTrackTypeAction
}


// Import Selectors
import {
	trackTypesSelector
} from './Selectors'


// Register Selectors
const selectors = {
	selectTrackTypes: trackTypesSelector
}


// Create slice
const stepOneSlice = createSlice({
    name: 'stepTwo',
    initialState,
    reducers,
    selectors
})


// Exports ...
export default stepOneSlice.reducer


// Export Actions
export const {
	resetTwoStep,
	setTrackType
} = stepOneSlice.actions


// Export Selectors
export const {
	selectTrackTypes
} = stepOneSlice.selectors