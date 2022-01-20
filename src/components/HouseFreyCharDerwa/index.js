// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseFreyCharDerwa.scss';

// == Composant
class HouseFreyCharDerwa extends React.Component {
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
        this.setState({ firstname: res.data[1].firstname });
        this.setState({ lastname: res.data[1].lastname });
        this.setState({ citation: res.data[1].citation });
        this.setState({ title: res.data[1].title });
        this.setState({ alias: res.data[1].alias });
        this.setState({ presentation: res.data[1].presentation });
        this.setState({ statut: res.data[1].statut });
        this.setState({ old: res.data[1].old });
        this.setState({ deaddate: res.data[1].deaddate });
        this.setState({ birthdate: res.data[1].birthdate });
        this.setState({ origin: res.data[1].origin });
        this.setState({ allegency: res.data[1].allegency });
        this.setState({ culture: res.data[1].culture });
        this.setState({ relation: res.data[1].relation });
        this.setState({ parents: res.data[1].parents });
        this.setState({ children: res.data[1].children });
        this.setState({ fratrie: res.data[1].fratrie });
        this.setState({ familly: res.data[1].familly });
        this.setState({ context: res.data[1].context });
        this.setState({ picture: res.data[1].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="houseFreyCharDerwa">
        <div className="houseFreyCharDerwa-container">
          <h1 className="houseFreyCharDerwa-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseFreyCharDerwa-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseFreyCharDerwa-caracteristic">
            <div className="houseFreyCharDerwa-owner">
              <p className="houseFreyCharDerwa-citation">Citation: {this.state.citation}</p>
              <p className="houseFreyCharDerwa-title">Titre: {this.state.title}</p>
              <p className="houseFreyCharDerwa-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseFreyCharDerwa-informations">
              <p className="houseFreyCharDerwa-status">Status: {this.state.statut}</p>
              <p className="houseFreyCharDerwa-old">Age: {this.state.old}</p>
              <p className="houseFreyCharDerwa-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseFreyCharDerwa-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseFreyCharDerwa-loyalty">
              <p className="houseFreyCharDerwa-origin">Origine: {this.state.origin}</p>
              <p className="houseFreyCharDerwa-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseFreyCharDerwa-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseFreyCharDerwa-famillyInfo">
              <p className="houseFreyCharDerwa-relation">Relation: {this.state.relation}</p>
              <p className="houseFreyCharDerwa-parents">Parents: {this.state.parents}</p>
              <p className="houseFreyCharDerwa-children">Enfants: {this.state.children}</p>
              <p className="houseFreyCharDerwa-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseFreyCharDerwa-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseFreyCharDerwa-subTitle">Présentation</h2>
          <p className="houseFreyCharDerwa-content">{this.state.presentation}</p>
          <h2 className="houseFreyCharDerwa-subTitle">Context</h2>
          <p className="houseFreyCharDerwa-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseFreyCharDerwa;
