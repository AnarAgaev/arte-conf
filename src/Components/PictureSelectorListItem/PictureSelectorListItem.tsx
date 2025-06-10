import { ReactNode } from 'react'
import style from './PictureSelectorListItem.module.sass'

interface I_Props {
	children: ReactNode
	selected: boolean
	clickHandler: () => void
}

export const PictureSelectorListItem = ({
	children,
	selected,
	clickHandler
}: I_Props) => {

	const clazz = `${style.PictureSelectorListItem} ${selected ? `${style.PictureSelectorListItem_selected}` : ''}`

	return (
		<li
			className={clazz}
			onClick={clickHandler}
		>
			{ children }
		</li>
	)
}