import { PayloadAction } from "@reduxjs/toolkit";
import { T_StepTwoState } from "../types";

type T_Payload = T_StepTwoState['trackTypes'][0]['id']

export const setTrackTypeAction = (
    { trackTypes }: T_StepTwoState,
    action: PayloadAction<T_Payload>
) => {
    trackTypes.forEach(type => type.selected = type.id === action.payload)
}