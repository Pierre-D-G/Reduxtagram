import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';

import store, { history } from './store/store';

import Main from './containers/Main';
import Single from './containers/Single';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
              <Route exact path='/' component={Main} />
              <Route path='/view/:postId' component={Single} />
          </Switch>         
        </Router>
      </Provider>
    );
  }
}

export default App;
