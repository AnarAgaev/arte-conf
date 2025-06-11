import { useMemo } from "react";
import { useAppSelector, useAppDispatch } from "@hooks"
import { selectAppSteps, goToSubstep, goToStep } from "@store/appSlice"
import { T_Steps, T_StepStatus } from "@store/appSlice/types"
import { T_AppDispatch } from "@store";
import style from './StepsStatus.module.sass'

const { steps, step, step_active, step_prev, step_next,
    substeps, substeps_visible, substep, substep_active,
    substep_prev, substep_next } = style

//#region Get nodes list
const getSteps = (
    steps: T_Steps,
    dispatch: T_AppDispatch
): JSX.Element[] => steps.map(
    stepItem => {
        const substepsElements = getSubsteps(stepItem.substeps, dispatch)

        const clazz = {
            active: `${step} ${step_active}`,
            prev: `${step} ${step_prev}`,
            next: `${step} ${step_next}`,
        }

        const onStep = (
            status: T_StepStatus,
            id: T_Steps[0]['id']
        ) => {
            if (status !== 'prev') return
            dispatch(goToStep(id))
        }

        return (
            <li key={stepItem.id}
                className={clazz[stepItem.status]}
                onClick={() => onStep(stepItem.status, stepItem.id)}
            >
                { stepItem.description }
                <ul className={`${substeps}${stepItem.status === 'active' ? ` ${substeps_visible}` : ''}`}>
                    { substepsElements }
                </ul>
            </li>
        )
    }
)

const getSubsteps = (
    substeps: T_Steps[number]['substeps'],
    dispatch: T_AppDispatch
): JSX.Element[] => substeps.map(
    substepItem => {

        const clazz = {
            active: `${substep} ${substep_active}`,
            prev: `${substep} ${substep_prev}`,
            next: `${substep} ${substep_next}`,
        }

        const onSubstep = (
            status: T_StepStatus,
            id: T_Steps[0]['substeps'][0]['id']
        ) => {
            if (status !== 'prev') return
            dispatch(goToSubstep(id))
        }

        return (
            <li key={substepItem.id}
                className={clazz[substepItem.status]}
                onClick={() => onSubstep(substepItem.status, substepItem.id)}>
                { substepItem.description }
            </li>
        )
    }
)
//#endregion

export const StepsStatus = () => {
    const dispatch = useAppDispatch()
    const stepList = useAppSelector(selectAppSteps)

    const stepsElements = useMemo(
        () => getSteps(stepList, dispatch),
        [ stepList, dispatch ]
    )

    return (
        <ul className={steps}>
            { stepsElements }
        </ul>
    )
}