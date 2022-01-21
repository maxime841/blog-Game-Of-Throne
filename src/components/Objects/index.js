// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './objects.scss';

// == Composant
const Objects = () => (
  <div className="objects">
    <ul className="objects-list">
      <Link
        className="objects-items"
        to="/objectsBooks"
      >
        Livres
      </Link>
      <Link
        className="objects-items"
        to="/objectsGame"
      >
        Jeux
      </Link>
      <Link
        className="objects-items"
        to="/shop"
      >
        Boutique officielle
      </Link>
    </ul>
  </div>
);

// == Export
export default Objects;
