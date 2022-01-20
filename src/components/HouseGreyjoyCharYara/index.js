// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseGreyjoyCharYara.scss';

// == Composant
class HouseGreyjoyCharYara extends React.Component {
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
    axios.get('http://localhost:5050/charactersByFamilly/Greyjoy')
      .then((res) => {
        this.setState({ firstname: res.data[5].firstname });
        this.setState({ lastname: res.data[5].lastname });
        this.setState({ citation: res.data[5].citation });
        this.setState({ title: res.data[5].title });
        this.setState({ alias: res.data[5].alias });
        this.setState({ presentation: res.data[5].presentation });
        this.setState({ statut: res.data[5].statut });
        this.setState({ old: res.data[5].old });
        this.setState({ deaddate: res.data[5].deaddate });
        this.setState({ birthdate: res.data[5].birthdate });
        this.setState({ origin: res.data[5].origin });
        this.setState({ allegency: res.data[5].allegency });
        this.setState({ culture: res.data[5].culture });
        this.setState({ relation: res.data[5].relation });
        this.setState({ parents: res.data[5].parents });
        this.setState({ children: res.data[5].children });
        this.setState({ fratrie: res.data[5].fratrie });
        this.setState({ familly: res.data[5].familly });
        this.setState({ context: res.data[5].context });
        this.setState({ picture: res.data[5].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="houseGreyjoyCharYara">
        <div className="houseGreyjoyCharYara-container">
          <h1 className="houseGreyjoyCharYara-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseGreyjoyCharYara-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseGreyjoyCharYara-caracteristic">
            <div className="houseGreyjoyCharYara-owner">
              <p className="houseGreyjoyCharYara-citation">Citation: {this.state.citation}</p>
              <p className="houseGreyjoyCharYara-title">Titre: {this.state.title}</p>
              <p className="houseGreyjoyCharYara-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseGreyjoyCharYara-informations">
              <p className="houseGreyjoyCharYara-status">Status: {this.state.statut}</p>
              <p className="houseGreyjoyCharYara-old">Age: {this.state.old}</p>
              <p className="houseGreyjoyCharYara-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseGreyjoyCharYara-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseGreyjoyCharYara-loyalty">
              <p className="houseGreyjoyCharYara-origin">Origine: {this.state.origin}</p>
              <p className="houseGreyjoyCharYara-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseGreyjoyCharYara-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseGreyjoyCharYara-famillyInfo">
              <p className="houseGreyjoyCharYara-relation">Relation: {this.state.relation}</p>
              <p className="houseGreyjoyCharYara-parents">Parents: {this.state.parents}</p>
              <p className="houseGreyjoyCharYara-children">Enfants: {this.state.children}</p>
              <p className="houseGreyjoyCharYara-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseGreyjoyCharYara-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseGreyjoyCharYara-subTitle">Présentation</h2>
          <p className="houseGreyjoyCharYara-content">{this.state.presentation}</p>
          <h2 className="houseGreyjoyCharYara-subTitle">Context</h2>
          <p className="houseGreyjoyCharYara-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseGreyjoyCharYara;
