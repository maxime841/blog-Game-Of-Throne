// == Import npm
import React from 'react';

// == Import
import './season7.scss';
import DragonIce from '../../../public/DragonIce.jpg';

// == Composant
const Saison7 = () => (
  <div className="season7">
    <div className="season7-container">
      <h1 className="season7-title">Saison 7</h1>
      <a className="season7-button" href="/seasons">Retour</a>
      <h2 className="season7-subTitle">Synopsis</h2>
      <div className="season7-image">
        <img className="season7-img" src={DragonIce} alt="Le dragon de glace" />
      </div>
      <p className="season7-item">Après dix ans d’été, l’hiver est là et l’étau se resserre
        petit à petit. Au Nord, les Stark sont réunis autour de Jon Snow qui est désormais
        le Roi du Nord. Son objectif: unir les sauvageons et les maisons du Nord dans une
        coalition capable de battre l’armée du Roi de la Nuit qui s’approche du Mur.
      </p>
      <p className="season7-item">De son côté, Daenerys Targaryen arrive enfin à Port-Réal
        et fait une première escale à Peyredragon. Sous le conseil de Tyrion, elle continue
        de chercher des alliés pour attaquer Port-Réal. Elle reçoit le nouveau roi du Nord
        et établi ses conditions dans les futurs marchés à conclure. Pourtant, la Khaleesi
        devient pâle lorsqu’elle découvre que les Marcheurs Blancs sont bien réels. Au cours
        d’une bataille épique contre eux, elle perd l’un de ses dragons qui sera ressuscité,
        mais zombifié par le Roi de la Nuit. À Port-Réal, les Lannister peinent à conserver
        leur pouvoir. Désormais, seuls contre tous, ils devront faire face aux maisons Tyrell,
        Martell et Greyjoy qui se dressent contre eux après l’attentat du Grand Septuaire de Baelor.
      </p>
    </div>
  </div>
);

// == Export
export default Saison7;
