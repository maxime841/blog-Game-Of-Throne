// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseBaratheonCharTommen.scss';

// == Composant
class HouseBaratheonCharTommen extends React.Component {
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
        this.setState({ firstname: res.data[8].firstname });
        this.setState({ lastname: res.data[8].lastname });
        this.setState({ citation: res.data[8].citation });
        this.setState({ title: res.data[8].title });
        this.setState({ alias: res.data[8].alias });
        this.setState({ presentation: res.data[8].presentation });
        this.setState({ statut: res.data[8].statut });
        this.setState({ old: res.data[8].old });
        this.setState({ deaddate: res.data[8].deaddate });
        this.setState({ birthdate: res.data[8].birthdate });
        this.setState({ origin: res.data[8].origin });
        this.setState({ allegency: res.data[8].allegency });
        this.setState({ culture: res.data[8].culture });
        this.setState({ relation: res.data[8].relation });
        this.setState({ parents: res.data[8].parents });
        this.setState({ children: res.data[8].children });
        this.setState({ fratrie: res.data[8].fratrie });
        this.setState({ familly: res.data[8].familly });
        this.setState({ context: res.data[8].context });
        this.setState({ picture: res.data[8].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="houseBaratheonCharTommen">
        <div className="houseBaratheonCharTommen-container">
          <h1 className="houseBaratheonCharTommen-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseBaratheonCharTommen-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseBaratheonCharTommen-caracteristic">
            <div className="houseBaratheonCharTommen-owner">
              <p className="houseBaratheonCharTommen-citation">Citation: {this.state.citation}</p>
              <p className="houseBaratheonCharTommen-title">Titre: {this.state.title}</p>
              <p className="houseBaratheonCharTommen-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseBaratheonCharTommen-informations">
              <p className="houseBaratheonCharTommen-status">Status: {this.state.statut}</p>
              <p className="houseBaratheonCharTommen-old">Age: {this.state.old}</p>
              <p className="houseBaratheonCharTommen-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseBaratheonCharTommen-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseBaratheonCharTommen-loyalty">
              <p className="houseBaratheonCharTommen-origin">Origine: {this.state.origin}</p>
              <p className="houseBaratheonCharTommen-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseBaratheonCharTommen-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseBaratheonCharTommen-famillyInfo">
              <p className="houseBaratheonCharTommen-relation">Relation: {this.state.relation}</p>
              <p className="houseBaratheonCharTommen-parents">Parents: {this.state.parents}</p>
              <p className="houseBaratheonCharTommen-children">Enfants: {this.state.children}</p>
              <p className="houseBaratheonCharTommen-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseBaratheonCharTommen-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseBaratheonCharTommen-subTitle">Présentation</h2>
          <p className="houseBaratheonCharTommen-content">{this.state.presentation}</p>
          <h2 className="houseBaratheonCharTommen-subTitle">Context</h2>
          <p className="houseBaratheonCharTommen-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseBaratheonCharTommen;
