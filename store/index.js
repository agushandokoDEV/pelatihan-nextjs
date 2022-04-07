import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import reducers from "@/store/reducers";

import { persistReducer, persistStore } from "redux-persist";
import storage from "./storage";
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV === 'development') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
}

const combinedReducer = (state, action) => {
    // console.log('combinedReducer : ', state, action);
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload
        }
        return nextState;
    }
    return reducers(state, action)
}

// https://github.com/fazlulkarimweb/with-next-redux-wrapper-redux-persist
const makeStore = ({ isServer }) => {
    // console.log('isServer : ', isServer)
    if (isServer) {
        //If it's on server side, create a store
        return createStore(combinedReducer, bindMiddleware([thunkMiddleware]));
    } else {
        //If it's on client side, create a store which will persist
        // const { persistStore, persistReducer } = require('redux-persist');

        const persistConfig = {
            key: 'wakool.id',
            storage, // if needed, use a safer storage
            whitelist: ['auth', 'account'], // only counter will be persisted, add other reducers if needed
            blacklist: ['drawer'] // will not be persisted
        };

        const persistedReducer = persistReducer(persistConfig, combinedReducer); // Create a new reducer with our existing reducer

        const store = createStore(
            persistedReducer,
            bindMiddleware([thunkMiddleware])
        ); // Creating the store again

        store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

        return store;
    }
};

// next-redux-wrapper
// const makeStore = () => {
//     return createStore(combinedReducer, bindMiddleware([thunkMiddleware]))
// }
export const wrapper = createWrapper(makeStore);

// redux-persist
// const persistConfig = {
//     key: 'root',
//     storage
// }
// const persistedReducer = persistReducer(persistConfig, reducers);

// const store = createStore(persistedReducer, undefined, bindMiddleware([thunkMiddleware]));
// const persistor = persistStore(store);

// export { store, persistor };


