// == Import npm
import React from 'react';

// == Import
import './season3.scss';
import carteGot from '../../../public/carteGOT.jpg';
import WalderFrey from '../../../public/WalderFrey.jpg';

// == Composant
const Saison3 = () => (
  <div className="season3">
    <div className="season3-container">
      <h1 className="season3-title">Saison 3</h1>
      <a className="season3-button" href="/seasons">Retour</a>
      <h2 className="season3-subTitle">Synopsis</h2>
      <div className="season3-image">
        <img className="season3-img" src={carteGot} alt="carte de game of throne" />
        <img className="season3-img" src={WalderFrey} alt="Walder Frey" />
      </div>
      <p className="season3-item">La saison 3 de Game of Thrones est un véritable plan de
        bataille. Tandis que Tywin Lannister, le père de Jaime, Tyrion et Cersei, enchaîne
        les magouilles pour arriver à ses fins, sa fille annule les noces entre Joffrey et
        Sansa. La reine préfère Margaery Tyrell, au grand bonheur de son fils. Ce n’est pas
        pour autant que la fille de Catelyn Stark est tirée d’affaire, au contraire. Elle
        doit se résoudre à épouser Tyrion Lannister. Au même moment, toujours sous l’emprise
        du clan Stark, Jaime poursuit son chemin vers Port-Réal aux côtés de Brienne de Torth.
        C’est pendant ce voyage que le malheureux perd sa main droite à la suite de l’attaque
        de la maison Bolton.
      </p>
      <p className="season3-item">De son côté, Robb Stark est pris de remords vis-à-vis de Walder Frey. Pour tenter de
        se faire pardonner, le leader de Winterfell propose à Walder de donner la main de sa
        fille qui lui était promise à son oncle, Edmure Tully, mais tout ne se passe pas comme
        prévu. Walder Frey prétend accepter avec plaisir, mais fait assassiner les Stark et tous
        les seigneurs du Nord présent pour l’occasion, ainsi que leurs soldats. Ce sont les
        fameuses Noces Pourpres, qui sont en réalité commanditées par les Lannister.
        Non loin de là, dans la cour du manoir, Arya Stark essaye de se faufiler dans l’espoir
        d’y retrouver sa mère, en vain. Elle s’enfuit à cheval aux côtés de Sandor Clegane.
        Sale temps pour le Nord et les Stark qui désormais sans leader voient le château de
        Winterfell réduit à néant après la traîtrise de Theon Greyjoy. Il est capturé par le
        tortionnaire Ramsay Bolton, qui l’émascule, le réduit à l’état d’esclave et le renomme
        «Schlingue».
      </p>
      <p className="season3-item">Au-delà du Mur, Jon Snow va rallier les sauvageons à sa cause et est toujours épris
        de la belle Ygrid. Les Marcheurs Blancs gagnent du terrain, si bien que Samwell va de
        nouveau devoir faire face à eux et en tue un, grâce à son poignard fait de verredragon.
        Il prend ensuite la fuite avec Vère en direction de Fort-Nox où ils retrouvent Bran, Hodor,
        Jojen et Meera Reed.
      </p>
      <p className="season3-item">Enfin, à Essos, Daenerys Targaryen prend de l’assurance. Après avoir réduit en miette
        Qarth, et récupéré ses enfants, elle vogue vers la Cité Rouge d’Astapor qu’elle annexe.
        Elle est rejointe par l’armée des Immaculés qui protège la ville et commence à préparer
        son voyage vers Westeros pour partir à la reconquête du Trône de Fer.
      </p>
    </div>
  </div>
);

// == Export
export default Saison3;
