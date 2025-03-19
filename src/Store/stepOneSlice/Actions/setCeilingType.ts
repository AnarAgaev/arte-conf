import { PayloadAction } from "@reduxjs/toolkit";
import { T_StepOneState } from "../types";

type T_Id = T_StepOneState['ceilingType'][0]['id']

export const setCeilingTypeAction = (
    { ceilingType }: T_StepOneState,
    action: PayloadAction<T_Id>
) => {
    ceilingType.forEach(type => type.selected = type.id === action.payload)
}