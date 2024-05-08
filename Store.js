const store = require('./Reducer');

// Dispatch actions
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); // Output: { count: 1 }

store.dispatch({ type: 'DECREMENT' });
console.log(store.getState()); // Output: { count: 0 }
