import { Viewport, Workspace } from '@components'
import style from './PageConfigurator.module.sass'

export const PageConfigurator = () => {
    return (
        <div className={style.PageConfigurator}>
            <Workspace />
            <Viewport />
        </div>
    )
}