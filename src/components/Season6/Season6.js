// == Import npm
import React from 'react';

// == Import
import './season6.scss';
import carteGot from '../../assets/public/carteGOT.jpg';
import AryaStark from '../../assets/public/AryaStark.png';
import HeightBird from '../../assets/public/HeightBird.jpg';
import WithoutFace from '../../assets/public/WithoutFace.jpeg';
import Wall from '../../assets/public/Wall.jpg';
import YaraGreyjoy from '../../assets/public/Yara_Greyjoy.png';
import JohnSnow from '../../assets/public/Jon_Snow.png';
import OlenaTyrell from '../../assets/public/OlenaTyrell.jpg';
import CerseiLooked from '../../assets/public/CerseiLooked.jpeg';

// == Composant
const Saison6 = () => (
  <div className="season6">
    <div className="season6-container">
      <h1 className="season6-title">Saison 6</h1>
      <a className="season6-button" href="/seasons">Retour</a>
      <h2 className="season6-subTitle">Synopsis</h2>
      <div className="season6-image">
        <img className="season6-img" src={carteGot} alt="carte de game of throne" />
        <img className="season6-img" src={AryaStark} alt="Arya Stark" />
      </div>
      <p className="season6-item">À Port-Réal, Cersei, qui a récemment effectué une marche de
        la honte particulièrement humiliante, doit faire face à la mort de sa fille, Myrcella.
        Jaime, lui, devra affronter le groupe des Moineaux (de plus en plus influent dans la ville)
        afin de faire libérer la reine Margaery Tyrell et son frère Loras, toujours emprisonnés dans
        les cachots du septuaire de Baelor.
      </p>
      <p className="season6-item">À Braavos, Arya, désormais aveugle, essaie tant bien que mal de
        survivre avant de recouvrer la vue et de reprendre son entrainement avec Jaqen H'Ghar afin
        de devenir une Sans-Visage. À Meereen, Tyrion Lannister, aidé de Varys, Missandei et Ver
        Gris devra gérer la régence de la ville à la suite du départ de Daenerys. Quant à cette
        dernière, elle se retrouve à être la prisonnière d'une horde de Dothrakis menée par le
        khal Moro, tandis que Jorah Mormont et Daario Naharis se lancent sur ses traces à travers
        le continent d'Essos afin de la délivrer.
      </p>
      <p className="season6-item">Dans le Nord, Sansa et Theon se retrouvent en fuite après la
        récente défaite de Stannis Baratheon aux portes de Winterfell. Ils devront échapper tant
        bien que mal aux soldats des Bolton qui les poursuivent. Ils sont alors secourus par
        Brienne de Torth et Podrick Payne, qui conduisent Sansa à Châteaunoir tandis que Theon
        rentre chez lui dans les îles de Fer. De son côté, Ramsay exécute froidement son père et
        s'autoproclame seigneur de Winterfell avec le soutien des maisons Karstark et Omble, toutes
        deux bannerets du gouverneur du Nord, en faisant tuer sa belle mère et son demi-frère
        nouveau-né. Il reçoit en cadeau de la part des Omble les fugitifs Rickon Stark et Osha,
        qu'il fait prisonniers.
      </p>
      <p className="season6-item">Dans les îles de Fer, une nouvelle élection se prépare après
        la mort soudaine de Balon Greyjoy. Euron Greyjoy, le frère et meurtrier de Balon, évince
        Yara et Théon de la succession et est proclamé roi des îles de Fer par les bannerets.
        Il compte construire une immense flotte dans l'espoir de s'allier avec Daenerys Targaryen
        pour conquérir Westeros. Dans le Conflans, Walder Frey, l'instigateur des Noces pourpres,
        règne désormais en tant que gouverneur. Mais Brynden Tully le Silure, l'oncle de feu
        Catelyn Stark, reprend de droit Vivesaigues. Une coalition Frey-Lannister se forme afin
        d'assiéger et de reprendre le château.
      </p>
      <p className="season6-item">Au Mur, Jon Snow est mort, assassiné par ses propres hommes.
        Alliser Thorne règne désormais sur Châteaunoir. Mais les Sauvageons menés par Tormund
        attaquent le château pour libérer Ser Davos et les derniers partisans du Lord Commandant.
        Ils emprisonnent Thorne et ses mutins. Peu après, Mélissandre réussit à ressusciter Jon.
        Revenu à la vie, ce dernier fait pendre ses assassins et démissionne de la Garde de Nuit
        pour partir vers le sud, lassé de combattre pour si peu de bénéfices. Mais l'arrivée
        inattendue de sa demi-sœur Sansa finit par le convaincre de prendre les armes afin
        d'affronter Ramsay Bolton à Winterfell et de libérer les terres du Nord, ainsi que son
        demi-frère Rickon. Il rallie des maisons mineures dont la maison Mormont ainsi que ce
        qu'il reste des Sauvageons pour se constituer une armée.
      </p>
      <p className="season6-item">Enfin, au-delà du mur, Bran Stark est formé par la Corneille
        à Trois Yeux et acquiert la capacité à voir ce qui fut, qui est et qui sera, ce qui lui
        permet de découvrir des secrets du passé. Il découvrira aussi son rôle dans les guerres
        à venir. Toutefois, il se rendra compte que certaines visions du passé engendreront de
        lourdes conséquences sur le présent et pour le futur.
      </p>

      <h2 className="season6-subTitle">Résumé détaillé</h2>
      <div className="season6-image">
        <img className="season6-img" src={HeightBird} alt="Le grand moineau" />
        <img className="season6-img" src={WithoutFace} alt="Les sans visages" />
        <img className="season6-img" src={Wall} alt="Le mur" />
        <img className="season6-img" src={YaraGreyjoy} alt="Yara Greyjoy" />
        <img className="season6-img" src={JohnSnow} alt="John Snow" />
        <img className="season6-img" src={OlenaTyrell} alt="Olena Tyrell" />
        <img className="season6-img" src={CerseiLooked} alt="Cersei regarde le grand septuaire exploser" />
      </div>
      <p className="season6-item">À Port-Réal, Cersei, se remettant à peine de sa marche
        de la honte, où elle a été forcée de marcher nue et les cheveux coupés à travers
        toute la ville, voit Jaime revenir de sa mission à Dorne avec la dépouille de leur
        fille, Myrcella. Peu après, sur ordre de Tommen, elle doit rester confinée dans ses
        appartements, surveillée par Gregor Clegane dit la Montagne. Son seul soutien à la
        cour reste le mestre déchu Qyburn. Les jumeaux Lannister se voient expulsés du Conseil
        restreint, tenu alors par leur oncle Kevan, Mace et Olenna Tyrell et le grand mestre
        Pycelle. Quant à Margaery et Loras, toujours emprisonnés au grand septuaire de Baelor
        par le Grand Moineau, leur procès approche. Cependant, Margaery feint de s’adonner aux
        pratiques de la Foi et évite ainsi le châtiment de la marche d'expiation subi par Cersei
        en amenant Tommen à lier la Couronne et la foi. Quant à Tommen, il rend plusieurs fois
        visite au Grand Moineau avant cela et, manipulé par celui-ci, se convertit naïvement à
        la religion des Sept. Après avoir empêché une attaque du septuaire par l'armée unifiée
        des Tyrell et des Lannister, il fait excommunier Jaime de la Garde royale puis expulser
        de la capitale, ce qui est un nouveau coup dur pour les jumeaux Lannister, qui perdent
        petit à petit le peu de soutien qu'ils avaient. Port-Réal, avec la permission du jeune
        roi, est désormais contrôlée par les Moineaux. Cela fait, le Grand Moineau intrigue afin
        que Tommen fasse interdire les procès par combat. Ce dernier annonce que sa mère et Loras
        Tyrell seront jugés lors d'un procès équitable, au grand désarroi de Cersei, qui comptait
        sur la Montagne pour la tirer d'affaire. C'est alors que Qyburn lui annonce qu'une
        importante quantité de feu grégeois se trouve encore sous la cité. En parallèle, à Dorne,
        les Aspics des Sables, après avoir tué la princesse Myrcella, renversent la dynastie des
        Martell en tuant le prince Doran et son fils Trystane. Ellaria Sand s’assoit alors sur le
        trône de Dorne.
      </p>

      <p className="season6-item">À Braavos, Arya subit une punition des Sans-Visages,
        qui l'ont privée de la vue pour avoir tué Ser Meryn Trant sans en recevoir la permission.
        Errant dans les rues, elle commence à développer ses capacités et à continuer son
        entrainement, encouragée par Jaqen H'ghar et maltraitée par l'Orpheline. Petit à petit,
        elle commence à devenir « personne». Ayant recouvré la vue, Arya assiste plusieurs fois
        à une pièce de théâtre de rue racontant les tragédies de la vie de Cersei Lannister, où
        elle est chargée par les Sans-Visages d'assassiner l'actrice principale de la troupe,
        tenant le rôle-titre. Mais, se refusant à occire une innocente, elle est traquée pour
        avoir de nouveau transgressé les règles. Échappant à plusieurs tentatives d'assassinat
        de « l'Orpheline », elle réussit finalement à la tuer en lui tendant un piège mortel dans
        une cave de Braavos. Sitôt fait, elle rend visite à Jaqen H'ghar dans la demeure du Noir
        et du Blanc et lui annonce qu'elle est bel et bien Arya Stark et qu'elle rentre chez elle,
        à Westeros.
      </p>
      <p className="season6-item"> Dans le Nord, Sansa et Theon se retrouvent en fuite. Ils doivent
        échapper tant bien que mal aux soldats des Bolton qui les poursuivent. Ils sont alors
        secourus par Brienne de Torth et Podrick Payne, qui les conduisent ensuite à Châteaunoir
        tandis que Theon rentre chez lui dans les îles de Fer. À Winterfell, quand Ramsay apprend
        que son père, Roose Bolton, a eu un fils légitime, il l'exécute froidement ainsi que sa
        belle-mère et son demi-frère nouveau-né. Il s'autoproclame alors seigneur de Winterfell
        avec le soutien des maisons Karstark et Omble, toutes deux baneresses du gouverneur du Nord.
        Il reçoit en cadeau de la part des Omble les fugitifs Rickon Stark et Osha, ainsi que la
        dépouille de Brousaille, le loup géant du jeune Stark. Il tue celle-ci et garde Rickon
        prisonnier.
      </p>

      <p className="season6-item">De son côté, Theon rentre dans les îles de Fer et retrouve sa sœur,
        Yara, après avoir appris la mort de leur père, Balon, des mains de leur oncle, Euron.
        Alors que Yara réclame le trône de Sel, elle est expulsée de Pyke par Euron, déterminé à
        régner et visant Port-Réal en s'alliant par mariage avec Daenerys Targaryen. Theon et Yara
        prennent alors la fuite vers Essos, emportant avec eux une grande partie de la flotte des
        Fer-nés. Faisant une escale à Volantis, ils se décident à rencontrer Daenerys Targaryen,
        la mère des dragons, à Meereen.
      </p>

      <p className="season6-item">Quant à la khaleesi, elle se retrouve prisonnière d'une horde de
        Dothrakis menée par le khal Moro, tandis que Jorah Mormont et Daario Naharis se lancent sur
        ses traces à travers le continent d'Essos afin de la délivrer. Arrivant à Vaes Dothrak,
        elle est retenue prisonnière dans le grand Dosh Khaleen. Grâce à la ruse, elle arrive à
        piéger ses geôliers en incendiant le temple, brûlant tous les jhals présents et gagnant
        ainsi la soumission des Dothrakis. Daenerys, avec le peuple dothraki s'ajoutant aux Puînés
        et aux Immaculés restants, se constitue alors une gigantesque armada et est déterminée à
        faire voile vers Westeros. Mais avant cela, elle doit libérer Meereen, tombée dans le chaos
        et assiégée par les esclavagistes en son absence, malgré les interventions politiques de
        Tyrion Lannister, Varys, Missendei et Ver Gris. Après avoir fait exécuter les maîtres
        esclavagistes et les Fils de la Harpie, elle charge ses trois dragons de détruire un bateau
        de leur flotte en exemple, flotte qu'elle récupère pour ses projets. De retour dans la
        pyramide, Daenerys et Tyrion reçoivent en audience Yara et Theon Greyjoy, Yara propose un
        marché équitable à Daenerys : prêter leur flotte de Fer-Nés afin qu'elle puisse rejoindre
        Westeros si en échange, elle accepte de lui donner le trône de Sel. Daenerys accepte de
        donner les îles de Fer à Yara à condition qu'elle la reconnaisse comme reine des Sept
        Couronnes. Les deux futures souveraines concluent donc un marché.
      </p>

      <p className="season6-item">Au Mur, Jon Snow est mort, assassiné par ses propres hommes.
        Alliser Thorne règne désormais sur Châteaunoir en tant que Lord Commandant de la Garde
        de Nuit. Mais les sauvageons menés par Tormund attaquent le château pour libérer Ser Davos
        et les derniers alliés de Jon. Ils emprisonnent Thorne et ses partisans. Peu après,
        Mélisandre, grâce aux encouragements de Davos, réussit à ressusciter Jon au cours d'un
        rituel implorant le dieu rouge R'llor. Revenu à la vie, Jon fait pendre ses assassins et
        démissionne de la Garde de Nuit, considérant que sa « mort » l'a libéré de son engagement,
        pour prendre la route vers le sud, lassé de voir ce en quoi il croit voler en éclats
        (la fidélité des frères-jurés, l'honneur et la justice, etc). Mais l'arrivée inattendue de
        sa demi-sœur Sansa au Mur finit par le convaincre de prendre les armes afin d'affronter
        Ramsay Bolton à Winterfell et de libérer les terres du Nord de son joug, ainsi que leur
        frère Rickon. Il décide alors de rassembler les derniers partisans de Robb Stark parmi
        lesquels les Mormont, gouvernés par la très jeune Lyanna Mormont. Mais il doit essuyer le
        refus de plusieurs maisons, mécontentes des décisions de guerre de feu leur souverain Robb.
        Malgré le sous-effectif de ses troupes, il se décide néanmoins à attaquer Winterfell, épaulé
        par l'armée sauvageonne. En parallèle, Sansa envoie secrètement un message à Littlefinger
        aux Eyrié afin qu'il lui vienne en aide, vu qu'il contrôle les chevaliers du Val d'Aryn.
        Elle charge également Brienne et Podrick de rendre visite à Brynden Tully, dit le Silure
        (qui a réussi à reprendre son fief Vivesaigues aux Frey), pour lui demander de fournir plus
        de troupes. Arrivant à Vivesaigues, Brienne tombe alors en plein siège, tenu par l'armée
        Lannister dirigée par Jaime et secondée par l'armée Frey du vieux Walder, l'instigateur
        des Noces pourpres. Durant l'assaut du château permis par Edmure Tully, propriétaire
        légitime des murs, le Silure est tué et Vivesaigues tombe à nouveau entre les mains des
        Frey, tandis que Brienne et Podrick arrivent à s'échapper de la bataille par le fleuve.
      </p>

      <p className="season6-item">À Winterfell, les armées de Jon et de Ramsay s'affrontent
        férocement lors de la « bataille des Bâtards » qui fait énormément de victimes des deux
        côtés, dont une grande partie de l'armée sauvageonne. L'armée de Jon ne doit sa survie
        qu'à l'arrivée inopinée des chevaliers du Val, menés par Littlefinger et Sansa. Peu après,
        Sansa se charge d'achever Ramsay en le livrant à sa meute de chiens affamés et reprend
        Winterfell. Mais la bataille a été lourde en pertes et a vu la mort de Rickon Stark
        (qui, en l'absence de Bran, était le dernier héritier mâle de Winterfell), assassiné
        par Ramsay juste avant le début de la bataille.
      </p>
      <p className="season6-item">Arrivé dans le Bief, Sam, accompagné de Vère, se rend à
        Corcolline, le fief de son père, Randyll Tarly. Après un dîner mouvementé, Sam décide
        finalement de quitter la ville avec Vère pour se rendre directement à Villevieille,
        tout en dérobant au passage Corvenin, l’épée en acier valyrien de sa famille, dont la
        composition s'est déjà révélée utile pour lutter contre les Marcheurs blancs.
      </p>
      <p className="season6-item">Dans le Conflans, Sandor Clegane a été sauvé d'une mort
        certaine après son combat contre Brienne par un groupe de paysans, dirigé par le septon
        Meribal. Après que sa communauté a été massacrée par des bandits se faisant passer pour
        la Fraternité sans Bannière, Clegane tombe sur la véritable Fraternité, menée par Béric
        Dondarrion et le prêtre rouge Thoros de Myr, en train de pendre les responsables du
        massacre. Le Limier réclame le droit de tuer le chef et la Fraternité lui propose de les
        rejoindre.
      </p>
      <p className="season6-item">Enfin, au-delà du mur, Brandon Stark a rejoint la Corneille
        à Trois Yeux, Bryden Rivers. Lentement, il développe ses capacités de vervue en voyant
        plusieurs scènes du passé (notamment la jeunesse de son père Ned Stark durant le règne
        du Roi fou) mais ne contrôle pas toujours ses pouvoirs. Alors qu'il est en pleine vision,
        il est repéré par le roi de la nuit, qui le marque au bras. Aussitôt, une immense armée
        de Marcheurs blancs menée par le roi de la nuit déferle sur eux, prenant d'assaut la grotte
        où ils se cachent, massacrant sans pitié la Corneille à Trois yeux, les Enfants de la Forêt,
        le géant Hodor, ainsi que le loup géant de Bran, Été. Poursuivis par les Marcheurs, Bran et
        Meera sont sauvés par Benjen Stark, qui avait disparu au-delà du Mur depuis des années et
        était devenu un mort-vivant sauvé du contrôle du roi de la nuit par les Enfants de la Forêt.
      </p>
      <p className="season6-item">Le dernier épisode vient conclure les intrigues et poser les
        bases de la saison suivante : à Port-Réal, Cersei, par la ruse, parvient à éliminer tous
        les Moineaux et les Tyrell . En effet, alors que vient de s'achever le procès de Loras
        Tyrell et que se prépare son propre procès, elle fait exploser le grand septuaire de Baelor
        grâce au feu grégeois. Après la mort de Tommen, qui se défenestre du haut du château,
        Cersei s'autoproclame reine des Sept Couronnes avec l'aide de Qyburn, nouveau grand maestre
        qui a lui-même fait assassiner Pycelle. À Winterfell, après avoir triomphé des Bolton,
        Jon est proclamé roi du Nord par les seigneurs du Nord et du Val d'Arryn. Olenna Tyrell,
        endeuillée par la mort de toute sa famille, va trouver les Aspics des sables à Dorne ainsi
        qu'Ellaria Sand afin de conclure une alliance ayant pour but de renverser les Lannister.
        Les Dorniennes reçoivent également Varys, qui vient avec une proposition d'alliance de la
        part de Daenerys Targaryen. Aux Jumeaux, Walder Frey fête sa victoire sur les Tully avec
        Jaime, bien que celui-ci désapprouve la transgression des Frey sur les règles de l'hôte lors
        des Noces pourpres. Mais plus tard dans la nuit, il est sauvagement assassiné par Arya, qui
        venge ainsi la mort de sa mère et son frère, massacrés lors des Noces pourpres, après lui
        avoir fait manger la chair de deux de ses fils, ceux qui ont personnellement égorgé et
        poignardé les Stark. Sam arrive à Villevieille, où il a l'intention de devenir un mestre
        de la citadelle. Au nord du Mur, Bran Stark, étant la nouvelle Corneille à Trois yeux, a
        une vision de son père à la tour de la Joie, où il apprend, stupéfait, la vérité sur les
        origines de Jon Snow : il n'est pas le bâtard de Ned mais son neveu, en tant que fils de
        Lyanna Stark (sœur de Ned) mais seul Ned (et Bran) entend le nom du père, on sait juste
        que Robert fera tuer l'enfant s'il l'apprend. Enfin, à Meereen, Daenerys appareille pour
        Westeros, accompagnée de ses trois dragons, d'une immense armada et de ses conseillers
        Missendei, Ver Gris, Varys et Tyrion Lannister ainsi que de Theon et Yara Greyjoy.
      </p>
    </div>
  </div>
);

// == Export
export default Saison6;
