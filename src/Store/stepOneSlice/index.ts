import { createSlice } from '@reduxjs/toolkit'
import type { T_StepOneState } from '@store/stepOneSlice/types'

// Import Funcs
import {} from './Funcs'

// Import Actions
import {
    resetOneStepAction,
    setCeilingTypeAction
} from './Actions'

// Import Selectors
import {
    ceilingTypeSelector
} from './Selectors'

const initialState: T_StepOneState = {
    ceilingType: [
        {
            id: 0,
            name: 'реечный',
            img: '/images/reechnyi.jpg',
            selected: false
        },
        {
            id: 1,
            name: 'натяжной',
            img: '/images/natyazhnoy.jpg',
            selected: false
        },
        {
            id: 2,
            name: 'ГКЛ',
            img: '/images/gkl.png',
            selected: false
        }
    ]
}

const reducers = {
    resetOneStep: resetOneStepAction,
    setCeilingType: setCeilingTypeAction
}

const selectors = {
    selectCeilingType: ceilingTypeSelector
}

const stepOneSlice = createSlice({
    name: 'stepOne',
    initialState,
    reducers,
    selectors
})

export const {
    resetOneStep,
    setCeilingType
} = stepOneSlice.actions

export const {
    selectCeilingType
} = stepOneSlice.selectors

export default stepOneSlice.reducer