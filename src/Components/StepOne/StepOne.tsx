import { useMemo } from "react"
import { useAppSelector, useAppDispatch } from "@hooks"
import { selectActiveStep, goToNextSubstep } from "@store/appSlice"
import { selectCeilingType, selectMountingType, selectConstructionForms,
	setCeilingType, setMountingType, setConstructionForm,
	selectActiveConstructionForm, setActiveSide, selectSides,
	setSideLength, resetAllSidesValues, selectTotalSidesLengths,
	selectMovingToWall, setMovingToWallVisible } from "@store/stepOneSlice"
import { CalcController, SideSketchLShaped, SideSketchRectangle,
	SideSketchLine, SideSketchUShaped, SideSketchSnake,
	CheckBoxController, MovingToWall, PictureSelectorList,
	PictureSelectorListItem, TextSelectorList, TextSelectorListItem,
	StepFragmentsWrapper, StepFragmentItem } from '@components'
import { T_StepOneState } from "@store/stepOneSlice/types"
import { T_AppDispatch } from "@store"
import style from './StepOne.module.sass'

const {
	StepOne__sides,
	StepOne__sidesCalculator,
	StepOne__sidesController,
	StepOne__sidesSketch,
	StepOne__sidesTotal
} = style

// #region Node list getters
const getCeilingTypeNodes = (
	ceilingTypes: T_StepOneState['ceilingType'],
	dispatch: T_AppDispatch
): JSX.Element[] => ceilingTypes.map(type => {

	const onItem = () => {
		dispatch(setCeilingType(type.id))
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

const getMountingTypeNodes = (
	mountingTypes: T_StepOneState['mountingType'],
	dispatch: T_AppDispatch
): JSX.Element[] => mountingTypes.map(type => {

	const onItem = () => {
		dispatch(setMountingType(type.id))
		dispatch(goToNextSubstep())
	}

	return (
		<TextSelectorListItem
			key={type.id}
			selected={type.selected}
			clickHandler={onItem}
		>
			<span>{type.description}</span>
		</TextSelectorListItem>
	)
})

const getConstructionFormNodes = (
	constructionForms: T_StepOneState['constructionForm'],
	dispatch: T_AppDispatch,
): JSX.Element[] => constructionForms.map(form => {

	const onItem = () => {
		dispatch(setConstructionForm(form.id))
		dispatch(resetAllSidesValues())
	}

	return (
		<PictureSelectorListItem
			key={form.id}
			selected={form.selected}
			clickHandler={onItem}
		>
			<div>
				<img src={form.img} alt={form.description} />
			</div>
			<mark>{form.description}</mark>
		</PictureSelectorListItem>
	)
})

const getControllerNodes = (
    sides: T_StepOneState['sides'],
    dispatch: T_AppDispatch,
    activeConstructionForm: T_StepOneState['constructionForm'][0] | undefined
): JSX.Element[] => {

	const controllerCountMap = {
        'l-shaped': 2,
        'line': 1,
        'rectangle': 4,
        'snake': 3,
        'u-shaped': 3
    };

    const controllerCount = activeConstructionForm
        ? controllerCountMap[activeConstructionForm.name] || 1
        : 1

    return Array.from({ length: Math.min(controllerCount, sides.length) })
        .map((_, index) => {
            const side = sides[index]
            return (
                <div key={side.id} className={StepOne__sidesController}>
                    <span>{side.name}</span>
                    <CalcController
                        value={side.length ?? 0}
                        step={1}
						onChange={(newLength: number | null) => dispatch(setSideLength({ sideId: side.id, newLength }))}
                        onActive={() => dispatch(setActiveSide(side.id))}
                    />
                </div>
            )
        })
}
// #endregion

const getSelectedFormName = (constructionForms: T_StepOneState['constructionForm']) => {
	return constructionForms.find(form => form.selected)?.name
}

export const StepOne = () => {

	// #region Component variables
	const dispatch = useAppDispatch()
	const step = useAppSelector(selectActiveStep)
	const substep = step.substeps.find(substep => substep.status === 'active')
	const ceilingTypes = useAppSelector(selectCeilingType)
	const mountingTypes = useAppSelector(selectMountingType)
	const constructionForms = useAppSelector(selectConstructionForms)
	const activeConstructionForm = useAppSelector(selectActiveConstructionForm)
	const sides = useAppSelector(selectSides)
	const totalSidesLengths = useAppSelector(selectTotalSidesLengths)
	const isMovingToWall = useAppSelector(selectMovingToWall)
	// #endregion

	// #region Node list getters
	const ceilingTypeNodes = useMemo(
		() => getCeilingTypeNodes(ceilingTypes, dispatch),
		[ ceilingTypes, dispatch ]
	)

	const mountingTypeNodes = useMemo(
		() => getMountingTypeNodes(mountingTypes, dispatch),
		[mountingTypes, dispatch]
	)

	const constructionFormNodes = useMemo(
		() => getConstructionFormNodes(constructionForms, dispatch),
		[constructionForms, dispatch]
	)

	const controllerNodes = useMemo(
		() => getControllerNodes(sides, dispatch, activeConstructionForm),
		[sides, dispatch, activeConstructionForm]
	)
	// #endregion

	const selectedFormName = useMemo(
		() => getSelectedFormName(constructionForms),
		[constructionForms]
	)

	return (
		<>
			{/* Типы потолка */}
			{ substep?.name === 'ceilingType' &&
				<StepFragmentItem>
					<h3>
						{ substep?.description }
					</h3>
					<article>
						<PictureSelectorList>
							{ ceilingTypeNodes }
						</PictureSelectorList>
					</article>
				</StepFragmentItem>
			}

			{/* Типы монтажа */}
			{ substep?.name === 'mountingType' &&
				<StepFragmentItem>
					<h3>
						{ substep?.description }
					</h3>
					<article>
						<TextSelectorList>
							{ mountingTypeNodes }
						</TextSelectorList>
					</article>
				</StepFragmentItem>
			}

			{/* Форма конфигурации */}
			{ substep?.name === 'constructionForm' &&
				<StepFragmentsWrapper>
					<StepFragmentItem>
						<h3>
							{ substep?.description }
						</h3>
						<article>
							<PictureSelectorList>
								{ constructionFormNodes }
							</PictureSelectorList>
						</article>
					</StepFragmentItem>

					{ selectedFormName &&
						<>
							<StepFragmentItem>
								<h3>
									Укажите размеры сторон (мм):
								</h3>
								<article>
									<div className={StepOne__sides}>

										<div className={StepOne__sidesCalculator}>
											{ controllerNodes }
										</div>

										<div className={StepOne__sidesSketch}>
											{ selectedFormName === 'l-shaped' && <SideSketchLShaped />}
											{ selectedFormName === 'rectangle' && <SideSketchRectangle />}
											{ selectedFormName === 'line' && <SideSketchLine />}
											{ selectedFormName === 'u-shaped' && <SideSketchUShaped />}
											{ selectedFormName === 'snake' && <SideSketchSnake />}
										</div>

										{ totalSidesLengths !== 0 &&
											<p className={StepOne__sidesTotal}>
												Общая наружная длина { totalSidesLengths } мм
											</p>
										}
									</div>
								</article>
							</StepFragmentItem>

							<StepFragmentItem>
								<CheckBoxController
									description="Переход на стену"
									isChecked={isMovingToWall}
									isHardText={true}
									onAction={isChecked => {dispatch(setMovingToWallVisible(isChecked))}}
								/>
							</StepFragmentItem>

							{ isMovingToWall &&
								<StepFragmentItem>
									<h3>
										Количество переходов на стену (мм):
									</h3>
									<article>
										<MovingToWall />
									</article>
								</StepFragmentItem>
							}
						</>
					}
				</StepFragmentsWrapper>
			}
		</>
	)
}