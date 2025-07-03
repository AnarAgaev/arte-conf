import { useMemo } from "react"
import { useAppSelector, useAppDispatch } from "@hooks"
import { selectActiveStep, goToNextSubstep } from "@store/appSlice"
import { selectTrackTypes, selectTrackColors,
	setTrackType, setTrackColor, selectTrackCollections,
	setTrackCollection } from '@store/stepTwoSlice'
import { PictureSelectorList, PictureSelectorListItem,
	StepFragmentsWrapper, StepFragmentItem,
	TextSelectorList, TextSelectorListItem,
	TableContainer, TableSection } from '@components'
import { T_AppDispatch } from "@store"
import { T_StepTwoState } from "@store/stepTwoSlice/types"
import style from './StepTwo.module.sass'

const {
	StepTwo__message,
	StepTwo__warning,
} = style

// #region Node list getters
const getTrackTypeNodes = (
	trackTypes: T_StepTwoState['trackTypes'],
	dispatch: T_AppDispatch
): JSX.Element[] => trackTypes.map(type => {

	const onItem = () => {
		dispatch(setTrackType(type.id))
		dispatch(goToNextSubstep())
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
			<mark>{type.description}</mark>
		</PictureSelectorListItem>
	)
})

const getTrackColorNodes = (
	trackColors: T_StepTwoState['trackColors'],
	dispatch: T_AppDispatch
): JSX.Element[] => trackColors.map(color => {

	const onItem = () => {
		dispatch(setTrackColor(color.id))
		dispatch(goToNextSubstep())
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

const getTrackCollectionNodes = (
	trackCollections: T_StepTwoState['trackCollections'],
	dispatch: T_AppDispatch
): JSX.Element[] => trackCollections.map(collection => {

	const onItem = () => {
		dispatch(setTrackCollection(collection.id))
	}

	return (
		<TextSelectorListItem
			key={collection.id}
			selected={collection.selected}
			clickHandler={onItem}
		>
			<span>{collection.description}</span>
		</TextSelectorListItem>
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
	const trackCollections = useAppSelector(selectTrackCollections)
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

	const trackCollectionNodes = useMemo(
		() => getTrackCollectionNodes(trackCollections, dispatch),
		[trackCollections, dispatch]
	)
	// #endregion

	return (
		<>
			{/* Тип трека */}
			{ substep?.name === 'trackType' &&
				<StepFragmentsWrapper>
					<StepFragmentItem>
						<h3>
							{ substep?.description }
						</h3>
						<article>
							<PictureSelectorList>
								{ trackTypeNodes }
							</PictureSelectorList>
						</article>
					</StepFragmentItem>
					<StepFragmentItem>
						<article>
							<div className={StepTwo__message}>
								<p>При выборе данного типа трека, Вам необходимо связаться с менеджером, что бы сделать точный расчет</p>
								<button type="button" className="btn btn_large btn_dark">Связаться с менеджером</button>
							</div>
						</article>
					</StepFragmentItem>
				</StepFragmentsWrapper>
			}

			{/* Цвет трека */}
			{ substep?.name === 'trackColor' &&
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
			}

			{/* Коллекция */}
			{ substep?.name === 'trackCollection' &&
				<StepFragmentsWrapper>
					<StepFragmentItem>
						<h3>
							{ substep?.description }
						</h3>
						<article>
							<TextSelectorList>
								{ trackCollectionNodes }
							</TextSelectorList>
						</article>
					</StepFragmentItem>

					<StepFragmentItem>
						<PictureSelectorList>

						{/* Здесь будет логик по динамическому получения треков определенной коллекции --- START */}


									<PictureSelectorListItem
										key={1}
										selected={false}
										clickHandler={() => {}}
										>
										<div>
											<img src="images/track-example-1.webp" alt="description" />
										</div>
									</PictureSelectorListItem>
									<PictureSelectorListItem
										key={2}
										selected={false}
										clickHandler={() => {}}
										>
										<div>
											<img src="images/track-example-2.webp" alt="description" />
										</div>
									</PictureSelectorListItem>
									<PictureSelectorListItem
										key={3}
										selected={false}
										clickHandler={() => {}}
										>
										<div>
											<img src="images/track-example-3.webp" alt="description" />
										</div>
									</PictureSelectorListItem>


						{/* Здесь будет логик по динамическому получения треков определенной коллекции --- FINISH */}
						</PictureSelectorList>
					</StepFragmentItem>

					<StepFragmentItem>
						<p className={StepTwo__warning}>
							<i></i>
							<span>Вы превысили максимальную длину подключения шинопровода</span>
						</p>
					</StepFragmentItem>

					<StepFragmentItem>
						<h3>
							комплектация (что входит в ваш комплект):
						</h3>
						<article>
							<TableContainer columns={[ 'Фото', 'Наименование', 'Длина', 'Количество' ]}>
								<tbody>
									<TableSection description="Сторона стены 1:" colCount={4}>


										{/* Добавить логику --- START */}
										{
											(() => {
												const elms: JSX.Element[] = []

												for (let i = 0; i < 3; i++) {
													elms.push(
														<tr key={i}>
															<td>
																<i>
																	<img src="images/table-img-example.webp" alt="" />
																</i>
															</td>
															<td>
																Магнитный шинопровод встраиваемый под ГКЛ 9мм Arte Lamp LINEA A470233
																<mark>Арт. A480733</mark>
															</td>
															<td>2000</td>
															<td>3 шт</td>
														</tr>
													)
												}

												return elms
											})()
										}
										{/* Добавить логику --- FINISH */}


									</TableSection>

									<TableSection description="Сторона стены 2:" colCount={4}>


										{/* Добавить логику --- START */}
										{
											(() => {
												const elms: JSX.Element[] = []

												for (let i = 0; i < 4; i++) {
													elms.push(
														<tr key={i}>
															<td>
																<i>
																	<img src="images/table-img-example.webp" alt="" />
																</i>
															</td>
															<td>
																Магнитный шинопровод встраиваемый под ГКЛ 9мм Arte Lamp LINEA A470233
																<mark>Арт. A480733</mark>
															</td>
															<td>2000</td>
															<td>3 шт</td>
														</tr>
													)
												}

												return elms
											})()
										}
										{/* Добавить логику --- FINISH */}


									</TableSection>

									<TableSection description="Сторона стены 3:" colCount={4}>


										{/* Добавить логику --- START */}
										{
											(() => {
												const elms: JSX.Element[] = []

												for (let i = 0; i < 2; i++) {
													elms.push(
														<tr key={i}>
															<td>
																<i>
																	<img src="images/table-img-example.webp" alt="" />
																</i>
															</td>
															<td>
																Магнитный шинопровод встраиваемый под ГКЛ 9мм Arte Lamp LINEA A470233
																<mark>Арт. A480733</mark>
															</td>
															<td>2000</td>
															<td>3 шт</td>
														</tr>
													)
												}

												return elms
											})()
										}
										{/* Добавить логику --- FINISH */}


									</TableSection>
								</tbody>
							</TableContainer>
						</article>
					</StepFragmentItem>
				</StepFragmentsWrapper>
			}
		</>
	)
}