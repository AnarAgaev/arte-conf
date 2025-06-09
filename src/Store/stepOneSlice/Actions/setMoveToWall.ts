import { PayloadAction } from "@reduxjs/toolkit";
import { T_StepOneState } from "../types";

type T_Payload = T_StepOneState['moveItems'][0]['id']

export const setMoveToWallAction = (
    { moveItems }: T_StepOneState,
    action: PayloadAction<T_Payload>
) => moveItems.forEach(item => item.isActive =
	item.id !== action.payload
		? false
		: !item.isActive
)