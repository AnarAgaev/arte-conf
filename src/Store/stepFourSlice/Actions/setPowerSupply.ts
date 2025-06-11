import { PayloadAction } from "@reduxjs/toolkit"
import { T_StepFourState } from "../types"

type T_Payload = T_StepFourState['powerSupplies'][0]['id']

export const setPowerSupplyAction = (
    { powerSupplies }: T_StepFourState,
    action: PayloadAction<T_Payload>
) => {
    powerSupplies.forEach(powerSupply => powerSupply.selected = powerSupply.id === action.payload)
}