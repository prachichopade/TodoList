import React from "react";
import PropTypes from "prop-types";

//Props used to get value from parent
export default function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark  bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

//Setting proptypes
Navbar.propTypes = {
  //Title should be string
  title: PropTypes.string.isRequired,
};

//Setting default proptypes
Navbar.defaultProps = {
  //It will be default title of page
  title: "Title of Page",
};
