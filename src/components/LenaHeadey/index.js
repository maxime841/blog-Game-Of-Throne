// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './lenaHeadey.scss';

// == Composant
class LenaHeadey extends React.Component {
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
        this.setState({ firstname: res.data[5].firstname });
        this.setState({ lastname: res.data[5].lastname });
        this.setState({ presentation: res.data[5].presentation });
        this.setState({ old: res.data[5].old });
        this.setState({ birth: res.data[5].birth });
        this.setState({ picture: res.data[5].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="lenaHeadey">
        <div className="lenaHeadey-container">
          <h1 className="lenaHeadey-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="lenaHeadey-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="lenaHeadey-caracteristic">
            <div className="lenaHeadey-informations">
              <p className="lenaHeadey-old">Age: {this.state.old}</p>
              <p className="lenaHeadey-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="lenaHeadey-subTitle">Présentation</h2>
          <p className="lenaHeadey-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default LenaHeadey;
