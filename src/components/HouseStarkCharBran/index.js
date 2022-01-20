// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseStarkCharBran.scss';

// == Composant
class HouseStarkCharBran extends React.Component {
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
        this.setState({ firstname: res.data[2].firstname });
        this.setState({ lastname: res.data[2].lastname });
        this.setState({ citation: res.data[2].citation });
        this.setState({ title: res.data[2].title });
        this.setState({ alias: res.data[2].alias });
        this.setState({ presentation: res.data[2].presentation });
        this.setState({ statut: res.data[2].statut });
        this.setState({ old: res.data[2].old });
        this.setState({ deaddate: res.data[2].deaddate });
        this.setState({ birthdate: res.data[2].birthdate });
        this.setState({ origin: res.data[2].origin });
        this.setState({ allegency: res.data[2].allegency });
        this.setState({ culture: res.data[2].culture });
        this.setState({ relation: res.data[2].relation });
        this.setState({ parents: res.data[2].parents });
        this.setState({ children: res.data[2].children });
        this.setState({ fratrie: res.data[2].fratrie });
        this.setState({ familly: res.data[2].familly });
        this.setState({ context: res.data[2].context });
        this.setState({ picture: res.data[2].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="houseStarkCharBran">
        <div className="houseStarkCharBran-container">
          <h1 className="houseStarkCharBran-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseStarkCharBran-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseStarkCharBran-caracteristic">
            <div className="houseStarkCharBran-owner">
              <p className="houseStarkCharBran-citation">Citation: {this.state.citation}</p>
              <p className="houseStarkCharBran-title">Titre: {this.state.title}</p>
              <p className="houseStarkCharBran-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseStarkCharBran-informations">
              <p className="houseStarkCharBran-status">Status: {this.state.statut}</p>
              <p className="houseStarkCharBran-old">Age: {this.state.old}</p>
              <p className="houseStarkCharBran-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseStarkCharBran-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseStarkCharBran-loyalty">
              <p className="houseStarkCharBran-origin">Origine: {this.state.origin}</p>
              <p className="houseStarkCharBran-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseStarkCharBran-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseStarkCharBran-famillyInfo">
              <p className="houseStarkCharBran-relation">Relation: {this.state.relation}</p>
              <p className="houseStarkCharBran-parents">Parents: {this.state.parents}</p>
              <p className="houseStarkCharBran-children">Enfants: {this.state.children}</p>
              <p className="houseStarkCharBran-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseStarkCharBran-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseStarkCharBran-subTitle">Présentation</h2>
          <p className="houseStarkCharBran-content">{this.state.presentation}</p>
          <h2 className="houseStarkCharBran-subTitle">Context</h2>
          <p className="houseStarkCharBran-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseStarkCharBran;
