import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../reducers/rootReducer'
import {thunk as idleThunk, readyStatePromise, crashReporter} from 'redux-middleware'
import thunk from 'redux-thunk'

const composeStore = compose( applyMiddleware(thunk, idleThunk, readyStatePromise, crashReporter))(createStore)

export default function configureStore(){
    const store = composeStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
}