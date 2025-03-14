import { T_AppState, T_StepStatus } from "../types"

type T_SimplifiedStep = {
    status: T_StepStatus;
    substeps?: {
        status: T_StepStatus;
    }[]
}[]

export const resetAllStepsAction = ({ steps }: T_AppState) => {

    function setFirstStatusAsActive(arr: T_SimplifiedStep) {
        arr.forEach((i, idx) => {
            i.status = idx === 0 ? 'active' : 'next'

            if (i.substeps) setFirstStatusAsActive(i.substeps)
        })
    }

    setFirstStatusAsActive(steps)
}