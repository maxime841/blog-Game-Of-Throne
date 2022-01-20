// == Import npm
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// == Import
import './houseTullyChar.scss';

// == Composant
class HouseTullyChar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5050/charactersByFamilly/${'Tully'}`)
      .then((res) => {
        console.log('response', res.data);
        this.setState({ data: res.data });
      });
  }

  render() {
    return (
      <div className="houseTullyChar">
        <ul className="houseTullyChar-list">
          {
          this.state.data.map((character) => (
            <Link
              className="houseTullyChar-items"
              to={`/houseTullyChar${character.firstname}`}
              key={character.firstname}
            >
              <img className="houseTullyChar-img" src={character.picture} alt="portrait du personnage" />
              <h1 className="houseTullyChar-title">{character.firstname} {character.lastname}</h1>
            </Link>
          ))
          }
        </ul>
      </div>
    );
  }
}

// == Export
export default HouseTullyChar;
