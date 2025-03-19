import { T_AppState } from "../types"

export const goToNextSubstepAction = ({ steps }: T_AppState) => {
    const activeStepIdx = steps.findIndex(step => step.status === 'active')
    if (activeStepIdx === -1) return

    const substeps = steps[activeStepIdx].substeps

    const activeSubstepIdx = substeps.findIndex(substep => substep.status === 'active')

    // If we staying on the last substep
    if (activeSubstepIdx === -1 || activeSubstepIdx === substeps.length - 1) return

    substeps[activeSubstepIdx].status = 'prev'
    substeps[activeSubstepIdx + 1].status = 'active'
}