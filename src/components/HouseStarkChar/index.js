// == Import npm
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// == Import
import './houseStarkChar.scss';

// == Composant
class HouseStarkChar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5050/charactersByFamilly/${'Stark'}`)
      .then((res) => {
        console.log('response', res.data);
        this.setState({ data: res.data });
      });
  }

  render() {
    return (
      <div className="houseStarkChar">
        <ul className="houseStarkChar-list">
          {
          this.state.data.map((character) => (
            <Link
              className="houseStarkChar-items"
              to={`/houseStarkChar${character.firstname}`}
              key={character.firstname}
            >
              <img className="houseStarkChar-img" src={character.picture} alt="portrait du personnage" />
              <h1 className="houseStarkChar-title">{character.firstname} {character.lastname}</h1>
            </Link>
          ))
          }
        </ul>
      </div>
    );
  }
}

// == Export
export default HouseStarkChar;
