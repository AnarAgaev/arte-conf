export type T_Page = 'configurator' | 'projectDetail' | 'projectList'

export type T_Status = 'idle' | 'pending' | 'succeeded' | 'failed'

export type T_AppState = {
    page: T_Page
    status: T_Status
    error: string | null
}
