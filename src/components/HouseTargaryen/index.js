// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// == Import
import './houseTargaryen.scss';

// == Composant
class HouseTargaryen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      emblempicture: [],
      emblem: [],
      blason: [],
      housetitle: [],
      houseseat: [],
      houselocation: [],
      lord: [],
      heir: [],
      allegency: [],
      vassals: [],
      religion: [],
      military: [],
      foundator: [],
      foundary: [],
      treegen: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5050/houses')
      .then((res) => {
        this.setState({ name: res.data[9].name });
        this.setState({ emblempicture: res.data[9].emblempicture });
        this.setState({ emblem: res.data[9].emblem });
        this.setState({ blason: res.data[9].blason });
        this.setState({ housetitle: res.data[9].housetitle });
        this.setState({ houseseat: res.data[9].houseseat });
        this.setState({ houselocation: res.data[9].houselocation });
        this.setState({ lord: res.data[9].lord });
        this.setState({ heir: res.data[9].heir });
        this.setState({ allegency: res.data[9].allegency });
        this.setState({ vassals: res.data[9].vassals });
        this.setState({ religion: res.data[9].religion });
        this.setState({ military: res.data[9].military });
        this.setState({ foundator: res.data[9].foundator });
        this.setState({ foundary: res.data[9].foundary });
      });
  }

  render() {
    return (
      <div className="houseTargaryen">
        <div className="houseTargaryen-container">
          <h1 className="houseTargaryen-title">{this.state.name}</h1>
          <a className="houseTargaryen-buttonBack" href="/houses">Retour</a>
          <div className="houseTargaryen-but">
            <Link
              className="houseTargaryen-button"
              to="/houseTargaryenGen"
            >
              Arbre généalogique
            </Link>
            <Link
              className="houseTargaryen-button"
              to="/houseTargaryenChar"
            >
              Personnages
            </Link>
          </div>
          <img className="houseTargaryen-emblemImg" src={this.state.emblempicture} alt="Emblème de la maison" />
          <div className="houseTargaryen-caracteristic">
            <div className="houseTargaryen-emblemCoat">
              <p className="houseTargaryen-emblem">Embleme: {this.state.emblem}</p>
              <p className="houseTargaryen-coatOfArms">Blason: {this.state.blason}</p>
            </div>
            <div className="houseTargaryen-houseTitleFamilly">
              <h3 className="houseTargaryen-houseTitleTitle">Titre</h3>
              <ul className="houseTargaryen-houseTitle">
                <li className="houseTargaryen-houseTitleItem">{this.state.housetitle}</li>
              </ul>
            </div>
            <div className="houseTargaryen-location">
              <p className="houseTargaryen-seat">Siège: {this.state.houseseat}</p>
              <p className="houseTargaryen-district">Région: {this.state.houselocation}</p>
            </div>
            <div className="houseTargaryen-poeple">
              <p className="houseTargaryen-lord">Seigneur: {this.state.lord}</p>
              <p className="houseTargaryen-heir">Héritié: {this.state.heir}</p>
            </div>
            <div className="houseTargaryen-alliance">
              <h3 className="houseTargaryen-houseTitleTitle">Allegence</h3>
              <ul className="houseTargaryen-allegiance">
                <li className="houseTargaryen-allegianceItem">{this.state.allegency}</li>
              </ul>
              <h3 className="houseTargaryen-houseTitleTitle">Vassaux</h3>
              <ul className="houseTargaryen-vassals">
                <li className="houseTargaryen-vassalsItem">{this.state.vassals}</li>
              </ul>
            </div>
            <div className="houseTargaryen-other">
              <p className="houseTargaryen-religion">Religion: {this.state.religion}</p>
              <p className="houseTargaryen-military">Force militaire: {this.state.military}</p>
              <p className="houseTargaryen-founder">Foundateur: {this.state.foundator}</p>
              <p className="houseTargaryen-foundation">Fondée: {this.state.foundary}</p>
            </div>
          </div>
          <h2 className="houseTargaryen-subTitle">Présentation</h2>
          <p className="houseTargaryen-content">La maison Targaryen est issue d’une ancienne
            maison de l'antique Valyria. Afin de préserver la pureté de cette ascendance,
            ses membres pratiquent régulièrement le mariage incestueux, perpétuant ainsi
            une ancienne coutume valyrienne. Ils pratiquèrent également la polygamie, mais
            plus rarement ; on ne connaît que deux Targaryen qui eurent plusieurs femmes à
            la fois, le fondateur de la dynastie, Aegon le Conquérant et son fils Maegor Ier.<br />
            La maison Targaryen est liée au symbolisme du feu, que ce soit celui des dragons
            ou celui employé par les anciens sorciers des Possessions. Ses membres apprécient
            ainsi les fortes températures et les bains brûlants. Ils sont incinérés sur un bûcher
            funéraire à leur mort.
          </p>
          <h2 className="houseTargaryen-subTitle">Histoire</h2>
          <p className="houseTargaryen-content"><h3>Avant la Conquête</h3>
            La maison Targaryen était une des maisons nobles de l'antique Valyria, mais ne
            comptait pas parmi les plus puissantes familles. En l'an 114 av.-C., douze ans
            avant le Fléau, Daenys, fille du chef de famille Aenar, prédit ce dernier. Aenar
            embarqua alors avec toute sa famille et ses cinq dragons (dont Balerion) pour
            Peyredragon. Cette fuite fut considérée comme une lâcheté par les autres maisons
            valyriennes. Les Targaryen furent ainsi la seule famille noble de Valyria dont les
            dragons survécurent.<br />
            Les Targaryen régnèrent ensuite sur Peyredragon durant le Siècle de Sang. Leur usage
            des corbeaux messagers étant attesté avant la Conquête, il est probable qu'un mestre
            faisait alors partie de la maisonnée targaryenne.<br />
            <h3>La Conquête</h3>
            Aegon le Conquérant, ses sœurs et ses dragons envahirent six des sept royaumes de
            Westeros (d'où le nom du futur royaume des Sept Couronnes) lors de la guerre de
            la Conquête. Le dragon à trois têtes de leur blason représente ainsi Aegon le
            Conquérant et ses deux sœurs, Rhaenys et Visenya, mais aussi leurs trois dragons
            : Vhagar, Meraxès et Balerion.
          </p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseTargaryen;
