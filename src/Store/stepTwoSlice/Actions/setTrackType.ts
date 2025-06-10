import { PayloadAction } from "@reduxjs/toolkit";
import { T_StepTwoState } from "../types";

type T_Payload = T_StepTwoState['trackType'][0]['id']

export const setTrackTypeAction = (
    { trackType }: T_StepTwoState,
    action: PayloadAction<T_Payload>
) => {
    trackType.forEach(type => type.selected = type.id === action.payload)
}