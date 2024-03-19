import { createStore } from 'redux'
import cakeReducer from './cake/cakeReducer'

const store = createStore(cakeReducer)

export default store

// import rootReducer from './rootReducer'

// const store = createStore(rootReducer)

// export default store
