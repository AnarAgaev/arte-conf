import { useMemo } from "react"
import { formatRussianNumber } from '@helpers'
import { useAppSelector, useAppDispatch } from "@hooks"
import { selectActiveStep } from "@store/appSlice"
import { selectPowerSupplies, setPowerSupply } from '@store/stepFourSlice'
import { PictureSelectorList, PictureSelectorListItem, StepFragmentItem } from '@components'
import { T_AppDispatch } from "@store"
import { T_StepFourState } from "@store/stepFourSlice/types"

// #region Node list getters
const getPowerSupplyNodes = (
	powerSupplies: T_StepFourState['powerSupplies'],
	dispatch: T_AppDispatch
): JSX.Element[] => powerSupplies.map(powerSupply => {

	const onItem = () => {
		dispatch(setPowerSupply(powerSupply.id))
	}

	return (
		<PictureSelectorListItem
			key={powerSupply.id}
			selected={powerSupply.selected}
			clickHandler={onItem}
		>
			<div>
				<img src={powerSupply.img} alt={powerSupply.description} />

				<ul>
					{ powerSupply.power && <li>Мощность: {powerSupply.power}</li> }
					{ powerSupply.mountingType && <li>Тип монтажа: {powerSupply.mountingType}</li> }
					{ powerSupply.collection && <li>Коллекция: {powerSupply.collection}</li> }
					{ <li>Диммер: {powerSupply.dimmer ? 'Да' : 'Нет'}</li> }
				</ul>
			</div>
			<mark>
				{`Арт. ${powerSupply.article}`}
				<span>{`${formatRussianNumber(powerSupply.price)} р.`}</span>
			</mark>
		</PictureSelectorListItem>
	)
})
// #endregion

export const StepFour = () => {

	// #region Component variables
	const dispatch = useAppDispatch()
	const step = useAppSelector(selectActiveStep)
	const substep = step.substeps.find(substep => substep.status === 'active')
	const powerSupplies = useAppSelector(selectPowerSupplies)
	// #endregion

	// #region Node list getters
	const powerSupplyNodes = useMemo(
		() => getPowerSupplyNodes(powerSupplies, dispatch),
		[ powerSupplies, dispatch ]
	)
	// #endregion

	return (
		<>
			<StepFragmentItem>
				<h3>
					{ substep?.description }
				</h3>
				<article>
					<PictureSelectorList>
						{ powerSupplyNodes }
					</PictureSelectorList>
				</article>
			</StepFragmentItem>
		</>
	)
}