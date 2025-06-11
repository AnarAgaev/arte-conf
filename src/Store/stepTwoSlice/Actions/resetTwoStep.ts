import { T_StepTwoState } from "../types"

export const resetTwoStepAction = (state: T_StepTwoState) => {

    // Сбрасываем тип потолка
    state.trackTypes.forEach(type => type.selected = false)



    // Resenting ...
}