import { useState } from 'react'
import { formatRussianNumber } from '@helpers'
import style from './RoomDetail.module.sass'

const {
	RoomDetail__wrapper,
	RoomDetail__caption,
	RoomDetail__content,
	RoomDetail__sketch,
	RoomDetail__table,
	RoomDetail__table_visible,
	RoomDetail__controllers,
	RoomDetail__controllers_visible,
	RoomDetail__picture,
	RoomDetail__productData,
	RoomDetail__text,
} = style

interface I_Props {
	children: React.ReactNode
}

export const RoomDetail = ({ children }: I_Props) => {

	const [visible, setVisible] = useState(false)

    return (
		<div className={RoomDetail__wrapper}>
			<div className={RoomDetail__caption}>
				<div className={RoomDetail__content}>
					<h3>Название помещения: Столовая</h3>
					<p>Сумма: 2 450 000 ₽</p>
					<button type="button" onClick={() => setVisible(!visible)}>
						{visible ? 'Свернуть' : 'Развернуть'}
					</button>
				</div>
				<div className={RoomDetail__sketch}>
					{children}
				</div>
			</div>

			<div className={`${RoomDetail__table} ${visible ? `${RoomDetail__table_visible}` : ''}`}>
				<table>
					<tbody>
						{
							[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
								<tr key={item}>
									<td>
										<div className={RoomDetail__picture}>
											<img src="images/table-img-example.webp" alt="" />
										</div>
									</td>
									<td>
										<p className={RoomDetail__productData}>
											<span>Магнитный шинопровод встраиваемый под ГКЛ 9мм</span>
											<span>Arte Lamp LINEA</span>
											<mark>Арт. A480733</mark>
										</p>
									</td>
									<td>
										<div className={RoomDetail__text}>
											<i>Количество: </i>3  шт.
										</div>
									</td>
									<td>
										<div className={RoomDetail__text}>
											<i>Сумма: </i>
											{formatRussianNumber(450000)} р.
										</div>
									</td>
								</tr>
							))
						}

					</tbody>
				</table>
			</div>

			<div className={`${RoomDetail__controllers} ${visible ? `${RoomDetail__controllers_visible}` : ''}`}>
				<button className='btn btn_small btn_lite' type="button">Изменить конфигурацию</button>
				<button className='btn btn_small btn_lite' type="button">Удалить</button>
			</div>
		</div>
    )
}