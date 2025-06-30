import { PayloadAction } from '@reduxjs/toolkit'
import type { T_ProjectsState } from '../types'

type T_Payload = T_ProjectsState['projectList'][0]['name']

export const addNewProjectAction = (
    state: T_ProjectsState,
    action: PayloadAction<T_Payload>
) => {
    state.projectList.unshift({
		id: Date.now(),
		name: action.payload,
	})
}