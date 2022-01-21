// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './conlethHill.scss';

// == Composant
class ConlethHill extends React.Component {
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
        this.setState({ firstname: res.data[27].firstname });
        this.setState({ lastname: res.data[27].lastname });
        this.setState({ presentation: res.data[27].presentation });
        this.setState({ old: res.data[27].old });
        this.setState({ birth: res.data[27].birth });
        this.setState({ picture: res.data[27].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="conlethHill">
        <div className="conlethHill-container">
          <h1 className="conlethHill-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="conlethHill-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="conlethHill-caracteristic">
            <div className="conlethHill-informations">
              <p className="conlethHill-old">Age: {this.state.old}</p>
              <p className="conlethHill-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="conlethHill-subTitle">Présentation</h2>
          <p className="conlethHill-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default ConlethHill;
