// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseLannisterCharLancel.scss';

// == Composant
class HouseLannisterCharLancel extends React.Component {
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
      <div className="houseLannisterCharLancel">
        <div className="houseLannisterCharLancel-container">
          <h1 className="houseLannisterCharLancel-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseLannisterCharLancel-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseLannisterCharLancel-caracteristic">
            <div className="houseLannisterCharLancel-owner">
              <p className="houseLannisterCharLancel-citation">Citation: {this.state.citation}</p>
              <p className="houseLannisterCharLancel-title">Titre: {this.state.title}</p>
              <p className="houseLannisterCharLancel-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseLannisterCharLancel-informations">
              <p className="houseLannisterCharLancel-status">Status: {this.state.statut}</p>
              <p className="houseLannisterCharLancel-old">Age: {this.state.old}</p>
              <p className="houseLannisterCharLancel-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseLannisterCharLancel-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseLannisterCharLancel-loyalty">
              <p className="houseLannisterCharLancel-origin">Origine: {this.state.origin}</p>
              <p className="houseLannisterCharLancel-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseLannisterCharLancel-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseLannisterCharLancel-famillyInfo">
              <p className="houseLannisterCharLancel-relation">Relation: {this.state.relation}</p>
              <p className="houseLannisterCharLancel-parents">Parents: {this.state.parents}</p>
              <p className="houseLannisterCharLancel-children">Enfants: {this.state.children}</p>
              <p className="houseLannisterCharLancel-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseLannisterCharLancel-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseLannisterCharLancel-subTitle">Présentation</h2>
          <p className="houseLannisterCharLancel-content">{this.state.presentation}</p>
          <h2 className="houseLannisterCharLancel-subTitle">Context</h2>
          <p className="houseLannisterCharLancel-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseLannisterCharLancel;
