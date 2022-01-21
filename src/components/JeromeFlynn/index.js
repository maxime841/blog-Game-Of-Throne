// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './jeromeFlynn.scss';

// == Composant
class JeromeFlynn extends React.Component {
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
        this.setState({ firstname: res.data[26].firstname });
        this.setState({ lastname: res.data[26].lastname });
        this.setState({ presentation: res.data[26].presentation });
        this.setState({ old: res.data[26].old });
        this.setState({ birth: res.data[26].birth });
        this.setState({ picture: res.data[26].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="jeromeFlynn">
        <div className="jeromeFlynn-container">
          <h1 className="jeromeFlynn-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="jeromeFlynn-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="jeromeFlynn-caracteristic">
            <div className="jeromeFlynn-informations">
              <p className="jeromeFlynn-old">Age: {this.state.old}</p>
              <p className="jeromeFlynn-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="jeromeFlynn-subTitle">Présentation</h2>
          <p className="jeromeFlynn-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default JeromeFlynn;
