import React, { Component } from 'react';
import Home from './Home';
import Photo from './Photo';

class SinglePhoto extends Component {
  
  render() {
    const i = this.props.posts.findIndex((post) => post.code === this.props.match.params.postId);
    console.log(i);
    const post = this.props.posts[i];
    console.log(post);
    return (
      <div>
        <Home />
        <div className="single-photo">
          <Photo i={i} post={post} {...this.props}/>
        </div>
      </div>
    );
  }
}

export default SinglePhoto;
