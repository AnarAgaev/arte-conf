import { PayloadAction } from "@reduxjs/toolkit";
import { T_StepOneState } from "../types";

type I_Payload = T_StepOneState['movingToWall']

export const setMovingToWallVisibleAction = (
    state: T_StepOneState,
    action: PayloadAction<I_Payload>
) => {
	state.movingToWall = action.payload
}