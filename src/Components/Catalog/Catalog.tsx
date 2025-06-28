import { useMemo, useRef } from "react"
import { useAppSelector, useAppDispatch } from "@hooks"
import { T_AppDispatch } from "@store"
import { T_StepThreeState } from '@store/stepThreeSlice/types'
import { selectCatalogActiveCategoryList } from "@store/stepThreeSlice"
import style from './Catalog.module.sass'

const getListNodes = (
	activeCategoryList: T_StepThreeState['catalog'][0]['list'] | undefined,
	dispatch: T_AppDispatch,
	listRef: React.RefObject<HTMLUListElement>
): JSX.Element[] => {

	const nodes: JSX.Element[] = []

	if (!activeCategoryList) return []

	activeCategoryList.forEach(item => {
		nodes.push(
			<li key={item.id}>
				{ item.list
					? <div className={style.Catalog__caption}>
						<span>{item.linkText}</span> <mark>Все</mark>
						<i></i>
					</div>
					: <mark>{item.linkText}</mark>
				}
				{ item.list &&
					<div className="collapse">
						<div className="inner">
							<ul>
								{ getListNodes(item.list, dispatch, listRef) }
							</ul>
						</div>
					</div>
				}
			</li>
		)
	})

	return nodes
}

const listItemClickHandler = (e: React.MouseEvent<HTMLUListElement>) => {
    e.preventDefault()
    e.stopPropagation()

    if ((e.target as HTMLElement).tagName === 'MARK') {
        alert('Запрашиваем товары по категории')
        return
    }

    const clickedLi = (e.target as HTMLElement).closest('li')
    if (!clickedLi) return

    const isActive = clickedLi.classList.contains(style.Catalog__active)
    const collapse = clickedLi.querySelector('.collapse')

    if (isActive) {
        // Закрываем текущий элемент и все дочерние
        closeAllChildActiveElements(clickedLi)
        if (collapse) collapse.classList.remove('open')
    } else {
        // Закрываем все соседние элементы
        closeAllSiblingActiveElements(clickedLi)
        // Открываем текущий
        clickedLi.classList.add(style.Catalog__active)
        if (collapse) collapse.classList.add('open')
    }
}

const closeAllChildActiveElements = (parentElement: HTMLElement) => {
    parentElement.classList.remove(style.Catalog__active)
    const childActiveElements = parentElement.querySelectorAll(`.${style.Catalog__active}`)
    childActiveElements.forEach(el => {
        el.classList.remove(style.Catalog__active)
        const collapse = el.querySelector('.collapse')
        if (collapse) collapse.classList.remove('open')
    })
}

const closeAllSiblingActiveElements = (element: HTMLElement) => {
    const parent = element.parentElement

	if (!parent) return

    const siblings = Array.from(parent.children) as HTMLElement[]

	siblings.forEach(sibling => {
        if (sibling !== element && sibling.classList.contains(style.Catalog__active)) {
            sibling.classList.remove(style.Catalog__active)
            const collapse = sibling.querySelector('.collapse')
            if (collapse) collapse.classList.remove('open')

            const childActiveElements = sibling.querySelectorAll(`.${style.Catalog__active}`)
            childActiveElements.forEach(el => {
                el.classList.remove(style.Catalog__active)
                const childCollapse = el.querySelector('.collapse')
                if (childCollapse) childCollapse.classList.remove('open')
            })
        }
    })
}

export const Catalog = () => {

	// #region Component variables
	const dispatch = useAppDispatch()
	const catalogActiveCategoryList = useAppSelector(selectCatalogActiveCategoryList)
	const listRef = useRef<HTMLUListElement>(null)
	// #endregion

	const listNodes = useMemo(
		() => getListNodes(catalogActiveCategoryList, dispatch, listRef),
		[catalogActiveCategoryList, dispatch, listRef]
	)

	return ( !catalogActiveCategoryList
		? null
		: <div className={style.Catalog__wrapper}>
			<ul ref={listRef} onClick={listItemClickHandler}>
				{ listNodes }
			</ul>
		</div>
	)
}