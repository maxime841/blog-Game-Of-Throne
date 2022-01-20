// == Import npm
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// == Import
import './houseTyrellChar.scss';

// == Composant
class HouseTyrellChar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5050/charactersByFamilly/${'Tyrell'}`)
      .then((res) => {
        console.log('response', res.data);
        this.setState({ data: res.data });
      });
  }

  render() {
    return (
      <div className="housesTyrellChar">
        <ul className="houseTyrellChar-list">
          {
          this.state.data.map((character) => (
            <Link
              className="houseTyrellChar-items"
              to={`/houseTyrellChar${character.firstname}`}
              key={character.firstname}
            >
              <img className="houseTyrellChar-img" src={character.picture} alt="portrait du personnage" />
              <h1 className="houseTyrellChar-title">{character.firstname} {character.lastname}</h1>
            </Link>
          ))
          }
        </ul>
      </div>
    );
  }
}

// == Export
export default HouseTyrellChar;
