// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseGreyjoyCharBalon.scss';

// == Composant
class HouseGreyjoyCharBalon extends React.Component {
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
        this.setState({ firstname: res.data[2].firstname });
        this.setState({ lastname: res.data[2].lastname });
        this.setState({ citation: res.data[2].citation });
        this.setState({ title: res.data[2].title });
        this.setState({ alias: res.data[2].alias });
        this.setState({ presentation: res.data[2].presentation });
        this.setState({ statut: res.data[2].statut });
        this.setState({ old: res.data[2].old });
        this.setState({ deaddate: res.data[2].deaddate });
        this.setState({ birthdate: res.data[2].birthdate });
        this.setState({ origin: res.data[2].origin });
        this.setState({ allegency: res.data[2].allegency });
        this.setState({ culture: res.data[2].culture });
        this.setState({ relation: res.data[2].relation });
        this.setState({ parents: res.data[2].parents });
        this.setState({ children: res.data[2].children });
        this.setState({ fratrie: res.data[2].fratrie });
        this.setState({ familly: res.data[2].familly });
        this.setState({ context: res.data[2].context });
        this.setState({ picture: res.data[2].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="houseGreyjoyCharBalon">
        <div className="houseGreyjoyCharBalon-container">
          <h1 className="houseGreyjoyCharBalon-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseGreyjoyCharBalon-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseGreyjoyCharBalon-caracteristic">
            <div className="houseGreyjoyCharBalon-owner">
              <p className="houseGreyjoyCharBalon-citation">Citation: {this.state.citation}</p>
              <p className="houseGreyjoyCharBalon-title">Titre: {this.state.title}</p>
              <p className="houseGreyjoyCharBalon-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseGreyjoyCharBalon-informations">
              <p className="houseGreyjoyCharBalon-status">Status: {this.state.statut}</p>
              <p className="houseGreyjoyCharBalon-old">Age: {this.state.old}</p>
              <p className="houseGreyjoyCharBalon-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseGreyjoyCharBalon-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseGreyjoyCharBalon-loyalty">
              <p className="houseGreyjoyCharBalon-origin">Origine: {this.state.origin}</p>
              <p className="houseGreyjoyCharBalon-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseGreyjoyCharBalon-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseGreyjoyCharBalon-famillyInfo">
              <p className="houseGreyjoyCharBalon-relation">Relation: {this.state.relation}</p>
              <p className="houseGreyjoyCharBalon-parents">Parents: {this.state.parents}</p>
              <p className="houseGreyjoyCharBalon-children">Enfants: {this.state.children}</p>
              <p className="houseGreyjoyCharBalon-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseGreyjoyCharBalon-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseGreyjoyCharBalon-subTitle">Présentation</h2>
          <p className="houseGreyjoyCharBalon-content">{this.state.presentation}</p>
          <h2 className="houseGreyjoyCharBalon-subTitle">Context</h2>
          <p className="houseGreyjoyCharBalon-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseGreyjoyCharBalon;
