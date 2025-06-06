import { useAppSelector } from '@hooks'
import { selectActiveSide } from '@store/stepOneSlice'
import style from './SideSketchSnake.module.sass'

const {
	SideSketchSnake__wrap,
	SideSketchSnake__body,
	SideSketchSnake__accent,
	SideSketchSnake__accent_side1,
	SideSketchSnake__accent_side2,
	SideSketchSnake__accent_side3,
	SideSketchSnake__sign,
	SideSketchSnake__sign_side1,
	SideSketchSnake__sign_side2,
	SideSketchSnake__sign_side3,
} = style

const activeSideClassMap: {
	[id: number]: string
} = {
	1: SideSketchSnake__accent_side1,
	2: SideSketchSnake__accent_side2,
	3: SideSketchSnake__accent_side3,
}

export const SideSketchSnake = () => {

	const activeSideId = useAppSelector(selectActiveSide)?.id
	const activeSideClassName = activeSideId ? activeSideClassMap[activeSideId] : ''

	return (
		<div className={SideSketchSnake__wrap}>
			<div className={SideSketchSnake__body}>
				<span className={`${SideSketchSnake__sign} ${SideSketchSnake__sign_side1}`}>
					<mark>Сторона 1</mark>
				</span>
				<span className={`${SideSketchSnake__sign} ${SideSketchSnake__sign_side2}`}>
					<mark>Сторона 2</mark>
				</span>
				<span className={`${SideSketchSnake__sign} ${SideSketchSnake__sign_side3}`}>
					<mark>Сторона 3</mark>
				</span>
			</div>
			<div className={`${SideSketchSnake__accent} ${activeSideClassName}`}></div>
		</div>
	)
}