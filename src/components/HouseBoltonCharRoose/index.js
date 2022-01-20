// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './houseBoltonCharRoose.scss';

// == Composant
class HouseBoltonCharRoose extends React.Component {
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
    axios.get('http://localhost:5050/charactersByFamilly/Bolton')
      .then((res) => {
        this.setState({ firstname: res.data[1].firstname });
        this.setState({ lastname: res.data[1].lastname });
        this.setState({ citation: res.data[1].citation });
        this.setState({ title: res.data[1].title });
        this.setState({ alias: res.data[1].alias });
        this.setState({ presentation: res.data[1].presentation });
        this.setState({ statut: res.data[1].statut });
        this.setState({ old: res.data[1].old });
        this.setState({ deaddate: res.data[1].deaddate });
        this.setState({ birthdate: res.data[1].birthdate });
        this.setState({ origin: res.data[1].origin });
        this.setState({ allegency: res.data[1].allegency });
        this.setState({ culture: res.data[1].culture });
        this.setState({ relation: res.data[1].relation });
        this.setState({ parents: res.data[1].parents });
        this.setState({ children: res.data[1].children });
        this.setState({ fratrie: res.data[1].fratrie });
        this.setState({ familly: res.data[1].familly });
        this.setState({ context: res.data[1].context });
        this.setState({ picture: res.data[1].picture });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="houseBoltonCharRoose">
        <div className="houseBoltonCharRoose-container">
          <h1 className="houseBoltonCharRoose-identity">{this.state.firstname} {this.state.lastname}</h1>
          <img className="houseBoltonCharRoose-img" src={this.state.picture} alt="Portrait du personnage" />
          <div className="houseBoltonCharRoose-caracteristic">
            <div className="houseBoltonCharRoose-owner">
              <p className="houseBoltonCharRoose-citation">Citation: {this.state.citation}</p>
              <p className="houseBoltonCharRoose-title">Titre: {this.state.title}</p>
              <p className="houseBoltonCharRoose-alias">Alias: {this.state.alias}</p>
            </div>
            <div className="houseBoltonCharRoose-informations">
              <p className="houseBoltonCharRoose-status">Status: {this.state.statut}</p>
              <p className="houseBoltonCharRoose-old">Age: {this.state.old}</p>
              <p className="houseBoltonCharRoose-deaddate">Mort: {this.state.deaddate}</p>
              <p className="houseBoltonCharRoose-birthdate">Naissance: {this.state.birthdate}</p>
            </div>
            <div className="houseBoltonCharRoose-loyalty">
              <p className="houseBoltonCharRoose-origin">Origine: {this.state.origin}</p>
              <p className="houseBoltonCharRoose-allegency">Allégence: {this.state.allegency}</p>
              <p className="houseBoltonCharRoose-culture">Culture: {this.state.culture}</p>
            </div>
            <div className="houseBoltonCharRoose-famillyInfo">
              <p className="houseBoltonCharRoose-relation">Relation: {this.state.relation}</p>
              <p className="houseBoltonCharRoose-parents">Parents: {this.state.parents}</p>
              <p className="houseBoltonCharRoose-children">Enfants: {this.state.children}</p>
              <p className="houseBoltonCharRoose-fratrie">Fratrie: {this.state.fratrie}</p>
              <p className="houseBoltonCharRoose-familly">Famille: {this.state.familly}</p>
            </div>
          </div>
          <h2 className="houseBoltonCharRoose-subTitle">Présentation</h2>
          <p className="houseBoltonCharRoose-content">{this.state.presentation}</p>
          <h2 className="houseBoltonCharRoose-subTitle">Context</h2>
          <p className="houseBoltonCharRoose-content">{this.state.context}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseBoltonCharRoose;
