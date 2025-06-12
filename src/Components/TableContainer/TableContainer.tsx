import { ReactNode } from "react"
import style from './TableContainer.module.sass'

const {
	TableContainer__wrapper,
	TableContainer__table,
} = style

interface I_Props {
	children: ReactNode
	columns: string[]
}

export const TableContainer = ({ children, columns }: I_Props) => {
	return (
		<div className={TableContainer__wrapper}>
			<table className={TableContainer__table}>
				<thead>
					<tr>
						{
							columns.map(column => <th key={column}>{ column }</th>)
						}
					</tr>
				</thead>
				{ children }
			</table>
		</div>
	)
}