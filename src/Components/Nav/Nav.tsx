import { useAppDispatch, useAppSelector } from '@hooks'
import { togglePage, selectAppPage } from '@store/appSlice'
import type { T_Page } from "@store/appSlice/types"

import style from './Nav.module.sass'

const { nav, list, item, active } = style

export const Nav = () => {

    const dispatch = useAppDispatch()
	const currentPage = useAppSelector(selectAppPage)

	const onClick = (page: T_Page) => {
		dispatch(togglePage(page))
	}

	const classNames = {
		configuration: `${item}${currentPage === 'configurator' ? ` ${active}` : ''}`,
		projectDetail: `${item}${currentPage === 'projectDetail' ? ` ${active}` : ''}`,
		projectList: `${item}${currentPage === 'projectList' ? ` ${active}` : ''}`,
	}

    return (
        <nav className={nav}>
            <ul className={list}>
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
        </nav>
    )
}