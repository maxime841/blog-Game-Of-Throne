// == Import npm
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './header.scss';

// == Composant
const Header = ({ links }) => (
  <nav className="header" id="header">
    {
    links.map((link) => (
      <NavLink
        // activeClassName="active"
        className="header-link"
        key={link.route + link.label}
        to={link.route}
      >
        {link.label}
      </NavLink>
    ))
    }
  </nav>
);
Header.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

// == Export
export default Header;
