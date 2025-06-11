import { Select, SelectOption, InputAdd } from '@components'
import style from './Location.module.sass'

export const Location = () => {

    const projectsOptions = [
        'Project 1',
        'Project 2',
        'Project 3',
    ].map(o => <SelectOption
        key={o}
        caption={o}
        isChecked={false}
        handler={() => document.body.click()}
        />
    )

    const roomOptions = [
        'Room 1',
        'Room 2',
        'Room 3',
        'Room 4',
        'Room 5',
        'Room 6',
        'Room 7',
    ].map((o, idx) => <SelectOption
        key={o}
        caption={o}
        isChecked={idx === 3}
        handler={() => {
            alert(o)
            document.body.click()
        }}
        />
    )

    return (
        <div className={style.Location}>
            <Select title="Проект" selectedValue="Выбранный проект">
                <InputAdd placeholder='Добавьте проект' cbf={() => {alert('add project')}} />
                <ul className={style.Location__list}>{ projectsOptions }</ul>
            </Select>
            <Select title="Помещение" selectedValue="Выбранное помещение">
                <InputAdd placeholder='Добавьте помещение' cbf={() => alert('add room')} />
                <ul className={style.Location__list}>{ roomOptions }</ul>
            </Select>
        </div>
    )
}