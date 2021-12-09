// == Import npm
import React from 'react';

// == Import
import './season1.scss';
import carteGot from '../../../public/carteGOT.jpg';
import deadJohnArryn from '../../../public/deadJohnArryn.jpg';
import eddAndNed from '../../../public/Eddard_et_Petyr.png';
import Daenerys from '../../../public/Daenarys.jpg';
import RobbStark from '../../../public/Robb_Stark.jpg';

// == Composant
const Saison1 = () => (
  <div className="season1">
    <div className="season1-container">
      <h1 className="season1-title">Saison 1</h1>
      <h2 className="season1-subTitle">Synopsis</h2>
      <div className="season1-image">
        <img className="season1-img" src={carteGot} alt="carte de game of throne" />
      </div>
      <p className="season1-item">Le Royaume des Sept Couronnes3, dont la capitale est Port-Réal, est constitué
        de sept provinces
        régies par des « maisons »4 dont la plupart des chefs aspirent à monter sur le trône.
        La mort du roi aiguise les appétits. Ce royaume occupe tout le sud du continent de Westeros.
        À l’extrême-nord, un gigantesque mur de glace protège le royaume de plusieurs créatures
        potentiellement dangereuses, celui-ci est supervisé par la garde de nuit une organisation
        militaire officielle qui vise à protéger le mur et le royaume des menaces du grand nord.
        Au-delà du mur vivent des créatures « primitives », les Sauvageons qui tentent d’envahir
        le royaume pour fuir des créatures mythiques et très dangereuses que l'on pensait disparues
        depuis plusieurs siècles. À l’est, au-delà d’un détroit, se trouve le continent d’Essos
        sur lequel une jeune princesse en exil prépare son retour.
      </p>

      <h2 className="season1-subTitle">Résumé détaillé</h2>
      <div className="season1-image">
        <img className="season1-img" src={deadJohnArryn} alt="mort de john arryn" />
        <img className="season1-img" src={eddAndNed} alt="capture de ned stark" />
        <img className="season1-img" src={RobbStark} alt="Robb stark" />
        <img className="season1-img" src={Daenerys} alt="Daenerys" />
      </div>
      <p className="season1-item">À la suite de l'assassinat de Jon Arryn, la « Main » (premier ministre) du Roi,
        son successeur à ce poste, Eddard Stark (dit Ned), gouverneur du « Nord », dont
        la citadelle est Winterfell, découvre, peu après sa prise de fonctions dans la capitale,
        que les enfants du roi : Joffrey, Tommen et Mircella Baratheon, sont en fait le fruit
        de la relation incestueuse de la reine, Cersei, de la maison Lannister, avec son frère
        jumeau Jaime Lannister, membre de la garde royale. La mort du roi Robert, de la maison
        Baratheon, lors d’un accident de chasse,survient peu de temps après. Ned décide
        d'informer le frère cadet de Robert, Stannis Baratheon que pour l'instant, la couronne
        lui revient de droit, étant l'aîné des Baratheon encore vivants.
      </p>

      <p className="season1-item">Au Royaume des Sept Couronnes, le monarque est habituellement assisté par un « conseil
        restreint » présidé par sa « Main ». Il est composé, au moment de la mort du roi,
        de son plus jeune frère, Renly Baratheon, et de 3 personnages de plus modeste extraction
        mais supposés compétents et assurément habiles : le vénérable Grand mestre Pycelle,
        l’eunuque Varys, « maître des Chuchoteurs » (informateurs) et le Grand Argentier9,
        Petyr Baelish, ambitieux et riche propriétaire de maisons de plaisirs à Port-Réal.
        Dès l’annonce de la mort du roi, le jeune Renly tente de s’emparer de la couronne,
        en sollicitant l’aide de Ned Stark. Il est plus populaire que le taciturne Stannis,
        il a l’appui de la puissante maison Tyrell et il est présent à la capitale, il peut
        dont faire échec à la famille Lannister qui ne saurait tarder à se manifester. Ned
        refuse, les Lannister frappent : grâce à la trahison de Baelish, ils disposent
        d’assez d’hommes pour procéder à l'arrestation de Ned et le faire emprisonner.
        Sansa implore Joffrey, héritier du trône, de faire libérer son père, ce dernier
        accepte à condition que celui-ci reconnaisse sa légitimité de souverain et avoue
        qu'il a tenté de conspirer contre la couronne et de trahir le roi. Ned refuse
        d'abord, ne voulant pas assumer des crimes qu'il n'a pas commis mais finit par
        accepter pour assurer la protection de ses filles détenues à Port-Real.
        Il se rend devant la foule et reconnaît ses crimes devant le roi, la reine
        mère et le conseil restreint. Alors qu'il avait donné sa parole à Sansa de
        le laisser en vie et de l'envoyer à la Garde de Nuit, Joffrey le fait exécuter.
      </p>

      <p className="season1-item">Les jumeaux Lannister ont un père, le tyrannique Tywin, qui, à Castral Roc, gouverne
        les « Terres de l’Ouest » et, de façon occulte, le reste des 7 Couronnes. Ils ont aussi
        un jeune frère, Tyrion, un nain buveur, jouisseur, spirituel et cultivé. Son père
        l’exècre viscéralement mais après un fait d’arme notoire et face aux décisions exécrables
        du jeune roi et de l'absence de contrôle qu'exerce sa mère sur lui, il se décide à en
        faire la « Main » du roi Joffrey à sa place tandis que celui-ci part régler avec son
        armée les conflits naissants dans les Sept Couronnes. La maison Lannister a une mainmise
        totale sur le royaume et les Sept Couronnes.
      </p>

      <p className="season1-item">Dans le Nord, Robb Stark, le fils aîné de Ned, lève une armée pour venger son père
        et délivrer Sansa et Arya, ses deux sœurs. Sansa, promise à Joffrey avant la mort du roi,
        était venue séjourner à Port-Réal, accompagnée de sa jeune sœur mais est devenue otage
        des Lannister après la décollation de son père. Après avoir réuni ses bannerets (vassaux)
        et avec l’appui du Conflans, – la province attenante à la frontière sud du Nord, tenue par
        la maison Tully à laquelle appartient sa mère, Lady Catelyn, ralliée à la suite des saccages
        de l'armée Lannister sur leur territoire – Robb vole de victoires en victoires.
        Lors de l'une
        d'entre elles, il capture même Jaime Lannister. Alors que les frères de Robert se proclament
        tous deux "Roi légitime", les bannerets de Robb décident de le nommer « Roi du Nord ».
        C’est une sécession inacceptable pour le « vrai » roi.
      </p>

      <p className="season1-item">Cependant, de l'autre coté du Détroit, sur le continent d'Essos, une menace prend petit
        à petit de l’ampleur. En effet, Viserys et Daenerys de la maison Targaryen se sont exilés
        en Essos à la mort de leur père Aerys II "le roi fou" , et ils sont vraisemblablement les
        deux derniers Targaryen encore en vie. Depuis Pentos et avec l'aide leur hôte
        Illyrio Mopatis,
        ils préparent leur retour en essayant de se créer une armée pour reconquérir les Sept
        Couronnes,
        par le biais d'un mariage forcé entre Daenerys et Khal Drogo, un chef d'un peuple de
        nomades et
        de pillards appelés Dothrakis, orchestré par Viserys dans le but d'obtenir leur soutien.
        Lors du mariage, Illyrio offrira à Deanerys trois œufs de dragon fossilisés. Alors que leur
        relation avait mal débuté, Deanerys finit par tomber amoureuse de Drogo et vient à porter
        leur
        enfant. Si au début Viserys paraissait sain d'esprit, il se révélera aussi fou que son
        père et,
        trouvant que la manœuvre de reconquête prend trop de temps, provoquera Drogo en lui
        réclamant
        la couronne qu'il lui a promis en sortant une épée dans un endroit sacré où les armes sont
        prohibées et en menaçant Daenerys et leur enfant à naître. Drogo finit par lui donner
        sa couronne
        en lui versant un seau d'or en fusion sur la tête, le tuant sur le coup. Malgré la mort
        de son
        frère, Daenerys souhaite toujours récupérer le Trône de Fer mais n'arrive pas à
        convaincre son
        époux de faire traverser le Détroit à ses hommes. À la suite d'une tentative
        d'empoisonnement
        ordonnée par le roi Robert et avortée par Jorah Mormont, un chevalier disgracié qui sert les
        Targaryen depuis le mariage et s'est attaché à la jeune princesse, Drogo revient sur
        sa décision
        et déclare vouloir envahir Westeros et raser les châteaux pour que son fils puisse
        régner sur
        l'intégralité du continent. Plus tard, après une bagarre avec un de ses hommes, Drogo
        sera légèrement
        blessé. Daenerys le fera soigner par une prêtresse capturée lors d'une mise à sac qui
        en profitera
        pour empoisonner la plaie. Alors qu'il semble condamné, la sorcière prisonnière des
        Dothrakis dit
        qu'elle peut le sauver par la magie du sang, cependant, la manœuvre nécessite une vie
        pour ranimer
        Drogo. Le lendemain, Daenerys se réveille mais elle a perdu son bébé et retrouve Drogo
        dans un état
        végétatif mais vivant, la sorcière lui fait remarquer qu'elle lui a demandé en vie mais
        pas dans quel
        état, elle révèle que c'est une vengeance contre les Dothrakis qui ont massacré son
        village et sa
        famille. Daenerys étouffera finalement Drogo et le fera incinérer avec ses trois
        œufs de dragon,
        t la sorcière sera brûlée vive. Pendant le processus, Deanerys entrera dans le
        brasier les rejoindre
        et alors que le matin se lève et que le brasier s’éteint, elle en ressort indemne
        et les trois œufs
        de dragons ont éclos, donnant naissance à trois jeunes dragons, une arme redoutable
        pour la future
        conquête de Westeros.
      </p>

      <p className="season1-item">À la frontière septentrionale de la province du Nord, il y a « Le Mur », une gigantesque
        muraille de glace de 700 pieds16 de haut parcourant le continent d'une côte à l'autre, qui
        protège le royaume de tout ce qui se trouve au-delà. La principale menace connue est les
        « Sauvageons », des humains qui ne savent ni lire, ni cultiver la terre, ni construire des
        maisons. Ils survivent dans ces contrées glacées en chassant et ils s’abritent sous
        des tentes.
        Ce rempart est défendu par la « Garde de Nuit », un corps antique qui mène une vie très
        austère,
        entraînement intensif, vœu de chasteté, etc. Il est composé pour l’essentiel de
        coupe-jarrets,
        voleurs et autres violeurs en délicatesse avec la justice du royaume mais on y trouve aussi
        quelques volontaires, comme Jon Snow, le fils bâtard de Ned Stark, qui a toujours rêvé
        d'intégrer
        la Garde, où il serait enfin reconnu en tant qu'individu, et non bâtard d'un seigneur.
        Au sud,
        dans le royaume en guerre, on se soucie fort peu de l’insuffisance des effectifs de la
        Garde pour
        faire face aux assauts des Sauvageons qui, de plus en plus nombreux, tentent de passer
        le Mur au
        péril de leur vie. Ceux-ci semblent poussés par deux choses. D'abord l'hiver, qui s’annonce
        encore plus long (plusieurs années) et rigoureux que les précédents. Il y a également
        la rumeur
        du retour des « Marcheurs blancs » menés par le Roi de la Nuit. Ce sont des créatures
        liées au
        froid qui ressuscitent les morts et que l'on croyait disparus depuis plusieurs siècles.
        Même les
        aînés de la Garde semblaient douter de cette rumeur, jusqu'à ce que le cadavre de l'un des
        patrouilleurs récupéré au nord du Mur ne s'anime et tente de tuer le Lord-Commandant.
        Face au regroupement plus qu'inquiétant des Sauvageons et à la menace que représente les
        Marcheurs Blancs, la Garde de Nuit décide de lancer une expédition de taille vers le nord du
        Mur, afin de déterminer la véracité de ces deux menaces ...
      </p>
    </div>
  </div>
);

// == Export
export default Saison1;
