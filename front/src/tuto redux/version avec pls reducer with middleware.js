const redux = require("redux")
const reduxLogger = require("redux-logger")

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

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

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE : return {
      ... state,
      numOfCakes : state.numOfCakes - 1
    }

    default: return state
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
      case BUY_ICECREAM : return {
        ... state, 
        numOfIceCreams : state.numOfIceCreams - 1
      }
  
      default: return state
    }
  }

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()


















// const redux = require("redux")
// const reduxLogger = require('redux-logger')

// const createStore = redux.createStore
// const combineReducers = redux.combineReducers
// const applyMiddleware = redux.applyMiddleware
// const logger = reduxLogger.createLogger()

// const BUY_CAKE = "BUY_CAKE"
// const BUY_ICECREAM = "BUY_ICECREAM"

// function buyCake() { //action creater
//   return { //action obj
//     type: BUY_CAKE,
//     info: 'First redux action'
//   }
// }

// function buyIceCream() {
//   return {
//     type : BUY_ICECREAM
//   }
// }

// // (previousState, action) => newState

// const initialCakeState = {
//   numOfCakes: 10
// }

// const initialIceCreamState = {
//   numOfIceCreams: 20
// }

// const cakeReducer = (state = initialCakeState, action) => {
//   switch (action.type) {
//     case BUY_CAKE : return {
//       ... state, 
//       numOfCakes : state.numOfCakes - 1
//     }
//     default: state
//   }
// }

// const iceCreamReducer = (state = initialIceCreamState, action) => {
//   switch (action.type) {
//     case BUY_ICECREAM : return {
//       ... state,
//       numOfIceCreams : state.numOfIceCreams - 1
//     }
//     default: state
//   }
// }

// const  rootReducer = combineReducers({
//     cake: cakeReducer,
//     iceCreame : iceCreamReducer
// })
// const store = createStore(rootReducer, applyMiddleware(logger)) // create a store
// console.log('Initial state', store.getState())
// // const unsubscribe = store.subscribe(() => console.log('Update state', store.getState())) // set up a listener
// const unsubscribe = store.subscribe(() => {})
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyIceCream())
// store.dispatch(buyIceCream())
// unsubscribe()