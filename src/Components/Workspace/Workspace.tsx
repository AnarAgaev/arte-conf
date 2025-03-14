import { useAppSelector, useAppDispatch } from '@hooks'
import { goToNextStep, resetAllSteps, selectActiveStep } from '@store/appSlice'
import { Steps } from '@components'
import style from './Workspace.module.sass'

const { workspace, buttons } = style

export const Workspace = () => {

    const dispatch = useAppDispatch()
    const isFirstStep = useAppSelector(selectActiveStep).id === 0
    const isLastStep = useAppSelector(selectActiveStep).id === 4

    return (
        <div className={workspace}>
            <Steps />

            <div>Workspace body</div>

            <div className={buttons}>
                <button type='button'
                    className={`btn btn_small btn_lite${isFirstStep ? ' disabled' : ''}`}
                    onClick={() => dispatch(resetAllSteps())}>
                    сбросить все
                </button>
                <button type='button'
                    className={`btn btn_small btn_dark${isLastStep ? ' disabled' : ''}`}
                    onClick={() => dispatch(goToNextStep())}>
                    следующий шаг
                </button>
            </div>
        </div>
    )
}