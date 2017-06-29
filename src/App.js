import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';

import store, { history } from './store/store';

import PhotoGrid from './components/PhotoGrid';
import SinglePhoto from './components/SinglePhoto';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
              <Route exact path='/' component={PhotoGrid} />
              <Route path='/view/:postId' component={SinglePhoto} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
