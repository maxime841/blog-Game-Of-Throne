// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './hannahMurray.scss';

// == Composant
class HannahMurray extends React.Component {
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
        this.setState({ firstname: res.data[36].firstname });
        this.setState({ lastname: res.data[36].lastname });
        this.setState({ presentation: res.data[36].presentation });
        this.setState({ old: res.data[36].old });
        this.setState({ birth: res.data[36].birth });
        this.setState({ picture: res.data[36].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="hannahMurray">
        <div className="hannahMurray-container">
          <h1 className="hannahMurray-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="hannahMurray-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="hannahMurray-caracteristic">
            <div className="hannahMurray-informations">
              <p className="hannahMurray-old">Age: {this.state.old}</p>
              <p className="hannahMurray-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="hannahMurray-subTitle">Présentation</h2>
          <p className="hannahMurray-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HannahMurray;
