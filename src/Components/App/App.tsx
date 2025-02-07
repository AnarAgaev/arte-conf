import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@hooks'
import { fetchInitData, selectAppPage } from '@store/appSlice'
import { Nav, PageConfigurator, PageProjectDetail, PageProjectList } from '@components'
import style from './App.module.sass'
import '@sass/main.sass'

export const App = () => {


	console.log('---render App');


	const dispatch = useAppDispatch()

	const currentPage = useAppSelector(selectAppPage)

	useEffect(() => {
		dispatch(fetchInitData())
	}, [dispatch])

	return (
		<section className={`arte-conf-app ${style.app}`}>
			<Nav />
			<div className={style.body}>
				{ currentPage === 'configurator' && <PageConfigurator /> }
				{ currentPage === 'projectDetail' && <PageProjectDetail /> }
				{ currentPage === 'projectList' && <PageProjectList /> }
			</div>
		</section>
	)
}