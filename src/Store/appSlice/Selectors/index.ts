import { T_AppState } from "../types"

export const appSelector = (state: T_AppState) => state

export const appStatusSelector = (state: T_AppState) => state.status

export const appErrMsgSelector = (state: T_AppState) => state.errorMessage

export const appLoadMsgSelector = (state: T_AppState) => state.loadingMessage

export const appSucMsgSelector = (state: T_AppState) => state.successMessage

export const appPageSelector = (state: T_AppState) => state.page

export const appStepsSelector = (state: T_AppState) => state.steps

export const activeStepSelector = (state: T_AppState) => {
    const activeStep = state.steps.filter(step => step.status === 'active')
    return activeStep[0]
}

export const modalResetAllSelector = (state: T_AppState) => state.modalResetAll