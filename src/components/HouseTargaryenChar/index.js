// == Import npm
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// == Import
import './houseTargaryenChar.scss';

// == Composant
class HouseTargaryenChar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5050/charactersByFamilly/${'Targaryen'}`)
      .then((res) => {
        console.log('response', res.data);
        this.setState({ data: res.data });
      });
  }

  render() {
    return (
      <div className="houseTargaryenChar">
        <ul className="houseTargaryenChar-list">
          {
          this.state.data.map((character) => (
            <Link
              className="houseTargaryenChar-items"
              to={`/houseTargaryenChar${character.firstname}`}
              key={character.firstname}
            >
              <img className="houseTargaryenChar-img" src={character.picture} alt="portrait du personnage" />
              <h1 className="houseTargaryenChar-title">{character.firstname} {character.lastname}</h1>
            </Link>
          ))
          }
        </ul>
      </div>
    );
  }
}

// == Export
export default HouseTargaryenChar;
