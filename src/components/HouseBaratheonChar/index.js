// == Import npm
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// == Import
import './houseBaratheonChar.scss';

// == Composant
class HouseBaratheonChar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5050/charactersByFamilly/${'Baratheon'}`)
      .then((res) => {
        console.log('response', res.data);
        this.setState({ data: res.data });
      });
  }

  render() {
    return (
      <div className="houseBaratheonChar">
        <ul className="houseBaratheonChar-list">
          {
          this.state.data.map((character) => (
            <Link
              className="houseBaratheonChar-items"
              to={`/houseBaratheonChar${character.firstname}`}
              key={character.firstname}
            >
              <img className="houseBaratheonChar-img" src={character.picture} alt="portrait du personnage" />
              <h1 className="houseBaratheonChar-title">{character.firstname} {character.lastname}</h1>
            </Link>
          ))
          }
        </ul>
      </div>
    );
  }
}

// == Export
export default HouseBaratheonChar;
