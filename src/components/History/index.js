// == Import npm
import React from 'react';

// == Import
import './history.scss';

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
    </div>
  </div>
);

// == Export
export default History;
