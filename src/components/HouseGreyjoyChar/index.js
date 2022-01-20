// == Import npm
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// == Import
import './houseGreyjoyChar.scss';

// == Composant
class HouseGreyjoyChar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5050/charactersByFamilly/${'Greyjoy'}`)
      .then((res) => {
        console.log('response', res.data);
        this.setState({ data: res.data });
      });
  }

  render() {
    return (
      <div className="houseGreyjoyChar">
        <ul className="houseGreyjoyChar-list">
          {
          this.state.data.map((character) => (
            <Link
              className="houseGreyjoyChar-items"
              to={`/houseGreyjoyChar${character.firstname}`}
              key={character.firstname}
            >
              <img className="houseGreyjoyChar-img" src={character.picture} alt="portrait du personnage" />
              <h1 className="houseGreyjoyChar-title">{character.firstname} {character.lastname}</h1>
            </Link>
          ))
          }
        </ul>
      </div>
    );
  }
}

// == Export
export default HouseGreyjoyChar;
