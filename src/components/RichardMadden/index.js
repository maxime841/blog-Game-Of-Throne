
// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './richardMadden.scss';

// == Composant
class RichardMadden extends React.Component {
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
        this.setState({ firstname: res.data[19].firstname });
        this.setState({ lastname: res.data[19].lastname });
        this.setState({ presentation: res.data[19].presentation });
        this.setState({ old: res.data[19].old });
        this.setState({ birth: res.data[19].birth });
        this.setState({ picture: res.data[19].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="richardMadden">
        <div className="richardMadden-container">
          <h1 className="richardMadden-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="richardMadden-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="richardMadden-caracteristic">
            <div className="richardMadden-informations">
              <p className="richardMadden-old">Age: {this.state.old}</p>
              <p className="richardMadden-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="richardMadden-subTitle">Présentation</h2>
          <p className="richardMadden-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default RichardMadden;
