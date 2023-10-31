import { persistStore } from "redux-persist";
import rootReducer from "./store/reducers/rootReducer";
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';

const reduxStore = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk)) // middleware here
    const persistor = persistStore(store)

    return { store, persistor}
}

export default reduxStore
