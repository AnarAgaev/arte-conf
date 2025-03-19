import { PayloadAction } from "@reduxjs/toolkit"
import { T_AppState, T_Steps } from "../types"

type T_Payload = T_Steps[0]['id']

export const goToStepAction = (
    { steps }: T_AppState,
    { payload: targetStepId }: PayloadAction<T_Payload>
) => {

    const targetStepIdx = steps.findIndex(step => step.id === targetStepId)
    if (targetStepIdx === -1) return

    steps.forEach((step, idx) => step.status = idx < targetStepIdx
        ? 'prev'
        : idx > targetStepId
            ? 'next'
            : 'active'
    )
}