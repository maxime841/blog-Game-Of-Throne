// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseStarkCharSansa.scss';

// == Composant
class HouseStarkCharSansa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: [],
      lastname: [],
      citation: [],
      title: [],
      alias: [],
      presentation: [],
      statut: [],
      old: [],
      deaddate: [],
      birthdate: [],
      origin: [],
      allegency: [],
      culture: [],
      relation: [],
      parents: [],
      children: [],
      fratrie: [],
      familly: [],
      context: [],
      picture: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5050/charactersByFamilly/Stark')
      .then((res) => {
        this.setState({ firstname: res.data[9].firstname });
        this.setState({ lastname: res.data[9].lastname });
        this.setState({ citation: res.data[9].citation });
        this.setState({ title: res.data[9].title });
        this.setState({ alias: res.data[9].alias });
        this.setState({ presentation: res.data[9].presentation });
        this.setState({ statut: res.data[9].statut });
        this.setState({ old: res.data[9].old });
        this.setState({ deaddate: res.data[9].deaddate });
        this.setState({ birthdate: res.data[9].birthdate });
        this.setState({ origin: res.data[9].origin });
        this.setState({ allegency: res.data[9].allegency });
        this.setState({ culture: res.data[9].culture });
        this.setState({ relation: res.data[9].relation });
        this.setState({ parents: res.data[9].parents });
        this.setState({ children: res.data[9].children });
        this.setState({ fratrie: res.data[9].fratrie });
        this.setState({ familly: res.data[9].familly });
        this.setState({ context: res.data[9].context });
        this.setState({ picture: res.data[9].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="houseStarkCharSansa">
        <div className="houseStarkCharSansa-container">
          <h1 className="houseStarkCharSansa-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseStarkCharSansa-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseStarkCharSansa-caracteristic">
            <div className="houseStarkCharSansa-owner">
              <p className="houseStarkCharSansa-citation">Citation: {this.state.citation}</p>
              <p className="houseStarkCharSansa-title">Titre: {this.state.title}</p>
              <p className="houseStarkCharSansa-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseStarkCharSansa-informations">
              <p className="houseStarkCharSansa-status">Status: {this.state.statut}</p>
              <p className="houseStarkCharSansa-old">Age: {this.state.old}</p>
              <p className="houseStarkCharSansa-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseStarkCharSansa-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseStarkCharSansa-loyalty">
              <p className="houseStarkCharSansa-origin">Origine: {this.state.origin}</p>
              <p className="houseStarkCharSansa-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseStarkCharSansa-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseStarkCharSansa-famillyInfo">
              <p className="houseStarkCharSansa-relation">Relation: {this.state.relation}</p>
              <p className="houseStarkCharSansa-parents">Parents: {this.state.parents}</p>
              <p className="houseStarkCharSansa-children">Enfants: {this.state.children}</p>
              <p className="houseStarkCharSansa-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseStarkCharSansa-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseStarkCharSansa-subTitle">Présentation</h2>
          <p className="houseStarkCharSansa-content">{this.state.presentation}</p>
          <h2 className="houseStarkCharSansa-subTitle">Context</h2>
          <p className="houseStarkCharSansa-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseStarkCharSansa;
