const redux = require("redux")
const createStore = redux.createStore

const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"

function buyCake() { //action creater
  return { //action obj
    type: BUY_CAKE,
    info: 'First redux action'
  }
}

function buyIceCream() {
  return {
    type : BUY_ICECREAM
  }
}

// (previousState, action) => newState

const initialState = { // initial state
  numOfCakes: 10,
  numOfIceCreams: 20
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE : return {
      ... state, //asking the reducer to make a copy of state in order to change only what we want
      numOfCakes : state.numOfCakes - 1
    }

    case BUY_ICECREAM : return {
      ... state, //asking the reducer to make a copy of state in order to change only what we want
      numOfIceCreams : state.numOfIceCreams - 1
    }

    default: state
  }
}

const store = createStore(reducer) // create a store
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('Update state', store.getState()) // set up a listener
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()