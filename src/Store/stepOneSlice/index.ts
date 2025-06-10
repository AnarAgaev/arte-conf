import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

// Import Async Funcs
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
	setMovingToWallVisibleAction,
	setMoveToWallAction,
	setMoveToWallLengthAction
} from './Actions'


// Register Actions
const reducers = {
    resetOneStep: resetOneStepAction,
    setCeilingType: setCeilingTypeAction,
	setMountingType: setMountingTypeAction,
	setConstructionForm: setConstructionFormAction,
	setActiveSide: setActiveSideAction,
	setSideLength: setSideLengthAction,
	resetAllSidesValues: resetAllSidesValuesAction,
	setMovingToWallVisible: setMovingToWallVisibleAction,
	setMoveToWall: setMoveToWallAction,
	setMoveToWallLength: setMoveToWallLengthAction
}


// Import Selectors
import {
    ceilingTypeSelector,
	mountingTypeSelector,
	constructionFormsSelector,
	activeConstructionFormSelector,
	activeSideSelector,
	sidesSelector,
	totalSidesLengthsSelector,
	movingToWallSelector,
	moveItemsSelector
} from './Selectors'


// Register Selectors
const selectors = {
    selectCeilingType: ceilingTypeSelector,
    selectMountingType: mountingTypeSelector,
	selectConstructionForms: constructionFormsSelector,
	selectActiveSide: activeSideSelector,
	selectSides: sidesSelector,
	selectActiveConstructionForm: activeConstructionFormSelector,
	selectTotalSidesLengths: totalSidesLengthsSelector,
	selectMovingToWall: movingToWallSelector,
	selectMoveItems: moveItemsSelector
}


// Create slice
const stepOneSlice = createSlice({
    name: 'stepOne',
    initialState,
    reducers,
    selectors
})


// Exports ...
export default stepOneSlice.reducer


// Export Actions
export const {
    resetOneStep,
    setCeilingType,
	setMountingType,
	setConstructionForm,
	setActiveSide,
	setSideLength,
	resetAllSidesValues,
	setMovingToWallVisible,
	setMoveToWall,
	setMoveToWallLength
} = stepOneSlice.actions


// Export Selectors
export const {
    selectCeilingType,
	selectMountingType,
	selectConstructionForms,
	selectActiveConstructionForm,
	selectActiveSide,
	selectSides,
	selectTotalSidesLengths,
	selectMovingToWall,
	selectMoveItems
} = stepOneSlice.selectors