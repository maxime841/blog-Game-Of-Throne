// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './sophieTurner.scss';

// == Composant
class SophieTurner extends React.Component {
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
        this.setState({ firstname: res.data[2].firstname });
        this.setState({ lastname: res.data[2].lastname });
        this.setState({ presentation: res.data[2].presentation });
        this.setState({ old: res.data[2].old });
        this.setState({ birth: res.data[2].birth });
        this.setState({ picture: res.data[2].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="sophieTurner">
        <div className="sophieTurner-container">
          <h1 className="sophieTurner-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="sophieTurner-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="sophieTurner-caracteristic">
            <div className="sophieTurner-informations">
              <p className="sophieTurner-old">Age: {this.state.old}</p>
              <p className="sophieTurner-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="sophieTurner-subTitle">Présentation</h2>
          <p className="sophieTurner-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default SophieTurner;
