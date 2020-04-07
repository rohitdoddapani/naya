import { GET_ITEMS, ADD_ITEMS } from './types';

export const getItems = (step) => {
    return {
        type: GET_ITEMS,
        payload: step
    };
};