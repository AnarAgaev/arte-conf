import { PayloadAction } from "@reduxjs/toolkit";
import { T_StepThreeState } from "../types";

type T_Payload = T_StepThreeState['glowTemperatures'][0]['id']

export const setGlowTemperatureAction = (
    { glowTemperatures }: T_StepThreeState,
    action: PayloadAction<T_Payload>
) => {
    glowTemperatures.forEach(temperature => temperature.selected = temperature.id === action.payload)
}