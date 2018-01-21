import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
  componentDidMount(){
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }
  onDeleteClick(){
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
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
        <br />
        <h6>Author: {post.categories}</h6>
        <br />
        <p>{post.content}</p>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
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

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
