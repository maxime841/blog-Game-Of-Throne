// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// == Import
import './houseStark.scss';

// == Composant
class HouseStark extends React.Component {
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
        this.setState({ name: res.data[8].name });
        this.setState({ emblempicture: res.data[8].emblempicture });
        this.setState({ emblem: res.data[8].emblem });
        this.setState({ blason: res.data[8].blason });
        this.setState({ housetitle: res.data[8].housetitle });
        this.setState({ houseseat: res.data[8].houseseat });
        this.setState({ houselocation: res.data[8].houselocation });
        this.setState({ lord: res.data[8].lord });
        this.setState({ heir: res.data[8].heir });
        this.setState({ allegency: res.data[8].allegency });
        this.setState({ vassals: res.data[8].vassals });
        this.setState({ religion: res.data[8].religion });
        this.setState({ military: res.data[8].military });
        this.setState({ foundator: res.data[8].foundator });
        this.setState({ foundary: res.data[8].foundary });
      });
  }

  render() {
    return (
      <div className="houseStark">
        <div className="houseStark-container">
          <h1 className="houseStark-title">{this.state.name}</h1>
          <a className="houseStark-buttonBack" href="/houses">Retour</a>
          <div className="houseStark-but">
            <Link
              className="houseStark-button"
              to="/houseStarkGen"
            >
              Arbre généalogique
            </Link>
            <Link
              className="houseStark-button"
              to="/houseStarkChar"
            >
              Personnages
            </Link>
          </div>
          <img className="houseStark-emblemImg" src={this.state.emblempicture} alt="Emblème de la maison" />
          <div className="houseStark-caracteristic">
            <div className="houseStark-emblemCoat">
              <p className="houseStark-emblem">Embleme: {this.state.emblem}</p>
              <p className="houseStark-coatOfArms">Blason: {this.state.blason}</p>
            </div>
            <div className="houseStark-houseTitleFamilly">
              <h3 className="houseStark-houseTitleTitle">Titre</h3>
              <ul className="houseStark-houseTitle">
                <li className="houseStark-houseTitleItem">{this.state.housetitle}</li>
              </ul>
            </div>
            <div className="houseStark-location">
              <p className="houseStark-seat">Siège: {this.state.houseseat}</p>
              <p className="houseStark-district">Région: {this.state.houselocation}</p>
            </div>
            <div className="houseStark-poeple">
              <p className="houseStark-lord">Seigneur: {this.state.lord}</p>
              <p className="houseStark-heir">Héritié: {this.state.heir}</p>
            </div>
            <div className="houseStark-alliance">
              <h3 className="houseStark-houseTitleTitle">Allegence</h3>
              <ul className="houseStark-allegiance">
                <li className="houseStark-allegianceItem">{this.state.allegency}</li>
              </ul>
              <h3 className="houseStark-houseTitleTitle">Vassaux</h3>
              <ul className="houseStark-vassals">
                <li className="houseStark-vassalsItem">{this.state.vassals}</li>
              </ul>
            </div>
            <div className="houseStark-other">
              <p className="houseStark-religion">Religion: {this.state.religion}</p>
              <p className="houseStark-military">Force militaire: {this.state.military}</p>
              <p className="houseStark-founder">Foundateur: {this.state.foundator}</p>
              <p className="houseStark-foundation">Fondée: {this.state.foundary}</p>
            </div>
          </div>
          <h2 className="houseStark-subTitle">Présentation</h2>
          <p className="houseStark-content">Les Stark demeurent à Winterfell depuis près de huit
            mille ans, et le sang des Premiers Hommes coule dans leurs veines. De mémoire d'homme,
            la maison Stark a toujours siégé à Winterfell. Elle a dû s'imposer face aux autres
            grandes maisons du Nord, les Bolton étant les derniers à se soumettre, et non sans
            difficultés. Mais elle a acquis un prestige et une popularité sans égaux, et la très
            grande majorité des maisons du Nord la respectent et lui sont d'une loyauté indéfectible
            (on dit qu'une pucelle peut emprunter la route Royale sans crainte tant qu'un Stark
            réside à Winterfell), y compris les farouches clans des montagnes. Depuis la Conquête,
            elle est la maison suzeraine du Nord.<br />
            Winterfell a été bâtie par le légendaire Brandon le Bâtisseur. Depuis, il doit toujours
            y avoir un Stark siégeant à Winterfell; lorsque le seigneur en titre doit s'en absenter,
            son héritier y reste pour assurer la permanence de cette présence. Il est alors surnommé
            « le Stark de Winterfell ».<br />
            Traditionnellement, la maison Stark s'est toujours trouvée aux côtés de la Garde de Nuit
            pour lutter contre les attaques venues d'au-delà du Mur, celles des Autres à l'époque du
            Roi de la Nuit, mais surtout celles des sauvageons : Joramun, les rois frères Gendel et
            Gorne, le Seigneur aux Cornes, Baël le Barde et enfin Raymun Barberouge. Toutes ces
            attaques se brisèrent sur le Mur, ou sur Winterfell. La maison Stark et la Garde de
            nuit y forgèrent une longue et ancienne collaboration, et un respect mutuel.<br />
            Environ trois siècles avant la Conquête, le roi du Nord intervient contre les
            commandants de Glacière et de Fort-Nox, qui s'étaient alliés après s'être combattus,
            et qui avaient assassiné le lord Commandant qui tentait de les arrêter. Il les fait
            exécuter tous deux pour ce meurtre.<br />
            Lord Eddard Stark est l'actuel seigneur de Winterfell et du Nord. Il est le meilleur
            ami du roi Robert Baratheon. Tous deux ont été pupilles aux Eyrié. Eddard a combattu
            aux côtés de Robert pendant la guerre contre le roi Aerys le Fol. Les membres de cette
            maison sont réputés fiers et particulièrement attachés au sens de l'honneur. De leurs
            serviteurs, ils requièrent courage, loyauté et probité sans faille. La légende veut que
            les Stark aient du sang de loup, mais qu'il n'ait pas la même force chez tous les
            membres de la famille.
          </p>
          <h2 className="houseStark-subTitle">Histoire</h2>
          <p className="houseStark-content"><h3>Origine mythologique</h3>
            Selon les légendes, la maison Stark aurait été fondée peu après la Longue Nuit,
            par le héros mythique Brandon le Bâtisseur. Certaines légendes du Bief affirment
            que Brandon le Bâtisseur était le fils du légendaire héros Brandon à la Lame Sanglante,
            lui-même fils du mythique Premier Roi des Premiers Hommes Garth Mainverte.<br />
            Avec l’aide des enfants de la forêt ou des géants, dépendant des sources, Brandon
            le Bâtisseur aurait bâti le Mur et Winterfell. Certaines sources lui attribuent
            également les constructions d'Accalmie et de la cinquième Grand-Tour de
            Villevieille. Ce serait également lui qui, selon d’autres légendes, aurait donné
            le Don-Bran à la toute jeune Garde de Nuit.<br />
            Après la Longue Nuit, les Stark régnèrent sur le Nord durant 8000 ans en tant que
            rois de l'Hiver, puis rois du Nord et ce jusqu’à la Conquête des Sept Couronnes par
            les Targaryen.<br />
            Durant l'Âge des Héros, le 13ème lord Commandant de la Garde de Nuit serait tombé
            amoureux d’une femme à la peau aussi blanche que la lune et aux yeux semblables à
            des étoiles bleues. La ramenant à Fort-Nox, il la déclara reine et se couronna roi
            de la Nuit. À l’aide de sortilèges, il ensorcela la Garde de Nuit et aurait également
            fait des sacrifices aux Autres. Au bout de treize années de règne, le roi de l'Hiver
            Brandon Stark le Briseur et le roi d'au-delà du Mur Joramun s’allièrent et renversèrent
            le roi de la Nuit. L'identité du roi de la Nuit est inconnue. D'après certaines versions
            du conte, Brandon le Briseur aurait effacé toutes traces de son nom afin de dissimuler
            que le roi de la Nuit était lui-même un Stark. Dans ses contes, Vieille Nan prétend même
            qu’il s'agissait du propre frère de Brandon le Briseur.<br />
            Des ballades conservées à la Citadelle racontent qu’un Stark roi de l’Hiver chassa les
            géants du Nord. Un autre roi Stark inconnu se serait battu durant une guerre légendaire
            appelée la guerre des Loups, où il aurait affronté et tué le change-peau Gaven Loupgris
            et ses frères. Durant une guerre pour conquérir la presqu'île de Merdragon, les Stark
            auraient dû faire face au roi Garou et aux enfants de la forêt. Les Stark tuèrent le Roi
            Garou, massacrèrent ses fils, ses animaux, et ses alliés Vervoyants, ne laissant en vie
            que les filles, qu’ils emmènent chez eux comme captives.
          </p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseStark;
