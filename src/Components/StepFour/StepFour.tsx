import { useMemo } from "react"
import { formatRussianNumber } from '@helpers'
import { useAppSelector, useAppDispatch } from "@hooks"
import { selectActiveStep, goToNextSubstep } from "@store/appSlice"
import { selectPowerSupplies, setPowerSupply, setCatalogCategory, selectCatalog } from '@store/stepFourSlice'
import { PictureSelectorList, PictureSelectorListItem,
	StepFragmentItem, StepFragmentsWrapper, Catalog } from '@components'
import { T_AppDispatch } from "@store"
import { T_StepFourState } from "@store/stepFourSlice/types"
import style from './StepFour.module.sass'

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

const getCatalogCategoriesNodes = (
	catalog: T_StepFourState['catalog'],
	dispatch: T_AppDispatch
): JSX.Element[] => catalog.map(category => {

	const onItem = () => {
		dispatch(setCatalogCategory(category.id))
	}

	return (
		<PictureSelectorListItem
			key={category.id}
			selected={category.selected}
			clickHandler={onItem}
		>
			<div>
				<img src={category.img} alt={category.description} />
			</div>
			<mark style={{wordSpacing: '100px'}}>
				{category.description}
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
	const catalog = useAppSelector(selectCatalog)
	// #endregion

	// #region Node list getters
	const powerSupplyNodes = useMemo(
		() => getPowerSupplyNodes(powerSupplies, dispatch),
		[ powerSupplies, dispatch ]
	)

	const catalogCategoriesNodes = useMemo(
		() => getCatalogCategoriesNodes(catalog, dispatch),
		[catalog, dispatch]
	)
	// #endregion

	return (
		<>
			{/* Подбор блока питания */}
			{ substep?.name === 'powerSupply' &&
				<StepFragmentsWrapper>
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

					<StepFragmentItem>
						<div className={style.StepFour__message}>
							<p>Если Вам нужно в помещение добавить дополнительное освещение. Например, бра, торшер или как-либо декоративный светильник, то перейдите по кнопке в КАТАЛОГ, что бы добавить в заказ</p>
							<button type="button" className="btn btn_large btn_dark" onClick={() => dispatch(goToNextSubstep())}>Перейти в каталог</button>
						</div>
					</StepFragmentItem>
				</StepFragmentsWrapper>
			}

			{/* Дополнительное освещение --- Каталог */}
			{ substep?.name === 'additionalLighting' &&
				<StepFragmentsWrapper>
					<StepFragmentItem>
						<h3>Выберите категорию</h3>
						<article>
							<PictureSelectorList>
								{ catalogCategoriesNodes }
							</PictureSelectorList>
						</article>
					</StepFragmentItem>
					<StepFragmentItem>
						<article>
							<Catalog />
						</article>
					</StepFragmentItem>
				</StepFragmentsWrapper>
			}
		</>
	)
}