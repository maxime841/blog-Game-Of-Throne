
// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './maisieWilliams.scss';

// == Composant
class MaisieWilliams extends React.Component {
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
        this.setState({ firstname: res.data[3].firstname });
        this.setState({ lastname: res.data[3].lastname });
        this.setState({ presentation: res.data[3].presentation });
        this.setState({ old: res.data[3].old });
        this.setState({ birth: res.data[3].birth });
        this.setState({ picture: res.data[3].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="maisieWilliams">
        <div className="maisieWilliams-container">
          <h1 className="maisieWilliams-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="maisieWilliams-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="maisieWilliams-caracteristic">
            <div className="maisieWilliams-informations">
              <p className="maisieWilliams-old">Age: {this.state.old}</p>
              <p className="maisieWilliams-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="maisieWilliams-subTitle">Présentation</h2>
          <p className="maisieWilliams-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default MaisieWilliams;
