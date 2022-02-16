// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// == Import
import './houseTully.scss';

// == Composant
class HouseTully extends React.Component {
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
        this.setState({ name: res.data[10].name });
        this.setState({ emblempicture: res.data[10].emblempicture });
        this.setState({ emblem: res.data[10].emblem });
        this.setState({ blason: res.data[10].blason });
        this.setState({ housetitle: res.data[10].housetitle });
        this.setState({ houseseat: res.data[10].houseseat });
        this.setState({ houselocation: res.data[10].houselocation });
        this.setState({ lord: res.data[10].lord });
        this.setState({ heir: res.data[10].heir });
        this.setState({ allegency: res.data[10].allegency });
        this.setState({ vassals: res.data[10].vassals });
        this.setState({ religion: res.data[10].religion });
        this.setState({ military: res.data[10].military });
        this.setState({ foundator: res.data[10].foundator });
        this.setState({ foundary: res.data[10].foundary });
      });
  }

  render() {
    return (
      <div className="houseTully">
        <div className="houseTully-container">
          <h1 className="houseTully-title">{this.state.name}</h1>
          <a className="houseTully-buttonBack" href="/houses">Retour</a>
          <div className="houseTully-but">
            <Link
              className="houseTully-button"
              to="/houseTullyGen"
            >
              Arbre généalogique
            </Link>
            <Link
              className="houseTully-button"
              to="/houseTullyChar"
            >
              Personnages
            </Link>
          </div>
          <img className="houseTully-emblemImg" src={this.state.emblempicture} alt="Emblème de la maison" />
          <div className="houseTully-caracteristic">
            <div className="houseTully-emblemCoat">
              <p className="houseTully-emblem">Embleme: {this.state.emblem}</p>
              <p className="houseTully-coatOfArms">Blason: {this.state.blason}</p>
            </div>
            <div className="houseTully-houseTitleFamilly">
              <h3 className="houseTully-houseTitleTitle">Titre</h3>
              <ul className="houseTully-houseTitle">
                <li className="houseTully-houseTitleItem">{this.state.housetitle}</li>
              </ul>
            </div>
            <div className="houseTully-location">
              <p className="houseTully-seat">Siège: {this.state.houseseat}</p>
              <p className="houseTully-district">Région: {this.state.houselocation}</p>
            </div>
            <div className="houseTully-poeple">
              <p className="houseTully-lord">Seigneur: {this.state.lord}</p>
              <p className="houseTully-heir">Héritié: {this.state.heir}</p>
            </div>
            <div className="houseTully-alliance">
              <h3 className="houseTully-houseTitleTitle">Allegence</h3>
              <ul className="houseTully-allegiance">
                <li className="houseTully-allegianceItem">{this.state.allegency}</li>
              </ul>
              <h3 className="houseTully-houseTitleTitle">Vassaux</h3>
              <ul className="houseTully-vassals">
                <li className="houseTully-vassalsItem">{this.state.vassals}</li>
              </ul>
            </div>
            <div className="houseTully-other">
              <p className="houseTully-religion">Religion: {this.state.religion}</p>
              <p className="houseTully-military">Force militaire: {this.state.military}</p>
              <p className="houseTully-founder">Foundateur: {this.state.foundator}</p>
              <p className="houseTully-foundation">Fondée: {this.state.foundary}</p>
            </div>
          </div>
          <h2 className="houseTully-subTitle">Présentation</h2>
          <p className="houseTully-content">La maison Tully est la maison suzeraine du Conflans
            depuis la Conquête d'Aegon Ier Targaryen. Le Conflans est une région
            traditionnellement querelleuse, et les Tully ont parfois fait face à des difficultés
            pour imposer leur autorité à leurs vassaux.<br />
            Les armoiries de la maison Tully arborent une truite d'argent sur le rouge de la
            Ruffurque en crue et le bleu de la Culbute qui se rejoignent à Vivesaigues, leur
            demeure. Les Tully se distinguent par leurs cheveux auburn et leurs yeux bleus.
          </p>
          <h2 className="houseTully-subTitle">Histoire</h2>
          <p className="houseTully-content"><h3>De l'Âge des Héros à l'arrivée des Andals</h3>
            Les Tully peuvent faire remonter leur ascendance jusqu'aux Premiers Hommes.
            Contrairement à d'autres maisons suzeraines comme les Stark, les Arryn ou les
            Lannister, les Tully n'ont jamais été rois même s'ils ont souvent épousé des membres
            de familles royales. Leur nom apparaît dans bien des anciennes chroniques du Conflans.
            Le premier Edmure Tully et ses fils combattent les Andals au côté du roi Tristifer
            IV d'Alluve. Après l'extinction de la maison d'Alluve, il se soumet à l'un de ses
            vainqueurs, Armistead Vance, et ce dernier octroie à son fils, lord Axel Tully,
            le confluent de la Ruffurque et de la Culbute. Lord Axel y construit Vivesaigues.<br />
            <h3>Les royaumes andals</h3>
            Défendant le Conflans contre les terres de l'Ouest, les Tully acquièrent fortune et
            prestige, et les différents rois des Rivières et des Collines recherchent leur amitié.
            Ils profitent aussi de la querelle millénaire opposant les prestigieuses maisons
            Nerbosc et Bracken pour être reconnus comme la plus puissante maison du Conflans.
            A l'époque où le Conflans est dominé par la maison Durrandon d'Accalmie, les Tully
            reçoivent des charges de premiers plans et des postes de confiance. Après la conquête
            du Conflans par les Fer-nés, les Tully deviennent les seigneurs les plus puissants de
            la région.<br />
            <h3>La Conquête</h3>
            Aegon Ier Targaryen débute sa Conquête des Sept Couronnes, par l'invasion du Conflans,
            tenu par Harren Chenu et les Fer-nés. Le climat de guerre permanent et la disette
            poussent les riverains à accueillir chaleureusement Aegon, Harren étant perçu comme un
            tyran. Edmyn Tully est le premier lord de la région à se rebeller et à rejoindre les
            Targaryen d'Aegon le Conquérant qui fit de lui le seigneur suzerain du Conflans après
            la Conquête. Les autres seigneurs riverains lui rendent immédiatement hommage.<br />
            <h3>Le règne des Targaryen</h3>
            Au cours du règne d'Aegon Ier Targaryen, les Tully renforcent leur autorité sur les
            seigneurs riverains, notamment en mariant une de leurs filles au nouveau sire
            d'Harrenhal, lord Quenton Qoherys. En l'an 7, lord Edmyn Tully devient la seconde
            Main du Roi Aegon Ier Targaryen, à la suite d'Orys Baratheon. Il démissionne deux ans
            plus tard, pour retourner à Vivesaigues, auprès des siens.<br />
            En l'an 43, les Tully prennent le parti du roi Maegor Ier Targaryen, contre son neveu,
            le jeune prétendant au Trône de Fer Aegon Targaryen. Ils se joignent aux forces de lord
            Lucas Herpivoie d'Harrenhal et descendent vers l'Œildieu. La bataille qui s'ensuit
            cause la perte du prétendant. Cinq ans plus tard, alors que Maegor a perdu toute
            autorité, les Tully reçoivent en invité le rebelle ser Joffrey Doguette, qui contrôle
            les terres au nord de la Dent d'Or. Il semble que les Tully se rallient ensuite au
            prince Jaehaerys Ier Targaryen, lorsque celui-ci proclame son intention de détrôner
            son oncle, l'usurpateur Maegor.<br />
            Lors du Grand Conseil de 101, lord Grover Tully soutient le droit au Trône de Fer du
            prince Viserys Targaryen, qui est désigné comme héritier du roi des Sept Couronnes
            Jaehaerys Ier Targaryen. Au cours du règne de Viserys Ier Targaryen, des fils de lord
            Grover auraient fait la cour à la princesse héritière, Rhaenyra Targaryen. Lorsqu'éclate
            en l'an 129 la guerre de succession connue sous le nom de Danse des Dragons, lord
            Grover Tully veut soutenir le prétendant Aegon II, mais son petit-fils, ser Elmo Tully,
            profite de sa faiblesse. L'héritier de Vivesaigues fait barrer les portes et descend
            les bannières. Les Tully rejoignent le parti des Noirs, qui soutiennent les prétentions
            de la reine des Sept Couronnes Rhaenyra Targaryen. Leurs forces sont présentes lors de
            la bataille de Chutebourg. Lord Grover meurt cette année-là, faisant d'Elmo le seigneur
            de la maison et sire de Vivesaigues. Mais lui-même meurt quarante-neuf jours plus tard,
            léguant le titre à son fils, Kermit Tully. Celui-ci commande l'armée qui défait les
            partisans d'Aegon II mené par lord Borros Baratheon d'Accalmie, lors de la bataille de
            la route Royale.<br />
            Les Tully sont restés fidèles aux Targaryen au cours de toutes les rébellions Feunoyr.
            Au cours du règne d'Aegon V Targaryen, les Tully espèrent se rapprocher de la lignée
            royale en mariant une de leurs filles, Celia Tully, au prince Jaehaerys Targaryen.
            Toutefois, celui-ci rompt ces fiançailles, lorsqu'il épouse sa sœur, Shaera Targaryen.
            Toujours fidèles aux Targaryen, les Tully participent à la guerre des Rois à Neuf Sous.
          </p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseTully;
