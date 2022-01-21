// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './charlesDance.scss';

// == Composant
class CharlesDance extends React.Component {
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
        this.setState({ firstname: res.data[30].firstname });
        this.setState({ lastname: res.data[30].lastname });
        this.setState({ presentation: res.data[30].presentation });
        this.setState({ old: res.data[30].old });
        this.setState({ birth: res.data[30].birth });
        this.setState({ picture: res.data[30].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="charlesDance">
        <div className="charlesDance-container">
          <h1 className="charlesDance-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="charlesDance-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="charlesDance-caracteristic">
            <div className="charlesDance-informations">
              <p className="charlesDance-old">Age: {this.state.old}</p>
              <p className="charlesDance-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="charlesDance-subTitle">Présentation</h2>
          <p className="charlesDance-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default CharlesDance;
