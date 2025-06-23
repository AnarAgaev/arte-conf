import { T_StepThreeState } from "../types"

export const lampColorsSelector = (state: T_StepThreeState) => state.lampColors

export const controlTypesSelector = (state: T_StepThreeState) => state.controlTypes

export const glowTemperaturesSelector = (state: T_StepThreeState) => state.glowTemperatures

export const lampPowersSelector = (state: T_StepThreeState) => state.lampPowers