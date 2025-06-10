import { ReactNode } from 'react'
import style from './TextSelectorList.module.sass'

interface I_Props {
	children: ReactNode
}

export const TextSelectorList = ({ children }: I_Props) => {
	return (
		<ul className={style.TextSelectorList}>
			{ children }
		</ul>
	)
}