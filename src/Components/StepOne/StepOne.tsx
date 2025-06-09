import { useMemo } from "react"
import { useAppSelector, useAppDispatch } from "@hooks"
import { selectAppSteps, goToNextSubstep } from "@store/appSlice"
import { selectCeilingType, selectMountingType, selectConstructionForms,
	setCeilingType, setMountingType, setConstructionForm, selectActiveConstructionForm,
	setActiveSide, selectSides, setSideValue, resetAllSidesValues } from "@store/stepOneSlice"
import { CalcController, SideSketchLShaped, SideSketchRectangle,
	SideSketchLine, SideSketchUShaped, SideSketchSnake } from '@components'
import { T_StepOneState } from "@store/stepOneSlice/types"
import { T_AppDispatch } from "@store"
import style from './StepOne.module.sass'

const {
	StepOne__pictureSignList,
	StepOne__pictureSignItem,
	StepOne__pictureSignItem_selected,
	StepOne__textSignList,
	StepOne__textSignItem,
	StepOne__textSignItem_selected,
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

	const clazz = `${StepOne__pictureSignItem} ${type.selected ? `${StepOne__pictureSignItem_selected}` : ''}`

	const onItem = (id: number) => {
		dispatch(setCeilingType(id))
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

const getMountingTypeNodes = (
	mountingTypes: T_StepOneState['mountingType'],
	dispatch: T_AppDispatch
): JSX.Element[] => mountingTypes.map(type => {

	const clazz = `${StepOne__textSignItem} ${type.selected ? `${StepOne__textSignItem_selected}` : ''}`

	const onItem = (id: number) => {
		dispatch(setMountingType(id))
		dispatch(goToNextSubstep())
	}

	return (
		<li key={type.id} className={clazz} onClick={() => onItem(type.id)}>
			<span>{type.description}</span>
		</li>
	)
})

const getConstructionFormNodes = (
	constructionForms: T_StepOneState['constructionForm'],
	dispatch: T_AppDispatch,
): JSX.Element[] => constructionForms.map(form => {

	const clazz = `${StepOne__pictureSignItem} ${form.selected ? `${StepOne__pictureSignItem_selected}` : ''}`

	const onItem = (id: number) => {
		dispatch(setConstructionForm(id))
		dispatch(resetAllSidesValues())
	}

	return (
		<li key={form.id} className={clazz} onClick={() => onItem(form.id)}>
			<span>
				<img src={form.img} alt={form.description} />
			</span>
			<mark>{form.description}</mark>
		</li>
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
                        value={side.value}
                        step={1}
						onChange={(newValue: number | null) => dispatch(setSideValue({sideId: side.id, value: newValue}))}
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

	const dispatch = useAppDispatch()
	const step = useAppSelector(selectAppSteps)[0]
	const substepActive = step.substeps.find(substep => substep.status === 'active')
	const substepActiveIdx = step.substeps.findIndex(substep => substep.status === 'active')
	const ceilingTypes = useAppSelector(selectCeilingType)
	const mountingTypes = useAppSelector(selectMountingType)
	const constructionForms = useAppSelector(selectConstructionForms)
	const activeConstructionForm = useAppSelector(selectActiveConstructionForm)
	const sides = useAppSelector(selectSides)

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
			{ substepActiveIdx === 0 &&
				<section className="step-fragment">
					<h3 className="step-fragment__caption">
						{ substepActive?.name }
					</h3>
					<div className="step-fragment__content">
						<ul className={StepOne__pictureSignList}>
							{ ceilingTypeNodes }
						</ul>
					</div>
				</section>
			}

			{/* Типы монтажа */}
			{ substepActiveIdx === 1 &&
				<section className="step-fragment">
					<h3 className="step-fragment__caption">
						{ substepActive?.name }
					</h3>
					<div className="step-fragment__content">
						<ul className={StepOne__textSignList}>
							{ mountingTypeNodes }
						</ul>
					</div>
				</section>
			}

			{/* Форма конфигурации */}
			{ substepActiveIdx === 2 &&
				<div className="step-fragments-wrapper">

					<section className="step-fragment">
						<h3 className="step-fragment__caption">
							{ substepActive?.name }
						</h3>
						<div className="step-fragment__content">
							<ul className={StepOne__pictureSignList}>
								{ constructionFormNodes }
							</ul>
						</div>
					</section>

					{ selectedFormName &&
						<section className="step-fragment">
							<h3 className="step-fragment__caption">
								Укажите размеры сторон (мм):
							</h3>
							<div className="step-fragment__content">
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

									<p className={StepOne__sidesTotal}>
										Общая наружная длина 8000 мм
									</p>
								</div>
							</div>
						</section>
					}

				</div>
			}
		</>
	)
}