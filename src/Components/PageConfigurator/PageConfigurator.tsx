import { Viewport, Workspace } from '@components'
import style from './PageConfigurator.module.sass'

const { pageConfigurator } = style

export const PageConfigurator = () => {


    console.log('---render PageConfigurator');


    return (
        <div className={pageConfigurator}>
            <Workspace />
            <Viewport />
        </div>
    )
}