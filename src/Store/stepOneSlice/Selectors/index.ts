import { T_StepOneState } from "../types"

export const ceilingTypeSelector = (state: T_StepOneState) => state.ceilingType

export const mountingTypeSelector = (state: T_StepOneState) => state.mountingType

export const constructionFormsSelector = (state: T_StepOneState) => state.constructionForm

export const activeConstructionFormSelector = (state: T_StepOneState) => state.constructionForm.find(form => form.selected)

export const activeSideSelector = (state: T_StepOneState) => state.sides.find(side => side.isActive)

export const sidesSelector = (state: T_StepOneState) => state.sides