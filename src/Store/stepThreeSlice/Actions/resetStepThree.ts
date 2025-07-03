import { T_StepThreeState } from "../types"

export const resetStepThreeAction = (state: T_StepThreeState) => {

    // Сбрасываем цвет светильников
    state.lampColors.forEach(color => color.selected = false)

    // Сбрасываем тип управления
    state.controlTypes.forEach(type => type.selected = false)

    // Сбрасываем температуру свечения
    state.glowTemperatures.forEach(temperature => temperature.selected = temperature.value === 'Не выбрано')

    // Сбрасываем мощность светильников
    state.lampPowers.forEach(power => power.selected = power.value === 'Не выбрано')

	// Сбрасываем выбранную сторону
	state.sides.forEach(side => side.selected = false)

	// Сбрасываем каталог
	state.catalog.forEach(catalogItem => catalogItem.selected = false)

}