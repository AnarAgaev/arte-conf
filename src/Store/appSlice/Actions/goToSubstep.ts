import { PayloadAction } from "@reduxjs/toolkit"
import { T_AppState, T_Steps } from "../types"

type T_Id = T_Steps[0]['substeps'][0]['id']

export const goToSubstepAction = (
    { steps }: T_AppState,
    { payload: targetSubstepId }: PayloadAction<T_Id>
) => {

    const activeStepIdx = steps.findIndex(step => step.status === 'active')
    if (activeStepIdx === -1) return

    const substeps = steps[activeStepIdx].substeps

    const activeSubstepIdx = substeps.findIndex(substep => substep.id === targetSubstepId)

    // If we staying on the last substep
    if (activeSubstepIdx === -1 || activeSubstepIdx === substeps.length - 1) return

    substeps.forEach((substep, idx) => {
        substep.status = idx < activeSubstepIdx
            ? 'prev'
            : idx > activeSubstepIdx
                ? 'next'
                : 'active'
    })
}