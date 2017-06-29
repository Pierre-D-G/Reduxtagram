import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Photo extends Component {
  render() {
    const {post, i, comments} = this.props;
    return (
      <figure className='grid-figure'>
        <div className='grid-photo-wrap'>
            <Link to={'/view/${post.code}'}>
                <img src={post.display_src} alt={post.caption} classNmae='grid-photo'/>
            </Link>
        </div>
      </figure>
    );
  }
}

export default Photo;