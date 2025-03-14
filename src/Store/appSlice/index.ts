import { ActionReducerMapBuilder, createSlice, PayloadAction, AnyAction } from '@reduxjs/toolkit'
import type { T_AppState } from '@store/appSlice/types'
import steps from './steps'

// Import Funcs
import {
    fetchInitData
} from './Funcs'

// Import Actions
import {
    togglePageAction,
    goToNextStepAction,
    resetAllStepsAction
} from './Actions'

// Import Selectors
import {
    selectAppSelector,
    selectAppStatusSelector,
    selectAppErrMsgSelector,
    selectAppLoadMsgSelector,
    selectAppSucMsgSelector,
    selectAppPageSelector,
    selectAppStepsSelector,
    selectActiveStepSelector
} from './Selectors'

const initialState: T_AppState = {
    errorMessage: null,
    loadingMessage: null,
    successMessage: null,
    status: 'idle',
    page: 'configurator',
    steps: steps
}

const reducers = {
    togglePage: togglePageAction,
    goToNextStep: goToNextStepAction,
    resetAllSteps: resetAllStepsAction
}

const selectors = {
    selectApp: selectAppSelector,
    selectAppStatus: selectAppStatusSelector,
    selectAppErrMsg: selectAppErrMsgSelector,
    selectAppLoadMsg: selectAppLoadMsgSelector,
    selectAppSucMsg: selectAppSucMsgSelector,
    selectAppPage: selectAppPageSelector,
    selectAppSteps: selectAppStepsSelector,
    selectActiveStep: selectActiveStepSelector
}

// Predicator function for mather reject request from Funcs
const isError = (action: AnyAction) => {
    return action.type.endsWith('rejected')
}

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

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers,
    selectors,
    extraReducers
})

export default appSlice.reducer

export const {
    togglePage,
    goToNextStep,
    resetAllSteps
} = appSlice.actions

export const {
    selectApp,
    selectAppStatus,
    selectAppPage,
    selectAppErrMsg,
    selectAppLoadMsg,
    selectAppSucMsg,
    selectAppSteps,
    selectActiveStep
} = appSlice.selectors

// Re export async funcs
export { fetchInitData }