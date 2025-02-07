import React from 'react'
import style from './ErrorBoundary.module.sass'

interface I_Props {
    children: React.ReactNode
}

interface ErrorState {
    hasError: boolean
    error?: Error
    errorInfo?: React.ErrorInfo
}

const { container, title, subtitle, picture } = style

export class ErrorBoundary extends React.Component<I_Props, ErrorState> {

    constructor(props: I_Props) {
        super(props)
        this.state = { hasError: false }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState({ hasError: true, error, errorInfo })
    }

    render() {


        console.log('---render ErrorBoundary');


        const { hasError, error, errorInfo } = this.state

        if (hasError) {
            console.error(error?.toString())
            console.error(errorInfo?.componentStack)

            return (
                <div className={container}>
                    <h1 className={title}>
                        Что-то пошло не так!
                    </h1>
                    <p className={subtitle}>
                        Мы уже работаем над проблемой и, в скором времени, все исправим.
                    </p>
                    <img className={picture}
                        src="https://aws.massive.ru/arte-conf/error-placeholder.webp"
                        alt="Ошибка в работе приложения."/>
                </div>
            );
        }

        return this.props.children
    }
}
