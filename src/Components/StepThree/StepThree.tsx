import { useMemo } from "react"
import { useAppSelector, useAppDispatch } from "@hooks"
import { selectActiveStep, goToNextSubstep } from "@store/appSlice"
import { selectLampColors, selectControlTypes, setLampColor,
	selectGlowTemperatures, selectLampPowers,
	setControlType, setGlowTemperature, setLampPower } from '@store/stepThreeSlice'
import { PictureSelectorList, PictureSelectorListItem,
	StepFragmentsWrapper, StepFragmentItem,
	CheckBoxControllerList, CheckBoxController } from '@components'
import { T_AppDispatch } from "@store"
import { T_StepThreeState } from "@store/stepThreeSlice/types"
// import style from './StepThree.module.sass'

// const {
// 	StepTwo__message,
// 	StepTwo__warning,
// } = style

// #region Node list getters
const getLampColorNodes = (
	lampColors: T_StepThreeState['lampColors'],
	dispatch: T_AppDispatch
): JSX.Element[] => lampColors.map(color => {

	const onItem = () => {
		dispatch(setLampColor(color.id))
	}

	return (
		<PictureSelectorListItem
			key={color.id}
			selected={color.selected}
			clickHandler={onItem}
		>
			<div>
				<img src={color.img} alt={color.description} />
			</div>
		</PictureSelectorListItem>
	)
})

const getControlTypesNodes = (
	controlTypes: T_StepThreeState['controlTypes'],
	dispatch: T_AppDispatch
): JSX.Element[] => controlTypes.map(type => {

	const onItem = () => {
		dispatch(setControlType(type.id))
	}

	return (
		<PictureSelectorListItem
			key={type.id}
			selected={type.selected}
			clickHandler={onItem}
		>
			<div>
				<img src={type.img} alt={type.description} />
			</div>
			<mark>
				{type.description}
				<span>{type.name}</span>
			</mark>
		</PictureSelectorListItem>
	)
})

const getGlowTemperaturesNodes = (
	glowTemperatures: T_StepThreeState['glowTemperatures'],
	dispatch: T_AppDispatch
): JSX.Element[] => glowTemperatures.map(temperature => {

	const onItem = () => {
		dispatch(setGlowTemperature(temperature.id))
	}

	return (
		<CheckBoxController
			key={temperature.id}
			description={temperature.value.toString()}
			isChecked={temperature.selected}
			onAction={onItem}
		/>
	)
})

const getLampPowersNodes = (
	lampPowers: T_StepThreeState['lampPowers'],
	dispatch: T_AppDispatch
): JSX.Element[] => lampPowers.map(power => {

	const onItem = () => {
		dispatch(setLampPower(power.id))
	}

	return (
		<CheckBoxController
			key={power.id}
			description={`${power.value}${power.id !== 0 ? ' W' : ''}`}
			isChecked={power.selected}
			onAction={onItem}
		/>
	)
})
// #endregion

export const StepThree = () => {

	// #region Component variables
	const dispatch = useAppDispatch()
	const step = useAppSelector(selectActiveStep)
	const substep = step.substeps.find(substep => substep.status === 'active')
	const lampColors = useAppSelector(selectLampColors)
	const controlTypes = useAppSelector(selectControlTypes)
	const glowTemperatures = useAppSelector(selectGlowTemperatures)
	const lampPowers = useAppSelector(selectLampPowers)
	// #endregion

	// #region Node list getters
	const lampColorNodes = useMemo(
		() => getLampColorNodes(lampColors, dispatch),
		[ lampColors, dispatch ]
	)

	const controlTypesNodes = useMemo(
		() => getControlTypesNodes(controlTypes, dispatch),
		[ controlTypes, dispatch ]
	)

	const glowTemperaturesNodes = useMemo(
		() => getGlowTemperaturesNodes(glowTemperatures, dispatch),
		[glowTemperatures, dispatch]
	)

	const lampPowersNodes = useMemo(
		() => getLampPowersNodes(lampPowers, dispatch),
		[ lampPowers, dispatch ]
	)
	// #endregion

	return (
		<>
			{/* Подбор светильников в трек */}
			{ substep?.name === 'lampsSelection' &&
				<StepFragmentsWrapper>
					<StepFragmentItem>
						<h3>Выберите цвет светильников</h3>
						<article>
							<PictureSelectorList>
								{ lampColorNodes }
							</PictureSelectorList>
						</article>
					</StepFragmentItem>

					<StepFragmentItem>
						<h3>Выберите тип управления</h3>
						<article>
							<PictureSelectorList>
								{ controlTypesNodes }
							</PictureSelectorList>
						</article>
					</StepFragmentItem>

					<StepFragmentItem>
						<h3>Выберите температуру свечения светильников</h3>
						<article>
							<CheckBoxControllerList>
								{ glowTemperaturesNodes }
							</CheckBoxControllerList>
						</article>
					</StepFragmentItem>

					<StepFragmentItem>
						<h3>Выберите мощность светильников</h3>
						<article>
							<CheckBoxControllerList>
								{ lampPowersNodes }
							</CheckBoxControllerList>
						</article>
					</StepFragmentItem>
				</StepFragmentsWrapper>
			}
		</>
	)
}