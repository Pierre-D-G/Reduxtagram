import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PhotoGrid from './components/PhotoGrid';
import SinglePhoto from './components/SinglePhoto';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>
            <Link to='/'>
              Reduxtagram
            </Link>
          </h1>
          <Route exact path='/' component={PhotoGrid} />
          <Route path='/view/:postId' component={SinglePhoto} />
        </div>
      </Router>
    );
  }
}

export default App;
