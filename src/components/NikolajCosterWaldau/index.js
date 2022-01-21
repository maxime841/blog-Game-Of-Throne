
// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './nikolajCosterWaldau.scss';

// == Composant
class NikolajCosterWaldau extends React.Component {
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
        this.setState({ firstname: res.data[6].firstname });
        this.setState({ lastname: res.data[6].lastname });
        this.setState({ presentation: res.data[6].presentation });
        this.setState({ old: res.data[6].old });
        this.setState({ birth: res.data[6].birth });
        this.setState({ picture: res.data[6].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="nikolajCosterWaldau">
        <div className="nikolajCosterWaldau-container">
          <h1 className="nikolajCosterWaldau-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="nikolajCosterWaldau-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="nikolajCosterWaldau-caracteristic">
            <div className="nikolajCosterWaldau-informations">
              <p className="nikolajCosterWaldau-old">Age: {this.state.old}</p>
              <p className="nikolajCosterWaldau-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="nikolajCosterWaldau-subTitle">Présentation</h2>
          <p className="nikolajCosterWaldau-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default NikolajCosterWaldau;
