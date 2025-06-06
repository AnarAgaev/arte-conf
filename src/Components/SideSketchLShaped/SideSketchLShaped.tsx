import { useAppSelector } from '@hooks'
import { selectActiveSide } from '@store/stepOneSlice'
import style from './SideSketchLShaped.module.sass'

const {
	SideSketchLShaped__wrap,
	SideSketchLShaped__body,
	SideSketchLShaped__accent,
	SideSketchLShaped__accent_side1,
	SideSketchLShaped__accent_side2,
	SideSketchLShaped__sign,
	SideSketchLShaped__sign_side1,
	SideSketchLShaped__sign_side2,
} = style

const activeSideClassMap: {
	[id: number]: string
} = {
	1: SideSketchLShaped__accent_side1,
	2: SideSketchLShaped__accent_side2
}

export const SideSketchLShaped = () => {

	const activeSideId = useAppSelector(selectActiveSide)?.id
	const activeSideClassName = activeSideId ? activeSideClassMap[activeSideId] : ''

	return (
		<div className={SideSketchLShaped__wrap}>
			<div className={SideSketchLShaped__body}>
				<span className={`${SideSketchLShaped__sign} ${SideSketchLShaped__sign_side1}`}>
					<mark>Сторона 1</mark>
				</span>
				<span className={`${SideSketchLShaped__sign} ${SideSketchLShaped__sign_side2}`}>
					<mark>Сторона 2</mark>
				</span>
			</div>
			<div className={`${SideSketchLShaped__accent} ${activeSideClassName}`}></div>
		</div>
	)
}