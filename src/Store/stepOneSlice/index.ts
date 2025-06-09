import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

// Import Funcs
import {} from './Funcs'

// Import Actions
import {
    resetOneStepAction,
    setCeilingTypeAction,
	setMountingTypeAction,
	setConstructionFormAction,
	setActiveSideAction,
	setSideLengthAction,
	resetAllSidesValuesAction,
} from './Actions'

// Import Selectors
import {
    ceilingTypeSelector,
	mountingTypeSelector,
	constructionFormsSelector,
	activeConstructionFormSelector,
	activeSideSelector,
	sidesSelector
} from './Selectors'

const reducers = {
    resetOneStep: resetOneStepAction,
    setCeilingType: setCeilingTypeAction,
	setMountingType: setMountingTypeAction,
	setConstructionForm: setConstructionFormAction,
	setActiveSide: setActiveSideAction,
	setSideLength: setSideLengthAction,
	resetAllSidesValues: resetAllSidesValuesAction
}

const selectors = {
    selectCeilingType: ceilingTypeSelector,
    selectMountingType: mountingTypeSelector,
	selectConstructionForms: constructionFormsSelector,
	selectActiveSide: activeSideSelector,
	selectSides: sidesSelector,
	selectActiveConstructionForm: activeConstructionFormSelector
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
	setMountingType,
	setConstructionForm,
	setActiveSide,
	setSideLength,
	resetAllSidesValues
} = stepOneSlice.actions

export const {
    selectCeilingType,
	selectMountingType,
	selectConstructionForms,
	selectActiveConstructionForm,
	selectActiveSide,
	selectSides
} = stepOneSlice.selectors

export default stepOneSlice.reducer