import { Wallet, Location, PictureSelectorListItem, PictureSelectorList } from '@components'
import style from './Viewport.module.sass'
import { useAppSelector } from '@hooks'
import { selectActiveStep } from '@store/appSlice'
import { useEffect, useMemo, useState } from 'react'
import { T_Lamp } from '@store/appSlice/types'
import { formatRussianNumber } from '@helpers'

// #region Node list getters
const getLampsNodes = (
	lamps: T_Lamp[],
): JSX.Element[] => {

	return lamps.map(lamp => {
		return (
			<PictureSelectorListItem
				key={lamp.id}
				selected={lamp.selected}
				clickHandler={() => alert('Добавляем продукт к заказу')}
			>
				<div>
					<img src={lamp.img} alt={lamp.article} />

					<ul>
						{ lamp.lengthOnTrack && <li>Длинна на треке: {lamp.lengthOnTrack} мм</li> }
						{ <li>Деммируемый: {lamp.dimmer ? 'Да' : 'Нет'}</li> }
						{ lamp.colorTemperature && <li>Цветовая t: {lamp.colorTemperature} K</li> }
						{ lamp.power && <li>Мощность: {lamp.power} W</li> }
					</ul>
				</div>
				<mark>
					{`Арт. ${lamp.article}`}
					<span>{`${formatRussianNumber(lamp.price)} р.`}</span>
				</mark>
			</PictureSelectorListItem>
		)
	})
}
// #endregion

export const Viewport = () => {

	// #region Component variables
	const step = useAppSelector(selectActiveStep)
	const substep = step.substeps.find(substep => substep.status === 'active')
	// #endregion






	// ! Временная логика для демонстрации списка ламп --- START
		// * Список ламп необходимо получать из стора
		const [lamps, setLamps] = useState<T_Lamp[]>([]);

		useEffect(() => {
			fetch('../../../public/mocks/lamps-example.json')
				.then(response => response.json())
				.then(data => setLamps(data))
				.catch(error => console.error('Error loading lamps:', error));
		}, [])
	// ! Временная логика для демонстрации списка ламп --- FINISH





	const lampsNodes = useMemo(
		() => getLampsNodes(lamps),
		[lamps]
	)

	return (
		<div className={style.Viewport}>

			{ substep?.name === 'additionalLighting'



				// Временно отрисовываем статические продукты
				? <PictureSelectorList>
					{ lampsNodes }
				</PictureSelectorList>




				: <>
					<div className={style.Viewport__sketch}>
						<img src="" alt="" />
					</div>

					<Wallet />

					<Location />

					<button className='btn btn_default btn_dark' type="button">
						Добавить в проект
					</button>
				</>
			}
		</div>
	)
}