import { T_StepOneState } from "../types"

export const resetStepOneAction = (state: T_StepOneState) => {

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

	// Переход на стену
	state.movingToWall = false

	// Количество переходов на стену
	state.moveItems.forEach(item => {
		item.isActive = false
		item.length = null
	})
}