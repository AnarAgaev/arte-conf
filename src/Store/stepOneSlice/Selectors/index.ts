import { T_StepOneState } from "../types"

export const ceilingTypeSelector = (state: T_StepOneState) => state.ceilingType

export const mountingTypeSelector = (state: T_StepOneState) => state.mountingType

export const constructionFormsSelector = (state: T_StepOneState) => state.constructionForm

export const activeConstructionFormSelector = (state: T_StepOneState) => state.constructionForm.find(form => form.selected)

export const activeSideSelector = (state: T_StepOneState) => state.sides.find(side => side.isActive)

export const sidesSelector = (state: T_StepOneState) => state.sides

export const totalSidesLengthsSelector = (state: T_StepOneState) => {
    const sidesWithLength = state.sides.filter(side => side.length !== null)

    if (sidesWithLength.length === 0) {
        return null
    }

    return sidesWithLength.reduce((sum, side) => sum + side.length!, 0)
}

export const movingToWallSelector = (state: T_StepOneState) => state.movingToWall

export const moveItemsSelector = (state: T_StepOneState) => state.moveItems