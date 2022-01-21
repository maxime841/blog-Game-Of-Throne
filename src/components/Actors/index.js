// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import './actors.scss';

// == Composant
const Actors = ({ actors }) => (
  <div className="actors">
    <ul className="actors-list">
      {
        actors.map((actor) => (
          <Link
            className="actors-items"
            to={actor.route}
            key={actor.route}
          >
            <img className="actors-img" src={actor.thumbnail} alt="portrait de l'acteur" />
            <h1 className="actors-title">{actor.firstname} {actor.lastname}</h1>
          </Link>
        ))
      }
    </ul>
  </div>
);

Actors.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
// == Export
export default Actors;
