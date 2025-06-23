import { PayloadAction } from "@reduxjs/toolkit";
import { T_StepThreeState } from "../types";

type T_Payload = T_StepThreeState['controlTypes'][0]['id']

export const setControlTypeAction = (
    { controlTypes }: T_StepThreeState,
    action: PayloadAction<T_Payload>
) => {
    controlTypes.forEach(type => type.selected = type.id === action.payload)
}