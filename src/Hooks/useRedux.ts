import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import type { T_RootStore, T_AppDispatch } from '@store'

export const useAppDispatch = () => useDispatch<T_AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<T_RootStore> = useSelector