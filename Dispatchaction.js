const store = require('./Addtodo');

store.subscribe(() => {
  console.log('current state:', store.getState());
});

store.dispatch(store.getState());

store.dispatch(store.getState());

store.dispatch(store.getState());
