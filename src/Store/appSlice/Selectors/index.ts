import { T_AppState } from "../types"

export * from './selectActiveStep'

export const appSelector = (state: T_AppState) => state
export const appStatusSelector = (state: T_AppState) => state.status
export const appErrMsgSelector = (state: T_AppState) => state.errorMessage
export const appLoadMsgSelector = (state: T_AppState) => state.loadingMessage
export const appSucMsgSelector = (state: T_AppState) => state.successMessage
export const appPageSelector = (state: T_AppState) => state.page
export const appStepsSelector = (state: T_AppState) => state.steps