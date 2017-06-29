import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { Provider } from 'react-redux';

import store, { history } from './store/store';

import PhotoGrid from './components/PhotoGrid';
import SinglePhoto from './components/SinglePhoto';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <div>
              <h1>
                <Link to='/'>
                  Reduxtagram
              </Link>
              </h1>
              <Route exact path='/' component={PhotoGrid} />
              <Route path='/view/:postId' component={SinglePhoto} />
            </div>
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
