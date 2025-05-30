import { PayloadAction } from "@reduxjs/toolkit";
import { T_StepOneState } from "../types";

type T_Payload = T_StepOneState['mountingType'][0]['id']

export const setMountingTypeAction = (
    { mountingType }: T_StepOneState,
    action: PayloadAction<T_Payload>
) => {
    mountingType.forEach(type => type.selected = type.id === action.payload)
}