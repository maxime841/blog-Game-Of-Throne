// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseStarkCharRickon.scss';

// == Composant
class HouseStarkCharRickon extends React.Component {
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
    axios.get('http://localhost:5050/charactersByFamilly/Stark')
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
      <div className="houseStarkCharRickon">
        <div className="houseStarkCharRickon-container">
          <h1 className="houseStarkCharRickon-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseStarkCharRickon-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseStarkCharRickon-caracteristic">
            <div className="houseStarkCharRickon-owner">
              <p className="houseStarkCharRickon-citation">Citation: {this.state.citation}</p>
              <p className="houseStarkCharRickon-title">Titre: {this.state.title}</p>
              <p className="houseStarkCharRickon-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseStarkCharRickon-informations">
              <p className="houseStarkCharRickon-status">Status: {this.state.statut}</p>
              <p className="houseStarkCharRickon-old">Age: {this.state.old}</p>
              <p className="houseStarkCharRickon-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseStarkCharRickon-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseStarkCharRickon-loyalty">
              <p className="houseStarkCharRickon-origin">Origine: {this.state.origin}</p>
              <p className="houseStarkCharRickon-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseStarkCharRickon-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseStarkCharRickon-famillyInfo">
              <p className="houseStarkCharRickon-relation">Relation: {this.state.relation}</p>
              <p className="houseStarkCharRickon-parents">Parents: {this.state.parents}</p>
              <p className="houseStarkCharRickon-children">Enfants: {this.state.children}</p>
              <p className="houseStarkCharRickon-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseStarkCharRickon-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseStarkCharRickon-subTitle">Présentation</h2>
          <p className="houseStarkCharRickon-content">{this.state.presentation}</p>
          <h2 className="houseStarkCharRickon-subTitle">Context</h2>
          <p className="houseStarkCharRickon-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseStarkCharRickon;
