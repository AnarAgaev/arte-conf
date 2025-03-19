import { PayloadAction } from "@reduxjs/toolkit"
import { T_AppState, T_Steps } from "../types"

type T_Payload = T_Steps[0]['substeps'][0]['id']

export const goToSubstepAction = (
    { steps }: T_AppState,
    { payload: targetSubstepId }: PayloadAction<T_Payload>
) => {

    const activeStepIdx = steps.findIndex(step => step.status === 'active')
    if (activeStepIdx === -1) return

    const substeps = steps[activeStepIdx].substeps

    const targetSubstepIdx = substeps.findIndex(substep => substep.id === targetSubstepId)
    if (targetSubstepIdx === -1) return

    substeps.forEach((substep, idx) => substep.status = idx < targetSubstepIdx
        ? 'prev'
        : idx > targetSubstepIdx
            ? 'next'
            : 'active'
    )
}