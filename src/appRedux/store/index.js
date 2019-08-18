import {applyMiddleware,createStore,compose} from "redux";
import reducers from '../reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
    const store = createStore(reducers, initialState,
      composeEnhancers(applyMiddleware(sagaMiddleware)));
  
    sagaMiddleware.run(rootSaga);
  
    return store;
  }