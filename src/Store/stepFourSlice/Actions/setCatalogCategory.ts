import { PayloadAction } from "@reduxjs/toolkit";
import { T_StepThreeState } from "../types";

type T_Payload = T_StepThreeState['catalog'][0]['id']

export const setCatalogCategoryAction = (
    { catalog }: T_StepThreeState,
    action: PayloadAction<T_Payload>
) => {
    catalog.forEach(category => category.selected = category.id === action.payload)
}