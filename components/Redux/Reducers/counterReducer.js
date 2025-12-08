import React from 'react';

const initialState = {count: 0};

export default counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {count: state.count + 1};
        case 'DECREMENT':
            if (state.count === 0) {
                return state;
            }
            return {count: state.count - 1};
        default:
            return state;
    }
};