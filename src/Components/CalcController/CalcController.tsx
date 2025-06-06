import { useState, useRef } from 'react'
import { useAppDispatch } from '@hooks'
import { setActiveSide } from '@store/stepOneSlice'
import style from './CalcController.module.sass'

const {
	CalcController__body,
	CalcController__value,
	CalcController__controller,
	CalcController__controller_dec,
	CalcController__controller_inc
} = style

interface I_Props {
	onChange?: (value: number) => void
	onActive?: () => void
	initialValue?: number
	step?: number
}

export const CalcController = ({ onChange, onActive, initialValue = 0, step = 1 }: I_Props) => {

	const dispatch = useAppDispatch()

	const [value, setValue] = useState<number>(initialValue)
	const [inputValue, setInputValue] = useState<string>(initialValue.toString())

	const inputRef = useRef<HTMLInputElement>(null)

	const handleIncrement = () => {
		const newValue = value + step
		updateValue(newValue)
	}

	const handleDecrement = () => {
		const newValue = Math.max(value - step, 1)
		updateValue(newValue)
	}

	const updateValue = (newValue: number) => {
		setValue(newValue)
		setInputValue(newValue.toString())
		onChange?.(newValue)
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value

		if (inputValue === "" || /^\d+$/.test(inputValue)) {
			setInputValue(inputValue)
		}
	}

	const handleBlur = () => {
		let newValue = parseInt(inputValue)

		if (isNaN(newValue) || newValue < 1) {
			newValue = 1
		}

		updateValue(newValue)
	}

	const handleMouseEnter = () => {
		onActive?.()
	}

	return (
		<div
			className={CalcController__body}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={() => dispatch(setActiveSide(null))}
		>
			<button
				type="button"
				onClick={handleDecrement}
				className={`${CalcController__controller} ${CalcController__controller_dec}`}
			></button>

			<input
				ref={inputRef}
				type="text"
				className={CalcController__value}
				value={inputValue}
				onChange={handleInputChange}
				onBlur={handleBlur}
				name="CalcControllerValue"
			/>

			<button
				type="button"
				onClick={handleIncrement}
				className={`${CalcController__controller} ${CalcController__controller_inc}`}
			></button>
		</div>
	)
}