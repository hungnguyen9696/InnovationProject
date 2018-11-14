import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import PostFeed from "./PostFeed";
import Spinner from "../common/Spinner";
import { getPosts } from "../../actions/postActions";
// import { Link } from "react-router-dom";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props.post;
    let postContent;

    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = <PostFeed posts={posts} />;
    }

    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-2 col-sm-2">
              <h4>TOPIC</h4>
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <Link to="/science">Science</Link>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <Link to="/health">Health</Link>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="#">Education</a>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="#">Psychology</a>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="#">Travel</a>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="#">Business</a>
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="#">Movies</a>
                </li>
              </ul>
            </div> */}

            {/* <div className="col-md-10 col-sm-10"> */}
            <div className="col-md-12">
              <PostForm />
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
