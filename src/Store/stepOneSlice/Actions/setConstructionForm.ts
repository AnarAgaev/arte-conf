import { PayloadAction } from "@reduxjs/toolkit";
import { T_StepOneState } from "../types";

type T_Payload = T_StepOneState['constructionForm'][0]['id']

export const setConstructionFormAction = (
    { constructionForm }: T_StepOneState,
    action: PayloadAction<T_Payload>
) => {
    constructionForm.forEach(form => form.selected = form.id === action.payload)
}