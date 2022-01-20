// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseStarkCharRobb.scss';

// == Composant
class HouseStarkCharRobb extends React.Component {
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
      <div className="houseStarkCharRobb">
        <div className="houseStarkCharRobb-container">
          <h1 className="houseStarkCharRobb-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseStarkCharRobb-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseStarkCharRobb-caracteristic">
            <div className="houseStarkCharRobb-owner">
              <p className="houseStarkCharRobb-citation">Citation: {this.state.citation}</p>
              <p className="houseStarkCharRobb-title">Titre: {this.state.title}</p>
              <p className="houseStarkCharRobb-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseStarkCharRobb-informations">
              <p className="houseStarkCharRobb-status">Status: {this.state.statut}</p>
              <p className="houseStarkCharRobb-old">Age: {this.state.old}</p>
              <p className="houseStarkCharRobb-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseStarkCharRobb-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseStarkCharRobb-loyalty">
              <p className="houseStarkCharRobb-origin">Origine: {this.state.origin}</p>
              <p className="houseStarkCharRobb-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseStarkCharRobb-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseStarkCharRobb-famillyInfo">
              <p className="houseStarkCharRobb-relation">Relation: {this.state.relation}</p>
              <p className="houseStarkCharRobb-parents">Parents: {this.state.parents}</p>
              <p className="houseStarkCharRobb-children">Enfants: {this.state.children}</p>
              <p className="houseStarkCharRobb-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseStarkCharRobb-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseStarkCharRobb-subTitle">Présentation</h2>
          <p className="houseStarkCharRobb-content">{this.state.presentation}</p>
          <h2 className="houseStarkCharRobb-subTitle">Context</h2>
          <p className="houseStarkCharRobb-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseStarkCharRobb;
