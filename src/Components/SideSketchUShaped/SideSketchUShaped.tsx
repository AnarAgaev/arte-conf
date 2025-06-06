import { useAppSelector } from '@hooks'
import { selectActiveSide } from '@store/stepOneSlice'
import style from './SideSketchUShaped.module.sass'

const {
	SideSketchUShaped__wrap,
	SideSketchUShaped__body,
	SideSketchUShaped__accent,
	SideSketchUShaped__accent_side1,
	SideSketchUShaped__accent_side2,
	SideSketchUShaped__accent_side3,
	SideSketchUShaped__sign,
	SideSketchUShaped__sign_side1,
	SideSketchUShaped__sign_side2,
	SideSketchUShaped__sign_side3
} = style

const activeSideClassMap: {
	[id: number]: string
} = {
	1: SideSketchUShaped__accent_side1,
	2: SideSketchUShaped__accent_side2,
	3: SideSketchUShaped__accent_side3,
}

export const SideSketchUShaped = () => {

	const activeSideId = useAppSelector(selectActiveSide)?.id
	const activeSideClassName = activeSideId ? activeSideClassMap[activeSideId] : ''

	return (
		<div className={SideSketchUShaped__wrap}>
			<div className={SideSketchUShaped__body}>
				<span className={`${SideSketchUShaped__sign} ${SideSketchUShaped__sign_side1}`}>
					<mark>Сторона 1</mark>
				</span>
				<span className={`${SideSketchUShaped__sign} ${SideSketchUShaped__sign_side2}`}>
					<mark>Сторона 2</mark>
				</span>
				<span className={`${SideSketchUShaped__sign} ${SideSketchUShaped__sign_side3}`}>
					<mark>Сторона 3</mark>
				</span>
			</div>
			<div className={`${SideSketchUShaped__accent} ${activeSideClassName}`}></div>
		</div>
	)
}