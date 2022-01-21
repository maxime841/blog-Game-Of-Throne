// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './jasonMomoa.scss';

// == Composant
class JasonMomoa extends React.Component {
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
        this.setState({ firstname: res.data[22].firstname });
        this.setState({ lastname: res.data[22].lastname });
        this.setState({ presentation: res.data[22].presentation });
        this.setState({ old: res.data[22].old });
        this.setState({ birth: res.data[22].birth });
        this.setState({ picture: res.data[22].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="jasonMomoa">
        <div className="jasonMomoa-container">
          <h1 className="jasonMomoa-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="jasonMomoa-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="jasonMomoa-caracteristic">
            <div className="jasonMomoa-informations">
              <p className="jasonMomoa-old">Age: {this.state.old}</p>
              <p className="jasonMomoa-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="jasonMomoa-subTitle">Présentation</h2>
          <p className="jasonMomoa-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default JasonMomoa;
