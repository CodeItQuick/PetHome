import React from "react";
import { IPetHomeState, PetHomeActionTypes, PetHomeActions } from "../contexts/types";

export const petHomeReducer: React.Reducer<IPetHomeState, PetHomeActionTypes> = (
    state,
    action
) => {
    switch (action.type) {
        case PetHomeActions.REGISTER_ANIMAL:
            return {
                ...state,
                animals: {
                    ...state.animals,
                    loading: true,
                    errors: []
                }
            }
        case PetHomeActions.REGISTER_ANIMAL_SUCCESS:
            return {
                ...state,
                animals: {
                    ...state.animals,
                    data: [...state.animals.data, action.payload.animal],
                    loading: false,
                    errors: []
                }
            };
        case PetHomeActions.REGISTER_ANIMAL_FAILED:
            return {
                ...state,
                animals: {
                    ...state.animals,
                    data: [],
                    loading: false,
                    error: action.payload
                }
            }
        default:
            return state;
    }
};
