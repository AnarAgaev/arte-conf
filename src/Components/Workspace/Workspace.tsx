import { useAppSelector, useAppDispatch } from '@hooks'
import { goToNextStep, resetSteps, selectActiveStep } from '@store/appSlice'
import { resetOneStep } from '@store/stepOneSlice'
import { Steps, StepOne, StepTwo } from '@components'
import style from './Workspace.module.sass'

const { workspace, body, buttons } = style

export const Workspace = () => {

    const dispatch = useAppDispatch()
    const activeStep = useAppSelector(selectActiveStep)

    const onReset = () => {
        dispatch(resetSteps())
        dispatch(resetOneStep())
    }

    return (
        <div className={workspace}>
            <Steps />

            <div className={body}>
                { activeStep.id === 0 && <StepOne /> }
                { activeStep.id === 1 && <StepTwo /> }
            </div>

            <div className={buttons}>
                <button type='button'
                    className={`btn btn_small btn_lite${activeStep.id === 0 ? ' disabled' : ''}`}
                    onClick={onReset}>
                    сбросить все
                </button>
                <button type='button'
                    className={`btn btn_small btn_dark${activeStep.id === 4 ? ' disabled' : ''}`}
                    onClick={() => dispatch(goToNextStep())}>
                    следующий шаг
                </button>
            </div>
        </div>
    )
}