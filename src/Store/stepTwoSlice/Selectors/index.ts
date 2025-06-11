import { T_StepTwoState } from "../types"

export const trackTypesSelector = (state: T_StepTwoState) => state.trackTypes

export const trackColorsSelector = (state: T_StepTwoState) => state.trackColors

export const trackCollectionsSelector = (state: T_StepTwoState) => state.trackCollections