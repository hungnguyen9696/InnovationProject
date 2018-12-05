import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import PostFeed from "./PostFeed";
import Spinner from "../common/Spinner";
import { getPostsEducation } from "../../actions/postActions";
import { Link } from "react-router-dom";

class PostsEducation extends Component {
  componentDidMount() {
    this.props.getPostsEducation();
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
            <div className="col-md-3 col-sm-3">
              <h4>TOPIC</h4>
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <Link to="/feed/science">Science</Link>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <Link to="/feed/health">Health</Link>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <Link to="/feed/education">Education</Link>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <Link to="/feed/chemistry">Chemistry</Link>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <Link to="/feed/travel">Travel</Link>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <Link to="/feed/business">Business</Link>
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <Link to="/feed/movies">Movies</Link>
                </li>
              </ul>
              <p>
                <Link to="/youtube">Looking for some videos?</Link>
              </p>
            </div>

            <div className="col-md-9 col-sm-9">
              {/* <div className="col-md-12"> */}
              <PostForm />
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PostsEducation.propTypes = {
  getPostsEducation: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPostsEducation }
)(PostsEducation);
