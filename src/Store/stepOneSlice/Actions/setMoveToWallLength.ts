import { PayloadAction } from "@reduxjs/toolkit";
import { T_StepOneState } from "../types";

interface I_Payload {
	moveItemId: T_StepOneState['moveItems'][0]['id']
	newLength: T_StepOneState['moveItems'][0]['length']
}

export const setMoveToWallLengthAction = (
    { moveItems }: T_StepOneState,
    action: PayloadAction<I_Payload>
) => {
    moveItems.forEach(item => {
		if (item.id === action.payload.moveItemId) {
			item.length = action.payload.newLength
		}
	})
}