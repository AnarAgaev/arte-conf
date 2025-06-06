import { PayloadAction } from "@reduxjs/toolkit";
import { T_StepOneState } from "../types";

type T_Payload = T_StepOneState['sides'][0]['id'] | null

export const setActiveSideAction = (
    { sides }: T_StepOneState,
    action: PayloadAction<T_Payload>
) => {
    sides.forEach(side => side.isActive = side.id === action.payload)
}