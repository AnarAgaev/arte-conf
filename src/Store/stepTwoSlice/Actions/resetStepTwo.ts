import { T_StepTwoState } from "../types"

export const resetStepTwoAction = (state: T_StepTwoState) => {

    // Сбрасываем тип трека
    state.trackTypes.forEach(type => type.selected = false)

    // Сбрасываем цвет трека
	state.trackColors.forEach(colorType => colorType.selected = false)

	// Сбрасываем коллекцию
	state.trackCollections.forEach(collection => collection.selected = false)
}