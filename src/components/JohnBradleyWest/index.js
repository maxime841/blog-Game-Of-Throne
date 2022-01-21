// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './johnBradleyWest.scss';

// == Composant
class JohnBradleyWest extends React.Component {
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
        this.setState({ firstname: res.data[23].firstname });
        this.setState({ lastname: res.data[23].lastname });
        this.setState({ presentation: res.data[23].presentation });
        this.setState({ old: res.data[23].old });
        this.setState({ birth: res.data[23].birth });
        this.setState({ picture: res.data[23].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="johnBradleyWest">
        <div className="johnBradleyWest-container">
          <h1 className="johnBradleyWest-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="johnBradleyWest-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="johnBradleyWest-caracteristic">
            <div className="johnBradleyWest-informations">
              <p className="johnBradleyWest-old">Age: {this.state.old}</p>
              <p className="johnBradleyWest-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="johnBradleyWest-subTitle">Présentation</h2>
          <p className="johnBradleyWest-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default JohnBradleyWest;
