// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseFreyCharWalder.scss';

// == Composant
class HouseFreyCharWalder extends React.Component {
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
        this.setState({ firstname: res.data[10].firstname });
        this.setState({ lastname: res.data[10].lastname });
        this.setState({ citation: res.data[10].citation });
        this.setState({ title: res.data[10].title });
        this.setState({ alias: res.data[10].alias });
        this.setState({ presentation: res.data[10].presentation });
        this.setState({ statut: res.data[10].statut });
        this.setState({ old: res.data[10].old });
        this.setState({ deaddate: res.data[10].deaddate });
        this.setState({ birthdate: res.data[10].birthdate });
        this.setState({ origin: res.data[10].origin });
        this.setState({ allegency: res.data[10].allegency });
        this.setState({ culture: res.data[10].culture });
        this.setState({ relation: res.data[10].relation });
        this.setState({ parents: res.data[10].parents });
        this.setState({ children: res.data[10].children });
        this.setState({ fratrie: res.data[10].fratrie });
        this.setState({ familly: res.data[10].familly });
        this.setState({ context: res.data[10].context });
        this.setState({ picture: res.data[10].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="houseFreyCharWalder">
        <div className="houseFreyCharWalder-container">
          <h1 className="houseFreyCharWalder-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseFreyCharWalder-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseFreyCharWalder-caracteristic">
            <div className="houseFreyCharWalder-owner">
              <p className="houseFreyCharWalder-citation">Citation: {this.state.citation}</p>
              <p className="houseFreyCharWalder-title">Titre: {this.state.title}</p>
              <p className="houseFreyCharWalder-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseFreyCharWalder-informations">
              <p className="houseFreyCharWalder-status">Status: {this.state.statut}</p>
              <p className="houseFreyCharWalder-old">Age: {this.state.old}</p>
              <p className="houseFreyCharWalder-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseFreyCharWalder-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseFreyCharWalder-loyalty">
              <p className="houseFreyCharWalder-origin">Origine: {this.state.origin}</p>
              <p className="houseFreyCharWalder-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseFreyCharWalder-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseFreyCharWalder-famillyInfo">
              <p className="houseFreyCharWalder-relation">Relation: {this.state.relation}</p>
              <p className="houseFreyCharWalder-parents">Parents: {this.state.parents}</p>
              <p className="houseFreyCharWalder-children">Enfants: {this.state.children}</p>
              <p className="houseFreyCharWalder-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseFreyCharWalder-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseFreyCharWalder-subTitle">Présentation</h2>
          <p className="houseFreyCharWalder-content">{this.state.presentation}</p>
          <h2 className="houseFreyCharWalder-subTitle">Context</h2>
          <p className="houseFreyCharWalder-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseFreyCharWalder;
