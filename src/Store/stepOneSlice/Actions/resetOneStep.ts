import { T_StepOneState } from "../types"

export const resetOneStepAction = (state: T_StepOneState) => {

    // Resenting ceiling type
    state.ceilingType.forEach(type => type.selected = false)

    // Resenting ...
}