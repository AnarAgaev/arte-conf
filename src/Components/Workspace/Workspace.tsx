import { Steps } from '@components'
import style from './Workspace.module.sass'

const { workspace, buttons } = style

export const Workspace = () => {


    console.log('---render Workspace');


    return (
        <div className={workspace}>
            <Steps />

            <div>Workspace body</div>

            <div className={buttons}>
                <button type='button' className='btn btn_small btn_block btn_lite'>
                    сбросить все
                </button>
                <button type='button' className='btn btn_small btn_block btn_dark'>
                    следующий шаг
                </button>
            </div>
        </div>
    )
}