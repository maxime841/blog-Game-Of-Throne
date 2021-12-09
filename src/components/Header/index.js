// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './header.scss';

// == Composant
const Header = ({ links }) => (
  <header className="header">
    <nav className="header-list">
      {
        links.map((link) => (
          <NavLink
            className="header-link"
            key={link.route + link.label}
            to={link.route}
          >
            {link.label}
          </NavLink>
        ))
      };
    </nav>
  </header>
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
