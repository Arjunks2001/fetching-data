import { legacy_createStore as createStore,applyMiddleware, compose} from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./rootReducer/rootReducer";
import saga from "./saga/dropdownSaga";

const sagaMiddleware=createSagaMiddleware()
const store = compose(
    applyMiddleware(sagaMiddleware ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )(createStore)(rootReducer);
    sagaMiddleware.run(saga)
    export default store