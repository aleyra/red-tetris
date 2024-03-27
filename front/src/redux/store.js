import { createStore, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import {thunk} from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';
// import logger from 'redux-logger'

// const
import rootReducer from './rootReducer'

const middleWare = [thunk]

const store = configureStore({
	rootReducer,
	// preLoadedState,
	middleWare
})

export default store
