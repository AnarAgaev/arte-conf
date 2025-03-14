import { T_AppState } from "../types"

export * from './selectActiveStep'

export const selectAppSelector = (state: T_AppState) => state
export const selectAppStatusSelector = (state: T_AppState) => state.status
export const selectAppErrMsgSelector = (state: T_AppState) => state.errorMessage
export const selectAppLoadMsgSelector = (state: T_AppState) => state.loadingMessage
export const selectAppSucMsgSelector = (state: T_AppState) => state.successMessage
export const selectAppPageSelector = (state: T_AppState) => state.page
export const selectAppStepsSelector = (state: T_AppState) => state.steps