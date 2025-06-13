import style from './CheckBoxController.module.sass'

const {
    CheckBoxController__body,
    CheckBoxController__marker,
    CheckBoxController__description,
    CheckBoxController__description_hardText,
} = style

interface I_Props {
    description: string
	onAction: (isChecked: boolean) => void
	isChecked?: boolean
	isHardText?: boolean
}

export const CheckBoxController = ({
    description,
	onAction,
    isChecked = false,
	isHardText = false
}: I_Props) => {

	const clazz = `${CheckBoxController__description} ${isHardText ? `${CheckBoxController__description_hardText}` : ''}`

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
			<span className={clazz}>{description}</span>
        </label>
    )
}