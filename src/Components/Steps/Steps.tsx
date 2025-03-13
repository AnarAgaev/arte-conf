import { useMemo } from "react";
import { useAppSelector } from "@hooks"
import { selectAppSteps } from "@store/appSlice"
import { T_Steps } from "@store/appSlice/types"
import style from './Steps.module.sass'

const { steps, step, step_active, step_prev, step_next,
    substeps, substeps_visible, substep, substep_active,
    substep_prev, substep_next } = style

const stepsNamesMap = {
    1: '1 шаг',
    2: '2 шаг',
    3: '3 шаг',
    4: '4 шаг',
    total: 'итого',
}

const getSubsteps = (substeps: T_Steps[number]['substeps']): JSX.Element[] => substeps.map(
    ss => {
        const clazz = {
            active: `${substep} ${substep_active}`,
            prev: `${substep} ${substep_prev}`,
            next: `${substep} ${substep_next}`,
        }

        return (
            <li className={clazz[ss.status]} key={ss.name}>
                {ss.name}
            </li>
        )
    }
)

const getSteps = (steps: T_Steps): JSX.Element[] => steps.map(
    s => {
        const substepsElements = getSubsteps(s.substeps)

        const clazz = {
            active: `${step} ${step_active}`,
            prev: `${step} ${step_prev}`,
            next: `${step} ${step_next}`,
        }

        return (
            <li className={clazz[s.status]} key={s.name}>
                {stepsNamesMap[s.name]}
                <ul className={`${substeps}${s.status === 'active' ? ` ${substeps_visible}` : ''}`}>
                    { substepsElements }
                </ul>
            </li>
        )
    }
)

export const Steps = () => {



    console.log('---render Steps');



    const stepList = useAppSelector(selectAppSteps)

    const stepsElements = useMemo(() => getSteps(stepList), [
        stepList
    ])

    return (
        <ul className={steps}>
            { stepsElements }
        </ul>
    )
}