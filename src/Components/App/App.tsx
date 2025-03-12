import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@hooks'
import { fetchInitData, selectAppPage } from '@store/appSlice'
import { Spinner, Nav, PageConfigurator, PageProjectDetail, PageProjectList } from '@components'
import style from './App.module.sass'
import '@sass/main.sass'

const { app, body } = style

export const App = () => {


	console.log('---render App');


	const dispatch = useAppDispatch()

	const currentPage = useAppSelector(selectAppPage)

	useEffect(() => {
		dispatch(fetchInitData())
	}, [dispatch])

	return (
		<section className={`arte-conf-app ${app}`}>
			<Nav />

			<div className={body}>
				{ currentPage === 'configurator' && <PageConfigurator /> }
				{ currentPage === 'projectDetail' && <PageProjectDetail /> }
				{ currentPage === 'projectList' && <PageProjectList /> }
			</div>

			<Spinner />
		</section>
	)
}