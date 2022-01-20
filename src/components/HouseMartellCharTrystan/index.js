// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseMartellCharTrystan.scss';

// == Composant
class HouseMartellCharTrystan extends React.Component {
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
    axios.get('http://localhost:5050/charactersByFamilly/Martell')
      .then((res) => {
        this.setState({ firstname: res.data[3].firstname });
        this.setState({ lastname: res.data[3].lastname });
        this.setState({ citation: res.data[3].citation });
        this.setState({ title: res.data[3].title });
        this.setState({ alias: res.data[3].alias });
        this.setState({ presentation: res.data[3].presentation });
        this.setState({ statut: res.data[3].statut });
        this.setState({ old: res.data[3].old });
        this.setState({ deaddate: res.data[3].deaddate });
        this.setState({ birthdate: res.data[3].birthdate });
        this.setState({ origin: res.data[3].origin });
        this.setState({ allegency: res.data[3].allegency });
        this.setState({ culture: res.data[3].culture });
        this.setState({ relation: res.data[3].relation });
        this.setState({ parents: res.data[3].parents });
        this.setState({ children: res.data[3].children });
        this.setState({ fratrie: res.data[3].fratrie });
        this.setState({ familly: res.data[3].familly });
        this.setState({ context: res.data[3].context });
        this.setState({ picture: res.data[3].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="houseMartellCharTrystan">
        <div className="houseMartellCharTrystan-container">
          <h1 className="houseMartellCharTrystan-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseMartellCharTrystan-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseMartellCharTrystan-caracteristic">
            <div className="houseMartellCharTrystan-owner">
              <p className="houseMartellCharTrystan-citation">Citation: {this.state.citation}</p>
              <p className="houseMartellCharTrystan-title">Titre: {this.state.title}</p>
              <p className="houseMartellCharTrystan-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseMartellCharTrystan-informations">
              <p className="houseMartellCharTrystan-status">Status: {this.state.statut}</p>
              <p className="houseMartellCharTrystan-old">Age: {this.state.old}</p>
              <p className="houseMartellCharTrystan-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseMartellCharTrystan-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseMartellCharTrystan-loyalty">
              <p className="houseMartellCharTrystan-origin">Origine: {this.state.origin}</p>
              <p className="houseMartellCharTrystan-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseMartellCharTrystan-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseMartellCharTrystan-famillyInfo">
              <p className="houseMartellCharTrystan-relation">Relation: {this.state.relation}</p>
              <p className="houseMartellCharTrystan-parents">Parents: {this.state.parents}</p>
              <p className="houseMartellCharTrystan-children">Enfants: {this.state.children}</p>
              <p className="houseMartellCharTrystan-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseMartellCharTrystan-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseMartellCharTrystan-subTitle">Présentation</h2>
          <p className="houseMartellCharTrystan-content">{this.state.presentation}</p>
          <h2 className="houseMartellCharTrystan-subTitle">Context</h2>
          <p className="houseMartellCharTrystan-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseMartellCharTrystan;
