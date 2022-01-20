// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseLannisterCharTyrion.scss';

// == Composant
class HouseLannisterCharTyrion extends React.Component {
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
        this.setState({ firstname: res.data[7].firstname });
        this.setState({ lastname: res.data[7].lastname });
        this.setState({ citation: res.data[7].citation });
        this.setState({ title: res.data[7].title });
        this.setState({ alias: res.data[7].alias });
        this.setState({ presentation: res.data[7].presentation });
        this.setState({ statut: res.data[7].statut });
        this.setState({ old: res.data[7].old });
        this.setState({ deaddate: res.data[7].deaddate });
        this.setState({ birthdate: res.data[7].birthdate });
        this.setState({ origin: res.data[7].origin });
        this.setState({ allegency: res.data[7].allegency });
        this.setState({ culture: res.data[7].culture });
        this.setState({ relation: res.data[7].relation });
        this.setState({ parents: res.data[7].parents });
        this.setState({ children: res.data[7].children });
        this.setState({ fratrie: res.data[7].fratrie });
        this.setState({ familly: res.data[7].familly });
        this.setState({ context: res.data[7].context });
        this.setState({ picture: res.data[7].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="houseLannisterCharTyrion">
        <div className="houseLannisterCharTyrion-container">
          <h1 className="houseLannisterCharTyrion-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseLannisterCharTyrion-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseLannisterCharTyrion-caracteristic">
            <div className="houseLannisterCharTyrion-owner">
              <p className="houseLannisterCharTyrion-citation">Citation: {this.state.citation}</p>
              <p className="houseLannisterCharTyrion-title">Titre: {this.state.title}</p>
              <p className="houseLannisterCharTyrion-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseLannisterCharTyrion-informations">
              <p className="houseLannisterCharTyrion-status">Status: {this.state.statut}</p>
              <p className="houseLannisterCharTyrion-old">Age: {this.state.old}</p>
              <p className="houseLannisterCharTyrion-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseLannisterCharTyrion-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseLannisterCharTyrion-loyalty">
              <p className="houseLannisterCharTyrion-origin">Origine: {this.state.origin}</p>
              <p className="houseLannisterCharTyrion-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseLannisterCharTyrion-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseLannisterCharTyrion-famillyInfo">
              <p className="houseLannisterCharTyrion-relation">Relation: {this.state.relation}</p>
              <p className="houseLannisterCharTyrion-parents">Parents: {this.state.parents}</p>
              <p className="houseLannisterCharTyrion-children">Enfants: {this.state.children}</p>
              <p className="houseLannisterCharTyrion-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseLannisterCharTyrion-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseLannisterCharTyrion-subTitle">Présentation</h2>
          <p className="houseLannisterCharTyrion-content">{this.state.presentation}</p>
          <h2 className="houseLannisterCharTyrion-subTitle">Context</h2>
          <p className="houseLannisterCharTyrion-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseLannisterCharTyrion;
