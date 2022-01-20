// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseFreyCharShirei.scss';

// == Composant
class HouseFreyCharShirei extends React.Component {
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
        this.setState({ firstname: res.data[7].firstname });
        this.setState({ lastname: res.data[7].lastname });
        this.setState({ citation: res.data[7].citation });
        this.setState({ title: res.data[7].title });
        this.setState({ alias: res.data[7].alias });
        this.setState({ presentation: res.data[7].presentation });
        this.setState({ statut: res.data[7].statut });
        this.setState({ old: res.data[7].old });
        this.setState({ deaddate: res.data[7].deaddate });
        this.setState({ birthdate: res.data[7].birthdate });
        this.setState({ origin: res.data[7].origin });
        this.setState({ allegency: res.data[7].allegency });
        this.setState({ culture: res.data[7].culture });
        this.setState({ relation: res.data[7].relation });
        this.setState({ parents: res.data[7].parents });
        this.setState({ children: res.data[7].children });
        this.setState({ fratrie: res.data[7].fratrie });
        this.setState({ familly: res.data[7].familly });
        this.setState({ context: res.data[7].context });
        this.setState({ picture: res.data[7].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="houseFreyCharShirei">
        <div className="houseFreyCharShirei-container">
          <h1 className="houseFreyCharShirei-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseFreyCharShirei-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseFreyCharShirei-caracteristic">
            <div className="houseFreyCharShirei-owner">
              <p className="houseFreyCharShirei-citation">Citation: {this.state.citation}</p>
              <p className="houseFreyCharShirei-title">Titre: {this.state.title}</p>
              <p className="houseFreyCharShirei-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseFreyCharShirei-informations">
              <p className="houseFreyCharShirei-status">Status: {this.state.statut}</p>
              <p className="houseFreyCharShirei-old">Age: {this.state.old}</p>
              <p className="houseFreyCharShirei-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseFreyCharShirei-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseFreyCharShirei-loyalty">
              <p className="houseFreyCharShirei-origin">Origine: {this.state.origin}</p>
              <p className="houseFreyCharShirei-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseFreyCharShirei-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseFreyCharShirei-famillyInfo">
              <p className="houseFreyCharShirei-relation">Relation: {this.state.relation}</p>
              <p className="houseFreyCharShirei-parents">Parents: {this.state.parents}</p>
              <p className="houseFreyCharShirei-children">Enfants: {this.state.children}</p>
              <p className="houseFreyCharShirei-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseFreyCharShirei-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseFreyCharShirei-subTitle">Présentation</h2>
          <p className="houseFreyCharShirei-content">{this.state.presentation}</p>
          <h2 className="houseFreyCharShirei-subTitle">Context</h2>
          <p className="houseFreyCharShirei-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseFreyCharShirei;
