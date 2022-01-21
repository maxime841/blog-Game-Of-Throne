
// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './seanBean.scss';

// == Composant
class SeanBean extends React.Component {
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
        this.setState({ firstname: res.data[15].firstname });
        this.setState({ lastname: res.data[15].lastname });
        this.setState({ presentation: res.data[15].presentation });
        this.setState({ old: res.data[15].old });
        this.setState({ birth: res.data[15].birth });
        this.setState({ picture: res.data[15].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="seanBean">
        <div className="seanBean-container">
          <h1 className="seanBean-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="seanBean-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="seanBean-caracteristic">
            <div className="seanBean-informations">
              <p className="seanBean-old">Age: {this.state.old}</p>
              <p className="seanBean-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="seanBean-subTitle">Présentation</h2>
          <p className="seanBean-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default SeanBean;
