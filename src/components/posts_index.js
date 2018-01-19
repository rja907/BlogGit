import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount(){
    this.props.fetchPosts();
  }
  render() {
    console.log(this.props);
    return(
      <div>
        Posts Index!
      </div>
    )
  }
}

function mapStateToProps(state){
  return { posts: state.props};
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
