// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseFreyCharArwaya.scss';

// == Composant
class HouseFreyCharArwaya extends React.Component {
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
      <div className="houseFreyCharArwaya">
        <div className="houseFreyCharArwaya-container">
          <h1 className="houseFreyCharArwaya-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseFreyCharArwaya-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseFreyCharArwaya-caracteristic">
            <div className="houseFreyCharArwaya-owner">
              <p className="houseFreyCharArwaya-citation">Citation: {this.state.citation}</p>
              <p className="houseFreyCharArwaya-title">Titre: {this.state.title}</p>
              <p className="houseFreyCharArwaya-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseFreyCharArwaya-informations">
              <p className="houseFreyCharArwaya-status">Status: {this.state.statut}</p>
              <p className="houseFreyCharArwaya-old">Age: {this.state.old}</p>
              <p className="houseFreyCharArwaya-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseFreyCharArwaya-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseFreyCharArwaya-loyalty">
              <p className="houseFreyCharArwaya-origin">Origine: {this.state.origin}</p>
              <p className="houseFreyCharArwaya-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseFreyCharArwaya-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseFreyCharArwaya-famillyInfo">
              <p className="houseFreyCharArwaya-relation">Relation: {this.state.relation}</p>
              <p className="houseFreyCharArwaya-parents">Parents: {this.state.parents}</p>
              <p className="houseFreyCharArwaya-children">Enfants: {this.state.children}</p>
              <p className="houseFreyCharArwaya-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseFreyCharArwaya-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseFreyCharArwaya-subTitle">Présentation</h2>
          <p className="houseFreyCharArwaya-content">{this.state.presentation}</p>
          <h2 className="houseFreyCharArwaya-subTitle">Context</h2>
          <p className="houseFreyCharArwaya-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseFreyCharArwaya;
