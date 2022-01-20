// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseBaratheonCharRobert.scss';

// == Composant
class HouseBaratheonCharRobert extends React.Component {
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
        this.setState({ firstname: res.data[4].firstname });
        this.setState({ lastname: res.data[4].lastname });
        this.setState({ citation: res.data[4].citation });
        this.setState({ title: res.data[4].title });
        this.setState({ alias: res.data[4].alias });
        this.setState({ presentation: res.data[4].presentation });
        this.setState({ statut: res.data[4].statut });
        this.setState({ old: res.data[4].old });
        this.setState({ deaddate: res.data[4].deaddate });
        this.setState({ birthdate: res.data[4].birthdate });
        this.setState({ origin: res.data[4].origin });
        this.setState({ allegency: res.data[4].allegency });
        this.setState({ culture: res.data[4].culture });
        this.setState({ relation: res.data[4].relation });
        this.setState({ parents: res.data[4].parents });
        this.setState({ children: res.data[4].children });
        this.setState({ fratrie: res.data[4].fratrie });
        this.setState({ familly: res.data[4].familly });
        this.setState({ context: res.data[4].context });
        this.setState({ picture: res.data[4].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="houseBaratheonCharRobert">
        <div className="houseBaratheonCharRobert-container">
          <h1 className="houseBaratheonCharRobert-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseBaratheonCharRobert-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseBaratheonCharRobert-caracteristic">
            <div className="houseBaratheonCharRobert-owner">
              <p className="houseBaratheonCharRobert-citation">Citation: {this.state.citation}</p>
              <p className="houseBaratheonCharRobert-title">Titre: {this.state.title}</p>
              <p className="houseBaratheonCharRobert-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseBaratheonCharRobert-informations">
              <p className="houseBaratheonCharRobert-status">Status: {this.state.statut}</p>
              <p className="houseBaratheonCharRobert-old">Age: {this.state.old}</p>
              <p className="houseBaratheonCharRobert-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseBaratheonCharRobert-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseBaratheonCharRobert-loyalty">
              <p className="houseBaratheonCharRobert-origin">Origine: {this.state.origin}</p>
              <p className="houseBaratheonCharRobert-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseBaratheonCharRobert-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseBaratheonCharRobert-famillyInfo">
              <p className="houseBaratheonCharRobert-relation">Relation: {this.state.relation}</p>
              <p className="houseBaratheonCharRobert-parents">Parents: {this.state.parents}</p>
              <p className="houseBaratheonCharRobert-children">Enfants: {this.state.children}</p>
              <p className="houseBaratheonCharRobert-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseBaratheonCharRobert-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseBaratheonCharRobert-subTitle">Présentation</h2>
          <p className="houseBaratheonCharRobert-content">{this.state.presentation}</p>
          <h2 className="houseBaratheonCharRobert-subTitle">Context</h2>
          <p className="houseBaratheonCharRobert-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseBaratheonCharRobert;
