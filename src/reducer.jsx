import React, { useReducer } from 'react';




const initialState = { red: 0, green: 0, blue: 0 };


const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT_RED':
            return { ...state, red: Math.min(state.red + 1, 255) };
        case 'DECREMENT_RED':
            return { ...state, red: Math.max(state.red - 1, 0) };
        case 'INCREMENT_GREEN':
            return { ...state, green: Math.min(state.green + 1, 255) };
        case 'DECREMENT_GREEN':
            return { ...state, green: Math.max(state.green - 1, 0) };
        case 'INCREMENT_BLUE':
            return { ...state, blue: Math.min(state.blue + 1, 255) };
        case 'DECREMENT_BLUE':
            return { ...state, blue: Math.max(state.blue - 1, 0) };
        default:
            return state;
    }
};

