import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

// Import Async Funcs
import {} from './Funcs'


// Import Actions
import {
	resetStepFourAction,
	setPowerSupplyAction,
	setCatalogCategoryAction,
} from './Actions'


// Register Actions
const reducers = {
	resetStepFour: resetStepFourAction,
	setPowerSupply: setPowerSupplyAction,
	setCatalogCategory: setCatalogCategoryAction,
}


// Import Selectors
import {
	powerSuppliesSelector,
	catalogSelector,
	catalogActiveCategoryListSelector,
} from './Selectors'


// Register Selectors
const selectors = {
	selectPowerSupplies: powerSuppliesSelector,
	selectCatalog: catalogSelector,
	selectCatalogActiveCategoryList: catalogActiveCategoryListSelector,
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
	setPowerSupply,
	setCatalogCategory,
} = stepFourSlice.actions


// Export Selectors
export const {
	selectPowerSupplies,
	selectCatalog,
	selectCatalogActiveCategoryList,
} = stepFourSlice.selectors