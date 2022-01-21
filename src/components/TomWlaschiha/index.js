
// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './tomWlaschiha.scss';

// == Composant
class TomWlaschiha extends React.Component {
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
        this.setState({ firstname: res.data[40].firstname });
        this.setState({ lastname: res.data[40].lastname });
        this.setState({ presentation: res.data[40].presentation });
        this.setState({ old: res.data[40].old });
        this.setState({ birth: res.data[40].birth });
        this.setState({ picture: res.data[40].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="tomWlaschiha">
        <div className="tomWlaschiha-container">
          <h1 className="tomWlaschiha-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="tomWlaschiha-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="tomWlaschiha-caracteristic">
            <div className="tomWlaschiha-informations">
              <p className="tomWlaschiha-old">Age: {this.state.old}</p>
              <p className="tomWlaschiha-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="tomWlaschiha-subTitle">Présentation</h2>
          <p className="tomWlaschiha-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default TomWlaschiha;
