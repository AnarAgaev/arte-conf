import { PayloadAction } from "@reduxjs/toolkit";
import { T_StepOneState } from "../types";

interface I_Payload {
	sideId: T_StepOneState['sides'][0]['id']
	newLength: T_StepOneState['sides'][0]['length']
}

export const setSideLengthAction = (
    { sides }: T_StepOneState,
    action: PayloadAction<I_Payload>
) => {
    sides.forEach(side => {
		if (side.id === action.payload.sideId) {
			side.length = action.payload.newLength
		}
	})
}