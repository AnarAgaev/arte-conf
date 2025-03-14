import { useState, useEffect, useRef, ReactNode } from 'react'
import style from './Select.module.sass'

interface I_Props {
    title: string
    selectedValue: string
    children: ReactNode
}

const { select, select_dropped, value, caption,
    text, match, arrow, body, collapse, inner } = style

export const Select = ({ title, selectedValue, children }: I_Props) => {

    const [ dropped, toggleDropped ] = useState(false)
    const selectRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {

        const selectClickHandler = (evt: MouseEvent) => {
            const target = evt.target as HTMLElement

            const isChild = selectRef.current
                && selectRef.current.contains(target)

            if (!isChild) toggleDropped(false)
        }

        document.addEventListener('click', selectClickHandler)

        return () => document.removeEventListener(
            'click', selectClickHandler)
    }, [])

    const clazz = dropped
        ? `${select} ${select_dropped}`
        : `${select}`

    return (
        <div ref={selectRef} className={clazz}>
            <div className={value} onClick={() => toggleDropped(!dropped)}>
                <p className={caption}>
                    <span className={text}>{title}</span>
                    <span className={match}>{selectedValue}</span>
                </p>
                <i className={arrow}></i>
            </div>
            <div className={body}>
                <div className={collapse}>
                    <div className={inner}>
                        { children }
                    </div>
                </div>
            </div>
        </div>
    )
}