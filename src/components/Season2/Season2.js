// == Import npm
import React from 'react';

// == Import
import './season2.scss';
import carteGot from '../../../public/carteGOT.jpg';
import AryaSansa from '../../../public/arya_sansa.jpg';
import TywinLannister from '../../../public/tywin_lannister.jpeg';
import StannisBaratheon from '../../../public/Stannis_Baratheon.png';
import Drogo from '../../../public/Drogo.jpg';
import Qarth from '../../../public/Qarth.jpg';
import CastelBlack from '../../../public/Castle_Black.jpg';
import NightKeeper from '../../../public/NightKeeper.jpeg';

// == Composant
const Saison2 = () => (
  <div className="season2">
    <div className="season2-container">
      <h1 className="season2-title">Saison 2</h1>
      <h2 className="season2-subTitle">Synopsis</h2>
      <div className="season2-image">
        <img className="season2-img" src={carteGot} alt="carte de game of throne" />
      </div>
      <p className="season2-item">Après la mort du roi Robert Baratheon et d'Eddard Stark,
        la légitimité du roi Joffrey est contestée par Stannis et Renly, frères de Robert,
        tandis que Sansa Stark est retenue comme otage à Port-Réal. Robb Stark poursuit sa
        rébellion pour venger son père et libérer sa sœur, bien que personne ne sache où se
        trouve Arya Stark. Balon Greyjoy lui profite du chaos ambiant pour prendre son autonomie
        en demandant à son fils Theon de trahir les Stark et de prendre Winterfell. Lord Tywin
        Lannister, père de la reine Cersei et grand-père du roi, qui détient Arya sans le savoir,
        continue de son côté à lutter à la fois contre les Baratheon et contre les Nordiens de Robb
        Stark. Chaque camp cherche de nouveaux alliés et la guerre des Cinq Rois se prolonge,
        ignorant la menace d'au-delà du Mur. Au Nord, le Lord Commandant Jeor Mormont continue
        de guider la Garde de Nuit face aux Sauvageons, soutenu par Jon Snow, cherchant
        désespérément
        un moyen d'arrêter la marche de leur immense armée vers le sud. Après quoi, le retour des
        Marcheurs blancs est officiellement acté.
      </p>

      <p className="season2-item">De l'autre côté du détroit, après avoir perdu les Dothraki,
        Daenerys Targaryen emmène ses dragons jusqu'à la cité de Qarth, où elle espère trouver
        un appui en vue de reconquérir les Sept Couronnes
      </p>

      <h2 className="season2-subTitle">Résumé détaillé</h2>
      <div className="season2-image">
        <img className="season2-img" src={AryaSansa} alt="Les deux soeur stark" />
        <img className="season2-img" src={TywinLannister} alt="Tywin Lannister" />
        <img className="season2-img" src={StannisBaratheon} alt="Stannis Baratheon" />
        <img className="season2-img" src={Drogo} alt="Khal Drogo" />
        <img className="season2-img" src={Qarth} alt="Les rempart de la ville de Qarth" />
        <img className="season2-img" src={CastelBlack} alt="ChateauNoir" />
        <img className="season2-img" src={NightKeeper} alt="La garde de nuit" />
      </div>
      <p className="season2-item">À Port-Real, les sœurs de Robb Stark ont la vie dure,
        Arya a été évacuée de la capitale après l’exécution de son père et, se fait passer
        pour un garçon nommé Ary pour échapper aux manteaux d'or qui la recherchent activement.
        Sansa, elle, est toujours la prisonnière des Lannister ainsi que le souffre-douleur du
        roi Joffrey qui prend un malin plaisir à la tourmenter sans cesse, elle est toujours
        promise à ce dernier. Par ailleurs, celle-ci a eu ses premières règles ce qui signifie
        qu'elle devrait porter l'enfant de Joffrey, chose qui l'inquiète et qu'elle essaie
        de cacher.
        De son côté, le roi Joffrey est très peu populaire chez le peuple, et a tendance à
        régulièrement
        déclencher des émeutes à cause de ses provocations, émeutes qui mettront plusieurs
        fois Sansa
        en danger, sauvée in extremis par Sandor «le limier» Clegane le garde du roi et
        Tyrion Lannister
        qui en fera sa protégée. Joffrey lui se pose des questions et demande à Cersei si
        les rumeurs
        concernant sa relation consanguine avec Jaime sont fondées, à quoi elle répondra non.
        Par ailleurs, Cersei découvrira l'existence de nombreux bâtards de Robert, dus notamment
        à sa
        grande fréquentation de maisons de prostitution, elle décide donc de tous les faire
        tuer pour
        éliminer toute concurrence. Cependant, Gendry, un d'entre eux, réussit à échapper aux
        manteaux
        d'or et rejoint Arya dans son groupe d'extraction qui part rejoindre la garde de nuit.
      </p>

      <p className="season2-item">Lors de ce convoi, ils sont interrompus une première fois par les
        manteaux d'or, qui finissent par rentrer bredouille, puis, une deuxième fois ou cette
        fois-ci
        les manteaux d'or tuent les convoyeurs et capturent les enfants pour les emmener à
        Harrenhall
        pensant avoir tué le bâtard recherché par une ruse d'Arya qui a aussi sauvé la vie
        d'un certain
        Jaqen H'Ghar. Arrivés à Harrenhall, ils sont placés dans un box où chaque personne
        choisie au
        hasard est torturée par Gregor «la montagne» Clegane pour obtenir des informations sur «la
        fraternité sans banière». Ce camp sert en réalité de base d'opération pour Tywin Lannister
        où il met en place ses plans pour mettre en échec le clan Stark. De retour sur le camp, il
        ordonne à «la montagne» de libérer les prisonniers enfermés dans le box et les laisser
        travailler
        au camp. Il se rendra vite compte qu'Ary n'est pas celui qu'il prétend et que c'est
        Arya déguisé
        (du moins, il sait que c'est une fille sans pour autant connaître son identité) et la
        prendra
        comme intendante. Ensuite pour avoir sauvé trois vies lors de l'attaque du convoi et pour
        équilibrer la balance Jaqen H'Ghar demande à Arya de choisir trois vies à prendre en
        demandant
        les prénoms de ceux qu'elle souhaite voir mourir (meurtre dont il se chargera).
        Elle cible Le
        Titilleur, qui torture des prisonniers, Amory Lorch (chevalier de la maison Lannister qui a
        failli la démasquer) et pour finir, ordonne à Jaqen de tuer Jaqen lui-même. En réalité, Arya
        a appris que Tywin Lannister voulait s’en prendre à son frère Robb et elle veut quitter le
        château au plus vite. Comme Jaqen refuse de se tuer lui-même, elle négocie avec lui pour
        qu’il
        l’aide à fuir Harrenhal, ce qu’il fait. Jaqen propose à Arya de l’accompagner dans la
        ville de
        Braavos, sur le continent d’Essos, où elle pourrait apprendre à tuer sur commande
        comme il le
        fait lui mais elle veut d’abord retrouver sa famille. Il lui remet une pièce et lui
        apprend les
        mots « Valar Morghulis » qu’elle devra prononcer si elle souhaite un jour le retrouver.
        On découvre qu’il connaissait sa véritable identité et qu’il peut changer de visage
        à loisir.
      </p>

      <p className="season2-item">De son côté, Robb Stark continue son avancée avec son armée grâce
        à un pacte avec Walder Frey qui stipule que Robb épousera une fille Frey contre
        la possibilité
        de traverser la rivière et pouvoir libérer Vivesaigues alors assiégée par les Lannister.
        Cependant, sur le champ de bataille, il tombe amoureux de Talissa Maegyr, une soigneuse
        originaire de la cité libre de Volantis, et malgré les sermons de sa mère, il décide
        d'épouser
        Talissa et par extension de trahir sa promesse envers Walder Frey. Robb Stark tentera
        de conclure
        plusieurs autres pactes et alliances, il envoie notamment sa mère négocier une alliance avec
        Renly Baratheon le benjamin de la maison Baratheon mais qui possède une armée phénoménale de
        près de 100 000 hommes. Pendant ce temps là, dans le fief Brienne de Torth, une
        chevalier très
        robuste bat aisément le chevalier Loras Tyrell héritier de la maison Tyrell et demande
        à intégrer
        la garde rapprochée de Renly. L'armée puissante de Renly attire la convoitise et
        de nombreuses
        personnes ont déjà tenté de négocier avec lui dont «littlefinger» ou encore son propre frère
        Stannis Baratheon qui lui a demandé de se soumettre a son autorité, ce que Renly refusera
        estimant qu'il serait un meilleur roi que son aîné. Melissandre, la conseillère de Stannis,
        créera une sorte d'ombre qui tuera Renly alors qu'il s’apprêtait à accepter une alliance
        avec
        Robb Stark. La mort de ce dernier divisera les troupes dont la plupart iront se ranger
        du côté
        de Stannis Baratheon, les Tyrell, quant à eux, retourneront à Hautjardin trouver une autre
        solution pour le trône de fer.
      </p>

      <p className="season2-item">Stannis Baratheon estimant qu'il a suffisamment de troupe pour
        attaquer Port-Réal se lance à l’assaut de la baie de la Nera avec ses bateaux dégotés par
        Ser Davos. Tyrion s'attache à organiser la défense de la capitale étant le seul à pouvoir
        mettre au point un plan qui tienne la route, Tywin étant occupé dans les Coflants et Jaime
        toujours prisonnier de Robb Stark. Sa stratégie est de détruire une bonne partie de
        la flotte
        de Stannis à l'aide d'un bateau empli de «feu Gregeois», une substance hautement explosive.
        Pari réussi cependant, Stannis et une partie de son armée réussissent à débarquer au niveau
        de la porte de la gadoue et le corps de soldat menée par «le limier» subit de lourdes
        pertes,
        le roi Joffrey apeuré déserte le combat et retourne voir sa mère, Clegane en fait de même à
        cause de sa phobie du feu. Alors que l'on pensait la défaite inévitable, les armées de Tywin
        Lannister et Loras Tyrell font apparition spontanée et réussissent à repousser Stannis
        Baratheon
        qui se voit obligé de rentrer à Peyredragon. La victoire du clan Lannister leur permet de
        renforcer
        un peu plus encore leur main mise sur le trône, Tywin prend finalement son rôle de main
        du roi et
        fait de Tyrion le grand argentier, il répond à son père qu'il en espérait un peu plus après
        avoir
        quasiment sauvé Port-Réal son père lui répond alors « quelle contribution ? », en effet,
        Joffrey
        s'est attribué tout le mérite de la bataille passant sous silence toute la contribution
        de son oncle.
      </p>

      <p className="season2-item">Dans le même temps, Robb propose un marché à Cersei.
        Il fait livrer Jaime Lannister contre ses deux sœurs et sa reconnaissance du Nord
        indépendant
        avec lui en tant que roi du nord, proposition qu'elle rejette. Finalement, Catelyn
        Stark fait
        libérer «le régicide» et le fait escorter par Brienne jusqu'à Port-Réal espérant qu'on
        lui rende
        ses filles, ce qui provoquera la colère de Robb ainsi que des tensions dans son propre clan.
      </p>

      <p className="season2-item">Parallèlement, Balon Greyjoy veut profiter de la guerre pour prendre
        son autonomie, Sur Essos à la mort de Drogo, la quasi-totalité des Dothrakis ont abandonné
        Daenerys alors
        qu'ils sont perdus en plein désert, elle envoie des éclaireurs pour essayer de trouver une
        ville.
        Elle trouve refuge dans la ville de Qarth, d'abord le conseil des treize lui refuse
        l'entrée par
        peur d'être pillé par la Khalessi, mais ils sont admis grâce à l’intervention de l’un des
        13 marchands
        qui dirigent la ville, Xaro Xhoan Daxos qui est un ancien bandit repenti. L’homme a
        organisé une fête
        en son honneur, où elle fait la connaissance de Pyat Pree, un homme étrange qu’il invite
        à lui rendre
        visite à l’Hôtel des Nonmourants, cependant elle ne souhaite pas s'y rendre car estimant
        qu'elle n'a
        pas d’intérêt à y aller. Xaro Xhoan Daxos annonce qu’il accepte de financer l’expédition
        de Daenerys
        à Westeros à condition qu’elle l’épouse, ce qu'elle refusera ne voulant pas de mariage.
        Mais à son
        retour de la soirée, elle découvre ses gardes assassinés et ses dragons disparus.
        Le coupable du vol
        n'est autre que Pyat Pree qui les a enfermés dans l'Hotel des Nonmourrants pour pousser
        Daenerys à
        y aller. Daenerys s’y rend et après avoir affronté quelques épreuves, elle retrouve
        ses trois dragons
        et les pousse à brûler vif Pyat Pree. Elle découvre ensuite que sa propre servante
        Doreah l’a trahie
        en couchant avec Xaro Xhoan Daxos et se venge des deux en les emmurant vivants, avant
        de piller Qarth
        et de quitter la ville pour continuer la conquête de la baie des Serfs.son fils Theon
        lui propose une alliance avec Robb
        Stark mais il refuse
        catégoriquement demandant même à Theon, pour prouver sa valeur, d'envahir Winterfell
        en l'absence
        de Robb. Theon est partagé entre trahir les Stark et trahir son père, il décide finalement
        d'attaquer Winterfell, et, pour montrer sa valeur à ses hommes, d’exécuter le maître d'arme
        Ser Rodrick Cassel. Mais le lendemain, il se rend compte que Bran et Rickon ont disparu, ils
        se sont enfuis pendant la nuit aidés par Hodor et Osha. Theon, ne voulant pas perdre la face
        après avoir découvert cette évasion, va tuer deux enfants du voisinage qu’il fait passer
        pour Bran
        et Rickon. Il perd le respect de ses hommes et finit par être livré aux Bolton, envoyés
        par Robb
        Stark pour reprendre Winterfell. Bran et Rickon, eux, partent en direction du mur pour
        rejoindre
        Jon Snow
      </p>
      <p className="season2-item">Sur Essos à la mort de Drogo, la quasi-totalité des Dothrakis ont abandonné Daenerys alors
        qu'ils sont perdus en plein désert, elle envoie des éclaireurs pour essayer de trouver
        une ville.
        Elle trouve refuge dans la ville de Qarth, d'abord le conseil des treize lui refuse
        l'entrée par
        peur d'être pillé par la Khalessi, mais ils sont admis grâce à l’intervention de l’un
        des 13 marchands
        qui dirigent la ville, Xaro Xhoan Daxos qui est un ancien bandit repenti. L’homme a
        organisé une fête
        en son honneur, où elle fait la connaissance de Pyat Pree, un homme étrange qu’il invite
        à lui rendre
        visite à l’Hôtel des Nonmourants, cependant elle ne souhaite pas s'y rendre car estimant
        qu'elle n'a
        pas d’intérêt à y aller. Xaro Xhoan Daxos annonce qu’il accepte de financer l’expédition
        de Daenerys
        à Westeros à condition qu’elle l’épouse, ce qu'elle refusera ne voulant pas de mariage.
        Mais à son
        retour de la soirée, elle découvre ses gardes assassinés et ses dragons disparus.
        Le coupable du vol
        n'est autre que Pyat Pree qui les a enfermés dans l'Hotel des Nonmourrants pour pousser
        Daenerys à
        y aller. Daenerys s’y rend et après avoir affronté quelques épreuves, elle retrouve ses
        trois dragons
        et les pousse à brûler vif Pyat Pree. Elle découvre ensuite que sa propre servante
        Doreah l’a trahie
        en couchant avec Xaro Xhoan Daxos et se venge des deux en les emmurant vivants,
        avant de piller Qarth
        et de quitter la ville pour continuer la conquête de la baie des Serfs.
      </p>
      <p className="season2-item">À Châteaunoir, la Garde de Nuit mène une expédition au-delà du Mur menée
        par Jeor Mormont dont Jon Snow et Samwell Tarly font tous deux partie. Ils font escale
        au nord du mur
        chez Craster, un homme qui n’a que des filles et couche avec certaines d’entre elles,
        il interdit
        formellement toute forme d'intimité avec elles. Jon Snow est révulsé mais le commandant
        de la Garde
        Jeor Mormont lui somme de ne rien dire qui pourrait le contrarier car c’est grâce à
        Craster que la
        Garde obtient des informations sur ce qui se passe au nord du Mur. Sam engage un jour
        la conversation
        avec Vère, l’une des filles de Craster, qui est enceinte et lui confie qu’elle a peur
        de ce qu'il
        adviendra de son bébé si c’est un garçon. Jon Snow surprend justement Craster alors
        qu’il fait don
        d'un bébé garçon aux marcheurs blanc avec lesquels il a conclu un pacte. Craster est
        furieux d’avoir
        ainsi été espionné et il chasse les hommes de la Garde de nuit. Ceux-ci n’ont donc
        d’autre choix que
        de continuer leur expédition, ils rejoignent Qhorin Mimain, un vieux ranger expérimenté
        qui monte une
        patrouille destinée à aller tuer des éclaireurs qui travaillent pour le compte de
        Mance Rayder,
        un sauvageon considéré comme le roi du peuple libre car il a réussi à unifier tous
        les peuples du
        nord du mur. Jon Snow intègre cette patrouille tandis que Sam reste auprès de son
        commandant.
        Qhorin et sa troupe parviennent à tuer tous les éclaireurs sauf une femme, Ygrid.
        Qhorin charge
        Jon de l’exécuter mais il hésite brièvement et elle saisit l’occasion pour s’enfuir.
        Le temps qu’il
        la rattrape, il a perdu la trace de la patrouille et est contraint de devoir rester
        avec elle et de
        passer la nuit ensemble pour ne pas succomber au froid. Le lendemain, Ygrid tente
        de le convaincre
        de rejoindre les Sauvageons. Snow lui répond que non et qu'il est fidèle à la garde de nuit,
        finalement Ygrid le conduit dans une embuscade. Qhorin Mimain a lui aussi été capturé,
        cependant
        il met un plan en place où Jon devra le tuer pour qu'il reste en vie et qu'il soit
        accepté par le
        peuple libre et il fait en sorte de provoquer un duel avec Jon Snow. Il pousse Snow
        à le tuer et
        se sacrifie afin que les Sauvageons pensent que Jon a trahi la Garde. Il pourra
        ainsi se glisser
        dans leurs rangs et servir d’espion pour le compte de la garde de nuit. Pendant
        ce temps, le reste
        des hommes dont Sam fait partie entendent trois coups de cor, le signal sonore qui
        annonce l’arrivéÀ Châteaunoir, la Garde de Nuit mène une expédition au-delà du Mur
        menée par Jeor Mormont dont Jon Snow et Samwell Tarly font tous deux partie. Ils font
        escale au nord du mur chez Craster, un homme qui n’a que des filles et couche avec
        certaines d’entre elles, il interdit formellement toute forme d'intimité avec elles.
        Jon Snow est révulsé mais le commandant de la Garde Jeor Mormont lui somme de ne rien
        dire qui pourrait le contrarier car c’est grâce à Craster que la Garde obtient des
        informations sur ce qui se passe au nord du Mur. Sam engage un jour la conversation
        avec Vère, l’une des filles de Craster, qui est enceinte et lui confie qu’elle a peur
        de ce qu'il adviendra de son bébé si c’est un garçon. Jon Snow surprend justement
        Craster alors qu’il fait don d'un bébé garçon aux marcheurs blanc avec lesquels il a
        conclu un pacte. Craster est furieux d’avoir ainsi été espionné et il chasse les hommes
        de la Garde de nuit. Ceux-ci n’ont donc d’autre choix que de continuer leur expédition,
        ils rejoignent Qhorin Mimain, un vieux ranger expérimenté qui monte une patrouille destinée
        à aller tuer des éclaireurs qui travaillent pour le compte de Mance Rayder, un sauvageon
        considéré comme le roi du peuple libre car il a réussi à unifier tous les peuples du
        nord du mur. Jon Snow intègre cette patrouille tandis que Sam reste auprès de son
        commandant.
        Qhorin et sa troupe parviennent à tuer tous les éclaireurs sauf une femme, Ygrid.
        Qhorin charge Jon de l’exécuter mais il hésite brièvement et elle saisit l’occasion
        pour s’enfuir. Le temps qu’il la rattrape, il a perdu la trace de la patrouille et
        est contraint de devoir rester avec elle et de passer la nuit ensemble pour ne pas
        succomber au froid. Le lendemain, Ygrid tente de le convaincre de rejoindre
        les Sauvageons.
        Snow lui répond que non et qu'il est fidèle à la garde de nuit, finalement Ygrid le conduit
        dans une embuscade. Qhorin Mimain a lui aussi été capturé, cependant il met un plan en place
        où Jon devra le tuer pour qu'il reste en vie et qu'il soit accepté par le peuple libre et
        il fait en sorte de provoquer un duel avec Jon Snow. Il pousse Snow à le tuer et se
        sacrifie afin que les Sauvageons pensent que Jon a trahi la Garde. Il pourra ainsi se
        glisser dans leurs rangs et servir d’espion pour le compte de la garde de nuit.
        Pendant ce temps, le reste des hommes dont Sam fait partie entendent trois coups de cor,
        le signal sonore qui annonce l’arrivée imminente de marcheurs blancs. Paralysé par la
        peur, Sam, alors que ses compères s'enfuient et le laissent sur place, se cache derrière
        un rocher et se confronte pour la première fois aux marcheurs blancs.
        imminente de marcheurs blancs. Paralysé par la peur, Sam, alors que ses compères
        s'enfuient et le
        laissent sur place, se cache derrière un rocher et se confronte pour la première fois
        aux marcheurs
        blancs.
      </p>
    </div>
  </div>
);

// == Export
export default Saison2;
