// == Import npm
import React from 'react';

// == Import
import './history.scss';
import Aerys_II_Targaryen from '../../../public/Aerys_II_Targaryen.png';
import Robert_Baratheon from '../../../public/robert-baratheon.jpg';
import Robin_Arryn from '../../../public/RobinArryn.png';

// == Composant
const History = () => (
  <div className="hystory">
    <div className="hystory-container">
      <h1 className="history-title">Histoire</h1>
      <p className="history-content">L'Histoire de Westeros s'étend sur plus de douze mille ans, selon la tradition,
        bien que la véracité des nombreux récits relatant cette dernière soit souvent mise
        en doute par les mestres de la Citadelle, entre autres.

        Les premières traces d'histoire écrite connue remontent à environ six mille ans, quand les
        Andals ont introduit l'Écriture à Westeros. Les Premiers Hommes ne disposaient que d'un
        système composé de symboles rudimentaires qui servait à marquer des sites funéraires,
        par exemple. À cause de cela, tous les événements qui se sont déroulés il y a plus de six
        mille ans ont été transmis oralement. Beaucoup de ces événements qui ont eu lieu à Westeros
        à cette époque, au cours de l'Âge des Héros, sont semi-légendaires, et certains récits plus
        ou moins fantaisistes ne se basent probablement pas sur des faits réels. Celà dit, ces
        légendes
        et ces traditions orales peuvent avoir un fond de vérité. À Essos, l'Histoire écrite des
        grandes civilisations de Valyria et de Ghis remontent également à six mille ans.

        Un des problèmes majeurs mis en évidence par l'auteur George R.R. Martin lui-même est que
        l'Histoire a tendance à être écrite par les vainqueurs. Tout comme dans la vie réelle,
        les habitants de Westeros n'ont pas un rapport très objectif à l'Histoire.

        La référence utilisée pour le nombre des années est l'année de l'arrivée d'Aegon
        le Conquérant à Westeros, et le début de la Conquête des Targaryen. Les événements de
        la série débutent donc aux alentours de l'an 298.
      </p>
      <h2 className="history-subTitle">Règne du Roi Fou</h2>
      <img className="history-img" src={Aerys_II_Targaryen} alt="Règne du roi fou" />
      <ul>
        <li className="history-item">261 : Naissance des jumeaux, Cersei et Jaime Lannister.</li>
        <li className="history-item">266 : Naissance de Tyrion Lannister et mort de Joanna Lannister.</li>
        <li className="history-item">277 : Jaime Lannister intègre la Garde Royale</li>
        <li className="history-item">278 : La Fraternité Bois-du-Roi est décimée par Barristan Selmy, Arthur Dayne
          et Jaime Lannister.
        </li>
        <li className="history-item">280 : Tournoi d'Harrenhal
          Aerys II nomme Jaime Lannister à la Garde Royale.
          "Enlèvement" de Lyanna Stark par Rhaegar Targaryen.
          Mort de Brandon et Rickard Stark.
          Naissance de Brienne de Torth (approximativement)
        </li>
      </ul>
      <h2 className="history-subTitle">Rébellion de Robert</h2>
      <img className="history-img" src={Robert_Baratheon} alt="Rebellion de Robert" />
      <ul>
        <li className="history-item">280 : Début de la Rébellion de Robert Baratheon.</li>
        <li className="history-item">281 : Bataille du Trident et mort de Rhaegar Targaryen et de Lewyn Martell.
          Sac de Port-Réal, mort d'Elia Martell, de Rhaenys et d'Aegon Targaryen, et du
          Roi Fou Aerys II.
          Naissance de Daenerys Targaryen et mort de la Reine Rhaella Targaryen.
          Fin de la Rébellion de Robert Baratheon, il est proclamé Roi des Sept Couronnes.
        </li>
        <ul>
          <li className="history-item">Naissance de Jon Snow et mort de Lyanna Stark.</li>
          <li className="history-item">Naissance de Robb Stark.</li>
          <li className="history-item">Naissance de Meera Reed.</li>
          <li className="history-item">Naissance de Theon Greyjoy.</li>
          <li className="history-item">Naissance de Roslin Frey.</li>
        </ul>
        <li />
      </ul>
      <h2 className="history-subTitle">Règne du Roi Robert</h2>
      <img className="history-img" src={Robert_Baratheon} alt="Règne du roi Robert" />
      <ul>
        <li className="history-item">282 : Naissance de Joffrey Baratheon.</li>
        <li className="history-item"> 283 : Naissance de Myrcella Baratheon.</li>
        <li className="history-item">284 : Naissance de Tommen Baratheon.</li>
        <li className="history-item">285 : Naissance de Sansa Stark.</li>
        <li className="history-item">287 : Naissance de Arya Stark.</li>
        <li className="history-item">288 : Naissance de Bran Stark.</li>
        <li className="history-item">289 : Rébellion des Greyjoy.</li>
      </ul>
      <h2 className="history-subTitle">Naissance de Robin Arryn.</h2>
      <img className="history-img" src={Robin_Arryn} alt="Naissance de Robin Arryn" />
      <ul>
        <li className="history-item">292 : Naissance de Rickon Stark.</li>
        <li className="history-item"> 293 : Naissance de Lyanna Mormont.</li>
        <li className="history-item">297 : Le magistrat de Pentos, Illyrio Mopatis, invite Viserys et Daenerys Targaryen dans
          son palais et offre son aide pour récupérer le trône de fer.
        </li>
      </ul>
    </div>
  </div>
);

// == Export
export default History;
