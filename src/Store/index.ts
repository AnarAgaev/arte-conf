import { configureStore, combineReducers } from '@reduxjs/toolkit'

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'


// #region Reducers
import appReducer from './appSlice'
import stepOneReducer from './stepOneSlice'
import stepTwoReducer from './stepTwoSlice'
import stepFourReducer from './stepFourSlice'

const rootReducer = combineReducers({
    app: appReducer,
    stepOne: stepOneReducer,
	stepTwo: stepTwoReducer,
	stepFour: stepFourReducer
})
// #endregion



// ! Отключаем Persist --- Start
const emptyStorage = {
	getItem: () => Promise.resolve(null),
	setItem: () => Promise.resolve(),
	removeItem: () => Promise.resolve(),
}

const isPersistEnabled = false

const persistConfig = {
	key: 'root',
  	storage: isPersistEnabled ? storage : emptyStorage, // переключаем хранилище
}

// *** Persist в продакшн
// const persistConfig = {
//     key: 'root',
//     storage,
// }
// ! Отключаем Persist --- Finish

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({

    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ],
            },
        }),
})

export const persistor = persistStore(store)

export default store

// Store types
export type T_RootStore = ReturnType<typeof store.getState>
export type T_AppDispatch = typeof store.dispatch