import { useState, useMemo } from "react"
import { useAppSelector, useAppDispatch } from "@hooks"
import { StepFragmentItem, StepFragmentsWrapper } from "@components"
import { selectAllProjects, addNewProject, removeProject } from "@store/projectsSlice"
import { T_ProjectsState } from "@store/projectsSlice/types"
import style from './PageProjectList.module.sass'
import { T_AppDispatch } from "@store"
import { togglePage } from "@store/appSlice"

const {
	PageProjectList__elements,
	PageProjectList__form,
	PageProjectList__message,
	PageProjectList__item,
	PageProjectList__name,
	PageProjectList__controllers,
} = style

// #region Node list getters
const getAllProjectsNodes = (
	projects: T_ProjectsState['projectList'],
	dispatch: T_AppDispatch
): JSX.Element[] => projects.map(project => {

	const onRemove = () => {
		dispatch(removeProject(project.id))
	}

	return (
		<li key={project.id} className={PageProjectList__item}>
			<span className={PageProjectList__name}>
				<b>Название проекта:</b>
				<i onClick={() => dispatch(togglePage('projectDetail'))} >
					{project.name}
				</i>
			</span>
			<div className={PageProjectList__controllers}>
				<button type="button" className="btn btn_small btn_lite">
					<i className="edit"></i>
					переименовать
				</button>
				<button type="button" className="btn btn_small btn_lite">
					<i className="copy"></i>
					копировать
				</button>
				<button type="button" className="btn btn_small btn_lite">
					<i className="share"></i>
					поделиться
				</button>
				<button type="button" className="btn btn_small btn_lite">
					<i className="download"></i>
					скачать
				</button>
				<button type="button" className="btn btn_small btn_lite" onClick={onRemove}>
					<i className="remove"></i>
					удалить
				</button>
			</div>
		</li>
	)
})
// #endregion

export const PageProjectList = () => {

	// #region Component variables
	const dispatch = useAppDispatch()
	const allProjects = useAppSelector(selectAllProjects)
	// #endregion

	const [newProjectName, setNewProjectName] = useState('')

	const changeNewProjectNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewProjectName(e.target.value.trimStart())
	}

	const addProjectHandler = () => {
		dispatch(addNewProject(newProjectName))
		setNewProjectName('')
	}

	// #region Node list getters
	const allProjectsNodes = useMemo(
		() => getAllProjectsNodes(allProjects, dispatch),
		[ allProjects, dispatch]
	)
	// #endregion

    return (
        <StepFragmentsWrapper>
			<StepFragmentItem>
				<h3>Мои проекты:</h3>
			</StepFragmentItem>

			<StepFragmentItem>
				<div className={PageProjectList__form}>
					<label>
						<input
							type="text"
							placeholder="Создать новый проект"
							className="one-line-text"
							name="newProjectName"
							value={newProjectName}
							onChange={changeNewProjectNameHandler}
						/>
						<button
							type="button"
							className="btn btn_small btn_dark"
							onClick={addProjectHandler}
						>
							создать
						</button>
					</label>
				</div>
			</StepFragmentItem>

			<StepFragmentItem>
				<div>
					{ allProjects.length === 0
						? <h4 className={PageProjectList__message}>
							У вас пока нет проектов. Создайте новый проект,
							используя форму выше, и добавьте в него продукты.
						</h4>
						: <ul className={PageProjectList__elements}>
							{ allProjectsNodes }
						</ul>
					}
                </div>
			</StepFragmentItem>
		</StepFragmentsWrapper>
    )
}