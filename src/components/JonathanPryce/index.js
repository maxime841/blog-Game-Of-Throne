// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './jonathanPryce.scss';

// == Composant
class JonathanPryce extends React.Component {
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
        this.setState({ firstname: res.data[41].firstname });
        this.setState({ lastname: res.data[41].lastname });
        this.setState({ presentation: res.data[41].presentation });
        this.setState({ old: res.data[41].old });
        this.setState({ birth: res.data[41].birth });
        this.setState({ picture: res.data[41].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="jonathanPryce">
        <div className="jonathanPryce-container">
          <h1 className="jonathanPryce-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="jonathanPryce-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="jonathanPryce-caracteristic">
            <div className="jonathanPryce-informations">
              <p className="jonathanPryce-old">Age: {this.state.old}</p>
              <p className="jonathanPryce-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="jonathanPryce-subTitle">Présentation</h2>
          <p className="jonathanPryce-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default JonathanPryce;
