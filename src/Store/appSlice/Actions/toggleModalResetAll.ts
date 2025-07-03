import { PayloadAction } from "@reduxjs/toolkit"
import { T_AppState, T_Visible } from "../types"

type T_Payload = T_Visible

export const toggleModalResetAllAction = (
    state: T_AppState,
	action: PayloadAction<T_Payload>
) => {
	state.modalResetAll.visible = action.payload
}