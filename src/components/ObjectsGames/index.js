// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './objectsGames.scss';

// == Composant
const ObjectsGames = ({ games }) => (
  <div className="objectsGames">
    <h1 className="objectsGames-title">Liste des jeux video Game of Thrones</h1>
    <ul className="objectsGames-list">
      {
      games.map((game) => (
        <div className="objectsGames-items">
          <p className="objectsGames-years">{game.year}</p>
          <img className="objectsGames-img" src={game.thumbnail} alt="couverture du livre" />
          <h1 className="objectsGames-titleBook">{game.label}</h1>
        </div>
      ))
      }
    </ul>
  </div>
);

ObjectsGames.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string.isRequired,
      years: PropTypes.number,
    }),
  ).isRequired,
};
// == Export
export default ObjectsGames;
