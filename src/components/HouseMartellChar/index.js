// == Import npm
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// == Import
import './houseMartellChar.scss';

// == Composant
class HouseMartellChar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5050/charactersByFamilly/${'Martell'}`)
      .then((res) => {
        console.log('response', res.data);
        this.setState({ data: res.data });
      });
  }

  render() {
    return (
      <div className="houseMartellChar">
        <ul className="houseMartellChar-list">
          {
          this.state.data.map((character) => (
            <Link
              className="houseMartellChar-items"
              to={`/houseMartellChar${character.firstname}`}
              key={character.firstname}
            >
              <img className="houseMartellChar-img" src={character.picture} alt="portrait du personnage" />
              <h1 className="houseMartellChar-title">{character.firstname} {character.lastname}</h1>
            </Link>
          ))
          }
        </ul>
      </div>
    );
  }
}

// == Export
export default HouseMartellChar;
