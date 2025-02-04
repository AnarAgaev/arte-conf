import { createSlice } from '@reduxjs/toolkit'
import type { T_AppState } from '@store/appSlice/types'

// Actions
import { togglePageAction } from './Actions'

const initialState: T_AppState = {
    error: null,
    status: 'idle',
    page: 'configurator'
}

const reducers = {
    togglePage: togglePageAction
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers
})

export const { togglePage } = appSlice.actions

export default appSlice.reducer