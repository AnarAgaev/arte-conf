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

const rootReducer = combineReducers({
    app: appReducer
})
// #endregion

const persistConfig = {
    key: 'root',
    storage,
}

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