// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseMartellCharDoran.scss';

// == Composant
class HouseMartellCharDoran extends React.Component {
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
        this.setState({ firstname: res.data[0].firstname });
        this.setState({ lastname: res.data[0].lastname });
        this.setState({ citation: res.data[0].citation });
        this.setState({ title: res.data[0].title });
        this.setState({ alias: res.data[0].alias });
        this.setState({ presentation: res.data[0].presentation });
        this.setState({ statut: res.data[0].statut });
        this.setState({ old: res.data[0].old });
        this.setState({ deaddate: res.data[0].deaddate });
        this.setState({ birthdate: res.data[0].birthdate });
        this.setState({ origin: res.data[0].origin });
        this.setState({ allegency: res.data[0].allegency });
        this.setState({ culture: res.data[0].culture });
        this.setState({ relation: res.data[0].relation });
        this.setState({ parents: res.data[0].parents });
        this.setState({ children: res.data[0].children });
        this.setState({ fratrie: res.data[0].fratrie });
        this.setState({ familly: res.data[0].familly });
        this.setState({ context: res.data[0].context });
        this.setState({ picture: res.data[0].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="houseMartellCharDoran">
        <div className="houseMartellCharDoran-container">
          <h1 className="houseMartellCharDoran-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseMartellCharDoran-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseMartellCharDoran-caracteristic">
            <div className="houseMartellCharDoran-owner">
              <p className="houseMartellCharDoran-citation">Citation: {this.state.citation}</p>
              <p className="houseMartellCharDoran-title">Titre: {this.state.title}</p>
              <p className="houseMartellCharDoran-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseMartellCharDoran-informations">
              <p className="houseMartellCharDoran-status">Status: {this.state.statut}</p>
              <p className="houseMartellCharDoran-old">Age: {this.state.old}</p>
              <p className="houseMartellCharDoran-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseMartellCharDoran-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseMartellCharDoran-loyalty">
              <p className="houseMartellCharDoran-origin">Origine: {this.state.origin}</p>
              <p className="houseMartellCharDoran-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseMartellCharDoran-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseMartellCharDoran-famillyInfo">
              <p className="houseMartellCharDoran-relation">Relation: {this.state.relation}</p>
              <p className="houseMartellCharDoran-parents">Parents: {this.state.parents}</p>
              <p className="houseMartellCharDoran-children">Enfants: {this.state.children}</p>
              <p className="houseMartellCharDoran-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseMartellCharDoran-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseMartellCharDoran-subTitle">Présentation</h2>
          <p className="houseMartellCharDoran-content">{this.state.presentation}</p>
          <h2 className="houseMartellCharDoran-subTitle">Context</h2>
          <p className="houseMartellCharDoran-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseMartellCharDoran;
