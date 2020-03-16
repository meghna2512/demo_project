import React from 'react';
import  {Router, Route }  from 'react-router-dom';
import { LocalizeProvider } from "react-localize-redux";
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import {routerMiddleware} from 'react-router-redux';
import history from './history';
import reducer from '../Reducers'
import UserList from '../../FrontEnd/Components/User/UserList';
import SignIn from '../../FrontEnd/Components/SignIn/SignIn';
// *********************

export const makeMainRoutes = () => {
    const historyMiddleware = routerMiddleware(history);
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        reducer,
        composeEnhancers(
            applyMiddleware(historyMiddleware, thunk)
        )
    )

    return (
        <Provider store={store}>
            <Router history={history}>
                <div className="routesBox">
                    <LocalizeProvider>
                        <Route exact path="/" render={(props) => <SignIn  {...props} />} />
                        <Route exact path="/user-list" render={(props) => <UserList  {...props} />} />
                    </LocalizeProvider>
                </div>
            </Router>
        </Provider>
    );
}
