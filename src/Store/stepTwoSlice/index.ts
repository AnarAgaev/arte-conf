import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

// Import Async Funcs
import {} from './Funcs'


// Import Actions
import {
	resetTwoStepAction,
	setTrackTypeAction,
	setTrackColorAction,
	setTrackCollectionAction,
} from './Actions'


// Register Actions
const reducers = {
	resetTwoStep: resetTwoStepAction,
	setTrackType: setTrackTypeAction,
	setTrackColor: setTrackColorAction,
	setTrackCollection: setTrackCollectionAction
}


// Import Selectors
import {
	trackTypesSelector,
	trackColorsSelector,
	trackCollectionsSelector
} from './Selectors'


// Register Selectors
const selectors = {
	selectTrackTypes: trackTypesSelector,
	selectTrackColors: trackColorsSelector,
	selectTrackCollections: trackCollectionsSelector
}


// Create slice
const stepTwoSlice = createSlice({
    name: 'stepTwo',
    initialState,
    reducers,
    selectors
})


// Exports ...
export default stepTwoSlice.reducer


// Export Actions
export const {
	resetTwoStep,
	setTrackType,
	setTrackColor,
	setTrackCollection
} = stepTwoSlice.actions


// Export Selectors
export const {
	selectTrackTypes,
	selectTrackColors,
	selectTrackCollections
} = stepTwoSlice.selectors