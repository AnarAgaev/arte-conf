import steps from "./steps"
import { T_AppState } from "./types"

const initialState: T_AppState = {
    errorMessage: null,
    loadingMessage: null,
    successMessage: null,
    status: 'idle',
    page: 'configurator',
    steps: steps
}

export default initialState