import { CalcController } from '@components'
import style from './Wallet.module.sass'

const {
	Wallet__wrap,
	Wallet__caption,
	Wallet__body,
	Wallet__price,
	Wallet__controller,
	Wallet__total
} = style

export const Wallet = () => {
	return (
		<div className={Wallet__wrap}>
			<h3 className={Wallet__caption}>Стоимость полного комплекта:</h3>

			<div className={Wallet__body}>
				<span className={Wallet__price}>450 000 ₽</span>

				<div className={Wallet__controller}>
					<CalcController
						value={1}
						transparent={true}
					/>
				</div>

				<span className={Wallet__total}>2 450 000 ₽</span>
			</div>
		</div>
	)
}