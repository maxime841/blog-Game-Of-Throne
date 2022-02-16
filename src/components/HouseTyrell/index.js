// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// == Import
import './houseTyrell.scss';

// == Composant
class HouseTyrell extends React.Component {
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
        this.setState({ name: res.data[11].name });
        this.setState({ emblempicture: res.data[11].emblempicture });
        this.setState({ emblem: res.data[11].emblem });
        this.setState({ blason: res.data[11].blason });
        this.setState({ housetitle: res.data[11].housetitle });
        this.setState({ houseseat: res.data[11].houseseat });
        this.setState({ houselocation: res.data[11].houselocation });
        this.setState({ lord: res.data[11].lord });
        this.setState({ heir: res.data[11].heir });
        this.setState({ allegency: res.data[11].allegency });
        this.setState({ vassals: res.data[11].vassals });
        this.setState({ religion: res.data[11].religion });
        this.setState({ military: res.data[11].military });
        this.setState({ foundator: res.data[11].foundator });
        this.setState({ foundary: res.data[11].foundary });
      });
  }

  render() {
    return (
      <div className="houseTyrell">
        <div className="houseTyrell-container">
          <h1 className="houseTyrell-title">{this.state.name}</h1>
          <a className="houseTyrell-buttonBack" href="/houses">Retour</a>
          <div className="houseTyrell-but">
            <Link
              className="houseTyrell-button"
              to="/houseTyrellGen"
            >
              Arbre généalogique
            </Link>
            <Link
              className="houseTyrell-button"
              to="/houseTyrellChar"
            >
              Personnages
            </Link>
          </div>
          <img className="houseTyrell-emblemImg" src={this.state.emblempicture} alt="Emblème de la maison" />
          <div className="houseTyrell-caracteristic">
            <div className="houseTyrell-emblemCoat">
              <p className="houseTyrell-emblem">Embleme: {this.state.emblem}</p>
              <p className="houseTyrell-coatOfArms">Blason: {this.state.blason}</p>
            </div>
            <div className="houseTyrell-houseTitleFamilly">
              <h3 className="houseTyrell-houseTitleTitle">Titre</h3>
              <ul className="houseTyrell-houseTitle">
                <li className="houseTyrell-houseTitleItem">{this.state.housetitle}</li>
              </ul>
            </div>
            <div className="houseTyrell-location">
              <p className="houseTyrell-seat">Siège: {this.state.houseseat}</p>
              <p className="houseTyrell-district">Région: {this.state.houselocation}</p>
            </div>
            <div className="houseTyrell-poeple">
              <p className="houseTyrell-lord">Seigneur: {this.state.lord}</p>
              <p className="houseTyrell-heir">Héritié: {this.state.heir}</p>
            </div>
            <div className="houseTyrell-alliance">
              <h3 className="houseTyrell-houseTitleTitle">Allegence</h3>
              <ul className="houseTyrell-allegiance">
                <li className="houseTyrell-allegianceItem">{this.state.allegency}</li>
              </ul>
              <h3 className="houseTyrell-houseTitleTitle">Vassaux</h3>
              <ul className="houseTyrell-vassals">
                <li className="houseTyrell-vassalsItem">{this.state.vassals}</li>
              </ul>
            </div>
            <div className="houseTyrell-other">
              <p className="houseTyrell-religion">Religion: {this.state.religion}</p>
              <p className="houseTyrell-military">Force militaire: {this.state.military}</p>
              <p className="houseTyrell-founder">Foundateur: {this.state.foundator}</p>
              <p className="houseTyrell-foundation">Fondée: {this.state.foundary}</p>
            </div>
          </div>
          <h2 className="houseTyrell-subTitle">Présentation</h2>
          <p className="houseTyrell-content">La maison Tyrell de Hautjardin est la maison suzeraine
            du Bief depuis la Conquête. C'est une maison riche et puissante, capable, avec ses
            vassaux, de réunir cinquante mille épées. Le seigneur de la maison Tyrell porte
            le titre traditionnel de Grand Maréchal du Bief et de gouverneur du Sud, et ce
            probablement depuis la Conquête. En outre, le seigneur de la maison Tyrell porte
            traditionnellement le titre de Défenseur des Marches. Le seigneur actuel de la
            maison Tyrell est lord Mace Tyrell.
          </p>
          <h2 className="houseTyrell-subTitle">Histoire</h2>
          <p className="houseTyrell-content"><h3>L'ascension des Tyrell</h3>
            Bien qu'issus d'une lignée andale, comme d'autres, les Tyrell font remonter leur
            ascendance jusqu'au prolifique Garth Mainverte, probablement afin de renforcer
            leur position récente de maison suzeraine, laquelle est fragile et pourrait être
            contestée par certains de leurs plus puissants vassaux, et notamment par la maison
            Florent. Cette prétention n'est pas dénuée de fondement, car le roi Mern VI Jardinier
            donna sa fille benjamine en mariage à son intendant, ser Robert Tyrell, en récompense
            de ses bons et loyaux services. Neuf autres alliances entre Jardinier et Tyrell
            renforcèrent au fil des siècles les liens entre les rois et leurs intendants
            (mais bien d'autres maisons du Bief pouvaient également s’enorgueillir de telles
            alliances, et certaines en plus grand nombre que les Tyrell).<br />
            À l'origine des Tyrell, on trouve un aventurier andal, ser Alester, qui devint le
            bouclier lige du roi Gwayne V, à l'époque de l'arrivée des Andals dans le Bief.
            Deux générations plus tard, la charge héréditaire de Surintendant était créée par
            les rois Jardinier pour leurs plus fidèles serviteurs. Les Tyrell furent toujours
            de fidèles serviteurs et conseillers, certains assurèrent la charge de gouverneurs
            du Bief, et l'un fut régent sous Garland VI.
            <h3>La Conquête</h3>
            Alors que les Tyrell n'étaient donc que de simples intendants de la maison Jardinier,
            l'extinction de cette lignée à la bataille du Champ de Feu, permit à Harlan Tyrell
            de recevoir d'Aegon le Conquérant le fief de Hautjardin et la suzeraineté sur le
            Bief, malgré la présence de maisons bien plus anciennes et prestigieuses que la
            sienne. Il est vrai que ces hauts et puissants seigneurs étaient présents au Champ
            de Feu contre Aegon et ses sœurs, ce qui n'était pas le cas de lord Harlan, qui ouvrit
            les portes de Hautjardin aux Targaryen après la bataille. Pour les Targaryen, le
            choix des Tyrell représentait l'avantage de mettre à la tête du Bief une maison qui
            leur devrait sa place, et qui leur serait donc fidèle. Lord Theo Tyrell, le fils de
            lord Harlan, affermit l'autorité de sa maison en réunissant une assemblée de mestres
            et de septons pour établir la légitimité des Tyrell sur Hautjardin.
            <h3>Le règne des Targaryen</h3>
            En l'an 48, les Tyrell abandonnent le parti du roi Maegor Ier Targaryen, pour soutenir
            son neveu Jaehaerys.<br />
            Lord Martyn Tyrell occupe la fonction de Grand Argentier de Jaehaerys Ier Targaryen.
            <br />
            La fille du roi Viserys Ier, Rhaenyra Targaryen, est un temps courtisée par les Tyrell,
            avant son mariage en l'an 114.
            <h3>Pendant la Danse des Dragons</h3>
            En l'an 129, le jeune lord Lyonel Tyrell vient de naître (et son père est apparemment
            décédé), et tout le monde s'attend à ce que sa mère, régente, suive ses puissants
            vassaux, les Hightower, dans leur allégeance au roi Aegon II dans le conflit de
            succession naissant qui sera connu sous le nom de la Danse des Dragons. Pourtant,
            la régente ne prend pas part au conflit et reste neutre. Cela n'empêche pas ses
            vassaux de s'entre-déchirer entre partisans Noirs (les Tarly, les Rowan, les Costayne,
            les Mullendore, les Piète, les des Essaims et les Grimm) et Verts (outre les Hightower,
            les Fossovoie, les Redwyne, les Roxton, les Norcroix, les Ambrose et les Peake).
            <h3>Pendant les rébellions Feunoyr</h3>
            Les Tyrell sont de nouveau fidèles aux Targaryen lors des rébellions Feunoyr.
            Au moment de la première d'entre elles, lord Leo Tyrell remporte d'importantes
            victoires dans le Bief contre les partisans Feunoyr, mais il ne peut rassembler
            ses forces assez vite pour participer à la bataille du champ d'Herberouge.
            <h3>Pendant la rébellion de Robert Baratheon</h3>
            Toujours fidèles aux Targaryen, les Tyrell et leurs vassaux infligent à lord Robert
            Baratheon une de ses rares défaites à Cendregué. Puis lord Mace Tyrell assiège
            Accalmie pendant un an, en vain.
          </p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseTyrell;
