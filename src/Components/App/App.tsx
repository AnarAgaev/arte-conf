import { useAppSelector, useAppDispatch } from '@hooks'
import { togglePage } from '@store/appSlice'
import type { T_Page } from "@store/appSlice/types"
import style from './App.module.sass'
import '@sass/main.sass'

export const App = () => {

	const dispatch = useAppDispatch()

	const appError = useAppSelector(store => store.app.error)
	const currentPage = useAppSelector(store => store.app.page)

	if (appError) throw new Error(appError)

	const onClick = (page: T_Page) => {
		dispatch(togglePage(page))
	}

	const classNames = {
		configuration: `${style.item}${currentPage === 'configurator' ? ` ${style.active}` : ''}`,
		projectDetail: `${style.item}${currentPage === 'projectDetail' ? ` ${style.active}` : ''}`,
		projectList: `${style.item}${currentPage === 'projectList' ? ` ${style.active}` : ''}`,
	}

	return (
		<section className={`arte-conf-app ${style.app}`}>
			<ul className={style.pages}>
				<li onClick={() => onClick('configurator')}
					className={classNames.configuration}>
					Конфигуратор
				</li>
				<li onClick={() => onClick('projectDetail')}
					className={classNames.projectDetail}>
					Состав проекта
				</li>
				<li onClick={() => onClick('projectList')}
					className={classNames.projectList}>
					Мои проекты
				</li>
			</ul>
			<div className={style.body}>Body</div>
		</section>
	)
}
