import { useMemo } from "react"
import { useAppSelector, useAppDispatch } from "@hooks"
import { selectActiveStep, goToNextSubstep } from "@store/appSlice"
import { selectTrackTypes, selectTrackColors,
	setTrackType, setTrackColor } from '@store/stepTwoSlice'
import { T_AppDispatch } from "@store"
import { T_StepTwoState } from "@store/stepTwoSlice/types"
import style from './StepTwo.module.sass'

const {
	StepTwo__message
} = style

// #region Node list getters
const getTrackTypeNodes = (
	trackTypes: T_StepTwoState['trackTypes'],
	dispatch: T_AppDispatch
): JSX.Element[] => trackTypes.map(type => {

	const clazz = `picture-sign-item ${type.selected ? 'picture-sign-item_selected' : ''}`

	const onItem = (id: number) => {
		dispatch(setTrackType(id))
		dispatch(goToNextSubstep())
	}

	return (
		<li key={type.id} className={clazz} onClick={() => onItem(type.id)}>
			<span>
				<img src={type.img} alt={type.description} />
			</span>
			<mark>{type.description}</mark>
		</li>
	)
})

const getTrackColorNodes = (
	trackColors: T_StepTwoState['trackColors'],
	dispatch: T_AppDispatch
): JSX.Element[] => trackColors.map(color => {

	const clazz = `picture-sign-item ${color.selected ? 'picture-sign-item_selected' : ''}`

	const onItem = (id: number) => {
		dispatch(setTrackColor(id))
		dispatch(goToNextSubstep())
	}

	return (
		<li key={color.id} className={clazz} onClick={() => onItem(color.id)}>
			<span>
				<img src={color.img} alt={color.description} />
			</span>
		</li>
	)
})
// #endregion

export const StepTwo = () => {

	// #region Component variables
	const dispatch = useAppDispatch()
	const step = useAppSelector(selectActiveStep)
	const substep = step.substeps.find(substep => substep.status === 'active')
	const trackTypes = useAppSelector(selectTrackTypes)
	const trackColors = useAppSelector(selectTrackColors)
	// #endregion

	// #region Node list getters
	const trackTypeNodes = useMemo(
		() => getTrackTypeNodes(trackTypes, dispatch),
		[ trackTypes, dispatch ]
	)

	const trackColorNodes = useMemo(
		() => getTrackColorNodes(trackColors, dispatch),
		[trackColors, dispatch]
	)
	// #endregion

	return (
		<>
			{/* Тип трека */}
			{ substep?.id === 0 &&
				<div className="step-fragments-wrapper">
					<section className="step-fragment">
						<h3 className="step-fragment__caption">
							{ substep?.name }
						</h3>
						<div className="step-fragment__content">
							<ul className="picture-sign-list">
								{ trackTypeNodes }
							</ul>
						</div>
					</section>
					<section className="step-fragment">
						<div className="step-fragment__content">
							<div className={StepTwo__message}>
								<p>При выборе данного типа трека, Вам необходимо связаться с менеджером, что бы сделать точный расчет</p>
								<button type="button" className="btn btn_default btn_dark">Связаться с менеджером</button>
							</div>
						</div>
					</section>
				</div>
			}

			{/* Цвет трека */}
			{ substep?.id === 1 &&
				<section className="step-fragment">
					<h3 className="step-fragment__caption">
						{ substep?.name }
					</h3>
					<div className="step-fragment__content">
						<ul className="picture-sign-list">
							{ trackColorNodes }
						</ul>
					</div>
				</section>
			}
		</>
	)
}