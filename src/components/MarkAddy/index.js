
// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './markAddy.scss';

// == Composant
class MarkAddy extends React.Component {
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
        this.setState({ firstname: res.data[16].firstname });
        this.setState({ lastname: res.data[16].lastname });
        this.setState({ presentation: res.data[16].presentation });
        this.setState({ old: res.data[16].old });
        this.setState({ birth: res.data[16].birth });
        this.setState({ picture: res.data[16].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="markAddy">
        <div className="markAddy-container">
          <h1 className="markAddy-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="markAddy-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="markAddy-caracteristic">
            <div className="markAddy-informations">
              <p className="markAddy-old">Age: {this.state.old}</p>
              <p className="markAddy-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="markAddy-subTitle">Présentation</h2>
          <p className="markAddy-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default MarkAddy;
