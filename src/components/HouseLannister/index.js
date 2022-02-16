// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// == Import
import './houseLannister.scss';

// == Composant
class HouseLannister extends React.Component {
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
        this.setState({ name: res.data[6].name });
        this.setState({ emblempicture: res.data[6].emblempicture });
        this.setState({ emblem: res.data[6].emblem });
        this.setState({ blason: res.data[6].blason });
        this.setState({ housetitle: res.data[6].housetitle });
        this.setState({ houseseat: res.data[6].houseseat });
        this.setState({ houselocation: res.data[6].houselocation });
        this.setState({ lord: res.data[6].lord });
        this.setState({ heir: res.data[6].heir });
        this.setState({ allegency: res.data[6].allegency });
        this.setState({ vassals: res.data[6].vassals });
        this.setState({ religion: res.data[6].religion });
        this.setState({ military: res.data[6].military });
        this.setState({ foundator: res.data[6].foundator });
        this.setState({ foundary: res.data[6].foundary });
      });
  }

  render() {
    return (
      <div className="houseLannister">
        <div className="houseLannister-container">
          <h1 className="houseLannister-title">{this.state.name}</h1>
          <a className="houseLannister-buttonBack" href="/houses">Retour</a>
          <div className="houseLannister-but">
            <Link
              className="houseLannister-button"
              to="/houseLannisterGen"
            >
              Arbre généalogique
            </Link>
            <Link
              className="houseLannister-button"
              to="/houseLannisterChar"
            >
              Personnages
            </Link>
          </div>
          <img className="houseLannister-emblemImg" src={this.state.emblempicture} alt="Emblème de la maison" />
          <div className="houseLannister-caracteristic">
            <div className="houseLannister-emblemCoat">
              <p className="houseLannister-emblem">Embleme: {this.state.emblem}</p>
              <p className="houseLannister-coatOfArms">Blason: {this.state.blason}</p>
            </div>
            <div className="houseLannister-houseTitleFamilly">
              <h3 className="houseLannister-houseTitleTitle">Titre</h3>
              <ul className="houseLannister-houseTitle">
                <li className="houseLannister-houseTitleItem">{this.state.housetitle}</li>
              </ul>
            </div>
            <div className="houseLannister-location">
              <p className="houseLannister-seat">Siège: {this.state.houseseat}</p>
              <p className="houseLannister-district">Région: {this.state.houselocation}</p>
            </div>
            <div className="houseLannister-poeple">
              <p className="houseLannister-lord">Seigneur: {this.state.lord}</p>
              <p className="houseLannister-heir">Héritié: {this.state.heir}</p>
            </div>
            <div className="houseLannister-alliance">
              <h3 className="houseLannister-houseTitleTitle">Allegence</h3>
              <ul className="houseLannister-allegiance">
                <li className="houseLannister-allegianceItem">{this.state.allegency}</li>
              </ul>
              <h3 className="houseLannister-houseTitleTitle">Vassaux</h3>
              <ul className="houseLannister-vassals">
                <li className="houseLannister-vassalsItem">{this.state.vassals}</li>
              </ul>
            </div>
            <div className="houseLannister-other">
              <p className="houseLannister-religion">Religion: {this.state.religion}</p>
              <p className="houseLannister-military">Force militaire: {this.state.military}</p>
              <p className="houseLannister-founder">Foundateur: {this.state.foundator}</p>
              <p className="houseLannister-foundation">Fondée: {this.state.foundary}</p>
            </div>
          </div>
          <h2 className="houseLannister-subTitle">Présentation</h2>
          <p className="houseLannister-content">Grands, blonds et avenants, les Lannister sont
            la plus riche et certainement la plus puissante de toutes les familles du royaume des
            Sept Couronnes, notamment grâce aux mines aurifères de l'Ouest. Ils descendent d'une
            antique lignée des Premiers Hommes dont le fondateur légendaire est Lann le Futé,
            personnage de l'Âge des Héros qui prit par ruse la forteresse de Castral Roc à la
            maison Castral et d’aventuriers andals qui se sont mêlés aux Premiers Hommes
            de l'Ouest sous les règnes de Tyrion III, puis de son fils Gerold II.<br />
            Depuis leur fief de Castral Roc, ils règnent, en tant que maison suzeraine, sur les
            terres de l'Ouest. Il existe plusieurs branches cadettes de la maison Lannister,
            notamment à Port-Lannis. De nombreuses familles leur sont par ailleurs apparentées,
            tels que les Lannys, Lannett ou encore Lantell.
          </p>
          <h2 className="houseLannister-subTitle">Histoire</h2>
          <p className="houseLannister-content">Avant la Conquête, les Lannister règnent sur
            l'Ouest en tant que rois du Roc et sire de Castral Roc pendant des siècles
            (certains d'entre eux épousent alors des membres de la maison Ouestrelin, plus
            puissante naguère qu'aujourd'hui).
            Au cours du siècle précédant le Fléau de Valyria, la maison Lannister acheta à
            prix d'or Rugissante, une épée en acier valyrien. Elle fut perdue par le roi
            Tommen II Lannister un siècle plus tard lorsqu'il se mit en tête de s'emparer
            des richesses et des secrets de l'antique Valyria.<br />
            Après le débarquement d'Aegon le Conquérant et la chute du roi Harren Chenu à
            Harrenhal, le roi Loren Lannister fait cause commune avec le roi Mern Jardinier
            du Bief afin de repousser l'envahisseur targaryen. Ils sont tous deux défaits
            à la bataille du Champ de Feu, et Loren, captif, ploie le genou devant le
            Conquérant, qui fait de lui son seigneur suzerain de l'Ouest, vassal du Trône
            de Fer.<br />
            En pleine guerre de la Foi, lord Lyman Lannister accorde sa protection au couple
            princier, Aegon et sa sœur-épouse Rhaena Targaryen. Toutefois, il refuse de
            soutenir ouvertement le prince contre son oncle, Maegor Ier Targaryen, qui a
            usurpé sa couronne. En revanche, en l'an 48, les Lannister rejoignent le parti
            de son frère cadet Jaehaerys Ier Targaryen contre Maegor.<br />
            Durant la Danse des Dragons, les Lannister sont des alliés du roi Aegon II
            Targaryen et des Verts. Jason Lannister, alors seigneur suzerain des terres
            de l'Ouest, mène une armée contre les seigneurs du Conflans, alliés de Rhaenyra
            Targaryen et des Noirs.<br />
            En l'an 291, Gerion Lannister, le plus jeune frère de lord Tywin Lannister,
            parti à la recherche de Rugissante, disparaît en mer.
            Il semble que la maison Lannister ait toujours méprisé la Garde de Nuit et ce
            qu'elle incarne.
          </p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseLannister;
