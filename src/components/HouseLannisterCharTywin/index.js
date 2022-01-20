// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseLannisterCharTywin.scss';

// == Composant
class HouseLannisterCharTywin extends React.Component {
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
    axios.get('http://localhost:5050/charactersByFamilly/Lannister')
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
      <div className="houseLannisterCharTywin">
        <div className="houseLannisterCharTywin-container">
          <h1 className="houseLannisterCharTywin-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseLannisterCharTywin-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseLannisterCharTywin-caracteristic">
            <div className="houseLannisterCharTywin-owner">
              <p className="houseLannisterCharTywin-citation">Citation: {this.state.citation}</p>
              <p className="houseLannisterCharTywin-title">Titre: {this.state.title}</p>
              <p className="houseLannisterCharTywin-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseLannisterCharTywin-informations">
              <p className="houseLannisterCharTywin-status">Status: {this.state.statut}</p>
              <p className="houseLannisterCharTywin-old">Age: {this.state.old}</p>
              <p className="houseLannisterCharTywin-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseLannisterCharTywin-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseLannisterCharTywin-loyalty">
              <p className="houseLannisterCharTywin-origin">Origine: {this.state.origin}</p>
              <p className="houseLannisterCharTywin-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseLannisterCharTywin-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseLannisterCharTywin-famillyInfo">
              <p className="houseLannisterCharTywin-relation">Relation: {this.state.relation}</p>
              <p className="houseLannisterCharTywin-parents">Parents: {this.state.parents}</p>
              <p className="houseLannisterCharTywin-children">Enfants: {this.state.children}</p>
              <p className="houseLannisterCharTywin-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseLannisterCharTywin-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseLannisterCharTywin-subTitle">Présentation</h2>
          <p className="houseLannisterCharTywin-content">{this.state.presentation}</p>
          <h2 className="houseLannisterCharTywin-subTitle">Context</h2>
          <p className="houseLannisterCharTywin-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseLannisterCharTywin;
