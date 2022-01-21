
// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './michielHuisman.scss';

// == Composant
class MichielHuisman extends React.Component {
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
        this.setState({ firstname: res.data[37].firstname });
        this.setState({ lastname: res.data[37].lastname });
        this.setState({ presentation: res.data[37].presentation });
        this.setState({ old: res.data[37].old });
        this.setState({ birth: res.data[37].birth });
        this.setState({ picture: res.data[37].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="michielHuisman">
        <div className="michielHuisman-container">
          <h1 className="michielHuisman-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="michielHuisman-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="michielHuisman-caracteristic">
            <div className="michielHuisman-informations">
              <p className="michielHuisman-old">Age: {this.state.old}</p>
              <p className="michielHuisman-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="michielHuisman-subTitle">Présentation</h2>
          <p className="michielHuisman-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default MichielHuisman;
