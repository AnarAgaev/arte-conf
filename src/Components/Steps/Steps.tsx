import { useMemo } from "react";
import { useAppSelector } from "@hooks"
import { selectAppSteps } from "@store/appSlice"
import { T_Steps } from "@store/appSlice/types";

const getSteps = (steps: T_Steps): JSX.Element[] => {

    return steps.map(step => {
        return <li key={step.name}>{step.name}</li>
    })



}

export const Steps = () => {



    console.log('---render Steps');



    const steps = useAppSelector(selectAppSteps)


    const stepsElements = useMemo(() => getSteps(steps), [
        steps
    ])


    return (
        <ul>
            {stepsElements}
        </ul>
    )
}