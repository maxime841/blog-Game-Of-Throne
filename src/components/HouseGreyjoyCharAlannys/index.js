// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseGreyjoyCharAlannys.scss';

// == Composant
class HouseGreyjoyCharAlannys extends React.Component {
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
      <div className="houseGreyjoyCharAlannys">
        <div className="houseGreyjoyCharAlannys-container">
          <h1 className="houseGreyjoyCharAlannys-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseGreyjoyCharAlannys-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseGreyjoyCharAlannys-caracteristic">
            <div className="houseGreyjoyCharAlannys-owner">
              <p className="houseGreyjoyCharAlannys-citation">Citation: {this.state.citation}</p>
              <p className="houseGreyjoyCharAlannys-title">Titre: {this.state.title}</p>
              <p className="houseGreyjoyCharAlannys-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseGreyjoyCharAlannys-informations">
              <p className="houseGreyjoyCharAlannys-status">Status: {this.state.statut}</p>
              <p className="houseGreyjoyCharAlannys-old">Age: {this.state.old}</p>
              <p className="houseGreyjoyCharAlannys-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseGreyjoyCharAlannys-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseGreyjoyCharAlannys-loyalty">
              <p className="houseGreyjoyCharAlannys-origin">Origine: {this.state.origin}</p>
              <p className="houseGreyjoyCharAlannys-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseGreyjoyCharAlannys-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseGreyjoyCharAlannys-famillyInfo">
              <p className="houseGreyjoyCharAlannys-relation">Relation: {this.state.relation}</p>
              <p className="houseGreyjoyCharAlannys-parents">Parents: {this.state.parents}</p>
              <p className="houseGreyjoyCharAlannys-children">Enfants: {this.state.children}</p>
              <p className="houseGreyjoyCharAlannys-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseGreyjoyCharAlannys-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseGreyjoyCharAlannys-subTitle">Présentation</h2>
          <p className="houseGreyjoyCharAlannys-content">{this.state.presentation}</p>
          <h2 className="houseGreyjoyCharAlannys-subTitle">Context</h2>
          <p className="houseGreyjoyCharAlannys-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseGreyjoyCharAlannys;
