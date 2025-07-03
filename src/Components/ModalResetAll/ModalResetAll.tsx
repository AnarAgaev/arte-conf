import { useAppDispatch } from "@hooks"
import { Modal } from "@components"
import { resetStepsData, toggleModalResetAll } from "@store/appSlice"
import { resetStepOne } from '@store/stepOneSlice'
import { resetStepTwo } from "@store/stepTwoSlice"
import { resetStepThree } from "@store/stepThreeSlice"
import { resetStepFour } from "@store/stepFourSlice"
import { resetStepTotal } from "@store/stepTotalSlice"
import style from './ModalResetAll.module.sass'

const {
	ModalResetAll__body,
	ModalResetAll__icon,
	ModalResetAll__text,
	ModalResetAll__title,
	ModalResetAll__accent,
	ModalResetAll__controllers,
} = style

interface I_Props {
	visible: boolean
}

export const ModalResetAll = ({ visible }: I_Props) => {

	const dispatch = useAppDispatch()

	const onClose = () => dispatch(toggleModalResetAll('hide'))

	const onReset = () => {
		// Сбрасываем все шаги
        dispatch(resetStepsData())
        dispatch(resetStepOne())
		dispatch(resetStepTwo())
		dispatch(resetStepThree())
		dispatch(resetStepFour())
		dispatch(resetStepTotal())

		// Закрываем модальное окно
		dispatch(toggleModalResetAll('hide'))
    }

    return (
		<Modal
			visible={visible}
			onClose={onClose}
		>
			<div className={ModalResetAll__body}>
				<i className={ModalResetAll__icon}></i>
				<div className={ModalResetAll__text}>
					<p className={ModalResetAll__title}>
						<span>Вы уверены, что хотите очистить всё?</span>
						<span>Ваша конфигурация будет полностью сброшена и не сохранится</span>
					</p>
					<p className={ModalResetAll__accent}>
						<span>
							Но вы можете нажать на левую кнопку
							«ВЕРНУТЬСЯ» и сохранить вашу конфигурацию
						</span>
					</p>
				</div>
				<div className={ModalResetAll__controllers}>
					<button
						type="button"
						className="btn btn_large btn_lite btn_block"
						onClick={onClose}
					>
						Вернуться
					</button>
					<button
						type="button"
						className="btn btn_large btn_dark btn_block"
						onClick={onReset}
					>
						Очистить все
					</button>
				</div>
			</div>
		</Modal>
    )
}