import { PayloadAction } from "@reduxjs/toolkit";
import { T_StepThreeState } from "../types";

type T_Payload = T_StepThreeState['lampPowers'][0]['id']

export const setLampPowerAction = (
    { lampPowers }: T_StepThreeState,
    action: PayloadAction<T_Payload>
) => {
    lampPowers.forEach(power => power.selected = power.id === action.payload)
}