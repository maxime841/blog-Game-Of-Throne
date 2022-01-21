// == Import npm
import React from 'react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import History from 'src/components/History';
import Seasons from 'src/components/Seasons';
import Season1 from 'src/components/Season1/Season1';
import Season2 from 'src/components/Season2/Season2';
import Season3 from 'src/components/Season3/Season3';
import Season4 from 'src/components/Season4/Season4';
import Season5 from 'src/components/Season5/Season5';
import Season6 from 'src/components/Season6/Season6';
import Season7 from 'src/components/Season7/Season7';
import Season8 from 'src/components/Season8/Season8';
import Card from 'src/components/Card';
import Houses from 'src/components/Houses';
import HouseArryn from 'src/components/HouseArryn';
import HouseArrynGen from 'src/components/HouseArrynGen';
import HouseArrynChar from 'src/components/HouseArrynChar';
import HouseArrynCharJon from 'src/components/HouseArrynCharJon';
import HouseArrynCharLysa from 'src/components/HouseArrynCharLysa';
import HouseArrynCharRobin from 'src/components/HouseArrynCharRobin';
import HouseBaratheon from 'src/components/HouseBaratheon';
import HouseBaratheonGen from 'src/components/HouseBaratheonGen';
import HouseBaratheonChar from 'src/components/HouseBaratheonChar';
import HouseBaratheonCharGendry from 'src/components/HouseBaratheonCharGendry';
import HouseBaratheonCharJoffrey from 'src/components/HouseBaratheonCharJoffrey';
import HouseBaratheonCharMyrcella from 'src/components/HouseBaratheonCharMyrcella';
import HouseBaratheonCharRenly from 'src/components/HouseBaratheonCharRenly';
import HouseBaratheonCharRobert from 'src/components/HouseBaratheonCharRobert';
import HouseBaratheonCharSelyse from 'src/components/HouseBaratheonCharSelyse';
import HouseBaratheonCharShireen from 'src/components/HouseBaratheonCharShireen';
import HouseBaratheonCharStannis from 'src/components/HouseBaratheonCharStannis';
import HouseBaratheonCharTommen from 'src/components/HouseBaratheonCharTommen';
import HouseBolton from 'src/components/HouseBolton';
import HouseBoltonGen from 'src/components/HouseBoltonGen';
import HouseBoltonChar from 'src/components/HouseBoltonChar';
import HouseBoltonCharRamsay from 'src/components/HouseBoltonCharRamsay';
import HouseBoltonCharRoose from 'src/components/HouseBoltonCharRoose';
import HouseBoltonCharWalda from 'src/components/HouseBoltonCharWalda';
import HouseBronn from 'src/components/HouseBronn';
import HouseBronnGen from 'src/components/HouseBronnGen';
import HouseBronnChar from 'src/components/HouseBronnChar';
import HouseBronnCharLaNera from 'src/components/HouseBronnCharLaNera';
import HouseFrey from 'src/components/HouseFrey';
import HouseFreyGen from 'src/components/HouseFreyGen';
import HouseFreyChar from 'src/components/HouseFreyChar';
import HouseFreyCharArwaya from 'src/components/HouseFreyCharArwaya';
import HouseFreyCharDerwa from 'src/components/HouseFreyCharDerwa';
import HouseFreyCharFreya from 'src/components/HouseFreyCharFreya';
import HouseFreyCharJoyeuse from 'src/components/HouseFreyCharJoyeuse';
import HouseFreyCharMarianne from 'src/components/HouseFreyCharMarianne';
import HouseFreyCharMerry from 'src/components/HouseFreyCharMerry';
import HouseFreyCharNeleya from 'src/components/HouseFreyCharNeleya';
import HouseFreyCharShirei from 'src/components/HouseFreyCharShirei';
import HouseFreyCharStevron from 'src/components/HouseFreyCharStevron';
import HouseFreyCharWalda from 'src/components/HouseFreyCharWalda';
import HouseFreyCharWalder from 'src/components/HouseFreyCharWalder';
import HouseGreyjoy from 'src/components/HouseGreyjoy';
import HouseGreyjoyGen from 'src/components/HouseGreyjoyGen';
import HouseGreyjoyChar from 'src/components/HouseGreyjoyChar';
import HouseGreyjoyCharAeron from 'src/components/HouseGreyjoyCharAeron';
import HouseGreyjoyCharAlannys from 'src/components/HouseGreyjoyCharAlannys';
import HouseGreyjoyCharBalon from 'src/components/HouseGreyjoyCharBalon';
import HouseGreyjoyCharEuron from 'src/components/HouseGreyjoyCharEuron';
import HouseGreyjoyCharTheon from 'src/components/HouseGreyjoyCharTheon';
import HouseGreyjoyCharYara from 'src/components/HouseGreyjoyCharYara';
import HouseLannister from 'src/components/HouseLannister';
import HouseLannisterGen from 'src/components/HouseLannisterGen';
import HouseLannisterChar from 'src/components/HouseLannisterChar';
import HouseLannisterCharAlton from 'src/components/HouseLannisterCharAlton';
import HouseLannisterCharCersei from 'src/components/HouseLannisterCharCersei';
import HouseLannisterCharJaime from 'src/components/HouseLannisterCharJaime';
import HouseLannisterCharKevan from 'src/components/HouseLannisterCharKevan';
import HouseLannisterCharLancel from 'src/components/HouseLannisterCharLancel';
import HouseLannisterCharMartyn from 'src/components/HouseLannisterCharMartyn';
import HouseLannisterCharReginald from 'src/components/HouseLannisterCharReginald';
import HouseLannisterCharTyrion from 'src/components/HouseLannisterCharTyrion';
import HouseLannisterCharTywin from 'src/components/HouseLannisterCharTywin';
import HouseLannisterCharWillem from 'src/components/HouseLannisterCharWillem';
import HouseMartell from 'src/components/HouseMartell';
import HouseMartellGen from 'src/components/HouseMartellGen';
import HouseMartellChar from 'src/components/HouseMartellChar';
import HouseMartellCharDoran from 'src/components/HouseMartellCharDoran';
import HouseMartellCharOberyn from 'src/components/HouseMartellCharOberyn';
import HouseMartellCharOlenna from 'src/components/HouseMartellCharOlenna';
import HouseMartellCharTrystan from 'src/components/HouseMartellCharTrystan';
import HouseStark from 'src/components/HouseStark';
import HouseStarkGen from 'src/components/HouseStarkGen';
import HouseStarkChar from 'src/components/HouseStarkChar';
import HouseStarkCharArya from 'src/components/HouseStarkCharArya';
import HouseStarkCharBenjen from 'src/components/HouseStarkCharBenjen';
import HouseStarkCharBran from 'src/components/HouseStarkCharBran';
import HouseStarkCharCatelyn from 'src/components/HouseStarkCharCatelyn';
import HouseStarkCharEddard from 'src/components/HouseStarkCharEddard';
import HouseStarkCharLyanna from 'src/components/HouseStarkCharLyanna';
import HouseStarkCharRickard from 'src/components/HouseStarkCharRickard';
import HouseStarkCharRickon from 'src/components/HouseStarkCharRickon';
import HouseStarkCharRobb from 'src/components/HouseStarkCharRobb';
import HouseStarkCharSansa from 'src/components/HouseStarkCharSansa';
import HouseStarkCharTalisa from 'src/components/HouseStarkCharTalisa';
import HouseTargaryen from 'src/components/HouseTargaryen';
import HouseTargaryenGen from 'src/components/HouseTargaryenGen';
import HouseTargaryenChar from 'src/components/HouseTargaryenChar';
import HouseTargaryenCharAemon from 'src/components/HouseTargaryenCharAemon';
import HouseTargaryenCharDaenerys from 'src/components/HouseTargaryenCharDaenerys';
import HouseTargaryenCharRhaegar from 'src/components/HouseTargaryenCharRhaegar';
import HouseTargaryenCharViserys from 'src/components/HouseTargaryenCharViserys';
import HouseTully from 'src/components/HouseTully';
import HouseTullyGen from 'src/components/HouseTullyGen';
import HouseTullyChar from 'src/components/HouseTullyChar';
import HouseTullyCharBrynden from 'src/components/HouseTullyCharBrynden';
import HouseTullyCharEdmure from 'src/components/HouseTullyCharEdmure';
import HouseTullyCharRoslin from 'src/components/HouseTullyCharRoslin';
import HouseTyrell from 'src/components/HouseTyrell';
import HouseTyrellGen from 'src/components/HouseTyrellGen';
import HouseTyrellChar from 'src/components/HouseTyrellChar';
import HouseTyrellCharLoras from 'src/components/HouseTyrellCharLoras';
import HouseTyrellCharMace from 'src/components/HouseTyrellCharMace';
import HouseTyrellCharMargaery from 'src/components/HouseTyrellCharMargaery';
import Objects from 'src/components/Objects';
import ObjectsBooks from 'src/components/ObjectsBooks';
import ObjectsGames from 'src/components/ObjectsGames';
import ObjectsShop from 'src/components/ObjectsShop';
import Actors from 'src/components/Actors';
import EmiliaClarke from 'src/components/EmiliaClarke';
import KitHarington from 'src/components/KitHarington';
import SophieTurner from 'src/components/SophieTurner';
import MaisieWilliams from 'src/components/MaisieWilliams';
import PeterDinklage from 'src/components/PeterDinklage';
import LenaHeadey from 'src/components/LenaHeadey';
import NikolajCosterWaldau from 'src/components/NikolajCosterWaldau';
import GwendolyneChristie from 'src/components/GwendolyneChristie';
import IsaacHempsteadWright from 'src/components/IsaacHempsteadWright';
import AlfieAllen from 'src/components/AlfieAllen';
import NathalieEmmanuel from 'src/components/NathalieEmmanuel';
import IanGlen from 'src/components/IanGlen';
import CariceVanHouten from 'src/components/CariceVanHouten';
import AidenGillen from 'src/components/AidenGillen';
import LiamCunningham from 'src/components/LiamCunningham';
import SeanBean from 'src/components/SeanBean';
import MarkAddy from 'src/components/MarkAddy';
import MichelleFairley from 'src/components/MichelleFairley';
import HarryLloyd from 'src/components/HarryLloyd';
import RichardMadden from 'src/components/RichardMadden';
import JackGleeson from 'src/components/JackGleeson';
import RoryMcCann from 'src/components/RoryMcCann';
import JasonMomoa from 'src/components/JasonMomoa';
import JohnBradleyWest from 'src/components/JohnBradleyWest';
import StephenDillane from 'src/components/StephenDillane';
import JamesCosmo from 'src/components/JamesCosmo';
import JeromeFlynn from 'src/components/JeromeFlynn';
import ConlethHill from 'src/components/ConlethHill';
import SibelKekilli from 'src/components/SibelKekilli';
import NathalieDormer from 'src/components/NathalieDormer';
import CharlesDance from 'src/components/CharlesDance';
import OonaChaplin from 'src/components/OonaChaplin';
import RoseLeslie from 'src/components/RoseLeslie';
import JoeDempsie from 'src/components/JoeDempsie';
import KristoferHivju from 'src/components/KristoferHivju';
import IwanRheon from 'src/components/IwanRheon';
import HannahMurray from 'src/components/HannahMurray';
import MichielHuisman from 'src/components/MichielHuisman';
import IndiraVarma from 'src/components/IndiraVarma';
import DeanCharlesChapman from 'src/components/DeanCharlesChapman';
import TomWlaschiha from 'src/components/TomWlaschiha';
import JonathanPryce from 'src/components/JonathanPryce';
import JacobAnderson from 'src/components/JacobAnderson';
import Creator from 'src/components/Creator';
import Music from 'src/components/Music';
import Suits from 'src/components/Suits';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// == Import
import './bloggot.scss';
import routeData from '../../data/route';
import seasonData from '../../data/seasons';
import housesData from '../../data/houses';
import books from '../../data/books';
import games from '../../data/games';
import actors from '../../data/actors';

// == Composant
const BlogGOT = () => (
  <div className="blog-got">
    <Router>
      <Header links={routeData} />
      <Routes>
        <Route path="/history" exact element={<History />} />
        <Route path="/seasons" element={<Seasons seasons={seasonData} />} />
        <Route path="/saison1" element={<Season1 />} />
        <Route path="/saison2" element={<Season2 />} />
        <Route path="/saison3" element={<Season3 />} />
        <Route path="/saison4" element={<Season4 />} />
        <Route path="/saison5" element={<Season5 />} />
        <Route path="/saison6" element={<Season6 />} />
        <Route path="/saison7" element={<Season7 />} />
        <Route path="/saison8" element={<Season8 />} />
        <Route path="/card" element={<Card />} />
        <Route path="/houses" element={<Houses houses={housesData} />} />
        <Route path="/houseArryn" element={<HouseArryn />} />
        <Route path="/houseArrynGen" element={<HouseArrynGen />} />
        <Route path="/houseArrynChar" element={<HouseArrynChar />} />
        <Route path="/houseArrynCharJon" element={<HouseArrynCharJon />} />
        <Route path="/houseArrynCharLysa" element={<HouseArrynCharLysa />} />
        <Route path="/houseArrynCharRobin" element={<HouseArrynCharRobin />} />
        <Route path="/houseBaratheon" element={<HouseBaratheon />} />
        <Route path="/houseBaratheonChar" element={<HouseBaratheonChar />} />
        <Route path="/houseBaratheonCharGendry" element={<HouseBaratheonCharGendry />} />
        <Route path="/houseBaratheonCharJoffrey" element={<HouseBaratheonCharJoffrey />} />
        <Route path="/houseBaratheonCharMyrcella" element={<HouseBaratheonCharMyrcella />} />
        <Route path="/houseBaratheonCharRenly" element={<HouseBaratheonCharRenly />} />
        <Route path="/houseBaratheonCharRobert" element={<HouseBaratheonCharRobert />} />
        <Route path="/houseBaratheonCharSelyse" element={<HouseBaratheonCharSelyse />} />
        <Route path="/houseBaratheonCharShireen" element={<HouseBaratheonCharShireen />} />
        <Route path="/houseBaratheonCharStannis" element={<HouseBaratheonCharStannis />} />
        <Route path="/houseBaratheonCharTommen" element={<HouseBaratheonCharTommen />} />
        <Route path="/houseBaratheonGen" element={<HouseBaratheonGen />} />
        <Route path="/houseBolton" element={<HouseBolton />} />
        <Route path="/houseBoltonChar" element={<HouseBoltonChar />} />
        <Route path="/houseBoltonGen" element={<HouseBoltonGen />} />
        <Route path="/houseBoltonCharRamsay" element={<HouseBoltonCharRamsay />} />
        <Route path="/houseBoltonCharRoose" element={<HouseBoltonCharRoose />} />
        <Route path="/houseBoltonCharWalda" element={<HouseBoltonCharWalda />} />
        <Route path="/houseBronn" element={<HouseBronn />} />
        <Route path="/houseBronnGen" element={<HouseBronnGen />} />
        <Route path="/houseBronnChar" element={<HouseBronnChar />} />
        <Route path="/houseBronnCharLaNera" element={<HouseBronnCharLaNera />} />
        <Route path="/houseFrey" element={<HouseFrey />} />
        <Route path="/houseFreyGen" element={<HouseFreyGen />} />
        <Route path="/houseFreyChar" element={<HouseFreyChar />} />
        <Route path="/houseFreyCharArwaya" element={<HouseFreyCharArwaya />} />
        <Route path="/houseFreyCharDerwa" element={<HouseFreyCharDerwa />} />
        <Route path="/houseFreyCharFreya" element={<HouseFreyCharFreya />} />
        <Route path="/houseFreyCharJoyeuse" element={<HouseFreyCharJoyeuse />} />
        <Route path="/houseFreyCharMarianne" element={<HouseFreyCharMarianne />} />
        <Route path="/houseFreyCharMerry" element={<HouseFreyCharMerry />} />
        <Route path="/houseFreyCharNeleya" element={<HouseFreyCharNeleya />} />
        <Route path="/houseFreyCharShirei" element={<HouseFreyCharShirei />} />
        <Route path="/houseFreyCharStevron" element={<HouseFreyCharStevron />} />
        <Route path="/houseFreyCharWalda" element={<HouseFreyCharWalda />} />
        <Route path="/houseFreyCharWalder" element={<HouseFreyCharWalder />} />
        <Route path="/houseGreyjoy" element={<HouseGreyjoy />} />
        <Route path="/houseGreyjoyGen" element={<HouseGreyjoyGen />} />
        <Route path="/houseGreyjoyChar" element={<HouseGreyjoyChar />} />
        <Route path="/houseGreyjoyCharAeron" element={<HouseGreyjoyCharAeron />} />
        <Route path="/houseGreyjoyCharAlannys" element={<HouseGreyjoyCharAlannys />} />
        <Route path="/houseGreyjoyCharBalon" element={<HouseGreyjoyCharBalon />} />
        <Route path="/houseGreyjoyCharEuron" element={<HouseGreyjoyCharEuron />} />
        <Route path="/houseGreyjoyCharTheon" element={<HouseGreyjoyCharTheon />} />
        <Route path="/houseGreyjoyCharYara" element={<HouseGreyjoyCharYara />} />
        <Route path="/houseLannister" element={<HouseLannister />} />
        <Route path="/houseLannisterGen" element={<HouseLannisterGen />} />
        <Route path="/houseLannisterChar" element={<HouseLannisterChar />} />
        <Route path="/houseLannisterCharAlton" element={<HouseLannisterCharAlton />} />
        <Route path="/houseLannisterCharCersei" element={<HouseLannisterCharCersei />} />
        <Route path="/houseLannisterCharJaime" element={<HouseLannisterCharJaime />} />
        <Route path="/houseLannisterCharKevan" element={<HouseLannisterCharKevan />} />
        <Route path="/houseLannisterCharLancel" element={<HouseLannisterCharLancel />} />
        <Route path="/houseLannisterCharMartyn" element={<HouseLannisterCharMartyn />} />
        <Route path="/houseLannisterCharReginald" element={<HouseLannisterCharReginald />} />
        <Route path="/houseLannisterCharTyrion" element={<HouseLannisterCharTyrion />} />
        <Route path="/houseLannisterCharTywin" element={<HouseLannisterCharTywin />} />
        <Route path="/houseLannisterCharWillem" element={<HouseLannisterCharWillem />} />
        <Route path="/houseMartell" element={<HouseMartell />} />
        <Route path="/houseMartellGen" element={<HouseMartellGen />} />
        <Route path="/houseMartellChar" element={<HouseMartellChar />} />
        <Route path="/houseMartellCharDoran" element={<HouseMartellCharDoran />} />
        <Route path="/houseMartellCharOberyn" element={<HouseMartellCharOberyn />} />
        <Route path="/houseMartellCharOlenna" element={<HouseMartellCharOlenna />} />
        <Route path="/houseMartellCharTrystan" element={<HouseMartellCharTrystan />} />
        <Route path="/houseStark" element={<HouseStark />} />
        <Route path="/houseStarkGen" element={<HouseStarkGen />} />
        <Route path="/houseStarkChar" element={<HouseStarkChar />} />
        <Route path="/houseStarkCharArya" element={<HouseStarkCharArya />} />
        <Route path="/houseStarkCharBenjen" element={<HouseStarkCharBenjen />} />
        <Route path="/houseStarkCharBran" element={<HouseStarkCharBran />} />
        <Route path="/houseStarkCharCatelyn" element={<HouseStarkCharCatelyn />} />
        <Route path="/houseStarkCharEddard" element={<HouseStarkCharEddard />} />
        <Route path="/houseStarkCharLyanna" element={<HouseStarkCharLyanna />} />
        <Route path="/houseStarkCharRickard" element={<HouseStarkCharRickard />} />
        <Route path="/houseStarkCharRickon" element={<HouseStarkCharRickon />} />
        <Route path="/houseStarkCharRobb" element={<HouseStarkCharRobb />} />
        <Route path="/houseStarkCharSansa" element={<HouseStarkCharSansa />} />
        <Route path="/houseStarkCharTalisa" element={<HouseStarkCharTalisa />} />
        <Route path="/houseTargaryen" element={<HouseTargaryen />} />
        <Route path="/houseTargaryenGen" element={<HouseTargaryenGen />} />
        <Route path="/houseTargaryenChar" element={<HouseTargaryenChar />} />
        <Route path="/houseTargaryenCharAemon" element={<HouseTargaryenCharAemon />} />
        <Route path="/houseTargaryenCharDaenerys" element={<HouseTargaryenCharDaenerys />} />
        <Route path="/houseTargaryenCharRhaegar" element={<HouseTargaryenCharRhaegar />} />
        <Route path="/houseTargaryenCharViserys" element={<HouseTargaryenCharViserys />} />
        <Route path="/houseTully" element={<HouseTully />} />
        <Route path="/houseTullyGen" element={<HouseTullyGen />} />
        <Route path="/houseTullyChar" element={<HouseTullyChar />} />
        <Route path="/houseTullyCharBrynden" element={<HouseTullyCharBrynden />} />
        <Route path="/houseTullyCharEdmure" element={<HouseTullyCharEdmure />} />
        <Route path="/houseTullyCharRoslin" element={<HouseTullyCharRoslin />} />
        <Route path="/houseTyrell" element={<HouseTyrell />} />
        <Route path="/houseTyrellGen" element={<HouseTyrellGen />} />
        <Route path="/houseTyrellChar" element={<HouseTyrellChar />} />
        <Route path="/houseTyrellCharLoras" element={<HouseTyrellCharLoras />} />
        <Route path="/houseTyrellCharMace" element={<HouseTyrellCharMace />} />
        <Route path="/houseTyrellCharMargaery" element={<HouseTyrellCharMargaery />} />
        <Route path="/objects" element={<Objects />} />
        <Route path="/objectsBooks" element={<ObjectsBooks books={books} />} />
        <Route path="/objectsGame" element={<ObjectsGames games={games} />} />
        <Route path="/shop" element={<ObjectsShop />} />
        <Route path="/actors" element={<Actors actors={actors} />} />
        <Route path="/emiliaClarke" element={<EmiliaClarke />} />
        <Route path="/kitHarington" element={<KitHarington />} />
        <Route path="/sophieTurner" element={<SophieTurner />} />
        <Route path="/maisieWilliams" element={<MaisieWilliams />} />
        <Route path="/peterDinklage" element={<PeterDinklage />} />
        <Route path="/lenaHeadey" element={<LenaHeadey />} />
        <Route path="/nikolajCosterWaldau" element={<NikolajCosterWaldau />} />
        <Route path="/gwendolyneChristie" element={<GwendolyneChristie />} />
        <Route path="/isaacHempsteadWright" element={<IsaacHempsteadWright />} />
        <Route path="/alfieAllen" element={<AlfieAllen />} />
        <Route path="/nathalieEmmanuel" element={<NathalieEmmanuel />} />
        <Route path="/ianGlen" element={<IanGlen />} />
        <Route path="/cariceVanHouten" element={<CariceVanHouten />} />
        <Route path="/aidenGillen" element={<AidenGillen />} />
        <Route path="/liamCunningham" element={<LiamCunningham />} />
        <Route path="/seanBean" element={<SeanBean />} />
        <Route path="/markAddy" element={<MarkAddy />} />
        <Route path="/michelleFairley" element={<MichelleFairley />} />
        <Route path="/harryLloyd" element={<HarryLloyd />} />
        <Route path="/richardMadden" element={<RichardMadden />} />
        <Route path="/jackGleeson" element={<JackGleeson />} />
        <Route path="/roryMcCann" element={<RoryMcCann />} />
        <Route path="/jasonMomoa" element={<JasonMomoa />} />
        <Route path="/johnBradleyWest" element={<JohnBradleyWest />} />
        <Route path="/stephenDillane" element={<StephenDillane />} />
        <Route path="/jamesCosmo" element={<JamesCosmo />} />
        <Route path="/jeromeFlynn" element={<JeromeFlynn />} />
        <Route path="/conlethHill" element={<ConlethHill />} />
        <Route path="/sibelKekilli" element={<SibelKekilli />} />
        <Route path="/nathalieDormer" element={<NathalieDormer />} />
        <Route path="/charlesDance" element={<CharlesDance />} />
        <Route path="/oonaChaplin" element={<OonaChaplin />} />
        <Route path="/roseLeslie" element={<RoseLeslie />} />
        <Route path="/joeDempsie" element={<JoeDempsie />} />
        <Route path="/kristoferHivju" element={<KristoferHivju />} />
        <Route path="/iwanRheon" element={<IwanRheon />} />
        <Route path="/hannahMurray" element={<HannahMurray />} />
        <Route path="/michielHuisman" element={<MichielHuisman />} />
        <Route path="/indiraVarma" element={<IndiraVarma />} />
        <Route path="/deanCharlesChapman" element={<DeanCharlesChapman />} />
        <Route path="/tomWlaschiha" element={<TomWlaschiha />} />
        <Route path="/jonathanPryce" element={<JonathanPryce />} />
        <Route path="/jacobAnderson" element={<JacobAnderson />} />
        <Route path="/creator" element={<Creator />} />
        <Route path="/music" element={<Music />} />
        <Route path="/suit" element={<Suits />} />
      </Routes>
    </Router>
    <Footer />
  </div>
);

// == Export
export default BlogGOT;
