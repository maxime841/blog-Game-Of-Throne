// == Import npm
import React from 'react';

// == Import
import './season5.scss';
import carteGot from '../../assets/public/carteGOT.jpg';
import TywinDeadByTyrion from '../../assets/public/TywinDeadByTyrion.jpg';

// == Composant
const Saison5 = () => (
  <div className="season5">
    <div className="season5-container">
      <h1 className="season5-title">Saison 5</h1>
      <a className="season5-button" href="/seasons">Retour</a>
      <h2 className="season5-subTitle">Synopsis</h2>
      <div className="season5-image">
        <img className="season5-img" src={carteGot} alt="carte de game of throne" />
        <img className="season5-img" src={TywinDeadByTyrion} alt="La mort de Tywin par son fils Tyrion" />
      </div>
      <p className="season5-item">Toujours en fuite, Bran et Rickon Stark sont traqués
        par la maison Bolton. Et si Roose mène les recherches, Ramsay ordonne à «Schlingue»
        de récupérer Moat Caitlin et contrôle désormais tout Winterfell. À Port-Réal, Joffrey
        et Margaery s’apprêtent à se marier dans une ambiance austère. De retour auprès des
        siens, Jaime est mis sur le banc de touche de la Garde Royale par Tywin le chef de file
        des Lannister. La raison? Sa main manquante. Il pourra compter sur Bronn pour lui apprendre
        à manier l’épée de la main gauche. Toujours à la capitale, la vile Cersei découvre que son
        petit frère Tyrion est pris d’amour pour Shae, une prostituée. Elle la fait tuer. Il en sera
        de même pour le jeune Joffrey qui est empoisonné pendant son mariage. Panique générale,
        Sansa parvient à s’échapper avec Lord Baelish. Tyrion est accusé du meurtre de son neveu
        et Jaime convainc Brienne de Torth de retrouver la jeune Stark.
      </p>
      <p className="season5-item">Le procès de Tyrion aboutira sur un duel judiciaire.
        Représenté par Oberyn, il affronte Gregor Cleagane, qui se bat pour la couronne.
        Une aubaine pour la Vipère rouge de Dorne qui rêve de venger sa sœur tuée et violée
        par La Montagne. Hélas, il tombe et Tyrion Lannister est condamné à mort. Mais contre
        toute attente, Jaime intervient et l’aide à s’échapper. Seulement, avant de quitter
        Port-Réal, le nain tue son père, Tywin, d’une flèche dans le cœur et prend le large
        vers l’Est, direction Essos avec Lord Varys. Là-bas, Daenerys poursuit la reconquête
        des cités esclavagiste et forme une armée monstrueuse toujours en prévision de
        conquérir l’Ouest.
        De l’autre côté du Mur, Jon Snow est rattrapé et accusé de haute trahison, mais reste
        en vie. Châteaunoir, le camp de la Garde de Nuit, est attaqué par les sauvageons, mais
        arrive à l’emporter et fait prisonnier Mance Rayder, le leader de ces derniers.
      </p>
    </div>
  </div>
);

// == Export
export default Saison5;
