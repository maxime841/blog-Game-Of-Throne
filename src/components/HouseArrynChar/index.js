// == Import npm
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// == Import
import './houseArrynChar.scss';

// == Composant
class HouseArrynChar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5050/charactersByFamilly/${'Arryn'}`)
      .then((res) => {
        console.log('response', res.data);
        this.setState({ data: res.data });
      });
  }

  render() {
    return (
      <div className="housesArrynChar">
        <ul className="housesArrynChar-list">
          {
          this.state.data.map((character) => (
            <Link
              className="housesArrynChar-items"
              to={`/houseArrynChar${character.firstname}`}
              key={character.firstname}
            >
              <img className="housesArrynChar-img" src={character.picture} alt="portrait du personnage" />
              <h1 className="housesArrynChar-title">{character.firstname} {character.lastname}</h1>
            </Link>
          ))
          }
        </ul>
      </div>
    );
  }
}

// == Export
export default HouseArrynChar;
