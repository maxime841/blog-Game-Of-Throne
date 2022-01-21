// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './ianGlen.scss';

// == Composant
class IanGlen extends React.Component {
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
        this.setState({ firstname: res.data[11].firstname });
        this.setState({ lastname: res.data[11].lastname });
        this.setState({ presentation: res.data[11].presentation });
        this.setState({ old: res.data[11].old });
        this.setState({ birth: res.data[11].birth });
        this.setState({ picture: res.data[11].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="ianGlen">
        <div className="ianGlen-container">
          <h1 className="ianGlen-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="ianGlen-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="ianGlen-caracteristic">
            <div className="ianGlen-informations">
              <p className="ianGlen-old">Age: {this.state.old}</p>
              <p className="ianGlen-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="ianGlen-subTitle">Présentation</h2>
          <p className="ianGlen-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default IanGlen;
