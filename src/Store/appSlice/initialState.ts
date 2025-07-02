import steps from "./steps"
import { T_AppState } from "./types"

const initialState: T_AppState = {
    errorMessage: null,
    loadingMessage: null,
    successMessage: null,
    status: 'idle',
    page: 'projectDetail',
    steps: steps
}

export default initialState