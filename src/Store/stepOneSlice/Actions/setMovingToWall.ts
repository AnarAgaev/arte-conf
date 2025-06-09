import { PayloadAction } from "@reduxjs/toolkit";
import { T_StepOneState } from "../types";

type I_Payload = T_StepOneState['MovingToWall']

export const setMovingToWallAction = (
    state: T_StepOneState,
    action: PayloadAction<I_Payload>
) => {
	state.MovingToWall = action.payload
}