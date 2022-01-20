// == Import npm
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// == Import
import './houseFreyChar.scss';

// == Composant
class HouseFreyChar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5050/charactersByFamilly/${'Frey'}`)
      .then((res) => {
        console.log('response', res.data);
        this.setState({ data: res.data });
      });
  }

  render() {
    return (
      <div className="houseFreyChar">
        <ul className="houseFreyChar-list">
          {
          this.state.data.map((character) => (
            <Link
              className="houseFreyChar-items"
              to={`/houseFreyChar${character.firstname}`}
              key={character.firstname}
            >
              <img className="houseFreyChar-img" src={character.picture} alt="portrait du personnage" />
              <h1 className="houseFreyChar-title">{character.firstname} {character.lastname}</h1>
            </Link>
          ))
          }
        </ul>
      </div>
    );
  }
}

// == Export
export default HouseFreyChar;
