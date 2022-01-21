// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './deanCharlesChapman.scss';

// == Composant
class DeanCharlesChapman extends React.Component {
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
        this.setState({ firstname: res.data[39].firstname });
        this.setState({ lastname: res.data[39].lastname });
        this.setState({ presentation: res.data[39].presentation });
        this.setState({ old: res.data[39].old });
        this.setState({ birth: res.data[39].birth });
        this.setState({ picture: res.data[39].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="deanCharlesChapman">
        <div className="deanCharlesChapman-container">
          <h1 className="deanCharlesChapman-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="deanCharlesChapman-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="deanCharlesChapman-caracteristic">
            <div className="deanCharlesChapman-informations">
              <p className="deanCharlesChapman-old">Age: {this.state.old}</p>
              <p className="deanCharlesChapman-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="deanCharlesChapman-subTitle">Présentation</h2>
          <p className="deanCharlesChapman-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default DeanCharlesChapman;
