// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseBaratheonCharJoffrey.scss';

// == Composant
class HouseBaratheonCharJoffrey extends React.Component {
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
    axios.get('http://localhost:5050/charactersByFamilly/Baratheon')
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
      <div className="houseBaratheonCharJoffrey">
        <div className="houseBaratheonCharJoffrey-container">
          <h1 className="houseBaratheonCharJoffrey-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseBaratheonCharJoffrey-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseBaratheonCharJoffrey-caracteristic">
            <div className="houseBaratheonCharJoffrey-owner">
              <p className="houseBaratheonCharJoffrey-citation">Citation: {this.state.citation}</p>
              <p className="houseBaratheonCharJoffrey-title">Titre: {this.state.title}</p>
              <p className="houseBaratheonCharJoffrey-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseBaratheonCharJoffrey-informations">
              <p className="houseBaratheonCharJoffrey-status">Status: {this.state.statut}</p>
              <p className="houseBaratheonCharJoffrey-old">Age: {this.state.old}</p>
              <p className="houseBaratheonCharJoffrey-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseBaratheonCharJoffrey-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseBaratheonCharJoffrey-loyalty">
              <p className="houseBaratheonCharJoffrey-origin">Origine: {this.state.origin}</p>
              <p className="houseBaratheonCharJoffrey-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseBaratheonCharJoffrey-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseBaratheonCharJoffrey-famillyInfo">
              <p className="houseBaratheonCharJoffrey-relation">Relation: {this.state.relation}</p>
              <p className="houseBaratheonCharJoffrey-parents">Parents: {this.state.parents}</p>
              <p className="houseBaratheonCharJoffrey-children">Enfants: {this.state.children}</p>
              <p className="houseBaratheonCharJoffrey-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseBaratheonCharJoffrey-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseBaratheonCharJoffrey-subTitle">Présentation</h2>
          <p className="houseBaratheonCharJoffrey-content">{this.state.presentation}</p>
          <h2 className="houseBaratheonCharJoffrey-subTitle">Context</h2>
          <p className="houseBaratheonCharJoffrey-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseBaratheonCharJoffrey;
