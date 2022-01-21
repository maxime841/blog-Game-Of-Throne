
// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './oonaChaplin.scss';

// == Composant
class OonaChaplin extends React.Component {
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
        this.setState({ firstname: res.data[31].firstname });
        this.setState({ lastname: res.data[31].lastname });
        this.setState({ presentation: res.data[31].presentation });
        this.setState({ old: res.data[31].old });
        this.setState({ birth: res.data[31].birth });
        this.setState({ picture: res.data[31].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="oonaChaplin">
        <div className="oonaChaplin-container">
          <h1 className="oonaChaplin-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="oonaChaplin-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="oonaChaplin-caracteristic">
            <div className="oonaChaplin-informations">
              <p className="oonaChaplin-old">Age: {this.state.old}</p>
              <p className="oonaChaplin-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="oonaChaplin-subTitle">Présentation</h2>
          <p className="oonaChaplin-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default OonaChaplin;
