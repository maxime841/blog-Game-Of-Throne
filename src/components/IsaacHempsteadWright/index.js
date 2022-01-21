// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './isaacHempsteadWright.scss';

// == Composant
class IsaacHempsteadWright extends React.Component {
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
        this.setState({ firstname: res.data[8].firstname });
        this.setState({ lastname: res.data[8].lastname });
        this.setState({ presentation: res.data[8].presentation });
        this.setState({ old: res.data[8].old });
        this.setState({ birth: res.data[8].birth });
        this.setState({ picture: res.data[8].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="isaacHempsteadWright">
        <div className="isaacHempsteadWright-container">
          <h1 className="isaacHempsteadWright-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="isaacHempsteadWright-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="isaacHempsteadWright-caracteristic">
            <div className="isaacHempsteadWright-informations">
              <p className="isaacHempsteadWright-old">Age: {this.state.old}</p>
              <p className="isaacHempsteadWright-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="isaacHempsteadWright-subTitle">Présentation</h2>
          <p className="isaacHempsteadWright-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default IsaacHempsteadWright;
