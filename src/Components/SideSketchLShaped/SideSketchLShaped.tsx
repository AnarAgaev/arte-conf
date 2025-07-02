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

interface I_Props {
	side1?: string,
	side2?: string
}

export const SideSketchLShaped = ({ side1, side2 }: I_Props) => {

	const activeSideId = useAppSelector(selectActiveSide)?.id
	const activeSideClassName = activeSideId ? activeSideClassMap[activeSideId] : ''

	return (
		<div className={SideSketchLShaped__wrap}>
			<div className={SideSketchLShaped__body}>
				<span className={`${SideSketchLShaped__sign} ${SideSketchLShaped__sign_side1}`}>
					<mark>{side1 || 'Сторона 1'}</mark>
				</span>
				<span className={`${SideSketchLShaped__sign} ${SideSketchLShaped__sign_side2}`}>
					<mark>{side2 || 'Сторона 2'}</mark>
				</span>
			</div>
			<div className={`${SideSketchLShaped__accent} ${activeSideClassName}`}></div>
		</div>
	)
}