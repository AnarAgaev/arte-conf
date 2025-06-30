import { PayloadAction } from '@reduxjs/toolkit'
import type { T_ProjectsState } from '../types'

type T_Payload = T_ProjectsState['projectList'][0]['id']

export const removeProjectAction = (
    state: T_ProjectsState,
    action: PayloadAction<T_Payload>
) => {
	state.projectList = state.projectList.filter(project => project.id !== action.payload)
}