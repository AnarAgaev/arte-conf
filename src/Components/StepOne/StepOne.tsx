import { useMemo } from "react"
import { useAppSelector, useAppDispatch } from "@hooks"
import { selectAppSteps, goToNextSubstep } from "@store/appSlice"
import { selectCeilingType, selectMountingType, setCeilingType, setMountingType } from "@store/stepOneSlice"
import { T_StepOneState } from "@store/stepOneSlice/types"
import { T_AppDispatch } from "@store"
import style from './StepOne.module.sass'

const {
	pictureSignList, pictureSignItem, pictureSignItem_selected,
	textSignList, textSignItem, textSignItem_selected
} = style

const getCeilingTypeElms = (
	ceilingTypes: T_StepOneState['ceilingType'],
	dispatch: T_AppDispatch
): JSX.Element[] => ceilingTypes.map(type => {

	const clazz = `${pictureSignItem} ${type.selected ? `${pictureSignItem_selected}` : ''}`

	const onItem = (id: number) => {
		dispatch(setCeilingType(id))
		dispatch(goToNextSubstep())
	}

	return (
		<li key={type.id} className={clazz} onClick={() => onItem(type.id)}>
			<span>
				<img src={type.img} alt={type.name} />
			</span>
			<mark>{type.name}</mark>
		</li>
	)
})

const getMountingTypeElms = (
	mountingTypes: T_StepOneState['mountingType'],
	dispatch: T_AppDispatch
): JSX.Element[] => mountingTypes.map(type => {

	// const clazz = `${pictureSignItem} ${type.selected ? `${pictureSignItem_selected}` : ''}`
	const clazz = `${textSignItem} ${type.selected ? `${textSignItem_selected}` : ''}`

	const onItem = (id: number) => {
		dispatch(setMountingType(id))
		dispatch(goToNextSubstep())
	}

	return (
		<li key={type.id} className={clazz} onClick={() => onItem(type.id)}>
			<span>{type.name}</span>
		</li>
	)
})

export const StepOne = () => {

	const dispatch = useAppDispatch()
	const step = useAppSelector(selectAppSteps)[0]
	const substepActive = step.substeps.find(substep => substep.status === 'active')
	const substepActiveIdx = step.substeps.findIndex(substep => substep.status === 'active')
	const ceilingTypes = useAppSelector(selectCeilingType)
	const mountingTypes = useAppSelector(selectMountingType)

	const ceilingTypeElms = useMemo(
		() => getCeilingTypeElms(ceilingTypes, dispatch),
		[ ceilingTypes, dispatch ]
	)

	const mountingTypeElms = useMemo(
		() => getMountingTypeElms(mountingTypes, dispatch),
		[mountingTypes, dispatch]
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
						<ul className={pictureSignList}>
							{ ceilingTypeElms }
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
						<ul className={textSignList}>
							{ mountingTypeElms }
						</ul>
					</div>
				</section>
			}

			{/* Форма конфигурации */}
			{ substepActiveIdx === 2 &&
				<section className="step-fragment">
					<h3 className="step-fragment__caption">
						{ substepActive?.name }
					</h3>
					<div className="step-fragment__content">
						...
					</div>
				</section>
			}
		</>
	)
}