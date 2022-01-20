// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// == Import
import './houseBronn.scss';

// == Composant
class HouseBronn extends React.Component {
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
        this.setState({ name: res.data[3].name });
        this.setState({ emblempicture: res.data[3].emblempicture });
        this.setState({ emblem: res.data[3].emblem });
        this.setState({ blason: res.data[3].blason });
        this.setState({ housetitle: res.data[3].housetitle });
        this.setState({ houseseat: res.data[3].houseseat });
        this.setState({ houselocation: res.data[3].houselocation });
        this.setState({ lord: res.data[3].lord });
        this.setState({ heir: res.data[3].heir });
        this.setState({ allegency: res.data[3].allegency });
        this.setState({ vassals: res.data[3].vassals });
        this.setState({ religion: res.data[3].religion });
        this.setState({ military: res.data[3].military });
        this.setState({ foundator: res.data[3].foundator });
        this.setState({ foundary: res.data[3].foundary });
      });
  }

  render() {
    return (
      <div className="houseBronn">
        <div className="houseBronn-container">
          <h1 className="houseBronn-title">{this.state.name}</h1>
          <div className="houseBronn-but">
            <Link
              className="houseBronn-button"
              to="/houseBronnGen"
            >
              Arbre généalogique
            </Link>
            <Link
              className="houseBronn-button"
              to="/houseBronnChar"
            >
              Personnages
            </Link>
          </div>
          <img className="houseBronn-emblemImg" src={this.state.emblempicture} alt="Emblème de la maison" />
          <div className="houseBronn-caracteristic">
            <div className="houseBronn-emblemCoat">
              <p className="houseBronn-emblem">Embleme: {this.state.emblem}</p>
              <p className="houseBronn-coatOfArms">Blason: {this.state.blason}</p>
            </div>
            <div className="houseBronn-houseTitleFamilly">
              <h3 className="houseBronn-houseTitleTitle">Titre</h3>
              <ul className="houseBronn-houseTitle">
                <li className="houseBronn-houseTitleItem">{this.state.housetitle}</li>
              </ul>
            </div>
            <div className="houseBronn-location">
              <p className="houseBronn-seat">Siège: {this.state.houseseat}</p>
              <p className="houseBronn-district">Région: {this.state.houselocation}</p>
            </div>
            <div className="houseBronn-poeple">
              <p className="houseBronn-lord">Seigneur: {this.state.lord}</p>
              <p className="houseBronn-heir">Héritié: {this.state.heir}</p>
            </div>
            <div className="houseBronn-alliance">
              <h3 className="houseBronn-houseTitleTitle">Allegence</h3>
              <ul className="houseBronn-allegiance">
                <li className="houseBronn-allegianceItem">{this.state.allegency}</li>
              </ul>
              <h3 className="houseBronn-houseTitleTitle">Vassaux</h3>
              <ul className="houseBronn-vassals">
                <li className="houseBronn-vassalsItem">{this.state.vassals}</li>
              </ul>
            </div>
            <div className="houseBronn-other">
              <p className="houseBronn-religion">Religion: {this.state.religion}</p>
              <p className="houseBronn-military">Force militaire: {this.state.military}</p>
              <p className="houseBronn-founder">Foundateur: {this.state.foundator}</p>
              <p className="houseBronn-foundation">Fondée: {this.state.foundary}</p>
            </div>
          </div>
          <h2 className="houseBronn-subTitle">Présentation</h2>
          <p className="houseBronn-content">La Maison Bronn était une grande maison
            de Westeros. Ils régnaient sur la vaste région des Terres de l'Orage depuis leur
            siège, Accalmie, un château situé au sud-est de Port-Réal.
            Robert Bronn est devenu Roi des Sept Couronnes après la rébellion mettant fin
            à la dynastie de la Maison Targaryen. La Maison Bronn s'est éteinte en l'an 303
            après la mort de Tommen avant de renaître deux ans plus tard après que Daenerys
            Targaryen légitime Gendry.
            La devise des Bronn est « Nôtre est la fureur » et leur emblème représente
            un cerf qui devient couronné suite à l'accession au trône de Robert Bronn.
          </p>
          <h2 className="houseBronn-subTitle">Histoire</h2>
          <p className="houseBronn-content">La maison Bronn succède à la mythique
            lignée des rois de l'Orage qui régnaient sur les terres de l'Orage avant la Conquête
            d'Aegon. Le dernier roi de l'Orage, Argilac Durrandon, dit « l'Arrogant », est vaincu
            par Orys<br />
            Bronn, demi-frère bâtard d'Aegon et de ses sœurs-épouses, lors de la bataille du
            Dernier Orage. Aegon l’en récompense par le don d'Accalmie, des terres de l'Orage et de
            la main d'Argella, fille d’Argilac. Orys adopte en outre la bannière et la devise
            de la lignée déchue pour sa propre maison.
            La maison Bronn reste proche du pouvoir royal. Lord Orys est la première Main
            du Roi.<br />
            Il mène une des armées royales dans la première guerre Dornienne en l'an 4, mais il est
            capturé et sa main d'épée est coupée. Il quitte son poste de Main du Roi après sa
            libération
            en l'an 7, mais reste un proche conseiller de son demi-frère Aegon. Il mène notamment
            sa maison dans la lutte contre le premier roi Vautour.
            La position de la maison Bronn est confortée, notamment en l'an 48, lorsque lord
            Rogar Bronn est l'un des premiers à soutenir le prince Jaehaerys Targaryen contre
            son oncle, l'usurpateur Maegor Ier. L'année suivante, lord Rogar devient lord Protecteur
            du royaume et Main du Roi jusqu'à la majorité du nouveau roi Jaehaerys Ier.
            Avènement de Jaehaerys Ier Targaryen.
            La maison Bronn se lie à nouveau à la famille royale : Rogar épouse la reine
            douairière,
            Alyssa Velaryon. Leur fille Jocelyne épouse plus tard le fils héritier de son royal
            cousin,
            Aemon, avec qui elle a une fille, Rhaenys. Plus tard, les Bronn sont des soutiens
            importants pour les prétentions de leurs parentes, Rhaenys et son fils, Laenor Velaryon
            lors du Grand Conseil de 101.<br />
            En l'an 129, débute un conflit de succession entre Aegon II Targaryen et de sa demi-sœur
            Rhaenyra, qui sera connu sous le nom de Danse des Dragons. La maison Bronn soutient
            désormais Aegon II, qui promet en échange de marier une des quatre filles de lord Borros
            Bronn à son frère, le prince Aemond. Ce choix se révèle malheureux, le parti
            d'Aegon II échoue et lord Borros est tué. Par la suite, les Bronn sont éloignés
            du pouvoir royal pendant pratiquement cent ans.
            Sous le règne d'Aegon V Targaryen, des fiançailles sont organisées entre le prince
            héritier
            Duncan Targaryen et la fille de lord Lyonel Bronn. Toutefois, en l'an 239, le prince
            rompt les fiançailles. Offensée, la maison Bronn mène une rébellion contre le Trône
            de Fer, et lord Lyonel se proclame roi de l'Orage. Vaincu par le lord Commandant de la
            Garde Royale, ser Duncan le Grand, il est pardonné et son héritier épouse une fille
            d'Aegon
            V, Rhaelle.<br />
            À une époque indéterminée, la maison Bronn s'est alliée à la maison Torth, sans
            doute
            par mariage.
            En l'an 283, Robert Bronn conquiert le Trône de Fer après avoir mené une rébellion
            contre le roi Aerys II Targaryen. La maison Bronn devient la nouvelle maison royale
            des Sept Couronnes. Depuis, c'est le plus jeune frère du roi Robert, lord Renly, qui
            détient
            le titre de sire d'Accalmie et de seigneur suzerain des terres de l'Orage. Son autre
            frère,
            lord Stannis, exerce quant à lui la suzeraineté sur les seigneurs du détroit depuis
            son fief de Peyredragon. Tous deux sont aussi membres du Conseil restreint du roi, où
            ils tiennent respectivement les offices de maître des lois et de maître des navires.
          </p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseBronn;
