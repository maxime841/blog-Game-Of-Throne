// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './alfieAllen.scss';

// == Composant
class AlfieAllen extends React.Component {
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
        this.setState({ firstname: res.data[9].firstname });
        this.setState({ lastname: res.data[9].lastname });
        this.setState({ presentation: res.data[9].presentation });
        this.setState({ old: res.data[9].old });
        this.setState({ birth: res.data[9].birth });
        this.setState({ picture: res.data[9].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="alfieAllen">
        <div className="alfieAllen-container">
          <h1 className="alfieAllen-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="alfieAllen-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="alfieAllen-caracteristic">
            <div className="alfieAllen-informations">
              <p className="alfieAllen-old">Age: {this.state.old}</p>
              <p className="alfieAllen-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="alfieAllen-subTitle">Présentation</h2>
          <p className="alfieAllen-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default AlfieAllen;
