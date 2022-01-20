// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseBaratheonCharStannis.scss';

// == Composant
class HouseBaratheonCharStannis extends React.Component {
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
      <div className="houseBaratheonCharStannis">
        <div className="houseBaratheonCharStannis-container">
          <h1 className="houseBaratheonCharStannis-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseBaratheonCharStannis-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseBaratheonCharStannis-caracteristic">
            <div className="houseBaratheonCharStannis-owner">
              <p className="houseBaratheonCharStannis-citation">Citation: {this.state.citation}</p>
              <p className="houseBaratheonCharStannis-title">Titre: {this.state.title}</p>
              <p className="houseBaratheonCharStannis-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseBaratheonCharStannis-informations">
              <p className="houseBaratheonCharStannis-status">Status: {this.state.statut}</p>
              <p className="houseBaratheonCharStannis-old">Age: {this.state.old}</p>
              <p className="houseBaratheonCharStannis-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseBaratheonCharStannis-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseBaratheonCharStannis-loyalty">
              <p className="houseBaratheonCharStannis-origin">Origine: {this.state.origin}</p>
              <p className="houseBaratheonCharStannis-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseBaratheonCharStannis-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseBaratheonCharStannis-famillyInfo">
              <p className="houseBaratheonCharStannis-relation">Relation: {this.state.relation}</p>
              <p className="houseBaratheonCharStannis-parents">Parents: {this.state.parents}</p>
              <p className="houseBaratheonCharStannis-children">Enfants: {this.state.children}</p>
              <p className="houseBaratheonCharStannis-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseBaratheonCharStannis-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseBaratheonCharStannis-subTitle">Présentation</h2>
          <p className="houseBaratheonCharStannis-content">{this.state.presentation}</p>
          <h2 className="houseBaratheonCharStannis-subTitle">Context</h2>
          <p className="houseBaratheonCharStannis-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseBaratheonCharStannis;
