
// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './roryMcCann.scss';

// == Composant
class RoryMcCann extends React.Component {
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
        this.setState({ firstname: res.data[21].firstname });
        this.setState({ lastname: res.data[21].lastname });
        this.setState({ presentation: res.data[21].presentation });
        this.setState({ old: res.data[21].old });
        this.setState({ birth: res.data[21].birth });
        this.setState({ picture: res.data[21].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="roryMcCann">
        <div className="roryMcCann-container">
          <h1 className="roryMcCann-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="roryMcCann-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="roryMcCann-caracteristic">
            <div className="roryMcCann-informations">
              <p className="roryMcCann-old">Age: {this.state.old}</p>
              <p className="roryMcCann-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="roryMcCann-subTitle">Présentation</h2>
          <p className="roryMcCann-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default RoryMcCann;
