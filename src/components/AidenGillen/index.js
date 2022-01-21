// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './aidenGillen.scss';

// == Composant
class AidenGillen extends React.Component {
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
        this.setState({ firstname: res.data[13].firstname });
        this.setState({ lastname: res.data[13].lastname });
        this.setState({ presentation: res.data[13].presentation });
        this.setState({ old: res.data[13].old });
        this.setState({ birth: res.data[13].birth });
        this.setState({ picture: res.data[13].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="aidenGillen">
        <div className="aidenGillen-container">
          <h1 className="aidenGillen-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="aidenGillen-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="aidenGillen-caracteristic">
            <div className="aidenGillen-informations">
              <p className="aidenGillen-old">Age: {this.state.old}</p>
              <p className="aidenGillen-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="aidenGillen-subTitle">Présentation</h2>
          <p className="aidenGillen-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default AidenGillen;
