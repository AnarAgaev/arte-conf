import { useRef } from "react"
import { isValidUrl } from "@helpers"
import style from './CatalogLink.module.sass'

interface I_CatalogLnkProps {
	src: `https://${string}.${string}` | `http://${string}.${string}`
	isCaption: boolean
	children: React.ReactNode
}

export const CatalogLink = ({ src, isCaption, children }: I_CatalogLnkProps) => {

	const linkRef = useRef<HTMLAnchorElement | null>(null)

	if (!isValidUrl(src)) return null

	const clickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		e.stopPropagation()

		alert('Запрашиваем товары по категории')
	}

	return (
		<a
			ref={linkRef}
			href={src}
			onClick={clickHandler}
			className={`${style.CatalogLink} ${isCaption ? style.CatalogLink_caption : ''}`}
		>
			{children}
		</a>
	)
}