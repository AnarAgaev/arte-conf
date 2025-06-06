import { useAppSelector } from '@hooks'
import { selectActiveSide } from '@store/stepOneSlice'
import style from './SideSketchRectangle.module.sass'

const {
	SideSketchRectangle__wrap,
	SideSketchRectangle__body,
	SideSketchRectangle__accent,
	SideSketchRectangle__accent_side1,
	SideSketchRectangle__accent_side2,
	SideSketchRectangle__accent_side3,
	SideSketchRectangle__accent_side4,
	SideSketchRectangle__sign,
	SideSketchRectangle__sign_side1,
	SideSketchRectangle__sign_side2,
	SideSketchRectangle__sign_side3,
	SideSketchRectangle__sign_side4,
} = style

const activeSideClassMap: {
	[id: number]: string
} = {
	1: SideSketchRectangle__accent_side1,
	2: SideSketchRectangle__accent_side2,
	3: SideSketchRectangle__accent_side3,
	4: SideSketchRectangle__accent_side4
}

export const SideSketchRectangle = () => {

	const activeSideId = useAppSelector(selectActiveSide)?.id
	const activeSideClassName = activeSideId ? activeSideClassMap[activeSideId] : ''

	return (
		<div className={SideSketchRectangle__wrap}>
			<div className={SideSketchRectangle__body}>
				<span className={`${SideSketchRectangle__sign} ${SideSketchRectangle__sign_side1}`}>
					<mark>Сторона 1</mark>
				</span>
				<span className={`${SideSketchRectangle__sign} ${SideSketchRectangle__sign_side2}`}>
					<mark>Сторона 2</mark>
				</span>
				<span className={`${SideSketchRectangle__sign} ${SideSketchRectangle__sign_side3}`}>
					<mark>Сторона 3</mark>
				</span>
				<span className={`${SideSketchRectangle__sign} ${SideSketchRectangle__sign_side4}`}>
					<mark>Сторона 4</mark>
				</span>
			</div>
			<div className={`${SideSketchRectangle__accent} ${activeSideClassName}`}></div>
		</div>
	)
}