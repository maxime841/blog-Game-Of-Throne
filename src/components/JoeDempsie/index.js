// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './joeDempsie.scss';

// == Composant
class JoeDempsie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: [],
      lastname: [],
      presentation: [],
      old: [],
      birth: [],
      picture: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5050/actors')
      .then((res) => {
        this.setState({ firstname: res.data[33].firstname });
        this.setState({ lastname: res.data[33].lastname });
        this.setState({ presentation: res.data[33].presentation });
        this.setState({ old: res.data[33].old });
        this.setState({ birth: res.data[33].birth });
        this.setState({ picture: res.data[33].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="joeDempsie">
        <div className="joeDempsie-container">
          <h1 className="joeDempsie-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="joeDempsie-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="joeDempsie-caracteristic">
            <div className="joeDempsie-informations">
              <p className="joeDempsie-old">Age: {this.state.old}</p>
              <p className="joeDempsie-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="joeDempsie-subTitle">Présentation</h2>
          <p className="joeDempsie-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default JoeDempsie;
