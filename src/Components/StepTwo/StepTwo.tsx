import { useMemo } from "react"
import { useAppSelector, useAppDispatch } from "@hooks"
import { selectActiveStep, goToNextSubstep } from "@store/appSlice"
import { selectTrackTypes, selectTrackColors,
	setTrackType, setTrackColor } from '@store/stepTwoSlice'
import { PictureSelectorList, PictureSelectorListItem } from '@components'
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

	const onItem = (id: number) => {
		dispatch(setTrackType(id))
		dispatch(goToNextSubstep())
	}

	return (
		<PictureSelectorListItem
			key={type.id}
			selected={type.selected}
			clickHandler={() => onItem(type.id)}
		>
			<span>
				<img src={type.img} alt={type.description} />
			</span>
			<mark>{type.description}</mark>
		</PictureSelectorListItem>
	)
})

const getTrackColorNodes = (
	trackColors: T_StepTwoState['trackColors'],
	dispatch: T_AppDispatch
): JSX.Element[] => trackColors.map(color => {

	const onItem = (id: number) => {
		dispatch(setTrackColor(id))
		dispatch(goToNextSubstep())
	}

	return (
		<PictureSelectorListItem
			key={color.id}
			selected={color.selected}
			clickHandler={() => onItem(color.id)}
		>
			<span>
				<img src={color.img} alt={color.description} />
			</span>
		</PictureSelectorListItem>
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
							<PictureSelectorList>
								{ trackTypeNodes }
							</PictureSelectorList>
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
						<PictureSelectorList>
							{ trackColorNodes }
						</PictureSelectorList>
					</div>
				</section>
			}
		</>
	)
}