// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './jamesCosmo.scss';

// == Composant
class JamesCosmo extends React.Component {
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
        this.setState({ firstname: res.data[25].firstname });
        this.setState({ lastname: res.data[25].lastname });
        this.setState({ presentation: res.data[25].presentation });
        this.setState({ old: res.data[25].old });
        this.setState({ birth: res.data[25].birth });
        this.setState({ picture: res.data[25].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="jamesCosmo">
        <div className="jamesCosmo-container">
          <h1 className="jamesCosmo-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="jamesCosmo-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="jamesCosmo-caracteristic">
            <div className="jamesCosmo-informations">
              <p className="jamesCosmo-old">Age: {this.state.old}</p>
              <p className="jamesCosmo-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="jamesCosmo-subTitle">Présentation</h2>
          <p className="jamesCosmo-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default JamesCosmo;
