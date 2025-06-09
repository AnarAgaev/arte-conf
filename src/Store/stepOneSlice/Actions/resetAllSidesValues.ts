import { T_StepOneState } from "../types";

export const resetAllSidesValuesAction = (
    { sides }: T_StepOneState
) => {
    sides.forEach(side => side.length = null)
}