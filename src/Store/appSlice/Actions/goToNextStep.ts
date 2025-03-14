import { T_AppState } from "../types";

export const goToNextStepAction = ({ steps }: T_AppState) => {
    const activeStepIdx = steps.findIndex(step => step.status === 'active')

    // If we staying on the last step
    if (activeStepIdx === -1 || activeStepIdx === steps.length - 1) return

    steps[activeStepIdx].status = 'prev'
    steps[activeStepIdx + 1].status = 'active'
}