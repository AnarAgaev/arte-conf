import { T_StepFourState } from "../types"

export const resetFourStepAction = (state: T_StepFourState) => {

    // Сбрасываем блоки питания
    state.powerSupplies.forEach(powerSupply => powerSupply.selected = false)



    // Resenting ...
}