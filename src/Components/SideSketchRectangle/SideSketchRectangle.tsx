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

interface I_Props {
	side1?: string,
	side2?: string,
	side3?: string,
	side4?: string,
}

export const SideSketchRectangle = ({ side1, side2, side3, side4 }: I_Props) => {

	const activeSideId = useAppSelector(selectActiveSide)?.id
	const activeSideClassName = activeSideId ? activeSideClassMap[activeSideId] : ''

	return (
		<div className={SideSketchRectangle__wrap}>
			<div className={SideSketchRectangle__body}>
				<span className={`${SideSketchRectangle__sign} ${SideSketchRectangle__sign_side1}`}>
					<mark>{side1 || 'Сторона 1'}</mark>
				</span>
				<span className={`${SideSketchRectangle__sign} ${SideSketchRectangle__sign_side2}`}>
					<mark>{side2 || 'Сторона 2'}</mark>
				</span>
				<span className={`${SideSketchRectangle__sign} ${SideSketchRectangle__sign_side3}`}>
					<mark>{side3 || 'Сторона 3'}</mark>
				</span>
				<span className={`${SideSketchRectangle__sign} ${SideSketchRectangle__sign_side4}`}>
					<mark>{side4 || 'Сторона 4'}</mark>
				</span>
			</div>
			<div className={`${SideSketchRectangle__accent} ${activeSideClassName}`}></div>
		</div>
	)
}