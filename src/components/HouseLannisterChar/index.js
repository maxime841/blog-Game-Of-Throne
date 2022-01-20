// == Import npm
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// == Import
import './houseLannisterChar.scss';

// == Composant
class HouseLannisterChar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5050/charactersByFamilly/${'Lannister'}`)
      .then((res) => {
        console.log('response', res.data);
        this.setState({ data: res.data });
      });
  }

  render() {
    return (
      <div className="houseLannisterChar">
        <ul className="houseLannisterChar-list">
          {
          this.state.data.map((character) => (
            <Link
              className="houseLannisterChar-items"
              to={`/houseLannisterChar${character.firstname}`}
              key={character.firstname}
            >
              <img className="houseLannisterChar-img" src={character.picture} alt="portrait du personnage" />
              <h1 className="houseLannisterChar-title">{character.firstname} {character.lastname}</h1>
            </Link>
          ))
          }
        </ul>
      </div>
    );
  }
}

// == Export
export default HouseLannisterChar;
