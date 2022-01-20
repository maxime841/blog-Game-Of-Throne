// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseTargaryenCharViserys.scss';

// == Composant
class HouseTargaryenCharViserys extends React.Component {
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
    axios.get('http://localhost:5050/charactersByFamilly/Targaryen')
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
      <div className="houseTargaryenCharViserys">
        <div className="houseTargaryenCharViserys-container">
          <h1 className="houseTargaryenCharViserys-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseTargaryenCharViserys-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseTargaryenCharViserys-caracteristic">
            <div className="houseTargaryenCharViserys-owner">
              <p className="houseTargaryenCharViserys-citation">Citation: {this.state.citation}</p>
              <p className="houseTargaryenCharViserys-title">Titre: {this.state.title}</p>
              <p className="houseTargaryenCharViserys-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseTargaryenCharViserys-informations">
              <p className="houseTargaryenCharViserys-status">Status: {this.state.statut}</p>
              <p className="houseTargaryenCharViserys-old">Age: {this.state.old}</p>
              <p className="houseTargaryenCharViserys-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseTargaryenCharViserys-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseTargaryenCharViserys-loyalty">
              <p className="houseTargaryenCharViserys-origin">Origine: {this.state.origin}</p>
              <p className="houseTargaryenCharViserys-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseTargaryenCharViserys-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseTargaryenCharViserys-famillyInfo">
              <p className="houseTargaryenCharViserys-relation">Relation: {this.state.relation}</p>
              <p className="houseTargaryenCharViserys-parents">Parents: {this.state.parents}</p>
              <p className="houseTargaryenCharViserys-children">Enfants: {this.state.children}</p>
              <p className="houseTargaryenCharViserys-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseTargaryenCharViserys-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseTargaryenCharViserys-subTitle">Présentation</h2>
          <p className="houseTargaryenCharViserys-content">{this.state.presentation}</p>
          <h2 className="houseTargaryenCharViserys-subTitle">Context</h2>
          <p className="houseTargaryenCharViserys-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseTargaryenCharViserys;

