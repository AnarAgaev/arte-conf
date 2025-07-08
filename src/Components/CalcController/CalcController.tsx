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
    value?: number
    step?: number
    onChange?: (value: number) => void
    onActive?: () => void
    transparent?: boolean
}

export const CalcController = ({
    value = 0,
    step = 1,
    onChange,
    onActive,
    transparent
}: I_Props) => {
    const dispatch = useAppDispatch()
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>(value.toString())
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        setInputValue(value.toString())
    }, [value])

    const updateValue = useCallback((newValue: number) => {
        onChange?.(Math.max(newValue, 0))
    }, [onChange])

    const handleIncrement = useCallback(() => {
        updateValue(value + step)
    }, [value, step, updateValue])

    const handleDecrement = useCallback(() => {
        updateValue(Math.max(value - step, 0))
    }, [value, step, updateValue])

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target

        if (value === "" || /^\d*$/.test(value)) {
            setInputValue(value)
            if (value !== "") {
                updateValue(parseInt(value))
            }
        }
    }, [updateValue])

    const handleBlur = useCallback(() => {
        // Если поле пустое или содержит нечисловое значение - устанавливаем 0
        const numValue = inputValue === "" ? 0 : parseInt(inputValue) || 0
        setInputValue(numValue.toString())
        updateValue(numValue)
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
            className={`${CalcController__body} ${transparent ? CalcController__body_transparent : ''}`}
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