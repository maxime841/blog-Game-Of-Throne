// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './kitHarrington.scss';

// == Composant
class KitHarrington extends React.Component {
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
        this.setState({ firstname: res.data[1].firstname });
        this.setState({ lastname: res.data[1].lastname });
        this.setState({ presentation: res.data[1].presentation });
        this.setState({ old: res.data[1].old });
        this.setState({ birth: res.data[1].birth });
        this.setState({ picture: res.data[1].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="kitHarrington">
        <div className="kitHarrington-container">
          <h1 className="kitHarrington-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="kitHarrington-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="kitHarrington-caracteristic">
            <div className="kitHarrington-informations">
              <p className="kitHarrington-old">Age: {this.state.old}</p>
              <p className="kitHarrington-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="kitHarrington-subTitle">Présentation</h2>
          <p className="kitHarrington-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default KitHarrington;
