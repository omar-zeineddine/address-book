import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useAuth, logout } from "../../context/auth/AuthState";
import { useContacts, clearContacts } from "../../context/contact/ContactState";

const Navbar = ({ title, icon }) => {
  const [authState, authDispatch] = useAuth();
  const { isAuthenticated, user } = authState;

  // contact dispatch without state.
  const contactDispatch = useContacts()[1];

  const onLogout = () => {
    logout(authDispatch);
    clearContacts(contactDispatch);
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <Link onClick={onLogout} to="/login">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </Link>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="bg-primary">
      <div className="container navbar">
        <h1>
          <Link to="/">
            <i className={icon} /> {title}
          </Link>
        </h1>
        <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Address  Book",
  icon: "fa-solid fa-address-book",
};

export default Navbar;
