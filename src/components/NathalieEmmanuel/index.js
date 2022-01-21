
// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './nathalieEmmanuel.scss';

// == Composant
class NathalieEmmanuel extends React.Component {
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
        this.setState({ firstname: res.data[10].firstname });
        this.setState({ lastname: res.data[10].lastname });
        this.setState({ presentation: res.data[10].presentation });
        this.setState({ old: res.data[10].old });
        this.setState({ birth: res.data[10].birth });
        this.setState({ picture: res.data[10].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="nathalieEmmanuel">
        <div className="nathalieEmmanuel-container">
          <h1 className="nathalieEmmanuel-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="nathalieEmmanuel-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="nathalieEmmanuel-caracteristic">
            <div className="nathalieEmmanuel-informations">
              <p className="nathalieEmmanuel-old">Age: {this.state.old}</p>
              <p className="nathalieEmmanuel-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="nathalieEmmanuel-subTitle">Présentation</h2>
          <p className="nathalieEmmanuel-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default NathalieEmmanuel;
