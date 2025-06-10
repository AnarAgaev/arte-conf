import { ReactNode } from "react"
import style from './StepFragmentsWrapper.module.sass'

interface I_Props {
	children: ReactNode
}

export const StepFragmentsWrapper = ({ children }: I_Props) => {
	return (
		<div className={style.StepFragmentsWrapper}>
			{ children }
		</div>
	)
}