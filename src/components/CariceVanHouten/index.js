// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './cariceVanHouten.scss';

// == Composant
class CariceVanHouten extends React.Component {
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
        this.setState({ firstname: res.data[12].firstname });
        this.setState({ lastname: res.data[12].lastname });
        this.setState({ presentation: res.data[12].presentation });
        this.setState({ old: res.data[12].old });
        this.setState({ birth: res.data[12].birth });
        this.setState({ picture: res.data[12].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="cariceVanHouten">
        <div className="cariceVanHouten-container">
          <h1 className="cariceVanHouten-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="cariceVanHouten-img" src={this.state.picture} alt="Portrait de l'acteur" />
          <div className="cariceVanHouten-caracteristic">
            <div className="cariceVanHouten-informations">
              <p className="cariceVanHouten-old">Age: {this.state.old}</p>
              <p className="cariceVanHouten-birthdate">Naissance: {this.state.birth}</p>
            </div>
          </div>
          <h2 className="cariceVanHouten-subTitle">Présentation</h2>
          <p className="cariceVanHouten-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default CariceVanHouten;
