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
	setMovingToWallAction,
} from './Actions'

// Import Selectors
import {
    ceilingTypeSelector,
	mountingTypeSelector,
	constructionFormsSelector,
	activeConstructionFormSelector,
	activeSideSelector,
	sidesSelector,
	totalSidesLengthsSelector,
	movingToWallSelector
} from './Selectors'

const reducers = {
    resetOneStep: resetOneStepAction,
    setCeilingType: setCeilingTypeAction,
	setMountingType: setMountingTypeAction,
	setConstructionForm: setConstructionFormAction,
	setActiveSide: setActiveSideAction,
	setSideLength: setSideLengthAction,
	resetAllSidesValues: resetAllSidesValuesAction,
	setMovingToWall: setMovingToWallAction,
}

const selectors = {
    selectCeilingType: ceilingTypeSelector,
    selectMountingType: mountingTypeSelector,
	selectConstructionForms: constructionFormsSelector,
	selectActiveSide: activeSideSelector,
	selectSides: sidesSelector,
	selectActiveConstructionForm: activeConstructionFormSelector,
	selectTotalSidesLengths: totalSidesLengthsSelector,
	selectMovingToWall: movingToWallSelector
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
	resetAllSidesValues,
	setMovingToWall
} = stepOneSlice.actions

export const {
    selectCeilingType,
	selectMountingType,
	selectConstructionForms,
	selectActiveConstructionForm,
	selectActiveSide,
	selectSides,
	selectTotalSidesLengths,
	selectMovingToWall
} = stepOneSlice.selectors

export default stepOneSlice.reducer