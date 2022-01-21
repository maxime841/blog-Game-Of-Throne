// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './jacobAnderson.scss';

// == Composant
class JacobAnderson extends React.Component {
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
        this.setState({ firstname: res.data[42].firstname });
        this.setState({ lastname: res.data[42].lastname });
        this.setState({ presentation: res.data[42].presentation });
        this.setState({ old: res.data[42].old });
        this.setState({ birth: res.data[42].birth });
        this.setState({ picture: res.data[42].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="jacobAnderson">
        <div className="jacobAnderson-container">
          <h1 className="jacobAnderson-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="jacobAnderson-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="jacobAnderson-caracteristic">
            <div className="jacobAnderson-informations">
              <p className="jacobAnderson-old">Age: {this.state.old}</p>
              <p className="jacobAnderson-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="jacobAnderson-subTitle">Présentation</h2>
          <p className="jacobAnderson-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default JacobAnderson;
