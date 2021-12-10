// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import './seasons.scss';

// == Composant
const Seasons = ({ seasons }) => (
  <div className="seasons">
    <ul className="seasons-list">
      {
        seasons.map((season) => (
          <Link
            className="seasons-items"
            to={season.route}
            key={season.route}
          >
            <img className="seasons-img" src={season.thumbnail} alt="couverture saison" />
            <h1 className="seasons-title">{season.label}</h1>
          </Link>
        ))
      }
    </ul>
  </div>
);

Seasons.propTypes = {
  seasons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
// == Export
export default Seasons;
