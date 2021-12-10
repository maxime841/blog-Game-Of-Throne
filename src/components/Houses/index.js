// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import './houses.scss';

// == Composant
const Houses = ({ houses }) => (
  <div className="houses">
    <ul className="houses-list">
      {
        houses.map((house) => (
          <Link
            className="houses-items"
            to={house.route}
            key={house.route}
          >
            <img className="seasons-img" src={house.thumbnail} alt="couverture saison" />
            <h1 className="seasons-title">{house.label}</h1>
          </Link>
        ))
      }
    </ul>
  </div>
);

Houses.propTypes = {
  houses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
// == Export
export default Houses;
