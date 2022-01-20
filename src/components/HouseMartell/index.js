// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// == Import
import './houseMartell.scss';

// == Composant
class HouseMartell extends React.Component {
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
        this.setState({ name: res.data[7].name });
        this.setState({ emblempicture: res.data[7].emblempicture });
        this.setState({ emblem: res.data[7].emblem });
        this.setState({ blason: res.data[7].blason });
        this.setState({ housetitle: res.data[7].housetitle });
        this.setState({ houseseat: res.data[7].houseseat });
        this.setState({ houselocation: res.data[7].houselocation });
        this.setState({ lord: res.data[7].lord });
        this.setState({ heir: res.data[7].heir });
        this.setState({ allegency: res.data[7].allegency });
        this.setState({ vassals: res.data[7].vassals });
        this.setState({ religion: res.data[7].religion });
        this.setState({ military: res.data[7].military });
        this.setState({ foundator: res.data[7].foundator });
        this.setState({ foundary: res.data[7].foundary });
        console.log('response', res.data);
      });
  }

  render() {
    return (
      <div className="houseMartell">
        <div className="houseMartell-container">
          <h1 className="houseMartell-title">{this.state.name}</h1>
          <div className="houseMartell-but">
            <Link
              className="houseMartell-button"
              to="/houseMartellGen"
            >
              Arbre généalogique
            </Link>
            <Link
              className="houseMartell-button"
              to="/houseMartellChar"
            >
              Personnages
            </Link>
          </div>
          <img className="houseMartell-emblemImg" src={this.state.emblempicture} alt="Emblème de la maison" />
          <div className="houseMartell-caracteristic">
            <div className="houseMartell-emblemCoat">
              <p className="houseMartell-emblem">Embleme: {this.state.emblem}</p>
              <p className="houseMartell-coatOfArms">Blason: {this.state.blason}</p>
            </div>
            <div className="houseMartell-houseTitleFamilly">
              <h3 className="houseMartell-houseTitleTitle">Titre</h3>
              <ul className="houseMartell-houseTitle">
                <li className="houseMartell-houseTitleItem">{this.state.housetitle}</li>
              </ul>
            </div>
            <div className="houseMartell-location">
              <p className="houseMartell-seat">Siège: {this.state.houseseat}</p>
              <p className="houseMartell-district">Région: {this.state.houselocation}</p>
            </div>
            <div className="houseMartell-poeple">
              <p className="houseMartell-lord">Seigneur: {this.state.lord}</p>
              <p className="houseMartell-heir">Héritié: {this.state.heir}</p>
            </div>
            <div className="houseMartell-alliance">
              <h3 className="houseMartell-houseTitleTitle">Allegence</h3>
              <ul className="houseMartell-allegiance">
                <li className="houseMartell-allegianceItem">{this.state.allegency}</li>
              </ul>
              <h3 className="houseMartell-houseTitleTitle">Vassaux</h3>
              <ul className="houseMartell-vassals">
                <li className="houseMartell-vassalsItem">{this.state.vassals}</li>
              </ul>
            </div>
            <div className="houseMartell-other">
              <p className="houseMartell-religion">Religion: {this.state.religion}</p>
              <p className="houseMartell-military">Force militaire: {this.state.military}</p>
              <p className="houseMartell-founder">Foundateur: {this.state.foundator}</p>
              <p className="houseMartell-foundation">Fondée: {this.state.foundary}</p>
            </div>
          </div>
          <h2 className="houseMartell-subTitle">Présentation</h2>
          <p className="houseMartell-content">La maison Martell est la maison suzeraine de Dorne.
            Le nom complet de la maison est « Nymeros Martell », en référence à leur ancêtre,
            la reine rhoynare Nymeria. Ils portent toujours le titre de "prince" ou de "princesse".
            Les Martell descendent des Andals et des Rhoynars, ce qui fait d'eux des "Dorniens
            salés" : lestes, sombres, olivâtres de teint. Leur résidence principale est le
            Palais Vieux, dans la ville de Lancehélion. Ils possèdent également un palais de
            villégiature, les Jardins Aquatiques, à trois lieues de la ville.
            De tout temps, les seigneurs de la maison Martell ont eu la réputation d'être prudents.
          </p>
          <h2 className="houseMartell-subTitle">Histoire</h2>
          <p className="houseMartell-content"><h3>Des seigneurs devenus princes</h3>
            Avant l'arrivée des Rhoynars, la maison Martell n'était que l'une des multiples
            maisons seigneuriales du territoire connu sous le nom de Dorne. Les Martell n'ont
            jamais porté le titre de roi, ne détenant qu'un modeste territoire avant l'arrivée
            des Rhoynars. Ils se sont même plusieurs fois soumis à l'autorité des rois des maisons
            Allyrion, Jordayne, Ferboys ou à d'autres roitelets de la Sang-vert.<br />
            Mille ans avant le début de la saga, Nymeria, la reine guerrière du peuple rhoynar,
            fait aborder ce qui reste de ses dix mille navires à Lancehélion. L'ambitieux
            seigneur Mors Martell l'épouse, concrétisant ainsi une alliance profitable entre les
            Rhoynars et sa maison. Nymeria proclame son époux « prince » de Dorne. Pendant des
            années, la maison Martell affronte tous les rois et roitelets dorniens, parvenant
            progressivement à établir sa domination sur l'ensemble de la principauté. À la mort
            de Mors, Nymeria assume seule le gouvernement de la principauté et de la maison Martell,
            ses deux époux suivants n'étant que des consorts et des conseillers. Elle importe de
            nombreuses lois et coutumes, que la maison Martell a ensuite étendu à tout Dorne,
            dont une règle d'égalité entre fils et fille en matière successorale : celui qui
            hérite est l'enfant le plus âgé du souverain précédent, qu'il s'agisse d'un garçon ou
            d'une fille. Les Martell ont aussi interdit l'utilisation de la langue rhoynaise afin
            que les Rhoynars s'intègrent à la société dornienne. Les successeurs de Nymeria, les
            princes Rouges, ont construit Bourg-Cabanes, afin de créer un port sur la Sang-Vert qui
            soit plus commode que Lancehélion.
          </p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseMartell;
