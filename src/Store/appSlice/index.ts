import { ActionReducerMapBuilder, createSlice, PayloadAction, AnyAction } from '@reduxjs/toolkit'
import type { T_AppState } from '@store/appSlice/types'
import initialState from './initialState'


// Import Async Funcs
import {
    fetchInitData
} from './Funcs'


// Predicator function for mather reject request from Funcs
const isError = (action: AnyAction) => {
    return action.type.endsWith('rejected')
}


// Register Async Funcs
const extraReducers = (builder: ActionReducerMapBuilder<T_AppState>) => {

    // #region fetchInitData
    builder
        .addCase(fetchInitData.pending, (state) => {
            state.status = 'pending'
            state.errorMessage = null
            state.successMessage = null
            state.loadingMessage = 'Загружаем данные для конфигуратора'
        })
        .addCase(fetchInitData.fulfilled, (state, action: PayloadAction<string>) => {
            state.status = 'succeeded'
            state.errorMessage = null
            state.loadingMessage = null
            state.successMessage = action.payload
        })
        // .addCase(fetchInitData.rejected, (state, action) => {
        //     state.status = 'failed'

        //     console.log('rejected action', action);
        // })
    // #endregion

    // For the all Errors fire one match reject
    builder
        .addMatcher(isError, (state, action: PayloadAction<string>) => {
            state.status = 'failed'
            state.loadingMessage = null
            state.successMessage = null
            state.errorMessage = action.payload
        })
}


// Import Actions
import {
    togglePageAction,
    goToNextStepAction,
    goToNextSubstepAction,
    goToSubstepAction,
    resetStepsDataAction,
    goToStepAction,
	toggleModalResetAllAction,
} from './Actions'


// Register Actions
const reducers = {
    togglePage: togglePageAction,
    goToNextStep: goToNextStepAction,
    goToNextSubstep: goToNextSubstepAction,
    goToStep: goToStepAction,
    goToSubstep: goToSubstepAction,
    resetStepsData: resetStepsDataAction,
	toggleModalResetAll: toggleModalResetAllAction
}


// Import Selectors
import {
    appSelector,
    appStatusSelector,
    appErrMsgSelector,
    appLoadMsgSelector,
    appSucMsgSelector,
    appPageSelector,
    appStepsSelector,
    activeStepSelector,
	modalResetAllSelector,
} from './Selectors'


// Register Selectors
const selectors = {
    selectApp: appSelector,
    selectAppStatus: appStatusSelector,
    selectAppErrMsg: appErrMsgSelector,
    selectAppLoadMsg: appLoadMsgSelector,
    selectAppSucMsg: appSucMsgSelector,
    selectAppPage: appPageSelector,
    selectAppSteps: appStepsSelector,
    selectActiveStep: activeStepSelector,
	selectModalResetAll: modalResetAllSelector,
}


// Create slice
const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers,
    selectors,
    extraReducers
})


// Exports ...
export default appSlice.reducer


// Export Actions
export const {
    togglePage,
    goToNextStep,
    goToNextSubstep,
    goToStep,
    goToSubstep,
    resetStepsData,
	toggleModalResetAll,
} = appSlice.actions


// Export Selectors
export const {
    selectApp,
    selectAppStatus,
    selectAppPage,
    selectAppErrMsg,
    selectAppLoadMsg,
    selectAppSucMsg,
    selectAppSteps,
    selectActiveStep,
	selectModalResetAll,
} = appSlice.selectors


// Re export Async Funcs
export { fetchInitData }