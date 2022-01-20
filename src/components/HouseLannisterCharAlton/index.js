// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseLannisterCharAlton.scss';

// == Composant
class HouseLannisterCharAlton extends React.Component {
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
        this.setState({ firstname: res.data[0].firstname });
        this.setState({ lastname: res.data[0].lastname });
        this.setState({ citation: res.data[0].citation });
        this.setState({ title: res.data[0].title });
        this.setState({ alias: res.data[0].alias });
        this.setState({ presentation: res.data[0].presentation });
        this.setState({ statut: res.data[0].statut });
        this.setState({ old: res.data[0].old });
        this.setState({ deaddate: res.data[0].deaddate });
        this.setState({ birthdate: res.data[0].birthdate });
        this.setState({ origin: res.data[0].origin });
        this.setState({ allegency: res.data[0].allegency });
        this.setState({ culture: res.data[0].culture });
        this.setState({ relation: res.data[0].relation });
        this.setState({ parents: res.data[0].parents });
        this.setState({ children: res.data[0].children });
        this.setState({ fratrie: res.data[0].fratrie });
        this.setState({ familly: res.data[0].familly });
        this.setState({ context: res.data[0].context });
        this.setState({ picture: res.data[0].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="houseLannisterCharAlton">
        <div className="houseLannisterCharAlton-container">
          <h1 className="houseLannisterCharAlton-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseLannisterCharAlton-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseLannisterCharAlton-caracteristic">
            <div className="houseLannisterCharAlton-owner">
              <p className="houseLannisterCharAlton-citation">Citation: {this.state.citation}</p>
              <p className="houseLannisterCharAlton-title">Titre: {this.state.title}</p>
              <p className="houseLannisterCharAlton-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseLannisterCharAlton-informations">
              <p className="houseLannisterCharAlton-status">Status: {this.state.statut}</p>
              <p className="houseLannisterCharAlton-old">Age: {this.state.old}</p>
              <p className="houseLannisterCharAlton-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseLannisterCharAlton-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseLannisterCharAlton-loyalty">
              <p className="houseLannisterCharAlton-origin">Origine: {this.state.origin}</p>
              <p className="houseLannisterCharAlton-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseLannisterCharAlton-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseLannisterCharAlton-famillyInfo">
              <p className="houseLannisterCharAlton-relation">Relation: {this.state.relation}</p>
              <p className="houseLannisterCharAlton-parents">Parents: {this.state.parents}</p>
              <p className="houseLannisterCharAlton-children">Enfants: {this.state.children}</p>
              <p className="houseLannisterCharAlton-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseLannisterCharAlton-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseLannisterCharAlton-subTitle">Présentation</h2>
          <p className="houseLannisterCharAlton-content">{this.state.presentation}</p>
          <h2 className="houseLannisterCharAlton-subTitle">Context</h2>
          <p className="houseLannisterCharAlton-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseLannisterCharAlton;
