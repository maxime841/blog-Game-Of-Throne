// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// == Import
import './houseBaratheon.scss';

// == Composant
class HouseBaratheon extends React.Component {
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
        this.setState({ name: res.data[1].name });
        this.setState({ emblempicture: res.data[1].emblempicture });
        this.setState({ emblem: res.data[1].emblem });
        this.setState({ blason: res.data[1].blason });
        this.setState({ housetitle: res.data[1].housetitle });
        this.setState({ houseseat: res.data[1].houseseat });
        this.setState({ houselocation: res.data[1].houselocation });
        this.setState({ lord: res.data[1].lord });
        this.setState({ heir: res.data[1].heir });
        this.setState({ allegency: res.data[1].allegency });
        this.setState({ vassals: res.data[1].vassals });
        this.setState({ religion: res.data[1].religion });
        this.setState({ military: res.data[1].military });
        this.setState({ foundator: res.data[1].foundator });
        this.setState({ foundary: res.data[1].foundary });
      });
  }

  render() {
    return (
      <div className="houseBaratheon">
        <div className="houseBaratheon-container">
          <h1 className="houseBaratheon-title">{this.state.name}</h1>
          <div className="houseBaratheon-but">
            <Link
              className="houseBaratheon-button"
              to="/houseBaratheonGen"
            >
              Arbre généalogique
            </Link>
            <Link
              className="houseBaratheon-button"
              to="/houseBaratheonChar"
            >
              Personnages
            </Link>
          </div>
          <img className="houseBaratheon-emblemImg" src={this.state.emblempicture} alt="Emblème de la maison" />
          <div className="houseBaratheon-caracteristic">
            <div className="houseBaratheon-emblemCoat">
              <p className="houseBaratheon-emblem">Embleme: {this.state.emblem}</p>
              <p className="houseBaratheon-coatOfArms">Blason: {this.state.blason}</p>
            </div>
            <div className="houseBaratheon-houseTitleFamilly">
              <h3 className="houseBaratheon-houseTitleTitle">Titre</h3>
              <ul className="houseBaratheon-houseTitle">
                <li className="houseBaratheon-houseTitleItem">{this.state.housetitle}</li>
              </ul>
            </div>
            <div className="houseBaratheon-location">
              <p className="houseBaratheon-seat">Siège: {this.state.houseseat}</p>
              <p className="houseBaratheon-district">Région: {this.state.houselocation}</p>
            </div>
            <div className="houseBaratheon-poeple">
              <p className="houseBaratheon-lord">Seigneur: {this.state.lord}</p>
              <p className="houseBaratheon-heir">Héritié: {this.state.heir}</p>
            </div>
            <div className="houseBaratheon-alliance">
              <h3 className="houseBaratheon-houseTitleTitle">Allegence</h3>
              <ul className="houseBaratheon-allegiance">
                <li className="houseBaratheon-allegianceItem">{this.state.allegency}</li>
              </ul>
              <h3 className="houseBaratheon-houseTitleTitle">Vassaux</h3>
              <ul className="houseBaratheon-vassals">
                <li className="houseBaratheon-vassalsItem">{this.state.vassals}</li>
              </ul>
            </div>
            <div className="houseBaratheon-other">
              <p className="houseBaratheon-religion">Religion: {this.state.religion}</p>
              <p className="houseBaratheon-military">Force militaire: {this.state.military}</p>
              <p className="houseBaratheon-founder">Foundateur: {this.state.foundator}</p>
              <p className="houseBaratheon-foundation">Fondée: {this.state.foundary}</p>
            </div>
          </div>
          <h2 className="houseBaratheon-subTitle">Présentation</h2>
          <p className="houseBaratheon-content">La Maison Baratheon était une grande maison
            de Westeros. Ils régnaient sur la vaste région des Terres de l'Orage depuis leur
            siège, Accalmie, un château situé au sud-est de Port-Réal.
            Robert Baratheon est devenu Roi des Sept Couronnes après la rébellion mettant fin
            à la dynastie de la Maison Targaryen. La Maison Baratheon s'est éteinte en l'an 303
            après la mort de Tommen avant de renaître deux ans plus tard après que Daenerys
            Targaryen légitime Gendry.
            La devise des Baratheon est « Nôtre est la fureur » et leur emblème représente
            un cerf qui devient couronné suite à l'accession au trône de Robert Baratheon.
          </p>
          <h2 className="houseBaratheon-subTitle">Histoire</h2>
          <p className="houseBaratheon-content">La maison Baratheon succède à la mythique
            lignée des rois de l'Orage qui régnaient sur les terres de l'Orage avant la Conquête
            d'Aegon. Le dernier roi de l'Orage, Argilac Durrandon, dit « l'Arrogant », est vaincu
            par Orys
            Baratheon, demi-frère bâtard d'Aegon et de ses sœurs-épouses, lors de la bataille du
            Dernier Orage. Aegon l’en récompense par le don d'Accalmie, des terres de l'Orage et de
            la main d'Argella, fille d’Argilac. Orys adopte en outre la bannière et la devise
            de la lignée déchue pour sa propre maison.
            La maison Baratheon reste proche du pouvoir royal. Lord Orys est la première Main
            du Roi.
            Il mène une des armées royales dans la première guerre Dornienne en l'an 4, mais il est
            capturé et sa main d'épée est coupée. Il quitte son poste de Main du Roi après sa
            libération
            en l'an 7, mais reste un proche conseiller de son demi-frère Aegon. Il mène notamment
            sa maison dans la lutte contre le premier roi Vautour.
            La position de la maison Baratheon est confortée, notamment en l'an 48, lorsque lord
            Rogar Baratheon est l'un des premiers à soutenir le prince Jaehaerys Targaryen contre
            son oncle, l'usurpateur Maegor Ier. L'année suivante, lord Rogar devient lord Protecteur
            du royaume et Main du Roi jusqu'à la majorité du nouveau roi Jaehaerys Ier.
            Avènement de Jaehaerys Ier Targaryen.
            La maison Baratheon se lie à nouveau à la famille royale : Rogar épouse la reine
            douairière,
            Alyssa Velaryon. Leur fille Jocelyne épouse plus tard le fils héritier de son royal
            cousin,
            Aemon, avec qui elle a une fille, Rhaenys. Plus tard, les Baratheon sont des soutiens
            importants pour les prétentions de leurs parentes, Rhaenys et son fils, Laenor Velaryon
            lors du Grand Conseil de 101.
            En l'an 129, débute un conflit de succession entre Aegon II Targaryen et de sa demi-sœur
            Rhaenyra, qui sera connu sous le nom de Danse des Dragons. La maison Baratheon soutient
            désormais Aegon II, qui promet en échange de marier une des quatre filles de lord Borros
            Baratheon à son frère, le prince Aemond. Ce choix se révèle malheureux, le parti
            d'Aegon II échoue et lord Borros est tué. Par la suite, les Baratheon sont éloignés
            du pouvoir royal pendant pratiquement cent ans.
            Sous le règne d'Aegon V Targaryen, des fiançailles sont organisées entre le prince
            héritier
            Duncan Targaryen et la fille de lord Lyonel Baratheon. Toutefois, en l'an 239, le prince
            rompt les fiançailles. Offensée, la maison Baratheon mène une rébellion contre le Trône
            de Fer, et lord Lyonel se proclame roi de l'Orage. Vaincu par le lord Commandant de la
            Garde Royale, ser Duncan le Grand, il est pardonné et son héritier épouse une fille
            d'Aegon
            V, Rhaelle.
            À une époque indéterminée, la maison Baratheon s'est alliée à la maison Torth, sans
            doute
            par mariage.
            En l'an 283, Robert Baratheon conquiert le Trône de Fer après avoir mené une rébellion
            contre le roi Aerys II Targaryen. La maison Baratheon devient la nouvelle maison royale
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
export default HouseBaratheon;
