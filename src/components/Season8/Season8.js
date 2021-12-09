// == Import npm
import React from 'react';

// == Import
import './season8.scss';
import WallDown from '../../../public/WallDown.png';
import LyannaAndAegon from '../../../public/LyannaAndAegon.jpg';
import WalkingWhite from '../../../public/WalkingWhite.png';
import DrogonDaenerys from '../../../public/drogondaenerys.jpeg';

// == Composant
const Saison8 = () => (
  <div className="season8">
    <div className="season8-container">
      <h1 className="season8-title">Saison 8</h1>
      <h2 className="season8-subTitle">Synopsis</h2>
      <div className="season8-image">
        <img className="season8-img" src={WallDown} alt="Le mur tombe" />
        <img className="season8-img" src={LyannaAndAegon} alt="Le mariage entre Lyanna Stark et Aegon Targaryen" />
        <img className="season8-img" src={WalkingWhite} alt="Les marcheurs blancs" />
        <img className="season8-img" src={DrogonDaenerys} alt="Drogon emporte Daenerys" />
      </div>
      <p className="season8-item">La grande guerre arrive dans cette ultime saison adaptée
        des romans de George R. R. Martin. Les marcheurs blancs ont franchi le Mur et sont
        arrivés à Westeros. La lutte tant acharnée pour le très convoité Trône de Fer touche
        à sa fin. Qui siégera sur le trône ? Qui remportera cette guerre ? Qui gouvernera
        le Royaume des Sept Couronnes ?
      </p>
      <p className="season8-item">Le Mur est tombé, les Marcheurs Blancs entrent dans
        Westeros et leur prochain objectif est Winterfell. Jon Snow et la reine Daenerys
        Targaryen à qui il a prêté allégeance arrivent à Winterfell accompagnés de ses armées.
        Une fois là-bas, les personnages se retrouvent. Tormund et Béric Dondarrion ayant
        survécu à la chute du Mur retrouvent la garde de Nuit à Âtre-les-Confins saccagée par
        l'Armée des Morts et se rendent rapidement à Winterfell pour annoncer l'arrivée
        imminente des Morts.
      </p>
      <p className="season8-item">À Port-Réal, la flotte d'Euron Greyjoy revient à Port-Réal
        avec à bord les mercenaires de la Compagnie Dorée pour combattre les survivants de la
        future bataille attendue à Winterfell contre les Morts. La reine Cersei entame une
        relation avec Euron pour s’assurer de son appui et légitimer sa nouvelle grossesse
        dont Jaime est à l’origine. De son côté, la nièce de Euron, Yara, prisonnière à bord de
        sa flotte, est libérée par son frère Theon. Yara retourne ensuite reprendre les Îles de
        Fer, tandis que Theon décide de partir avec quelques Fer-Nés se battre à Winterfell.
        Jaime Lannister dont Bran taira le fait qu'il a jeté ce dernier du haut d'une tour au
        tout début de la série, arrive également, mais seul, et explique à tout le monde que sa
        sœur Cersei a menti, avant d'être autorisé à se battre à leurs côtés. Le régicide profite
        de la veille de la bataille pour adouber chevalier son amie Brienne de Torth. Entre-temps,
        Jon a appris de son frère Bran et de son ami Samwell Tarly qu'il est le fils de Lyanna Stark
        (sœur de Ned Stark) et de Rhaegar Targaryen (frère ainé de Daenerys et héritier du roi fou,
        tué lors de la bataille du Trident) mariés en secret; son vrai nom étant Aegon Targaryen, et
        que Ned l'avait fait passer pour un bâtard pour lui éviter de se faire exécuter par le roi
        Robert Baratheon. Jon/Aegon partage la nouvelle avec Daenerys peu de temps avant l'arrivée
        des Marcheurs Blancs, au milieu de la nuit.
      </p>
      <p className="season8-item">La bataille opposant le peuple aux Marcheurs Blancs, bataille
        à laquelle se joint également Mélisandre, commence. Cette dernière utilisera la magie du
        Maître de la Lumière pour allumer les sabres des Dothrakis et la tranchée. Durant la
        bataille, il y aura un duel aérien entre Jon et Daenerys sur les dragons contre le Roi de
        la Nuit sur son dragon de glace. Ce dernier une fois tombé réveille les Morts tombés durant
        la bataille (y compris les ancêtres Stark dans la crypte où la population s'est réfugiée).
      </p>
      <p className="season8-item">Les pertes seront importantes chez les Hommes, dont les Dothrakis,
        de nombreux Immaculés, la Garde de Nuit (dont Ed Tollett), Lyanna Mormont qui meurt en tuant
        un géant mort-vivant, son cousin Jorah Mormont en protégeant sa reine, Theon Greyjoy
        (qui trouve la rédemption) et les Fer-Nés en protégeant Bran/La Corneille à trois yeux, que
        le Roi de La Nuit traque pour le tuer et Béric Dondarrion (pour la dernière fois) en sauvant
        Arya Stark. Cette dernière retrouve Mélisandre en lui expliquant que le Maître avait ramené
        de nombreuses fois Béric pour la sauver afin de mener un combat : tuer le Roi de la Nuit.
        C'est ce qu'elle fera au moment où ce dernier s'apprête à tuer son frère. La bataille est
        gagnée.
      </p>
      <p className="season8-item">À la suite de cette bataille, la coalition menée par Daenerys
        Targaryen et Jon Snow (alias Aegon Targaryen) pointe ses armes vers Port-Réal, tenue d'une
        main de fer par Cersei Lannister. Lors de son retour vers Peyredragon, Daenerys perd
        Rhaegal, abattu par plusieurs flèches tirées par les balistes de la flotte de Euron Greyjoy.
        Missandei est capturée lors de cet assaut et est livrée à Cersei. Jaime, fait prisonnier
        après sa fuite de Winterfell après la bataille contre les Marcheurs Blancs, est libéré par
        Tyrion Lannister, dans le but d'aller raisonner Cersei, afin qu'elle se rende. Une ultime
        négociation a lieu aux portes de Port-Réal entre Cersei et son frère, Tyrion, afin de sauver
        la population de Port-Réal d'un torrent de flammes déversé par Daenerys et son dernier
        dragon, Drogon. Cette entrevue aboutira à l'exécution de Missandei par la Montagne, achevant
        la volonté guerrière de Daenerys. Devenue enragée et mégalomane, Daenerys donne l'assaut à
        Port-Réal, détruit la ville, y massacre civils et militaires, même après la reddition de la
        ville. Cersei et Jaime meurent ensevelis dans les sous-sols du Donjon Rouge en tentant de
        prendre la fuite. Jon, qui n'a pu arrêter le massacre, assassine Daenerys, dont le corps
        est emporté par Drogon. Plus tard les seigneurs de Westeros élisent Bran Roi des six
        royaumes (le Nord ayant gardé son indépendance sous le règne de la reine Sansa). Jon est
        banni et doit rejoindre la Garde de Nuit.
      </p>
    </div>
  </div>
);

// == Export
export default Saison8;
