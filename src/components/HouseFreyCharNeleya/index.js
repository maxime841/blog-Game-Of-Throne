// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseFreyCharNeleya.scss';

// == Composant
class HouseFreyCharNeleya extends React.Component {
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
    axios.get('http://localhost:5050/charactersByFamilly/Frey')
      .then((res) => {
        this.setState({ firstname: res.data[6].firstname });
        this.setState({ lastname: res.data[6].lastname });
        this.setState({ citation: res.data[6].citation });
        this.setState({ title: res.data[6].title });
        this.setState({ alias: res.data[6].alias });
        this.setState({ presentation: res.data[6].presentation });
        this.setState({ statut: res.data[6].statut });
        this.setState({ old: res.data[6].old });
        this.setState({ deaddate: res.data[6].deaddate });
        this.setState({ birthdate: res.data[6].birthdate });
        this.setState({ origin: res.data[6].origin });
        this.setState({ allegency: res.data[6].allegency });
        this.setState({ culture: res.data[6].culture });
        this.setState({ relation: res.data[6].relation });
        this.setState({ parents: res.data[6].parents });
        this.setState({ children: res.data[6].children });
        this.setState({ fratrie: res.data[6].fratrie });
        this.setState({ familly: res.data[6].familly });
        this.setState({ context: res.data[6].context });
        this.setState({ picture: res.data[6].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="houseFreyCharNeleya">
        <div className="houseFreyCharNeleya-container">
          <h1 className="houseFreyCharNeleya-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseFreyCharNeleya-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseFreyCharNeleya-caracteristic">
            <div className="houseFreyCharNeleya-owner">
              <p className="houseFreyCharNeleya-citation">Citation: {this.state.citation}</p>
              <p className="houseFreyCharNeleya-title">Titre: {this.state.title}</p>
              <p className="houseFreyCharNeleya-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseFreyCharNeleya-informations">
              <p className="houseFreyCharNeleya-status">Status: {this.state.statut}</p>
              <p className="houseFreyCharNeleya-old">Age: {this.state.old}</p>
              <p className="houseFreyCharNeleya-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseFreyCharNeleya-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseFreyCharNeleya-loyalty">
              <p className="houseFreyCharNeleya-origin">Origine: {this.state.origin}</p>
              <p className="houseFreyCharNeleya-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseFreyCharNeleya-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseFreyCharNeleya-famillyInfo">
              <p className="houseFreyCharNeleya-relation">Relation: {this.state.relation}</p>
              <p className="houseFreyCharNeleya-parents">Parents: {this.state.parents}</p>
              <p className="houseFreyCharNeleya-children">Enfants: {this.state.children}</p>
              <p className="houseFreyCharNeleya-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseFreyCharNeleya-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseFreyCharNeleya-subTitle">Présentation</h2>
          <p className="houseFreyCharNeleya-content">{this.state.presentation}</p>
          <h2 className="houseFreyCharNeleya-subTitle">Context</h2>
          <p className="houseFreyCharNeleya-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseFreyCharNeleya;
