import { T_StepTotalState } from "../types"

export const resetStepTotalAction = (state: T_StepTotalState) => {

    // Сбрасываем Оптимизацию расчета по остаткам
    state.calcOptimization.forEach( optimization => optimization.selected = optimization.name === 'inStock')
}