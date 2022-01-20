// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseTargaryenCharRhaegar.scss';

// == Composant
class HouseTargaryenCharRhaegar extends React.Component {
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
    axios.get('http://localhost:5050/charactersByFamilly/Targaryen')
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
      <div className="houseTargaryenCharRhaegar">
        <div className="houseTargaryenCharRhaegar-container">
          <h1 className="houseTargaryenCharRhaegar-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseTargaryenCharRhaegar-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseTargaryenCharRhaegar-caracteristic">
            <div className="houseTargaryenCharRhaegar-owner">
              <p className="houseTargaryenCharRhaegar-citation">Citation: {this.state.citation}</p>
              <p className="houseTargaryenCharRhaegar-title">Titre: {this.state.title}</p>
              <p className="houseTargaryenCharRhaegar-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseTargaryenCharRhaegar-informations">
              <p className="houseTargaryenCharRhaegar-status">Status: {this.state.statut}</p>
              <p className="houseTargaryenCharRhaegar-old">Age: {this.state.old}</p>
              <p className="houseTargaryenCharRhaegar-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseTargaryenCharRhaegar-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseTargaryenCharRhaegar-loyalty">
              <p className="houseTargaryenCharRhaegar-origin">Origine: {this.state.origin}</p>
              <p className="houseTargaryenCharRhaegar-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseTargaryenCharRhaegar-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseTargaryenCharRhaegar-famillyInfo">
              <p className="houseTargaryenCharRhaegar-relation">Relation: {this.state.relation}</p>
              <p className="houseTargaryenCharRhaegar-parents">Parents: {this.state.parents}</p>
              <p className="houseTargaryenCharRhaegar-children">Enfants: {this.state.children}</p>
              <p className="houseTargaryenCharRhaegar-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseTargaryenCharRhaegar-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseTargaryenCharRhaegar-subTitle">Présentation</h2>
          <p className="houseTargaryenCharRhaegar-content">{this.state.presentation}</p>
          <h2 className="houseTargaryenCharRhaegar-subTitle">Context</h2>
          <p className="houseTargaryenCharRhaegar-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseTargaryenCharRhaegar;

