import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

// Import Async Funcs
import {} from './Funcs'


// Import Actions
import {
	addNewProjectAction,
	removeProjectAction,
} from './Actions'


// Register Actions
const reducers = {
    addNewProject: addNewProjectAction,
	removeProject: removeProjectAction,
}


// Import Selectors
import {
	allProjectsSelector
} from './Selectors'


// Register Selectors
const selectors = {
    selectAllProjects: allProjectsSelector,
}


// Create slice
const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers,
    selectors
})


// Exports ...
export default projectsSlice.reducer


// Export Actions
export const {
	addNewProject,
	removeProject,
} = projectsSlice.actions


// Export Selectors
export const {
	selectAllProjects,
} = projectsSlice.selectors