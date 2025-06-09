import style from './CheckBoxController.module.sass'

const {
    CheckBoxController__body,
    CheckBoxController__marker,
    CheckBoxController__description,
} = style

interface I_Props {
    description: string
	onAction: (isChecked: boolean) => void
	isChecked?: boolean
}

export const CheckBoxController = ({
    description,
	onAction,
    isChecked = false,
}: I_Props) => {

    return (
        <label className={CheckBoxController__body}>
            <input
				className='invisible'
				checked={isChecked}
				onChange={event => onAction(event.target.checked)}
				type="checkbox"
				name={description}
			/>
			<i className={CheckBoxController__marker}></i>
			<span className={CheckBoxController__description}>{description}</span>
        </label>
    )
}