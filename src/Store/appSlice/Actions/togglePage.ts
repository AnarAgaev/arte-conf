import { PayloadAction } from '@reduxjs/toolkit'
import type { T_AppState, T_Page } from '@store/appSlice/types'

export const togglePageAction = (
    state: T_AppState,
    action: PayloadAction<T_Page>
) => {
    state.page = action.payload
}
