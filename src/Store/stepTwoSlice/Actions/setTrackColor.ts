import { PayloadAction } from "@reduxjs/toolkit";
import { T_StepTwoState } from "../types";

type T_Payload = T_StepTwoState['trackColors'][0]['id']

export const setTrackColorAction = (
    { trackColors }: T_StepTwoState,
    action: PayloadAction<T_Payload>
) => {
    trackColors.forEach(color => color.selected = color.id === action.payload)
}