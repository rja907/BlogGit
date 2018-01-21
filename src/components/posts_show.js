import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount(){
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }
  render() {
    //All posts: posts[this.props.match.params.id];
    // ^ The post we want to show!

    const { post } = this.props;
    if(!post){
      return <div>Loading...</div>
    }
    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

// function mapStateToProps({ posts }){
//   // All posts: return { posts };
//
// }

function mapStateToProps({ posts }, ownProps){
  //ownProps===this.ownProps
  return { post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);