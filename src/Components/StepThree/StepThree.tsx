import { useEffect, useMemo, useState } from "react"
import { useAppSelector, useAppDispatch } from "@hooks"
import { selectActiveStep, goToNextSubstep } from "@store/appSlice"
import { T_Lamp } from '@store/appSlice/types'
import { formatRussianNumber } from "@helpers"

import { selectLampColors, selectControlTypes, setLampColor,
	selectGlowTemperatures, selectLampPowers,
	setControlType, setGlowTemperature, setLampPower,
	selectSides, setLampsSide, setCatalogCategory,
	selectCatalog} from '@store/stepThreeSlice'

import { PictureSelectorList, PictureSelectorListItem,
	StepFragmentsWrapper, StepFragmentItem,
	CheckBoxControllerList, CheckBoxController,
	TextSelectorList, TextSelectorListItem,
	CalcController, Catalog } from '@components'

import { T_AppDispatch } from "@store"
import { T_StepThreeState } from "@store/stepThreeSlice/types"

import style from './StepThree.module.sass'

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

const getSidesNodes = (
	sides: T_StepThreeState['sides'],
	dispatch: T_AppDispatch
): JSX.Element[] => sides.map(side => {

	const onItem = () => {
		dispatch(setLampsSide(side.id))
	}

	return (
		<TextSelectorListItem
			key={side.id}
			selected={side.selected}
			clickHandler={onItem}
		>
			<span>{side.description}</span>
		</TextSelectorListItem>
	)
})

const getLampsNodes = (
	lamps: T_Lamp[],
): JSX.Element[] => lamps.map(lamp => {

	return (
		<PictureSelectorListItem
			key={lamp.id}
			selected={lamp.selected}
			clickHandler={() => alert('Добавляем лампу на сторону')}
		>
			<div>
				<img src={lamp.img} alt={lamp.article} />

				<ul>
					{ lamp.lengthOnTrack && <li>Длинна на треке: {lamp.lengthOnTrack} мм</li> }
					{ <li>Деммируемый: {lamp.dimmer ? 'Да' : 'Нет'}</li> }
					{ lamp.colorTemperature && <li>Цветовая t: {lamp.colorTemperature} K</li> }
					{ lamp.power && <li>Мощность: {lamp.power} W</li> }
				</ul>
			</div>
			<mark>
				{`Арт. ${lamp.article}`}
				<span>{`${formatRussianNumber(lamp.price)} р.`}</span>
			</mark>
		</PictureSelectorListItem>
	)
})

const getTotalLampsNodes = (
	lamps: T_Lamp[],
): JSX.Element[] => lamps.map((lamp, idx) => {

	return (
		<PictureSelectorListItem key={lamp.id}>
			<div>
				<img src={lamp.img} alt={lamp.article} />

				<ul>
					{ lamp.lengthOnTrack && <li>Длинна на треке: {lamp.lengthOnTrack} мм</li> }
					{ <li>Деммируемый: {lamp.dimmer ? 'Да' : 'Нет'}</li> }
					{ lamp.colorTemperature && <li>Цветовая t: {lamp.colorTemperature} K</li> }
					{ lamp.power && <li>Мощность: {lamp.power} W</li> }
					<li><i>Цена: {`${formatRussianNumber(lamp.price)} р.`}</i></li>
				</ul>

				<button onClick={() => alert('Удаляем лампу')}>
					<span>Удалить</span>
				</button>

				<strong>+{idx * 2}</strong>
			</div>

			<mark>
				{`Арт. ${lamp.article}`}
				<span>{`${formatRussianNumber(lamp.price)} р.`}</span>
			</mark>

			<div>
				<CalcController
					step={1}
					value={idx * 2}
					transparent
				/>
			</div>
		</PictureSelectorListItem>
	)
})

const getCatalogCategoriesNodes = (
	catalog: T_StepThreeState['catalog'],
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

export const StepThree = () => {

	// #region Component variables
	const dispatch = useAppDispatch()
	const step = useAppSelector(selectActiveStep)
	const substep = step.substeps.find(substep => substep.status === 'active')
	const lampColors = useAppSelector(selectLampColors)
	const controlTypes = useAppSelector(selectControlTypes)
	const glowTemperatures = useAppSelector(selectGlowTemperatures)
	const lampPowers = useAppSelector(selectLampPowers)
	const sides = useAppSelector(selectSides)
	const catalog = useAppSelector(selectCatalog)
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

	const sidesNodes = useMemo(
		() => getSidesNodes(sides, dispatch),
		[sides, dispatch]
	)

	const catalogCategoriesNodes = useMemo(
		() => getCatalogCategoriesNodes(catalog, dispatch),
		[catalog, dispatch]
	)




	// ! Временная логика для демонстрации списка ламп --- START
		// * Список ламп необходимо получать из стора
		const [lamps, setLamps] = useState<T_Lamp[]>([]);

		useEffect(() => {
			fetch('../../../public/mocks/lamps-example.json')
				.then(response => response.json())
				.then(data => setLamps(data))
				.catch(error => console.error('Error loading lamps:', error));
		}, [])
	// ! Временная логика для демонстрации списка ламп --- FINISH





	const lampsNodes = useMemo(
		() => getLampsNodes(lamps),
		[lamps]
	)

	const totalLampsNods = useMemo(
		() => getTotalLampsNodes(lamps).slice(3, 7),
		[lamps]
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

					<StepFragmentItem>
						<h3>Выберите светильники</h3>
						<article>
							<TextSelectorList>
								{ sidesNodes }
							</TextSelectorList>
							<PictureSelectorList>
								{ lampsNodes }
							</PictureSelectorList>
						</article>
					</StepFragmentItem>

					<StepFragmentItem>
						<h3>Итог (ваш выбор):</h3>
						<article>
							<PictureSelectorList>
								{ totalLampsNods }
							</PictureSelectorList>
						</article>
					</StepFragmentItem>

					<StepFragmentItem>
						<div className={style.StepThree__message}>
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