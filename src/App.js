import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import app from './store';

const store = createStore(app);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <p> this is the app </p>
                </div>
            </Provider>
        );
    }
}

export default App;
