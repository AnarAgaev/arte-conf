import { T_StepThreeState } from "../types"

export const resetThreeStepAction = (state: T_StepThreeState) => {

    // Сбрасываем цвет светильников
    state.lampColors.forEach(color => color.selected = false)

    // Сбрасываем тип управления
    state.controlTypes.forEach(type => type.selected = false)

    // Сбрасываем температуру свечения
    state.glowTemperatures.forEach(temperature => temperature.selected = false)

    // Сбрасываем мощность светильников
    state.lampPowers.forEach(power => power.selected = false)



    // Resenting ...
}