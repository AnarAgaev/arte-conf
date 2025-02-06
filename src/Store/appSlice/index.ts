import { ActionReducerMapBuilder, createSlice, PayloadAction, AnyAction } from '@reduxjs/toolkit'
import type { T_AppState } from '@store/appSlice/types'

// Actions
import { togglePage as togglePageAction } from './Actions'
import { fetchInitData } from './Funcs'

const initialState: T_AppState = {
    errorMessage: null,
    loadingMessage: null,
    successMessage: null,
    status: 'idle',
    page: 'configurator'
}

const reducers = {
    togglePage: togglePageAction
}

const selectors = {
    selectApp: (state: T_AppState) => state,
    selectAppErrMsg: (state: T_AppState) => state.errorMessage,
    selectAppLoadMsg: (state: T_AppState) => state.loadingMessage,
    selectAppSucMsg: (state: T_AppState) => state.successMessage,
    selectAppPage: (state: T_AppState) => state.page
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

export const { togglePage } = appSlice.actions

export default appSlice.reducer

export const {
    selectApp,
    selectAppPage,
    selectAppErrMsg,
    selectAppLoadMsg,
    selectAppSucMsg
} = appSlice.selectors

// Re export async funcs
export { fetchInitData }