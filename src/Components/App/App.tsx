import style from './App.module.sass'
import '@sass/main.sass'

export const App = () => {
	return (
		<section className={`arte-conf-app ${style.app}`}>
			<ul className={style.pages}>
				<li>Конфигуратор</li>
				<li>Состав проекта</li>
				<li>Мои проекты</li>
			</ul>
			<div className={style.body}>Body</div>
		</section>
	)
}
