import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { createProfile } from "../../actions/profileActions";
import classnames from "classnames";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "",
      company: "",
      website: "",
      location: "",
      status: "",
      skills: "",
      githubusername: "",
      bio: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const errors = this.props.errors;
    //const { errors, displaySocialInputs } = this.state;
    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <a href="#" className="btn btn-light">
                Go Back
              </a>
              <h1 className="display-4 text-center">Create Your Profile</h1>
              {/* <p className="lead text-center">
                Let's get some information to make your profile stand out
              </p> */}
              <small className="d-block pb-3">* = required field</small>

              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.handle
                    })}
                    placeholder="* Profile username"
                    name="handle"
                    value={this.state.handle}
                    onChange={this.onChange}
                    required
                  />
                  {errors.handle && (
                    <div className="invalid-feedback">{errors.handle}</div>
                  )}
                  {/* <small className="form-text text-muted">
                    A unique handle for your profile URL. Your full name,
                    company name, nickname, etc (This CAN'T be changed later)
                  </small> */}
                </div>

                <div className="form-group">
                  <select
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.status
                    })}
                    name="status"
                    placeholder="Status"
                    value={this.state.status}
                    onChange={this.onChange}
                  >
                    <option value="0">* Select your Status</option>
                    <option value="highschool">Highschool Student</option>
                    <option value="university">University Student</option>
                    {/* <option value="Senior Developer">Senior Developer</option>
                    <option value="Manager">Manager</option>
                    <option value="Student or Learning">
                      Student or Learning
                    </option>
                    <option value="Instructor">Instructor or Teacher</option>
                    <option value="Intern">Intern</option> */}
                    <option value="Other">Other</option>
                  </select>
                  {/* <small className="form-text text-muted">
                    Give us an idea of where you are at in your career
                  </small> */}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.company
                    })}
                    placeholder="Company"
                    name="company"
                    value={this.state.company}
                    onChange={this.onChange}
                    required
                  />
                  {errors.company && (
                    <div className="invalid-feedback">{errors.company}</div>
                  )}
                  <small className="form-text text-muted">
                    Could be your school or university
                  </small>
                </div>

                {/* <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.website
                    })}
                    placeholder="Website"
                    name="website"
                    value={this.state.website}
                    onChange={this.onChange}
                    required
                  />
                  {errors.website && (
                    <div className="invalid-feedback">{errors.website}</div>
                  )}
                  <small className="form-text text-muted">
                    Could be your own or a company website
                  </small>
                </div> */}

                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.location
                    })}
                    placeholder="Location"
                    name="location"
                    value={this.state.location}
                    onChange={this.onChange}
                    required
                  />
                  {errors.location && (
                    <div className="invalid-feedback">{errors.location}</div>
                  )}
                  <small className="form-text text-muted">
                    Where do you live
                  </small>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.skills
                    })}
                    placeholder="Hobby"
                    name="skills"
                    value={this.state.skills}
                    onChange={this.onChange}
                    required
                  />
                  {errors.skills && (
                    <div className="invalid-feedback">{errors.skills}</div>
                  )}
                  <small className="form-text text-muted">
                    Eg: math,science,physics,chemistry
                  </small>
                </div>

                {/* <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.githubusername
                    })}
                    placeholder="Githubusername"
                    name="githubusername"
                    value={this.state.githubusername}
                    onChange={this.onChange}
                    required
                  />
                  {errors.githubusername && (
                    <div className="invalid-feedback">
                      {errors.githubusername}
                    </div>
                  )}
                  <small className="form-text text-muted">
                    If you want your latest repos and a Github link, include
                    your username
                  </small>
                </div> */}

                <div className="form-group">
                  <textarea
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.bio
                    })}
                    placeholder="Something about yourself"
                    name="bio"
                    value={this.state.bio}
                    onChange={this.onChange}
                    required
                  />
                  {errors.bio && (
                    <div className="invalid-feedback">{errors.bio}</div>
                  )}
                </div>

                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-light"
                  >
                    Add Social Network Links
                  </button>
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fab fa-twitter" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.twitter
                    })}
                    placeholder="Twitter Profile URL"
                    name="twitter"
                    value={this.state.twitter}
                    onChange={this.onChange}
                  />
                  {errors.twitter && (
                    <div className="invalid-feedback">{errors.twitter}</div>
                  )}
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fab fa-facebook" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.facebook
                    })}
                    placeholder="Facebook Page URL"
                    name="facebook"
                    value={this.state.facebook}
                    onChange={this.onChange}
                  />
                  {errors.facebook && (
                    <div className="invalid-feedback">{errors.facebook}</div>
                  )}
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fab fa-linkedin" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.linkedin
                    })}
                    placeholder="Linkedin Profile URL"
                    name="linkedin"
                    value={this.state.linkedin}
                    onChange={this.onChange}
                  />
                  {errors.linkedin && (
                    <div className="invalid-feedback">{errors.linkedin}</div>
                  )}
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fab fa-youtube" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.youtube
                    })}
                    placeholder="YouTube Channel URL"
                    name="youtube"
                    value={this.state.youtube}
                    onChange={this.onChange}
                  />
                  {errors.youtube && (
                    <div className="invalid-feedback">{errors.youtube}</div>
                  )}
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fab fa-instagram" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.instagram
                    })}
                    placeholder="Instagram Page URL"
                    name="instagram"
                    value={this.state.instagram}
                    onChange={this.onChange}
                  />
                  {errors.instagram && (
                    <div className="invalid-feedback">{errors.instagram}</div>
                  )}
                </div>
                <input
                  type="submit"
                  className="btn btn-info btn-block mt-4"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile }
)(withRouter(CreateProfile));
