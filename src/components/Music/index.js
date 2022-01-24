// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import './music.scss';

// == Composant
const Music = ({ seasons }) => (
  <div className="music">
    <ul className="music-list">
      {
        seasons.map((season) => (
          <Link
            className="music-items"
            to={`/musicsaison${season.id}`}
            key={season.route}
          >
            <img className="music-img" src={season.thumbnail} alt="couverture saison" />
            <h1 className="music-title">{season.label}</h1>
          </Link>
        ))
      }
    </ul>
  </div>
);

Music.propTypes = {
  seasons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
// == Export
export default Music;
