import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as github from './modules/github';
import IssueListPage from './pages/IssueListPage/IssueListPage';

import app from './reducers';

const store = createStore(app, applyMiddleware(thunk.withExtraArgument(github)));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <IssueListPage />
            </Provider>
        );
    }
}

export default App;
