
// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './roseLeslie.scss';

// == Composant
class RoseLeslie extends React.Component {
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
        this.setState({ firstname: res.data[32].firstname });
        this.setState({ lastname: res.data[32].lastname });
        this.setState({ presentation: res.data[32].presentation });
        this.setState({ old: res.data[32].old });
        this.setState({ birth: res.data[32].birth });
        this.setState({ picture: res.data[32].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="roseLeslie">
        <div className="roseLeslie-container">
          <h1 className="roseLeslie-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="roseLeslie-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="roseLeslie-caracteristic">
            <div className="roseLeslie-informations">
              <p className="roseLeslie-old">Age: {this.state.old}</p>
              <p className="roseLeslie-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="roseLeslie-subTitle">Présentation</h2>
          <p className="roseLeslie-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default RoseLeslie;
