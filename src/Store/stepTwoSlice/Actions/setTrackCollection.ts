import { PayloadAction } from "@reduxjs/toolkit";
import { T_StepTwoState } from "../types";

type T_Payload = T_StepTwoState['trackCollections'][0]['id']

export const setTrackCollectionAction = (
    { trackCollections }: T_StepTwoState,
    action: PayloadAction<T_Payload>
) => {

	const currentCollection = trackCollections.find(collection => collection.id === action.payload)

	if (!currentCollection) return

	const isAllSelected = currentCollection.name === 'all'

	trackCollections.forEach(collection => {
		if (isAllSelected) {
			collection.selected = collection.name === 'all'
		} else {
			collection.selected = collection.name === 'all'
				? false
				: collection.id === action.payload
					? !collection.selected
					: collection.selected
		}
	})

	const isSomeFinallySelected = trackCollections.find(collection => collection.selected)

	if (!isSomeFinallySelected) {
		trackCollections.forEach(collection => collection.selected = collection.name === 'all')
	}
}