
// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './sibelKekilli.scss';

// == Composant
class SibelKekilli extends React.Component {
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
        this.setState({ firstname: res.data[28].firstname });
        this.setState({ lastname: res.data[28].lastname });
        this.setState({ presentation: res.data[28].presentation });
        this.setState({ old: res.data[28].old });
        this.setState({ birth: res.data[28].birth });
        this.setState({ picture: res.data[28].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="sibelKekilli">
        <div className="sibelKekilli-container">
          <h1 className="sibelKekilli-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="sibelKekilli-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="sibelKekilli-caracteristic">
            <div className="sibelKekilli-informations">
              <p className="sibelKekilli-old">Age: {this.state.old}</p>
              <p className="sibelKekilli-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="sibelKekilli-subTitle">Présentation</h2>
          <p className="sibelKekilli-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default SibelKekilli;
