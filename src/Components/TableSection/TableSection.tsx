import { ReactNode } from "react"
import style from './TableSection.module.sass'

const {
	TableSection__description
} = style

interface I_Props {
	children: ReactNode,
	description?: string,
	colCount: number
}

export const TableSection = ({ children, description, colCount }: I_Props) => {
	return (
		<>
			<tr>
				<td
					colSpan={colCount}
					className={TableSection__description}
				>
					{ description }
				</td>
			</tr>

			{ children }
		</>
	)
}