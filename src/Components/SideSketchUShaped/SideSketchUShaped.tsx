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

interface I_Props {
	side1?: string,
	side2?: string,
	side3?: string,
}

export const SideSketchUShaped = ({ side1, side2, side3 }: I_Props) => {

	const activeSideId = useAppSelector(selectActiveSide)?.id
	const activeSideClassName = activeSideId ? activeSideClassMap[activeSideId] : ''

	return (
		<div className={SideSketchUShaped__wrap}>
			<div className={SideSketchUShaped__body}>
				<span className={`${SideSketchUShaped__sign} ${SideSketchUShaped__sign_side1}`}>
					<mark>{ side1 || 'Сторона 1'}</mark>
				</span>
				<span className={`${SideSketchUShaped__sign} ${SideSketchUShaped__sign_side2}`}>
					<mark>{ side2 || 'Сторона 2'}</mark>
				</span>
				<span className={`${SideSketchUShaped__sign} ${SideSketchUShaped__sign_side3}`}>
					<mark>{ side3 || 'Сторона 3'}</mark>
				</span>
			</div>
			<div className={`${SideSketchUShaped__accent} ${activeSideClassName}`}></div>
		</div>
	)
}