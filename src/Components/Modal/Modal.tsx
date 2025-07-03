import style from './Modal.module.sass'
import { useEffect, useRef } from 'react'

const {
    Modal__wrapper,
    Modal__show,
    Modal__body,
    Modal__close,
    Modal__content,
} = style

type I_Props = {
    visible: boolean
    onClose: () => void
    children: React.ReactNode
}

export const Modal = ({ visible, children, onClose }: I_Props) => {
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if ( modalRef.current &&
                !modalRef.current.contains(event.target as Node) &&
                visible ) {
                onClose()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('touchstart', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('touchstart', handleClickOutside)
        }
    }, [visible, onClose])

    return (
        <div className={`${Modal__wrapper} ${visible ? `${Modal__show}` : ''}`}>
            <div ref={modalRef} className={Modal__body}>
                <button
                    type='button'
                    role='close'
                    className={Modal__close}
                    onClick={onClose}
                />
                <div className={Modal__content}>
                    {children}
                </div>
            </div>
        </div>
    )
}