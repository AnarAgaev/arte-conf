import { useState, useRef, useCallback, useEffect } from 'react'
import { useAppDispatch } from '@hooks'
import { setActiveSide } from '@store/stepOneSlice'
import style from './CalcController.module.sass'

const {
    CalcController__body,
    CalcController__body_transparent,
    CalcController__value,
    CalcController__controller,
    CalcController__controller_dec,
    CalcController__controller_inc
} = style

interface I_Props {
    value?: number | null
    step?: number
    onChange?: (value: number | null) => void
    onActive?: () => void
	transparent?: boolean
}

export const CalcController = ({
    value = null,
    step = 1,
    onChange,
    onActive,
	transparent
}: I_Props) => {
    const dispatch = useAppDispatch()
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>(value === null ? '' : value.toString())
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        setInputValue(value === null ? '' : value.toString())
    }, [value])

    const updateValue = useCallback((newValue: number | null) => {
        onChange?.(newValue)
    }, [onChange])

    const handleIncrement = useCallback(() => {
        const currentValue = value === null ? 0 : value
        updateValue(currentValue + step)
    }, [value, step, updateValue])

    const handleDecrement = useCallback(() => {
        const currentValue = value === null ? 2 : value
        updateValue(Math.max(currentValue - step, 1))
    }, [value, step, updateValue])

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target

        if (value === "" || /^\d*$/.test(value)) {
            setInputValue(value)

			if (value !== "") {
                updateValue(parseInt(value))
            } else {
                updateValue(null)
            }
        }
    }, [updateValue])

    const handleBlur = useCallback(() => {
        if (inputValue === "") {
            updateValue(null)
        } else {
            const numValue = parseInt(inputValue)
            updateValue(isNaN(numValue) ? null : numValue)
        }
        setIsFocused(false)
    }, [inputValue, updateValue])

    const handleFocus = useCallback(() => {
        setIsFocused(true)
        onActive?.()
    }, [onActive])

    const handleMouseEnter = useCallback(() => {
        onActive?.()
    }, [onActive])

    const handleMouseLeave = useCallback(() => {
        if (!isFocused) {
            dispatch(setActiveSide(null))
        }
    }, [dispatch, isFocused])

    return (
        <div
            className={`${CalcController__body} ${transparent ? `${CalcController__body_transparent}`: ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                type="button"
                onClick={handleDecrement}
                className={`${CalcController__controller} ${CalcController__controller_dec}`}
                tabIndex={-1}
            />

            <input
                ref={inputRef}
                type="text"
                className={CalcController__value}
                value={inputValue}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="CalcControllerValue"
                inputMode="numeric"
                pattern="[0-9]*"
                tabIndex={0}
            />

            <button
                type="button"
                onClick={handleIncrement}
                className={`${CalcController__controller} ${CalcController__controller_inc}`}
                tabIndex={-1}
            />
        </div>
    )
}