// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseBaratheonCharRenly.scss';

// == Composant
class HouseBaratheonCharRenly extends React.Component {
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
        this.setState({ firstname: res.data[3].firstname });
        this.setState({ lastname: res.data[3].lastname });
        this.setState({ citation: res.data[3].citation });
        this.setState({ title: res.data[3].title });
        this.setState({ alias: res.data[3].alias });
        this.setState({ presentation: res.data[3].presentation });
        this.setState({ statut: res.data[3].statut });
        this.setState({ old: res.data[3].old });
        this.setState({ deaddate: res.data[3].deaddate });
        this.setState({ birthdate: res.data[3].birthdate });
        this.setState({ origin: res.data[3].origin });
        this.setState({ allegency: res.data[3].allegency });
        this.setState({ culture: res.data[3].culture });
        this.setState({ relation: res.data[3].relation });
        this.setState({ parents: res.data[3].parents });
        this.setState({ children: res.data[3].children });
        this.setState({ fratrie: res.data[3].fratrie });
        this.setState({ familly: res.data[3].familly });
        this.setState({ context: res.data[3].context });
        this.setState({ picture: res.data[3].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="houseBaratheonCharRenly">
        <div className="houseBaratheonCharRenly-container">
          <h1 className="houseBaratheonCharRenly-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseBaratheonCharRenly-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseBaratheonCharRenly-caracteristic">
            <div className="houseBaratheonCharRenly-owner">
              <p className="houseBaratheonCharRenly-citation">Citation: {this.state.citation}</p>
              <p className="houseBaratheonCharRenly-title">Titre: {this.state.title}</p>
              <p className="houseBaratheonCharRenly-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseBaratheonCharRenly-informations">
              <p className="houseBaratheonCharRenly-status">Status: {this.state.statut}</p>
              <p className="houseBaratheonCharRenly-old">Age: {this.state.old}</p>
              <p className="houseBaratheonCharRenly-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseBaratheonCharRenly-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseBaratheonCharRenly-loyalty">
              <p className="houseBaratheonCharRenly-origin">Origine: {this.state.origin}</p>
              <p className="houseBaratheonCharRenly-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseBaratheonCharRenly-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseBaratheonCharRenly-famillyInfo">
              <p className="houseBaratheonCharRenly-relation">Relation: {this.state.relation}</p>
              <p className="houseBaratheonCharRenly-parents">Parents: {this.state.parents}</p>
              <p className="houseBaratheonCharRenly-children">Enfants: {this.state.children}</p>
              <p className="houseBaratheonCharRenly-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseBaratheonCharRenly-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseBaratheonCharRenly-subTitle">Présentation</h2>
          <p className="houseBaratheonCharRenly-content">{this.state.presentation}</p>
          <h2 className="houseBaratheonCharRenly-subTitle">Context</h2>
          <p className="houseBaratheonCharRenly-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseBaratheonCharRenly;
