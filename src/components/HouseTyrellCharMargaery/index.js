// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseTyrellCharMargaery.scss';

// == Composant
class HouseTyrellCharMargaery extends React.Component {
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
    axios.get('http://localhost:5050/charactersByFamilly/Tyrell')
      .then((res) => {
        this.setState({ firstname: res.data[2].firstname });
        this.setState({ lastname: res.data[2].lastname });
        this.setState({ citation: res.data[2].citation });
        this.setState({ title: res.data[2].title });
        this.setState({ alias: res.data[2].alias });
        this.setState({ presentation: res.data[2].presentation });
        this.setState({ statut: res.data[2].statut });
        this.setState({ old: res.data[2].old });
        this.setState({ deaddate: res.data[2].deaddate });
        this.setState({ birthdate: res.data[2].birthdate });
        this.setState({ origin: res.data[2].origin });
        this.setState({ allegency: res.data[2].allegency });
        this.setState({ culture: res.data[2].culture });
        this.setState({ relation: res.data[2].relation });
        this.setState({ parents: res.data[2].parents });
        this.setState({ children: res.data[2].children });
        this.setState({ fratrie: res.data[2].fratrie });
        this.setState({ familly: res.data[2].familly });
        this.setState({ context: res.data[2].context });
        this.setState({ picture: res.data[2].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="houseTyrellCharMargaery">
        <div className="houseTyrellCharMargaery-container">
          <h1 className="houseTyrellCharMargaery-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseTyrellCharMargaery-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseTyrellCharMargaery-caracteristic">
            <div className="houseTyrellCharMargaery-owner">
              <p className="houseTyrellCharMargaery-citation">Citation: {this.state.citation}</p>
              <p className="houseTyrellCharMargaery-title">Titre: {this.state.title}</p>
              <p className="houseTyrellCharMargaery-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseTyrellCharMargaery-informations">
              <p className="houseTyrellCharMargaery-status">Status: {this.state.statut}</p>
              <p className="houseTyrellCharMargaery-old">Age: {this.state.old}</p>
              <p className="houseTyrellCharMargaery-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseTyrellCharMargaery-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseTyrellCharMargaery-loyalty">
              <p className="houseTyrellCharMargaery-origin">Origine: {this.state.origin}</p>
              <p className="houseTyrellCharMargaery-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseTyrellCharMargaery-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseTyrellCharMargaery-famillyInfo">
              <p className="houseTyrellCharMargaery-relation">Relation: {this.state.relation}</p>
              <p className="houseTyrellCharMargaery-parents">Parents: {this.state.parents}</p>
              <p className="houseTyrellCharMargaery-children">Enfants: {this.state.children}</p>
              <p className="houseTyrellCharMargaery-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseTyrellCharMargaery-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseTyrellCharMargaery-subTitle">Présentation</h2>
          <p className="houseTyrellCharMargaery-content">{this.state.presentation}</p>
          <h2 className="houseTyrellCharMargaery-subTitle">Context</h2>
          <p className="houseTyrellCharMargaery-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseTyrellCharMargaery;
