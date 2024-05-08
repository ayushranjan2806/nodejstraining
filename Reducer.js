const { createStore } = require('redux');

// Counter Reducer
const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
};

// Create Redux Store
const store = createStore(counterReducer);

module.exports = store;
