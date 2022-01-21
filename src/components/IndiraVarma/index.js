// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './indiraVarma.scss';

// == Composant
class IndiraVarma extends React.Component {
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
        this.setState({ firstname: res.data[38].firstname });
        this.setState({ lastname: res.data[38].lastname });
        this.setState({ presentation: res.data[38].presentation });
        this.setState({ old: res.data[38].old });
        this.setState({ birth: res.data[38].birth });
        this.setState({ picture: res.data[38].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="indiraVarma">
        <div className="indiraVarma-container">
          <h1 className="indiraVarma-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="indiraVarma-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="indiraVarma-caracteristic">
            <div className="indiraVarma-informations">
              <p className="indiraVarma-old">Age: {this.state.old}</p>
              <p className="indiraVarma-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="indiraVarma-subTitle">Présentation</h2>
          <p className="indiraVarma-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default IndiraVarma;
