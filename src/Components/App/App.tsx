import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@hooks'
import { fetchInitData, selectAppPage, selectModalResetAll } from '@store/appSlice'
import { Spinner, Nav, PageConfigurator, PageProjectDetail,
	PageProjectList, ModalResetAll } from '@components'
import style from './App.module.sass'
import '@sass/main.sass'

const { app, body } = style

export const App = () => {

	const dispatch = useAppDispatch()
	const currentPage = useAppSelector(selectAppPage)
	const modalResetAll = useAppSelector(selectModalResetAll)

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

			<ModalResetAll visible={modalResetAll.visible === 'show'} />

			<Spinner />
		</section>
	)
}