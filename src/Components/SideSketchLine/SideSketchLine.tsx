import { useAppSelector } from '@hooks'
import { selectActiveSide } from '@store/stepOneSlice'
import style from './SideSketchLine.module.sass'

const {
	SideSketchLine__wrap,
	SideSketchLine__body,
	SideSketchLine__accent,
	SideSketchLine__accent_side1,
	SideSketchLine__sign,
	SideSketchLine__sign_side1,
} = style

export const SideSketchLine = () => {

	const activeSideId = useAppSelector(selectActiveSide)?.id
	const activeSideClassName = activeSideId ? SideSketchLine__accent_side1 : ''

	return (
		<div className={SideSketchLine__wrap}>
			<div className={SideSketchLine__body}>
				<span className={`${SideSketchLine__sign} ${SideSketchLine__sign_side1}`}>
					<mark>Сторона 1</mark>
				</span>
			</div>
			<div className={`${SideSketchLine__accent} ${activeSideClassName}`}></div>
		</div>
	)
}