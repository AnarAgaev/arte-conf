import { PayloadAction } from "@reduxjs/toolkit";
import { T_StepOneState } from "../types";

type T_Payload = T_StepOneState['ceilingType'][0]['id']

export const setCeilingTypeAction = (
    { ceilingType }: T_StepOneState,
    action: PayloadAction<T_Payload>
) => {
    ceilingType.forEach(type => type.selected = type.id === action.payload)
}