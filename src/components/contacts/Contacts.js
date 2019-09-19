import React, { Component } from "react";
import Contact from "./Contact";
// when we have an action it's called as a "prop" when we bring in anything from the Redux state it's put into "props"
import PropTypes from "prop-types";
// To access the state inside components we need to bring in something called "connect" from react-redux
import { connect } from "react-redux"; // react-redux takes care of connecting react to redux
import { getContacts } from "../../actions/contactActions";

class Contacts extends Component {
  // "getContacts" should be called when the component is mounted
  componentDidMount() {
    // once we call this it's going to put the "contacts" into the props
    this.props.getContacts();
  }

  render() {
    // because of "mapStateToProps" where we pulling contacts from state we have access here to "this.props"
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  // "contacts" are bringed from the state
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  // We call our reducer "contact"
  // Put that into a prop in this component called "contact" and we should be able to access it with "this.props.contacts"
  // We're mapping the state from Redux to a local component property.
  contacts: state.contact.contacts
});

// In order to use "connect" we need instead of exporting the component directly we need to explore "connect" (put parentheses) and then wrap the component name in parentheses.
// Now inside the "connect" parameters we put two things:
export default connect(
  // * first is anything that we want to map from the redux state to props in the component
  mapStateToProps,
  // * second is any action that we want to dispatch
  { getContacts }
)(Contacts);
