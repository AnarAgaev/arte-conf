import { PayloadAction } from "@reduxjs/toolkit"
import { T_StepTotalState } from "../types"

type T_Payload = T_StepTotalState['calcOptimization'][0]['id']

export const setCalcOptimizationAction = (
    { calcOptimization }: T_StepTotalState,
    action: PayloadAction<T_Payload>
) => {
    calcOptimization.forEach(optimization => optimization.selected = optimization.id === action.payload)
}