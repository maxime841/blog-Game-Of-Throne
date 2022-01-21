// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './jackGleeson.scss';

// == Composant
class JackGleeson extends React.Component {
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
        this.setState({ firstname: res.data[20].firstname });
        this.setState({ lastname: res.data[20].lastname });
        this.setState({ presentation: res.data[20].presentation });
        this.setState({ old: res.data[20].old });
        this.setState({ birth: res.data[20].birth });
        this.setState({ picture: res.data[20].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="jackGleeson">
        <div className="jackGleeson-container">
          <h1 className="jackGleeson-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="jackGleeson-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="jackGleeson-caracteristic">
            <div className="jackGleeson-informations">
              <p className="jackGleeson-old">Age: {this.state.old}</p>
              <p className="jackGleeson-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="jackGleeson-subTitle">Présentation</h2>
          <p className="jackGleeson-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default JackGleeson;
