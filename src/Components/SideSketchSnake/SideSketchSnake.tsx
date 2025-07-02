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

interface I_Props {
	side1?: string,
	side2?: string,
	side3?: string,
}


export const SideSketchSnake = ({ side1, side2, side3 }: I_Props) => {

	const activeSideId = useAppSelector(selectActiveSide)?.id
	const activeSideClassName = activeSideId ? activeSideClassMap[activeSideId] : ''

	return (
		<div className={SideSketchSnake__wrap}>
			<div className={SideSketchSnake__body}>
				<span className={`${SideSketchSnake__sign} ${SideSketchSnake__sign_side1}`}>
					<mark>{side1 || 'Сторона 1'}</mark>
				</span>
				<span className={`${SideSketchSnake__sign} ${SideSketchSnake__sign_side2}`}>
					<mark>{side2 || 'Сторона 2'}</mark>
				</span>
				<span className={`${SideSketchSnake__sign} ${SideSketchSnake__sign_side3}`}>
					<mark>{side3 || 'Сторона 3'}</mark>
				</span>
			</div>
			<div className={`${SideSketchSnake__accent} ${activeSideClassName}`}></div>
		</div>
	)
}