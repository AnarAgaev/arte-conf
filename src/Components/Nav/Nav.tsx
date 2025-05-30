import { useAppDispatch, useAppSelector } from '@hooks'
import { togglePage, selectAppPage } from '@store/appSlice'
import style from './Nav.module.sass'

const { nav, list, item, active } = style

export const Nav = () => {

	const dispatch = useAppDispatch()
	const currentPage = useAppSelector(selectAppPage)

	const classNames = {
		configuration: `${item}${currentPage === 'configurator' ? ` ${active}` : ''}`,
		projectDetail: `${item}${currentPage === 'projectDetail' ? ` ${active}` : ''}`,
		projectList: `${item}${currentPage === 'projectList' ? ` ${active}` : ''}`,
	}

	return (
		<nav className={nav}>
			<ul className={list}>
				<li onClick={() => dispatch(togglePage('configurator'))}
					className={classNames.configuration}>
					Конфигуратор
				</li>
				<li onClick={() => dispatch(togglePage('projectDetail'))}
					className={classNames.projectDetail}>
					Состав проекта
				</li>
				<li onClick={() => dispatch(togglePage('projectList'))}
					className={classNames.projectList}>
					Мои проекты
				</li>
			</ul>
		</nav>
	)
}