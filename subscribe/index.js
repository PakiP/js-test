//发布订阅


//STEP1
// let state = {
//   count: 1
// };
// let listeners = [];

// function subscribe(listener) {
//   listeners.push(listener);
// }

// function changeCount(count) {
//   state.count = count;
//   //count改变时通知所有订阅者
//   for (let i = 0; i < listeners.length; i++) {
//     const listener = listeners[i];
//     listener();
//   }
// }

// subscribe(() => {
//   console.log(state.count);
// });

// changeCount(2);

//STEP2

let initState = {
  counter: {
    count: 0
  },
  info: {
    name: '',
    description: ''
  }
}

const createStore = function(reducer, initState) {
  let state = initState;
  let listeners = [];

  //订阅
  function subscribe(listener) {
    listeners.push(listener);
  }

  function dispatch(action) {
    // state = newState;
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }

  function getState() {
    return state;
  }

  return {
    subscribe,
    dispatch,
    getState
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: {
          count: state.counter.count + 1
        }
      };
      // break;
    case 'DECREMENT':
      return {
        ...state,
        counter: {
          count: state.counter.count - 1
        }
      }
      // break;
    default:
      return state;
  }
}

let store = createStore(reducer, initState);

// store.subscribe(() => {
//   let state = store.getState();
//   console.log(`${state.info.name}: ${state.info.description}`);
// })
store.subscribe(() => {
  let state = store.getState();
  console.log(state.counter.count);
})

// store.dispatch({
//   ...store.getState(),
//   info: {
//     name: 'koko',
//     description: '!!!'
//   }
// });

// store.dispatch({
//   ...store.getState(),
//   counter: {
//     count: 1
//   }
// });

store.dispatch({
  type: 'INCREMENT'
});
store.dispatch({
  type: 'DECREMENT'
});
