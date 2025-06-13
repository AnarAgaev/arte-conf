import { ReactNode } from 'react'
import style from './CheckBoxControllerList.module.sass'

interface I_Props {
    children: ReactNode
}

export const CheckBoxControllerList = ({ children }: I_Props) => {
    return (
        <div className={style.CheckBoxControllerList}>
			{ children }
		</div>
    )
}