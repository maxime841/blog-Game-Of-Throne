// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './iwanRheon.scss';

// == Composant
class IwanRheon extends React.Component {
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
        this.setState({ firstname: res.data[35].firstname });
        this.setState({ lastname: res.data[35].lastname });
        this.setState({ presentation: res.data[35].presentation });
        this.setState({ old: res.data[35].old });
        this.setState({ birth: res.data[35].birth });
        this.setState({ picture: res.data[35].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="iwanRheon">
        <div className="iwanRheon-container">
          <h1 className="iwanRheon-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="iwanRheon-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="iwanRheon-caracteristic">
            <div className="iwanRheon-informations">
              <p className="iwanRheon-old">Age: {this.state.old}</p>
              <p className="iwanRheon-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="iwanRheon-subTitle">Présentation</h2>
          <p className="iwanRheon-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default IwanRheon;
