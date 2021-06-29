import { applyMiddleware, combineReducers, createStore } from 'redux';
import reducerPost from './reducers/reducerPosts'
import { ServicePosts } from './middleWare/servicePosts'

const reducer = combineReducers({ reducerPost })

const store = createStore(reducer, applyMiddleware(ServicePosts))
window.store = store;
export default store;

// store.dispatch(actions.GetWeather())

