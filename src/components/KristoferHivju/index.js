// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './kristoferHivju.scss';

// == Composant
class KristoferHivju extends React.Component {
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
        this.setState({ firstname: res.data[34].firstname });
        this.setState({ lastname: res.data[34].lastname });
        this.setState({ presentation: res.data[34].presentation });
        this.setState({ old: res.data[34].old });
        this.setState({ birth: res.data[34].birth });
        this.setState({ picture: res.data[34].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="kristoferHivju">
        <div className="kristoferHivju-container">
          <h1 className="kristoferHivju-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="kristoferHivju-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="kristoferHivju-caracteristic">
            <div className="kristoferHivju-informations">
              <p className="kristoferHivju-old">Age: {this.state.old}</p>
              <p className="kristoferHivju-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="kristoferHivju-subTitle">Présentation</h2>
          <p className="kristoferHivju-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default KristoferHivju;
