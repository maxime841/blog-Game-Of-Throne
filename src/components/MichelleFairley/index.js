
// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './michelleFairley.scss';

// == Composant
class MichelleFairley extends React.Component {
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
        this.setState({ firstname: res.data[17].firstname });
        this.setState({ lastname: res.data[17].lastname });
        this.setState({ presentation: res.data[17].presentation });
        this.setState({ old: res.data[17].old });
        this.setState({ birth: res.data[17].birth });
        this.setState({ picture: res.data[17].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="michelleFairley">
        <div className="michelleFairley-container">
          <h1 className="michelleFairley-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="michelleFairley-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="michelleFairley-caracteristic">
            <div className="michelleFairley-informations">
              <p className="michelleFairley-old">Age: {this.state.old}</p>
              <p className="michelleFairley-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="michelleFairley-subTitle">Présentation</h2>
          <p className="michelleFairley-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default MichelleFairley;
