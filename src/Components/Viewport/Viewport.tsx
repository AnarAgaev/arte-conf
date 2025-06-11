import { Wallet, Location } from '@components'
import style from './Viewport.module.sass'

export const Viewport = () => {
	return (
		<div className={style.Viewport}>

			<div className={style.Viewport__sketch}>
				<img src="" alt="" />
			</div>

			<Wallet />

			<Location />

			<button className='btn btn_default btn_dark' type="button">
				Добавить в проект
			</button>
		</div>
	)
}