import { createAsyncThunk } from '@reduxjs/toolkit'
// import { T_RootStore } from '@store'

// type T_UserTemp = {
//     id: number
// }

const fetchInitData = createAsyncThunk<string, undefined, { rejectValue: string, fulfilledValue: string }> (

    'app/fetchInitData',

    // async (_, { getState, rejectWithValue, fulfillWithValue }) => {
    async (_, { rejectWithValue, fulfillWithValue }) => {

        // Если в Local Storage уже есть данные
        // const persistedData = getState().app.page
        // то заново не запрашиваем
        // if (!persistedData) {

        try {

            const res = await fetch('/mocks/temp.json')
            // const res = await fetch('https://jsonplaceholder.typicode.com/todos')

            if (!res.ok) {
                return rejectWithValue('Failed to retrieve initial source data!')
            }

            // return await res.json() as T_UserTemp[] // можем вернуть какие-либо данные (описываем тим в первом параметре) и сделать dispatch в другом месте

            // Здесь мэтчим данные через ZOD

            // const data = await res.json() as T_UserTemp[]

            // if (data.length) {
                //     console.log(data);
                //     fulfillWithValue('Текст сообщения об успешном выполнении асинхронного запроса')
                // }


            // Если данные корректные (после ZOD) диспатчим их в стор

            return fulfillWithValue('Текст для модалки об успехе всей операции :)')

        } catch (error) {
            console.error(error)

            return rejectWithValue(`Текст для модалки с ошибкой: Не вышло получить инит данные!`)
        }
    }
)

export default fetchInitData