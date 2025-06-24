import { PayloadAction } from "@reduxjs/toolkit";
import { T_StepThreeState } from "../types";

type T_Payload = T_StepThreeState['sides'][0]['id']

export const setLampsSideAction = (
    { sides }: T_StepThreeState,
    action: PayloadAction<T_Payload>
) => {
    sides.forEach(side => side.selected = side.id === action.payload)
}