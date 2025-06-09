import { T_StepOneState } from "../types"

export const resetOneStepAction = (state: T_StepOneState) => {

    // Сбрасываем тип потолка
    state.ceilingType.forEach(type => type.selected = false)

	// Сбрасываем тип монтажа
	state.mountingType.forEach(type => type.selected = false)

	// Сбрасываем форму конфигурации
	state.constructionForm.forEach(form => form.selected = false)

	// Сбрасываем значения длинны у сторон
	state.sides.forEach(side => {
		side.length = null
		side.isActive = false
	})

    // Resenting ...
}