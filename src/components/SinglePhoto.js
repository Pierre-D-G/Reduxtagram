import React, { Component } from 'react';
import Home from './Home';
import Photo from './Photo';
import Comments from './Comments';

class SinglePhoto extends Component {
  
  render() {
    const i = this.props.posts.findIndex((post) => post.code === this.props.match.params.postId);
    const post = this.props.posts[i];
    return (
      <div>
        <Home />
        <div className="single-photo">
          <Photo i={i} post={post} {...this.props}/>
          <Comments />
        </div>
      </div>
    );
  }
}

export default SinglePhoto;
