// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseBronnCharLaNera.scss';

// == Composant
class HouseBronnCharLaNera extends React.Component {
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
    axios.get('http://localhost:5050/charactersByFamilly/Bronn')
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
      <div className="houseBronnCharLaNera">
        <div className="houseBronnCharLaNera-container">
          <h1 className="houseBronnCharLaNera-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseBronnCharLaNera-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseBronnCharLaNera-caracteristic">
            <div className="houseBronnCharLaNera-owner">
              <p className="houseBronnCharLaNera-citation">Citation: {this.state.citation}</p>
              <p className="houseBronnCharLaNera-title">Titre: {this.state.title}</p>
              <p className="houseBronnCharLaNera-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseBronnCharLaNera-informations">
              <p className="houseBronnCharLaNera-status">Status: {this.state.statut}</p>
              <p className="houseBronnCharLaNera-old">Age: {this.state.old}</p>
              <p className="houseBronnCharLaNera-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseBronnCharLaNera-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseBronnCharLaNera-loyalty">
              <p className="houseBronnCharLaNera-origin">Origine: {this.state.origin}</p>
              <p className="houseBronnCharLaNera-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseBronnCharLaNera-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseBronnCharLaNera-famillyInfo">
              <p className="houseBronnCharLaNera-relation">Relation: {this.state.relation}</p>
              <p className="houseBronnCharLaNera-parents">Parents: {this.state.parents}</p>
              <p className="houseBronnCharLaNera-children">Enfants: {this.state.children}</p>
              <p className="houseBronnCharLaNera-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseBronnCharLaNera-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseBronnCharLaNera-subTitle">Présentation</h2>
          <p className="houseBronnCharLaNera-content">{this.state.presentation}</p>
          <h2 className="houseBronnCharLaNera-subTitle">Context</h2>
          <p className="houseBronnCharLaNera-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseBronnCharLaNera;
