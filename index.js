/** @format */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as Feedback} from './app.json';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';
const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const MyApp = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent(Feedback, () => MyApp);
