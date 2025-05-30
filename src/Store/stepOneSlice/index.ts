import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

// Import Funcs
import {} from './Funcs'

// Import Actions
import {
    resetOneStepAction,
    setCeilingTypeAction,
	setMountingTypeAction
} from './Actions'

// Import Selectors
import {
    ceilingTypeSelector,
	mountingTypeSelector
} from './Selectors'

const reducers = {
    resetOneStep: resetOneStepAction,
    setCeilingType: setCeilingTypeAction,
	setMountingType: setMountingTypeAction
}

const selectors = {
    selectCeilingType: ceilingTypeSelector,
    selectMountingType: mountingTypeSelector
}

const stepOneSlice = createSlice({
    name: 'stepOne',
    initialState,
    reducers,
    selectors
})

export const {
    resetOneStep,
    setCeilingType,
	setMountingType
} = stepOneSlice.actions

export const {
    selectCeilingType,
	selectMountingType
} = stepOneSlice.selectors

export default stepOneSlice.reducer