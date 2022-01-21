
// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './nathalieDormer.scss';

// == Composant
class NathalieDormer extends React.Component {
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
        this.setState({ firstname: res.data[29].firstname });
        this.setState({ lastname: res.data[29].lastname });
        this.setState({ presentation: res.data[29].presentation });
        this.setState({ old: res.data[29].old });
        this.setState({ birth: res.data[29].birth });
        this.setState({ picture: res.data[29].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="nathalieDormer">
        <div className="nathalieDormer-container">
          <h1 className="nathalieDormer-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="nathalieDormer-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="nathalieDormer-caracteristic">
            <div className="nathalieDormer-informations">
              <p className="nathalieDormer-old">Age: {this.state.old}</p>
              <p className="nathalieDormer-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="nathalieDormer-subTitle">Présentation</h2>
          <p className="nathalieDormer-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default NathalieDormer;
