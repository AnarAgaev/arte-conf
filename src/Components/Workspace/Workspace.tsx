import { useAppSelector, useAppDispatch } from '@hooks'
import { goToNextStep, resetSteps, selectActiveStep } from '@store/appSlice'
import { StepsStatus, StepOne, StepTwo, StepFour, StepTotal } from '@components'
import { resetOneStep } from '@store/stepOneSlice'
import style from './Workspace.module.sass'

export const Workspace = () => {

    const dispatch = useAppDispatch()
    const activeStep = useAppSelector(selectActiveStep)

    const onReset = () => {
        dispatch(resetSteps())
        dispatch(resetOneStep())
    }

    return (
        <div className={style.Workspace}>
            <StepsStatus />

            <div className={style.Workspace__body}>
                { activeStep.name === 'step1' && <StepOne /> }
                { activeStep.name === 'step2' && <StepTwo /> }
                { activeStep.name === 'step3' && <span>Step 3</span> }
                { activeStep.name === 'step4' && <StepFour /> }
				{ activeStep.name === 'stepTotal' && <StepTotal /> }
            </div>

            <div className={style.Workspace__buttons}>
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