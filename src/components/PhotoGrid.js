import React, { Component } from 'react';
import Home from './Home';
import Photo from './Photo';

class PhotoGrid extends Component {
  render() {
    return (
      <div>
        <Home />
        <div className="photo-grid">
          {this.props.posts.map((post, i) => 
            <Photo {...this.props} key={i} i={i} post={post}/>
          )}
        </div>
      </div>
    );
  }
}

export default PhotoGrid;
