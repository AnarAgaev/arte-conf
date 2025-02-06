import { useEffect } from 'react'
import { useAppDispatch } from '@hooks'
import { fetchInitData } from '@store/appSlice'
import { Nav } from '@components'
import style from './App.module.sass'
import '@sass/main.sass'

export const App = () => {

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchInitData())
	}, [dispatch])

	return (
		<section className={`arte-conf-app ${style.app}`}>
			<Nav />
			<div className={style.body}>Body</div>
		</section>
	)
}