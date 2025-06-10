import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

// Import Async Funcs
import {} from './Funcs'


// Import Actions
import {
	resetTwoStepAction,
	setTrackTypeAction,
	setTrackColorAction,
} from './Actions'


// Register Actions
const reducers = {
	resetTwoStep: resetTwoStepAction,
	setTrackType: setTrackTypeAction,
	setTrackColor: setTrackColorAction
}


// Import Selectors
import {
	trackTypesSelector,
	trackColorsSelector
} from './Selectors'


// Register Selectors
const selectors = {
	selectTrackTypes: trackTypesSelector,
	selectTrackColors: trackColorsSelector
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
	setTrackType,
	setTrackColor
} = stepOneSlice.actions


// Export Selectors
export const {
	selectTrackTypes,
	selectTrackColors
} = stepOneSlice.selectors