import { useMemo } from "react";
import { useAppSelector, useAppDispatch } from "@hooks"
import { selectAppSteps, goToSubstep, goToStep } from "@store/appSlice"
import { T_Steps, T_StepStatus } from "@store/appSlice/types"
import { T_AppDispatch } from "@store";
import style from './Steps.module.sass'

const { steps, step, step_active, step_prev, step_next,
    substeps, substeps_visible, substep, substep_active,
    substep_prev, substep_next } = style

const getSubsteps = (
    substeps: T_Steps[number]['substeps'],
    dispatch: T_AppDispatch
): JSX.Element[] => substeps.map(
    ss => {

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
            <li key={ss.name}
                className={clazz[ss.status]}
                onClick={() => onSubstep(ss.status, ss.id)}>
                {ss.name}
            </li>
        )
    }
)

const getSteps = (
    steps: T_Steps,
    dispatch: T_AppDispatch
): JSX.Element[] => steps.map(
    s => {
        const substepsElements = getSubsteps(s.substeps, dispatch)

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
            <li key={s.name}
                className={clazz[s.status]}
                onClick={() => onStep(s.status, s.id)}
            >
                {s.name}
                <ul className={`${substeps}${s.status === 'active' ? ` ${substeps_visible}` : ''}`}>
                    { substepsElements }
                </ul>
            </li>
        )
    }
)

export const Steps = () => {
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