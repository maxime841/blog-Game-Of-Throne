// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseMartellCharOlenna.scss';

// == Composant
class HouseMartellCharOlenna extends React.Component {
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
      <div className="houseMartellCharOlenna">
        <div className="houseMartellCharOlenna-container">
          <h1 className="houseMartellCharOlenna-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseMartellCharOlenna-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseMartellCharOlenna-caracteristic">
            <div className="houseMartellCharOlenna-owner">
              <p className="houseMartellCharOlenna-citation">Citation: {this.state.citation}</p>
              <p className="houseMartellCharOlenna-title">Titre: {this.state.title}</p>
              <p className="houseMartellCharOlenna-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseMartellCharOlenna-informations">
              <p className="houseMartellCharOlenna-status">Status: {this.state.statut}</p>
              <p className="houseMartellCharOlenna-old">Age: {this.state.old}</p>
              <p className="houseMartellCharOlenna-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseMartellCharOlenna-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseMartellCharOlenna-loyalty">
              <p className="houseMartellCharOlenna-origin">Origine: {this.state.origin}</p>
              <p className="houseMartellCharOlenna-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseMartellCharOlenna-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseMartellCharOlenna-famillyInfo">
              <p className="houseMartellCharOlenna-relation">Relation: {this.state.relation}</p>
              <p className="houseMartellCharOlenna-parents">Parents: {this.state.parents}</p>
              <p className="houseMartellCharOlenna-children">Enfants: {this.state.children}</p>
              <p className="houseMartellCharOlenna-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseMartellCharOlenna-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseMartellCharOlenna-subTitle">Présentation</h2>
          <p className="houseMartellCharOlenna-content">{this.state.presentation}</p>
          <h2 className="houseMartellCharOlenna-subTitle">Context</h2>
          <p className="houseMartellCharOlenna-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseMartellCharOlenna;
