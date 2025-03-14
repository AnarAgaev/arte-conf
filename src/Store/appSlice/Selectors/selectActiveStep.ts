import { T_AppState } from "../types"

export const selectActiveStepSelector = (state: T_AppState) => {
    const activeStep = state.steps.filter(step => step.status === 'active')
    return activeStep[0]
}