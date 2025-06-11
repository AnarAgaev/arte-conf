// import { useMemo } from "react"
// import { useAppSelector, useAppDispatch } from "@hooks"
// import { selectActiveStep, goToNextSubstep } from "@store/appSlice"
// import { selectTrackTypes, selectTrackColors,
// 	setTrackType, setTrackColor } from '@store/stepTwoSlice'
// import { PictureSelectorList, PictureSelectorListItem,
// 	StepFragmentsWrapper, StepFragmentItem } from '@components'
// import { T_AppDispatch } from "@store"
// import { T_StepTwoState } from "@store/stepTwoSlice/types"
// import style from './StepTwo.module.sass'

// const {
// 	StepTwo__message
// } = style

// #region Node list getters
// const getTrackTypeNodes = (
// 	trackTypes: T_StepTwoState['trackTypes'],
// 	dispatch: T_AppDispatch
// ): JSX.Element[] => trackTypes.map(type => {

// 	const onItem = (id: number) => {
// 		dispatch(setTrackType(id))
// 		dispatch(goToNextSubstep())
// 	}

// 	return (
// 		<PictureSelectorListItem
// 			key={type.id}
// 			selected={type.selected}
// 			clickHandler={() => onItem(type.id)}
// 		>
// 			<span>
// 				<img src={type.img} alt={type.description} />
// 			</span>
// 			<mark>{type.description}</mark>
// 		</PictureSelectorListItem>
// 	)
// })
// #endregion

export const StepFour = () => {

	// #region Component variables
	// const dispatch = useAppDispatch()
	// const step = useAppSelector(selectActiveStep)
	// const substep = step.substeps.find(substep => substep.status === 'active')
	// const trackTypes = useAppSelector(selectTrackTypes)
	// const trackColors = useAppSelector(selectTrackColors)
	// #endregion

	// #region Node list getters
	// const trackTypeNodes = useMemo(
	// 	() => getTrackTypeNodes(trackTypes, dispatch),
	// 	[ trackTypes, dispatch ]
	// )
	// #endregion

	return (
		<>
			StepFour
			{/* Цвет трека */}
			{/* { substep?.id === 1 &&
				<StepFragmentItem>
					<h3>
						{ substep?.description }
					</h3>
					<article>
						<PictureSelectorList>
							{ trackColorNodes }
						</PictureSelectorList>
					</article>
				</StepFragmentItem>
			} */}
		</>
	)
}