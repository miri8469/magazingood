import { applyMiddleware, combineReducers, createStore } from 'redux';
import reducerPost from './reducers/reducerPosts'
import reducerMagazin from './reducers/reducerMagazin';
import { ServicePosts } from './middleWare/servicePosts'

const reducer = combineReducers({ reducerPost, reducerMagazin })

const store = createStore(reducer, applyMiddleware(ServicePosts))
window.store = store;
export default store;
    

