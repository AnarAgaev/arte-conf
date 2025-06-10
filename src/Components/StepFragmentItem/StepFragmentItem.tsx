import { ReactNode } from "react"
import style from './StepFragmentItem.module.sass'

interface I_Props {
	children: ReactNode
}

export const StepFragmentItem = ({ children }: I_Props) => {
	return (
		<section className={style.StepFragmentItem}>
			{ children }
		</section>
	)
}