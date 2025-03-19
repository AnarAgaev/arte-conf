export type T_StepOneState = {

    // тип потолка
    ceilingType: {
        id: number,
        name: 'реечный' | 'натяжной' | 'ГКЛ'
        img: string
        selected: boolean
    }[]

}
