export type T_Page = 'configurator' | 'projectDetail' | 'projectList'

export type T_Status = 'idle' | 'pending' | 'succeeded' | 'failed'

export type T_StepStatus = 'prev' | 'active' | 'next'

export type T_Steps = {
    id: 0 | 1 | 2 | 3 | 4
    name: string
    status: T_StepStatus
    substeps: {
        id: number
        name: string
        status: T_StepStatus
    }[]
}[]

export type T_AppState = {
    page: T_Page
    status: T_Status
    steps: T_Steps
    errorMessage: string | null
    loadingMessage: string | null
    successMessage: string | null
}
