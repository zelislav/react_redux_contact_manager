import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getContact } from "../../actions/contactActions";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  // Taking the props and set them to the state.
  // Also, "contact/edit/ID" should stay as a controlled component so we need the inputs bound to the state.
  UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    // This runs when we fetch "contacts" from the "state" and we bring it in as prop, we map it to a prop this will run and then we can access the "contact" prop inside "nextProps".
    const { name, email, phone } = nextProps.contact;
    this.setState({
      name,
      email,
      phone
    });
    // So that should update the state and then it should be shown in the form.
  }

  // We wanna call "getContact" because that's what's going to bring in the single contact so that's going to go inside of "componentDidMount"
  componentDidMount() {
    // getting ID from URL
    const { id } = this.props.match.params;
    this.props.getContact(id);
  }

  onSubmit = e => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // Check For Errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    const updContact = {
      name,
      email,
      phone
    };

    const { id } = this.props.match.params;

    //// UPDATE CONTACT ////

    // Clear State
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    this.props.history.push("/");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Edit Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Email"
              name="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={this.onChange}
              error={errors.email}
            />
            <TextInputGroup
              label="Phone"
              name="phone"
              placeholder="Enter Phone"
              value={phone}
              onChange={this.onChange}
              error={errors.phone}
            />
            <input
              type="submit"
              value="Update Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

EditContact.propTypes = {
  contact: PropTypes.object.isRequired,
  getContact: PropTypes.func.isRequired
};

// We want 'mapStateToProps' because we have that "contact" value in our state that we want.
const mapStateToProps = state => ({
  // It's coming from the "contactReducer.js" in the "state", but we want the single "contact" object!
  contact: state.contact.contact
});

export default connect(
  mapStateToProps,
  { getContact }
)(EditContact);
