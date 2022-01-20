// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseFreyCharStevron.scss';

// == Composant
class HouseFreyCharStevron extends React.Component {
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
      <div className="houseFreyCharStevron">
        <div className="houseFreyCharStevron-container">
          <h1 className="houseFreyCharStevron-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseFreyCharStevron-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseFreyCharStevron-caracteristic">
            <div className="houseFreyCharStevron-owner">
              <p className="houseFreyCharStevron-citation">Citation: {this.state.citation}</p>
              <p className="houseFreyCharStevron-title">Titre: {this.state.title}</p>
              <p className="houseFreyCharStevron-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseFreyCharStevron-informations">
              <p className="houseFreyCharStevron-status">Status: {this.state.statut}</p>
              <p className="houseFreyCharStevron-old">Age: {this.state.old}</p>
              <p className="houseFreyCharStevron-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseFreyCharStevron-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseFreyCharStevron-loyalty">
              <p className="houseFreyCharStevron-origin">Origine: {this.state.origin}</p>
              <p className="houseFreyCharStevron-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseFreyCharStevron-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseFreyCharStevron-famillyInfo">
              <p className="houseFreyCharStevron-relation">Relation: {this.state.relation}</p>
              <p className="houseFreyCharStevron-parents">Parents: {this.state.parents}</p>
              <p className="houseFreyCharStevron-children">Enfants: {this.state.children}</p>
              <p className="houseFreyCharStevron-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseFreyCharStevron-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseFreyCharStevron-subTitle">Présentation</h2>
          <p className="houseFreyCharStevron-content">{this.state.presentation}</p>
          <h2 className="houseFreyCharStevron-subTitle">Context</h2>
          <p className="houseFreyCharStevron-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseFreyCharStevron;
