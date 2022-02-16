// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// == Import
import './houseFrey.scss';

// == Composant
class HouseFrey extends React.Component {
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
        this.setState({ name: res.data[4].name });
        this.setState({ emblempicture: res.data[4].emblempicture });
        this.setState({ emblem: res.data[4].emblem });
        this.setState({ blason: res.data[4].blason });
        this.setState({ housetitle: res.data[4].housetitle });
        this.setState({ houseseat: res.data[4].houseseat });
        this.setState({ houselocation: res.data[4].houselocation });
        this.setState({ lord: res.data[4].lord });
        this.setState({ heir: res.data[4].heir });
        this.setState({ allegency: res.data[4].allegency });
        this.setState({ vassals: res.data[4].vassals });
        this.setState({ religion: res.data[4].religion });
        this.setState({ military: res.data[4].military });
        this.setState({ foundator: res.data[4].foundator });
        this.setState({ foundary: res.data[4].foundary });
      });
  }

  render() {
    return (
      <div className="houseFrey">
        <div className="houseFrey-container">
          <h1 className="houseFrey-title">{this.state.name}</h1>
          <a className="houseFrey-buttonBack" href="/houses">Retour</a>
          <div className="houseFrey-but">
            <Link
              className="houseFrey-button"
              to="/houseFreyGen"
            >
              Arbre généalogique
            </Link>
            <Link
              className="houseFrey-button"
              to="/houseFreyChar"
            >
              Personnages
            </Link>
          </div>
          <img className="houseFrey-emblemImg" src={this.state.emblempicture} alt="Emblème de la maison" />
          <div className="houseFrey-caracteristic">
            <div className="houseFrey-emblemCoat">
              <p className="houseFrey-emblem">Embleme: {this.state.emblem}</p>
              <p className="houseFrey-coatOfArms">Blason: {this.state.blason}</p>
            </div>
            <div className="houseFrey-houseTitleFamilly">
              <h3 className="houseFrey-houseTitleTitle">Titre</h3>
              <ul className="houseFrey-houseTitle">
                <li className="houseFrey-houseTitleItem">{this.state.housetitle}</li>
              </ul>
            </div>
            <div className="houseFrey-location">
              <p className="houseFrey-seat">Siège: {this.state.houseseat}</p>
              <p className="houseFrey-district">Région: {this.state.houselocation}</p>
            </div>
            <div className="houseFrey-poeple">
              <p className="houseFrey-lord">Seigneur: {this.state.lord}</p>
              <p className="houseFrey-heir">Héritié: {this.state.heir}</p>
            </div>
            <div className="houseFrey-alliance">
              <h3 className="houseFrey-houseTitleTitle">Allegence</h3>
              <ul className="houseFrey-allegiance">
                <li className="houseFrey-allegianceItem">{this.state.allegency}</li>
              </ul>
              <h3 className="houseFrey-houseTitleTitle">Vassaux</h3>
              <ul className="houseFrey-vassals">
                <li className="houseFrey-vassalsItem">{this.state.vassals}</li>
              </ul>
            </div>
            <div className="houseFrey-other">
              <p className="houseFrey-religion">Religion: {this.state.religion}</p>
              <p className="houseFrey-military">Force militaire: {this.state.military}</p>
              <p className="houseFrey-founder">Foundateur: {this.state.foundator}</p>
              <p className="houseFrey-foundation">Fondée: {this.state.foundary}</p>
            </div>
          </div>
          <h2 className="houseFrey-subTitle">Présentation</h2>
          <p className="houseFrey-content">La maison Frey est une des plus jeunes maisons
            d'importance de Westeros. Elle a été fondée environ six siècles avant le début
            de la saga, lorsque son fondateur a été anobli et a reçu ses terres. Elle tire
            une bonne partie de sa richesse et de sa puissance de sa demeure : les Jumeaux
            sont en effet un des rares passages sur la Verfurque où passe la route entre le
            Nord et le Conflans. Les Frey ont pu y établir un fructueux péage, qui fait leur
            richesse et leur vaut le titre de sire du Pont. Avec le temps, ils sont
            devenus les plus puissants vassaux de la maison Tully. Ils sont notamment capables
            de déployer des armées plus importantes que les Tully eux-mêmes. Toutefois, les
            maisons plus anciennes les toisent toujours comme des parvenus.<br />
            Les membres de la maison Frey sont nombreux à avoir un nez allongé et un menton
            effacé, ce qui les fait ressembler à une belette. Ces traits physiques distinctifs
            sont hérités de leur prolifique géniteur, lord Walder, et permettent de les
            reconnaître même au sein d'une foule.<br />
            Le nombre conséquent d'héritiers potentiels des Jumeaux contribue au fait que les
            relations entre les membres de la maison soient des plus tendues et que les
            rivalités y soient légion. De surcroît, il est impossible pour lord Walder de doter
            tous ses rejetons de terres, et beaucoup d'entre eux ne disposent d'aucun revenu en
            propre. Les ragots et les trahisons sont donc monnaie courante dans cette maisonnée
            où il semble difficile pour les individus de se faire remarquer et reconnaître.
          </p>
          <h2 className="houseFrey-subTitle">Histoire</h2>
          <p className="houseFrey-content">Lors de la Conquête de Westeros par les Targaryen,
            les maisons Bracken, Nerbosc, Mallister, Vance, Piper, Fort et Frey sont parmi les
            premières à suivre lord Edmyn Tully dans sa rébellion contre le roi Harren le Noir
            et sa soumission à Aegon le Conquérant.<br />
            À la fin de l'an 43, lord Frey se déclare pour le prétendant Aegon le Sans-Couronne,
            fils aîné du précédent roi Aenys Ier Targaryen, contre son oncle, l'usurpateur Maegor
            Ier. Après la défaite d'Aegon et de ses alliés lors de la bataille sous l'Œildieu,
            la maison Frey perd sans doute des terres et doit donner des otages.<br />
            En l'an 112, les Jumeaux sont visités par la princesse Rhaenyra Targaryen au cours de
            sa pérégrination à travers le Conflans. Un fils cadet de lord Frey, Forrest, est assez
            audacieux pour demander spontanément sa main. Il est rebuté et surnommé dès lors Frey
            le Sot. Des années plus tard, au cours de la Danse des Dragons, Forrest Frey devenu
            chevalier s'engage auprès des partisans de Rhaenyra. Après la prise d'Harrenhal,
            la forteresse devient le point de ralliement des seigneurs riverains. Menés par le
            prince Daemon Targaryen sur son dragon Caraxès, les troupes de la maison Frey
            participent notamment à la prise de la Haye-Pierre, siège de la maison Bracken, soutien
            d'Aegon II Targaryen. Devenu seigneur de sa maison, lord Forrest Frey compte deux
            cents chevaliers et six cents fantassins. Ils se joignent aux Loups de l'Hiver de lord
            Roderick Dustin de Tertre-bourg et aux Nerbosc menés par Robb Rivers. Ils piègent les
            Lannister menés par lord Humfrey Lefford contre l'Œildieu et y livrent la plus terrible
            et sanglante bataille de toute la guerre, la bataille de la Berge du Lac. Lord Forrest
            Frey y trouve la mort.<br />
            La veuve de lord Forrest, lady Sabitha Vyprin, mène dès lors les troupes de la maison
            Frey et assure la régence de leur héritier. Elle reprend Harrenhal, mais doit fuir
            lorsque le prince Aemond Targaryen y revient avec son dragon Vhagar. Elle se réfugie
            aux Jumeaux. Elle rejoint l'armée des seigneurs riverains lors de la seconde bataille
            de Chutebourg, puis lors de la bataille de la route Royale. Malgré sa position,
            à l'issue de la guerre, lady Sabitha Frey ne devient pas une des régentes du nouveau
            roi, Aegon III Targaryen, mais il semble qu'elle n'en ait pas été offensée.<br />
            En l'an 135, six cents Frey se joignent à l'ost de ser Robert Rowan pour régler le
            conflit de succession de Jeyne Arryn dans le Val.<br />
            En l'an 209, des Frey participent au tournoi de Cendregué.
          </p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseFrey;
