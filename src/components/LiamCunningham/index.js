// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './liamCunningham.scss';

// == Composant
class LiamCunningham extends React.Component {
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
        this.setState({ firstname: res.data[14].firstname });
        this.setState({ lastname: res.data[14].lastname });
        this.setState({ presentation: res.data[14].presentation });
        this.setState({ old: res.data[14].old });
        this.setState({ birth: res.data[14].birth });
        this.setState({ picture: res.data[14].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="liamCunningham">
        <div className="liamCunningham-container">
          <h1 className="liamCunningham-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="liamCunningham-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="liamCunningham-caracteristic">
            <div className="liamCunningham-informations">
              <p className="liamCunningham-old">Age: {this.state.old}</p>
              <p className="liamCunningham-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="liamCunningham-subTitle">Présentation</h2>
          <p className="liamCunningham-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default LiamCunningham;
