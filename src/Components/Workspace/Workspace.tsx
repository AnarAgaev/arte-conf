import { Steps } from '@components'
import style from './Workspace.module.sass'

const { workspace } = style

export const Workspace = () => {


    console.log('---render Workspace');


    return (
        <div className={workspace}>
            <Steps />

            <div>Workspace body</div>
            <div>Workspace footer --- buttons</div>
        </div>
    )
}