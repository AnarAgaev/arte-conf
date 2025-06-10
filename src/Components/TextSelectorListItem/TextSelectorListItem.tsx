import { ReactNode } from 'react'
import style from './TextSelectorListItem.module.sass'

interface I_Props {
	children: ReactNode
	selected: boolean
	clickHandler: () => void
}

export const TextSelectorListItem = ({
	children,
	selected,
	clickHandler
}: I_Props) => {

	const clazz = `${style.TextSelectorListItem} ${selected ? `${style.TextSelectorListItem_selected}` : ''}`

	return (
		<li
			className={clazz}
			onClick={clickHandler}
		>
			{ children }
		</li>
	)
}