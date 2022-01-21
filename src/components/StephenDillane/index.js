
// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './stephenDillane.scss';

// == Composant
class StephenDillane extends React.Component {
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
        this.setState({ firstname: res.data[24].firstname });
        this.setState({ lastname: res.data[24].lastname });
        this.setState({ presentation: res.data[24].presentation });
        this.setState({ old: res.data[24].old });
        this.setState({ birth: res.data[24].birth });
        this.setState({ picture: res.data[24].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="stephenDillane">
        <div className="stephenDillane-container">
          <h1 className="stephenDillane-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="stephenDillane-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="stephenDillane-caracteristic">
            <div className="stephenDillane-informations">
              <p className="stephenDillane-old">Age: {this.state.old}</p>
              <p className="stephenDillane-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="stephenDillane-subTitle">Présentation</h2>
          <p className="stephenDillane-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default StephenDillane;
