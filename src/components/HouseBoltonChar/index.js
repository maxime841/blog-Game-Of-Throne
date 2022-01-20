// == Import npm
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// == Import
import './houseBoltonChar.scss';

// == Composant
class HouseBoltonChar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5050/charactersByFamilly/${'Bolton'}`)
      .then((res) => {
        console.log('response', res.data);
        this.setState({ data: res.data });
      });
  }

  render() {
    return (
      <div className="houseBoltonChar">
        <ul className="houseBoltonChar-list">
          {
          this.state.data.map((character) => (
            <Link
              className="houseBoltonChar-items"
              to={`/houseBoltonChar${character.firstname}`}
              key={character.firstname}
            >
              <img className="houseBoltonChar-img" src={character.picture} alt="portrait du personnage" />
              <h1 className="houseBoltonChar-title">{character.firstname} {character.lastname}</h1>
            </Link>
          ))
          }
        </ul>
      </div>
    );
  }
}

// == Export
export default HouseBoltonChar;
