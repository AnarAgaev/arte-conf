import { useState, useRef, ChangeEvent } from 'react'
import style from './InputAdd.module.sass'

interface I_Props {
    placeholder: string
    cbf: () => void
}

const { add, add_valid, input, button } = style

export const InputAdd = ({ placeholder, cbf }: I_Props) => {



    console.log('---render InputAdd');



    // #region Variables
    // #endregion

    const [inputVal, setInputVal] = useState('')
    const inputRef = useRef<HTMLInputElement | null>(null)
    const buttonRef = useRef<HTMLButtonElement | null>(null)

    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => setInputVal(event.target.value)

    const handleEnterPress = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => { if (event.key === 'Enter') addNewValue() }

    const addNewValue = () => {
        if (inputVal) {
            cbf()
            setInputVal('')
            inputRef.current?.blur()
            buttonRef.current?.blur()
            // document.body.click()
        }
    }

    return (
        <div className={inputVal === '' ? add : `${add} ${add_valid}` }>
            <input className={input}
                type="text"
                value={inputVal}
                ref={inputRef}
                onChange={handleInputChange}
                onKeyDown ={handleEnterPress}
                placeholder={placeholder} />
            <button
                type="button"
                ref={buttonRef}
                className={button}
                onClick={addNewValue}>
            </button>
        </div>
    )
}