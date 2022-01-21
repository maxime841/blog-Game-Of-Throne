// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './emiliaClarke.scss';

// == Composant
class EmiliaClarke extends React.Component {
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
        this.setState({ firstname: res.data[0].firstname });
        this.setState({ lastname: res.data[0].lastname });
        this.setState({ presentation: res.data[0].presentation });
        this.setState({ old: res.data[0].old });
        this.setState({ birth: res.data[0].birth });
        this.setState({ picture: res.data[0].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="emiliaClarke">
        <div className="emiliaClarke-container">
          <h1 className="emiliaClarke-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="emiliaClarke-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="emiliaClarke-caracteristic">
            <div className="emiliaClarke-informations">
              <p className="emiliaClarke-old">Age: {this.state.old}</p>
              <p className="emiliaClarke-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="emiliaClarke-subTitle">Présentation</h2>
          <p className="emiliaClarke-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default EmiliaClarke;
