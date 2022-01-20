// == Import npm
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// == Import
import './houseBronnChar.scss';

// == Composant
class HouseBronnChar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5050/charactersByFamilly/${'Bronn'}`)
      .then((res) => {
        console.log('response', res.data);
        this.setState({ data: res.data });
      });
  }

  render() {
    return (
      <div className="houseBronnChar">
        <ul className="houseBronnChar-list">
          {
          this.state.data.map((character) => (
            <Link
              className="houseBronnChar-items"
              to="/houseBronnCharLaNera"
              key={character.firstname}
            >
              <img className="houseBronnChar-img" src={character.picture} alt="portrait du personnage" />
              <h1 className="houseBronnChar-title">{character.firstname} {character.lastname}</h1>
            </Link>
          ))
      }
        </ul>
      </div>
    );
  }
}

// == Export
export default HouseBronnChar;
