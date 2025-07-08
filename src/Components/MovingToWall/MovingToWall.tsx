import { useMemo } from 'react'
import { useAppSelector, useAppDispatch } from '@hooks'
import { selectMoveItems, setMoveToWall, setMoveToWallLength } from '@store/stepOneSlice'
import { CalcController } from '@components'
import { T_StepOneState } from '@store/stepOneSlice/types'
import { T_AppDispatch } from '@store'
import style from './MovingToWall.module.sass'

const {
	MovingToWall__body,
	MovingToWall__checkers,
	MovingToWall__checker,
	MovingToWall__checker_selected,
	MovingToWall__composition,
	MovingToWall__description,
	MovingToWall__badge,
	MovingToWall__controller,
} = style


const getMoveCheckers = (
	moveItems: T_StepOneState['moveItems'],
	dispatch: T_AppDispatch
): JSX.Element[] => moveItems.map(item => (
	<span
		key={item.id}
		onClick={() => dispatch(setMoveToWall(item.id))}
		className={`${MovingToWall__checker} ${item.isActive ? `${MovingToWall__checker_selected}` : ''}`}
	>
		{ item.description }
	</span>
))

const getMoveControllers = (
	moveItems: T_StepOneState['moveItems'],
	dispatch: T_AppDispatch
): JSX.Element[] => {

	const nodeList: JSX.Element[] = []

	const activeItem = moveItems.find(item => item.isActive)

	if (!activeItem) return []


	moveItems.forEach((item, idx) => {
		if (idx + 1 <= activeItem.id) {
			nodeList.push(
				<div
					key={item.id}
					className={MovingToWall__composition}
				>
					<div className={MovingToWall__description}>
						<mark>{item.description}</mark>
						<span>переход:</span>
					</div>
					<span className={MovingToWall__badge}>накладной</span>
					<div className={MovingToWall__controller}>
						<CalcController
							value={item.length ?? 0}
							step={1}
							onChange={(newLength: number | null) => dispatch(setMoveToWallLength({moveItemId: item.id, newLength}))}
						/>
					</div>
				</div>
			)
		}
	})

	return nodeList
}

export const MovingToWall = () => {

	const dispatch = useAppDispatch()
	const moveItems = useAppSelector(selectMoveItems)

	const moveCheckers = useMemo(
		() => getMoveCheckers(moveItems, dispatch),
		[moveItems, dispatch]
	)

	const moveControllers = useMemo(
		() => getMoveControllers(moveItems, dispatch),
		[moveItems, dispatch]
	)

	return (
		<div className={MovingToWall__body}>
			<div className={MovingToWall__checkers}>
				{ moveCheckers }
			</div>
			{ moveControllers }
		</div>
	)
}