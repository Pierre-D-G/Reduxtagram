import React, { Component } from 'react';
import Home from './Home';
import Photo from './Photo';
import Comments from './Comments';

class SinglePhoto extends Component {
  
  render() {
    const postId = this.props.match.params.postId;
    const i = this.props.posts.findIndex((post) => post.code === postId);
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];
    return (
      <div>
        <Home />
        <div className="single-photo">
          <Photo i={i} post={post} {...this.props}/>
          <Comments postComments={postComments} {...this.props} />
        </div>
      </div>
    );
  }
}

export default SinglePhoto;
