// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseLannisterCharWillem.scss';

// == Composant
class HouseLannisterCharWillem extends React.Component {
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
        this.setState({ firstname: res.data[9].firstname });
        this.setState({ lastname: res.data[9].lastname });
        this.setState({ citation: res.data[9].citation });
        this.setState({ title: res.data[9].title });
        this.setState({ alias: res.data[9].alias });
        this.setState({ presentation: res.data[9].presentation });
        this.setState({ statut: res.data[9].statut });
        this.setState({ old: res.data[9].old });
        this.setState({ deaddate: res.data[9].deaddate });
        this.setState({ birthdate: res.data[9].birthdate });
        this.setState({ origin: res.data[9].origin });
        this.setState({ allegency: res.data[9].allegency });
        this.setState({ culture: res.data[9].culture });
        this.setState({ relation: res.data[9].relation });
        this.setState({ parents: res.data[9].parents });
        this.setState({ children: res.data[9].children });
        this.setState({ fratrie: res.data[9].fratrie });
        this.setState({ familly: res.data[9].familly });
        this.setState({ context: res.data[9].context });
        this.setState({ picture: res.data[9].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="houseLannisterCharWillem">
        <div className="houseLannisterCharWillem-container">
          <h1 className="houseLannisterCharWillem-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseLannisterCharWillem-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseLannisterCharWillem-caracteristic">
            <div className="houseLannisterCharWillem-owner">
              <p className="houseLannisterCharWillem-citation">Citation: {this.state.citation}</p>
              <p className="houseLannisterCharWillem-title">Titre: {this.state.title}</p>
              <p className="houseLannisterCharWillem-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseLannisterCharWillem-informations">
              <p className="houseLannisterCharWillem-status">Status: {this.state.statut}</p>
              <p className="houseLannisterCharWillem-old">Age: {this.state.old}</p>
              <p className="houseLannisterCharWillem-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseLannisterCharWillem-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseLannisterCharWillem-loyalty">
              <p className="houseLannisterCharWillem-origin">Origine: {this.state.origin}</p>
              <p className="houseLannisterCharWillem-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseLannisterCharWillem-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseLannisterCharWillem-famillyInfo">
              <p className="houseLannisterCharWillem-relation">Relation: {this.state.relation}</p>
              <p className="houseLannisterCharWillem-parents">Parents: {this.state.parents}</p>
              <p className="houseLannisterCharWillem-children">Enfants: {this.state.children}</p>
              <p className="houseLannisterCharWillem-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseLannisterCharWillem-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseLannisterCharWillem-subTitle">Présentation</h2>
          <p className="houseLannisterCharWillem-content">{this.state.presentation}</p>
          <h2 className="houseLannisterCharWillem-subTitle">Context</h2>
          <p className="houseLannisterCharWillem-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseLannisterCharWillem;
