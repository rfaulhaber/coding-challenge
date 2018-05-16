import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import {getRailsIssues} from './modules/github';

import app from './store';

const store = createStore(app);

class App extends Component {
    render() {
        return <div> this is the app </div>
    }
}

export default App;