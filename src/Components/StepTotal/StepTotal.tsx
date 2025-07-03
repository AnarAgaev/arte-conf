import { useMemo } from "react"
import { useAppSelector, useAppDispatch } from "@hooks"
import { selectActiveStep } from "@store/appSlice"
import { selectCalcOptimization, setCalcOptimization } from '@store/stepTotalSlice'
import { StepFragmentsWrapper, StepFragmentItem,
	TableContainer, TableSection, CheckBoxControllerList,
	CheckBoxController } from '@components'
import { T_AppDispatch } from "@store"
import { T_StepTotalState } from "@store/stepTotalSlice/types"
import style from './StepTotal.module.sass'

const {
	StepTotal__optimizationMessage,
} = style

// #region Node list getters
const getCalcOptimizationNodes = (
	calcOptimization: T_StepTotalState['calcOptimization'],
	dispatch: T_AppDispatch
): JSX.Element[] => calcOptimization.map(optimization => {

	const onItem = () => {
		dispatch(setCalcOptimization(optimization.id))
	}

	return (
		<CheckBoxController
			key={optimization.id}
			description={optimization.description}
			isChecked={optimization.selected}
			onAction={onItem}
		/>
	)
})
// #endregion

export const StepTotal = () => {

	// #region Component variables
	const dispatch = useAppDispatch()
	const step = useAppSelector(selectActiveStep)
	const substep = step.substeps.find(substep => substep.status === 'active')
	const calcOptimization = useAppSelector(selectCalcOptimization)
	const calcOptimizationActive = calcOptimization.find(optimization => optimization.selected)
	// #endregion

	// #region Node list getters
	const calcOptimizationNodes = useMemo(
		() => getCalcOptimizationNodes(calcOptimization, dispatch),
		[ calcOptimization, dispatch ]
	)
	// #endregion

	return (
		<>
			{/* Ваша конфигурация */}
			{ substep?.name === 'totalConfiguration' &&
				<StepFragmentsWrapper>

					<StepFragmentItem>
						<h3>
							Резюме (что входит в ваш комплект):
						</h3>
						<article>
							<TableContainer columns={[ 'Фото', 'Наименование', 'Длина', 'Количество', 'Сумма' ]}>
								<tbody>
									<TableSection description="Треки:" colCount={5}>


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
															<td>25 678 р.</td>
														</tr>
													)
												}

												return elms
											})()
										}
										{/* Добавить логику --- FINISH */}


									</TableSection>

									<TableSection description="Аксессуары:" colCount={5}>


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
															<td>25 678 р.</td>
														</tr>
													)
												}

												return elms
											})()
										}
										{/* Добавить логику --- FINISH */}


									</TableSection>

									<TableSection description="Питание:" colCount={5}>


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
															<td>25 678 р.</td>
														</tr>
													)
												}

												return elms
											})()
										}
										{/* Добавить логику --- FINISH */}


									</TableSection>

									<TableSection description="Споты:" colCount={5}>


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
															<td>25 678 р.</td>
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

					<StepFragmentItem>
						<h3>
							Оптимизация расчета по остаткам
						</h3>
						<article>
							<CheckBoxControllerList>
								{ calcOptimizationNodes }
							</CheckBoxControllerList>

							{ calcOptimizationActive?.name === 'inStock' &&
								<p className={StepTotal__optimizationMessage}>
									Расчет сделан исходя из комплектующих, которые есть  сейчас на остатке.
								</p>
							}

							{ calcOptimizationActive?.name === 'toOrder' &&
								<p className={StepTotal__optimizationMessage}>
									!!! Вроде бы должен быть какой-то там текст, что-то типа Свяжитесь с менеджером для расчета
								</p>
							}
						</article>
					</StepFragmentItem>
				</StepFragmentsWrapper>
			}
		</>
	)
}