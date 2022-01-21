// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './gwendolyneChristie.scss';

// == Composant
class GwendolyneChristie extends React.Component {
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
        this.setState({ firstname: res.data[7].firstname });
        this.setState({ lastname: res.data[7].lastname });
        this.setState({ presentation: res.data[7].presentation });
        this.setState({ old: res.data[7].old });
        this.setState({ birth: res.data[7].birth });
        this.setState({ picture: res.data[7].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="gwendolyneChristie">
        <div className="gwendolyneChristie-container">
          <h1 className="gwendolyneChristie-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="gwendolyneChristie-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="gwendolyneChristie-caracteristic">
            <div className="gwendolyneChristie-informations">
              <p className="gwendolyneChristie-old">Age: {this.state.old}</p>
              <p className="gwendolyneChristie-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="gwendolyneChristie-subTitle">Présentation</h2>
          <p className="gwendolyneChristie-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default GwendolyneChristie;
