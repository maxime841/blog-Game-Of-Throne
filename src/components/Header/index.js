// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './header.scss';

// == Composant

function showResponsiveMenu() {
  const menu = document.getElementById('topnav_responsive_menu');
  const icon = document.getElementById('topnav_hamburger_icon');
  const root = document.getElementById('root');
  if (menu.className === '') {
    menu.className = 'open';
    icon.className = 'open';
    root.style.overflowY = 'hidden';
  }
  else {
    menu.className = '';
    icon.className = '';
    root.style.overflowY = '';
  }
}

const Header = ({ links }) => (
  <div id="topnav" className="topnav">
    <a id="home_link" className="topnav_link" href="/">HOME</a>

    <nav role="navigation" id="topnav_menu">
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
      }
    </nav>

    <a id="topnav_hamburger_icon" onClick={showResponsiveMenu}>
      <span />
      <span />
      <span />
    </a>
    <nav role="navigation" id="topnav_responsive_menu">
      <ul>
        <li>{
        links.map((link) => (
          <NavLink
            className="header-link"
            key={link.route + link.label}
            to={link.route}
          >
            {link.label}
          </NavLink>
        ))
      }
        </li>
      </ul>

    </nav>
  </div>
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
