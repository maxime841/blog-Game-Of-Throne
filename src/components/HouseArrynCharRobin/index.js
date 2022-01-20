// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseArrynCharRobin.scss';

// == Composant
class HouseArrynCharRobin extends React.Component {
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
    axios.get('http://localhost:5050/charactersByFamilly/Arryn')
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
      <div className="houseArrynCharRobin">
        <div className="houseArrynCharRobin-container">
          <h1 className="houseArrynCharRobin-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseArrynCharRobin-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseArrynCharRobin-caracteristic">
            <div className="houseArrynCharRobin-owner">
              <p className="houseArrynCharRobin-citation">Citation: {this.state.citation}</p>
              <p className="houseArrynCharRobin-title">Titre: {this.state.title}</p>
              <p className="houseArrynCharRobin-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseArrynCharRobin-informations">
              <p className="houseArrynCharRobin-status">Status: {this.state.statut}</p>
              <p className="houseArrynCharRobin-old">Age: {this.state.old}</p>
              <p className="houseArrynCharRobin-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseArrynCharRobin-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseArrynCharRobin-loyalty">
              <p className="houseArrynCharRobin-origin">Origine: {this.state.origin}</p>
              <p className="houseArrynCharRobin-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseArrynCharRobin-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseArrynCharRobin-famillyInfo">
              <p className="houseArrynCharRobin-relation">Relation: {this.state.relation}</p>
              <p className="houseArrynCharRobin-parents">Parents: {this.state.parents}</p>
              <p className="houseArrynCharRobin-children">Enfants: {this.state.children}</p>
              <p className="houseArrynCharRobin-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseArrynCharRobin-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseArrynCharRobin-subTitle">Présentation</h2>
          <p className="houseArrynCharRobin-content">{this.state.presentation}</p>
          <h2 className="houseArrynCharRobin-subTitle">Context</h2>
          <p className="houseArrynCharRobin-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseArrynCharRobin;
