import { Wallet, Location } from '@components'
import style from './Viewport.module.sass'

const { viewport, sketch } = style

export const Viewport = () => {

    console.log('---render Viewport');


    return (
        <div className={viewport}>

            <div className={sketch}>
                <img src="" alt="" />
            </div>

            <Wallet />

            <Location />

            <button className='btn btn_default btn_dark'
                type="button">
                Добавить в проект
            </button>
        </div>
    )
}