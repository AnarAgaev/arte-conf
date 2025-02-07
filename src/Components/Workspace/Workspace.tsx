import style from './Workspace.module.sass'

const { body } = style

export const Workspace = () => {

    console.log('---render Workspace');


    return (
        <div className={body}>
            Workspace
        </div>
    )
}