// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// == Import
import './houseArryn.scss';

// == Composant
class HouseArryn extends React.Component {
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
        this.setState({ name: res.data[0].name });
        this.setState({ emblempicture: res.data[0].emblempicture });
        this.setState({ emblem: res.data[0].emblem });
        this.setState({ blason: res.data[0].blason });
        this.setState({ housetitle: res.data[0].housetitle });
        this.setState({ houseseat: res.data[0].houseseat });
        this.setState({ houselocation: res.data[0].houselocation });
        this.setState({ lord: res.data[0].lord });
        this.setState({ heir: res.data[0].heir });
        this.setState({ allegency: res.data[0].allegency });
        this.setState({ vassals: res.data[0].vassals });
        this.setState({ religion: res.data[0].religion });
        this.setState({ military: res.data[0].military });
        this.setState({ foundator: res.data[0].foundator });
        this.setState({ foundary: res.data[0].foundary });
      });
  }

  render() {
    return (
      <div className="houseArryn">
        <div className="houseArryn-container">
          <h1 className="houseArryn-title">{this.state.name}</h1>
          <a className="houseArryn-buttonBack" href="/houses">Retour</a>
          <div className="houseArryn-but">
            <Link
              className="houseArryn-button"
              to="/houseArrynGen"
            >
              Arbre généalogique
            </Link>
            <Link
              className="houseArryn-button"
              to="/houseArrynChar"
            >
              Personnages
            </Link>
          </div>
          <img className="houseArryn-emblemImg" src={this.state.emblempicture} alt="Emblème de la maison" />
          <div className="houseArryn-caracteristic">
            <div className="houseArryn-emblemCoat">
              <p className="houseArryn-emblem">Embleme: {this.state.emblem}</p>
              <p className="houseArryn-coatOfArms">Blason: {this.state.blason}</p>
            </div>
            <div className="houseArryn-houseTitleFamilly">
              <h3 className="houseArryn-houseTitleTitle">Titre</h3>
              <ul className="houseArryn-houseTitle">
                <li className="houseArryn-houseTitleItem">{this.state.housetitle}</li>
              </ul>
            </div>
            <div className="houseArryn-location">
              <p className="houseArryn-seat">Siège: {this.state.houseseat}</p>
              <p className="houseArryn-district">Région: {this.state.houselocation}</p>
            </div>
            <div className="houseArryn-poeple">
              <p className="houseArryn-lord">Seigneur: {this.state.lord}</p>
              <p className="houseArryn-heir">Héritié: {this.state.heir}</p>
            </div>
            <div className="houseArryn-alliance">
              <h3 className="houseArryn-houseTitleTitle">Allegence</h3>
              <ul className="houseArryn-allegiance">
                <li className="houseArryn-allegianceItem">{this.state.allegency}</li>
              </ul>
              <h3 className="houseArryn-houseTitleTitle">Vassaux</h3>
              <ul className="houseArryn-vassals">
                <li className="houseArryn-vassalsItem">{this.state.vassals}</li>
              </ul>
            </div>
            <div className="houseArryn-other">
              <p className="houseArryn-religion">Religion: {this.state.religion}</p>
              <p className="houseArryn-military">Force militaire: {this.state.military}</p>
              <p className="houseArryn-founder">Foundateur: {this.state.foundator}</p>
              <p className="houseArryn-foundation">Fondée: {this.state.foundary}</p>
            </div>
          </div>
          <h2 className="houseArryn-subTitle">Présentation</h2>
          <p className="houseArryn-content">La Maison Arryn est l'une des grandes maisons
            de Westeros. Ils règnent sur la vaste région du Val d'Arryn depuis leur siège
            des Eyrié, un château situé dans les Montagnes de la Lune. La devise des Arryn
            est « Aussi haute qu'Honneur » et leur emblème représente un faucon blanc volant
            devant une lune sur un champ bleu.<br />
            La Maison Arryn descend directement de l'Invasion
            des Andals et sont la deuxième plus vieille grande maison de Westeros à toujours
            régner, après la Maison Stark.
          </p>
          <h2 className="houseArryn-subTitle">Histoire</h2>
          <p className="houseArryn-content">D'après les chroniques, la maison Arryn aurait été
            fondée par Artys Arryn, un chevalier ayant combattu pendant l'invasion des Andals
            sur le continent de Westeros, il y a environ six mille ans. Il se serait emparé des
            Eyrié après avoir tué le Roi Griffon en combat singulier. Des siècles plus tard, les
            descendants de la maison Arryn ont continué à régner sur le Val d'Arryn en tant que
            « Roi de la Montagne et du Val ». Cependant, leur règne fut en péril pendant la conquête
            d'Aegon Targaryen. La régente Sharra surprit son jeune fils, Ronnel, sur les genoux de
            Visenya Targaryen, une sœur-épouse d'Aegon, accompagnée par son dragon Vhagar. Le jeune
            garçon voulut faire un tour à dos de Vhagar, ce que sa mère accepta après que Visenya
            lui assure que Ronnel ne risquait rien. Ayant parfaitement compris que Visenya était
            venue pour obtenir la soumission du Val, Sharra déposa sa couronne de la Montagne et du
            Val. Ainsi, la maison Arryn obtint alors le titre de Seigneur du Val et Gouverneur de
            l'Est et jura allégeance à la Maison Targaryen. La maison Arryn resta toujours fidèle
            aux Targaryen jusqu'en l'an 280, quand le roi Aerys II Targaryen ordonna à Jon Arryn,
            l'actuel gouverneur de l'Est, d'exécuter ses deux pupilles, Eddard Stark et Robert
            Baratheon. Jon préféra se soulever contre le Roi Fou et scella son alliance avec la
            Maison Tully en épousant Lysa Tully. Après la victoire des rebelles, Jon Arryn fut nommé
            Main du Roi sous le règne de Robert Baratheon et gouverna le royaume jusqu'à sa mort en
            298.
          </p>
        </div>
      </div>
    );
  }
}

// == Export
export default HouseArryn;
