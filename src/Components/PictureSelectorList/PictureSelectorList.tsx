import { ReactNode } from 'react'
import style from './PictureSelectorList.module.sass'

interface I_Props {
	children: ReactNode
}

export const PictureSelectorList = ({ children }: I_Props) => (
	<ul className={style.PictureSelectorList}>
		{ children }
	</ul>
)