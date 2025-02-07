import { InputSelect } from '@components'
import style from './Location.module.sass'

const { location } = style

export const Location = () => {


    console.log('---render Location');


    const projectsOptions = <span>projectsOptions</span>

    return (
        <div className={location}>
            <InputSelect
                cbf={() => {}}
                title="Название комнаты"
                placeholder="Добавить комнату"
                selectedValue="Выбранное значение" >
                { projectsOptions }
            </InputSelect>
        </div>
    )
}