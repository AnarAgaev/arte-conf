import { useAppSelector } from '@hooks'
import { selectAppStatus } from '@store/appSlice'
import style from './Spinner.module.sass'

const { spinner, visible, wrapper, body, path } = style

export const Spinner = () => {

    const status = useAppSelector(selectAppStatus)

    const clazz = status === 'pending'
        ? `${spinner} ${visible}`
        : spinner

    return (
        <div className={clazz}>
            <div className={wrapper}>
                <svg className={body} viewBox="0 0 50 50">
                    <circle className={path} cx="25" cy="25" r="20" fill="none" strokeWidth="4"></circle>
                </svg>
            </div>
        </div>
    )
}