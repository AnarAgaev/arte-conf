import { PayloadAction } from "@reduxjs/toolkit";
import { T_StepOneState } from "../types";

interface I_Payload {
	sideId: T_StepOneState['sides'][0]['id']
	value: T_StepOneState['sides'][0]['value']
}

export const setSideValueAction = (
    { sides }: T_StepOneState,
    action: PayloadAction<I_Payload>
) => {
    sides.forEach(side => {
		if (side.id === action.payload.sideId) {
			side.value = action.payload.value
		}
	})
}