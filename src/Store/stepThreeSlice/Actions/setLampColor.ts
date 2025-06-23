import { PayloadAction } from "@reduxjs/toolkit";
import { T_StepThreeState } from "../types";

type T_Payload = T_StepThreeState['lampColors'][0]['id']

export const setLampColorAction = (
    { lampColors }: T_StepThreeState,
    action: PayloadAction<T_Payload>
) => {
    lampColors.forEach(color => color.selected = color.id === action.payload)
}