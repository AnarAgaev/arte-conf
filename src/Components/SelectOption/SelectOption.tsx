import style from './SelectOption.module.sass'

type I_Props = {
    caption: string
    isChecked: boolean
    handler: () => void
}

const { option, label, text } = style

export const SelectOption = ({ caption, isChecked, handler }: I_Props) => {
    return (
        <li className={option}>
            <label className={label}>
                <input
                    className='invisible'
                    type='checkbox'
                    checked={isChecked}
                    onChange={handler} />
                <span className={text}>{caption}</span>
            </label>
        </li>
    )
}