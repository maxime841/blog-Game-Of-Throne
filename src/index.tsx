import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import History from './components/History';
import Seasons from './components/Seasons';
import Season1 from './components/Season1/Season1';
import Season2 from './components/Season2/Season2';
import Season3 from './components/Season3/Season3';
import Season4 from './components/Season4/Season4';
import Season5 from './components/Season5/Season5';
import Season6 from './components/Season6/Season6';
import Season7 from './components/Season7/Season7';
import Season8 from './components/Season8/Season8';
import Card from './components/Card';
import Houses from './components/Houses';
import HouseArryn from './components/HouseArryn';
import HouseArrynGen from './components/HouseArrynGen';
import HouseArrynChar from './components/HouseArrynChar';
import HouseArrynCharJon from './components/HouseArrynCharJon';
import HouseArrynCharLysa from './components/HouseArrynCharLysa';
import HouseArrynCharRobin from './components/HouseArrynCharRobin';
import HouseBaratheon from './components/HouseBaratheon';
import HouseBaratheonGen from './components/HouseBaratheonGen';
import HouseBaratheonChar from './components/HouseBaratheonChar';
import HouseBaratheonCharGendry from './components/HouseBaratheonCharGendry';
import HouseBaratheonCharJoffrey from './components/HouseBaratheonCharJoffrey';
import HouseBaratheonCharMyrcella from './components/HouseBaratheonCharMyrcella';
import HouseBaratheonCharRenly from './components/HouseBaratheonCharRenly';
import HouseBaratheonCharRobert from './components/HouseBaratheonCharRobert';
import HouseBaratheonCharSelyse from './components/HouseBaratheonCharSelyse';
import HouseBaratheonCharShireen from './components/HouseBaratheonCharShireen';
import HouseBaratheonCharStannis from './components/HouseBaratheonCharStannis';
import HouseBaratheonCharTommen from './components/HouseBaratheonCharTommen';
import HouseBolton from './components/HouseBolton';
import HouseBoltonGen from './components/HouseBoltonGen';
import HouseBoltonChar from './components/HouseBoltonChar';
import HouseBoltonCharRamsay from './components/HouseBoltonCharRamsay';
import HouseBoltonCharRoose from './components/HouseBoltonCharRoose';
import HouseBoltonCharWalda from './components/HouseBoltonCharWalda';
import HouseBronn from './components/HouseBronn';
import HouseBronnChar from './components/HouseBronnChar';
import HouseBronnCharLaNera from './components/HouseBronnCharLaNera';
import HouseFrey from './components/HouseFrey';
import HouseFreyGen from './components/HouseFreyGen';
import HouseFreyChar from './components/HouseFreyChar';
import HouseFreyCharArwaya from './components/HouseFreyCharArwaya';
import HouseFreyCharDerwa from './components/HouseFreyCharDerwa';
import HouseFreyCharFreya from './components/HouseFreyCharFreya';
import HouseFreyCharJoyeuse from './components/HouseFreyCharJoyeuse';
import HouseFreyCharMarianne from './components/HouseFreyCharMarianne';
import HouseFreyCharMerry from './components/HouseFreyCharMerry';
import HouseFreyCharNeleya from './components/HouseFreyCharNeleya';
import HouseFreyCharShirei from './components/HouseFreyCharShirei';
import HouseFreyCharStevron from './components/HouseFreyCharStevron';
import HouseFreyCharWalda from './components/HouseFreyCharWalda';
import HouseFreyCharWalder from './components/HouseFreyCharWalder';
import HouseGreyjoy from './components/HouseGreyjoy';
import HouseGreyjoyGen from './components/HouseGreyjoyGen';
import HouseGreyjoyChar from './components/HouseGreyjoyChar';
import HouseGreyjoyCharAeron from './components/HouseGreyjoyCharAeron';
import HouseGreyjoyCharAlannys from './components/HouseGreyjoyCharAlannys';
import HouseGreyjoyCharBalon from './components/HouseGreyjoyCharBalon';
import HouseGreyjoyCharEuron from './components/HouseGreyjoyCharEuron';
import HouseGreyjoyCharTheon from './components/HouseGreyjoyCharTheon';
import HouseGreyjoyCharYara from './components/HouseGreyjoyCharYara';
import HouseLannister from './components/HouseLannister';
import HouseLannisterGen from './components/HouseLannisterGen';
import HouseLannisterChar from './components/HouseLannisterChar';
import HouseLannisterCharAlton from './components/HouseLannisterCharAlton';
import HouseLannisterCharCersei from './components/HouseLannisterCharCersei';
import HouseLannisterCharJaime from './components/HouseLannisterCharJaime';
import HouseLannisterCharKevan from './components/HouseLannisterCharKevan';
import HouseLannisterCharLancel from './components/HouseLannisterCharLancel';
import HouseLannisterCharMartyn from './components/HouseLannisterCharMartyn';
import HouseLannisterCharReginald from './components/HouseLannisterCharReginald';
import HouseLannisterCharTyrion from './components/HouseLannisterCharTyrion';
import HouseLannisterCharTywin from './components/HouseLannisterCharTywin';
import HouseLannisterCharWillem from './components/HouseLannisterCharWillem';
import HouseMartell from './components/HouseMartell';
import HouseMartellGen from './components/HouseMartellGen';
import HouseMartellChar from './components/HouseMartellChar';
import HouseMartellCharDoran from './components/HouseMartellCharDoran';
import HouseMartellCharOberyn from './components/HouseMartellCharOberyn';
import HouseMartellCharOlenna from './components/HouseMartellCharOlenna';
import HouseMartellCharTrystan from './components/HouseMartellCharTrystan';
import HouseStark from './components/HouseStark';
import HouseStarkGen from './components/HouseStarkGen';
import HouseStarkChar from './components/HouseStarkChar';
import HouseStarkCharArya from './components/HouseStarkCharArya';
import HouseStarkCharBenjen from './components/HouseStarkCharBenjen';
import HouseStarkCharBran from './components/HouseStarkCharBran';
import HouseStarkCharCatelyn from './components/HouseStarkCharCatelyn';
import HouseStarkCharEddard from './components/HouseStarkCharEddard';
import HouseStarkCharLyanna from './components/HouseStarkCharLyanna';
import HouseStarkCharRickard from './components/HouseStarkCharRickard';
import HouseStarkCharRickon from './components/HouseStarkCharRickon';
import HouseStarkCharRobb from './components/HouseStarkCharRobb';
import HouseStarkCharSansa from './components/HouseStarkCharSansa';
import HouseStarkCharTalisa from './components/HouseStarkCharTalisa';
import HouseTargaryen from './components/HouseTargaryen';
import HouseTargaryenGen from './components/HouseTargaryenGen';
import HouseTargaryenChar from './components/HouseTargaryenChar';
import HouseTargaryenCharAemon from './components/HouseTargaryenCharAemon';
import HouseTargaryenCharDaenerys from './components/HouseTargaryenCharDaenerys';
import HouseTargaryenCharRhaegar from './components/HouseTargaryenCharRhaegar';
import HouseTargaryenCharViserys from './components/HouseTargaryenCharViserys';
import HouseTully from './components/HouseTully';
import HouseTullyGen from './components/HouseTullyGen';
import HouseTullyChar from './components/HouseTullyChar';
import HouseTullyCharBrynden from './components/HouseTullyCharBrynden';
import HouseTullyCharEdmure from './components/HouseTullyCharEdmure';
import HouseTullyCharRoslin from './components/HouseTullyCharRoslin';
import HouseTyrell from './components/HouseTyrell';
import HouseTyrellGen from './components/HouseTyrellGen';
import HouseTyrellChar from './components/HouseTyrellChar';
import HouseTyrellCharLoras from './components/HouseTyrellCharLoras';
import HouseTyrellCharMace from './components/HouseTyrellCharMace';
import HouseTyrellCharMargaery from './components/HouseTyrellCharMargaery';
import Objects from './components/Objects';
import ObjectsBooks from './components/ObjectsBooks';
import ObjectsGames from './components/ObjectsGames';
import ObjectsShop from './components/ObjectsShop';
import Actors from './components/Actors';
import EmiliaClarke from './components/EmiliaClarke';
import KitHarington from './components/KitHarington';
import SophieTurner from './components/SophieTurner';
import MaisieWilliams from './components/MaisieWilliams';
import PeterDinklage from './components/PeterDinklage';
import LenaHeadey from './components/LenaHeadey';
import NikolajCosterWaldau from './components/NikolajCosterWaldau';
import GwendolyneChristie from './components/GwendolyneChristie';
import IsaacHempsteadWright from './components/IsaacHempsteadWright';
import AlfieAllen from './components/AlfieAllen';
import NathalieEmmanuel from './components/NathalieEmmanuel';
import IanGlen from './components/IanGlen';
import CariceVanHouten from './components/CariceVanHouten';
import AidenGillen from './components/AidenGillen';
import LiamCunningham from './components/LiamCunningham';
import SeanBean from './components/SeanBean';
import MarkAddy from './components/MarkAddy';
import MichelleFairley from './components/MichelleFairley';
import HarryLloyd from './components/HarryLloyd';
import RichardMadden from './components/RichardMadden';
import JackGleeson from './components/JackGleeson';
import RoryMcCann from './components/RoryMcCann';
import JasonMomoa from './components/JasonMomoa';
import JohnBradleyWest from './components/JohnBradleyWest';
import StephenDillane from './components/StephenDillane';
import JamesCosmo from './components/JamesCosmo';
import JeromeFlynn from './components/JeromeFlynn';
import ConlethHill from './components/ConlethHill';
import SibelKekilli from './components/SibelKekilli';
import NathalieDormer from './components/NathalieDormer';
import CharlesDance from './components/CharlesDance';
import OonaChaplin from './components/OonaChaplin';
import RoseLeslie from './components/RoseLeslie';
import JoeDempsie from './components/JoeDempsie';
import KristoferHivju from './components/KristoferHivju';
import IwanRheon from './components/IwanRheon';
import HannahMurray from './components/HannahMurray';
import MichielHuisman from './components/MichielHuisman';
import IndiraVarma from './components/IndiraVarma';
import DeanCharlesChapman from './components/DeanCharlesChapman';
import TomWlaschiha from './components/TomWlaschiha';
import JonathanPryce from './components/JonathanPryce';
import JacobAnderson from './components/JacobAnderson';
import Creator from './components/Creator';
import Music from './components/Music';
import MusicSaison1 from './components/MusicSaison1';
import MusicSaison2 from './components/MusicSaison2';
import MusicSaison3 from './components/MusicSaison3';
import MusicSaison4 from './components/MusicSaison4';
import MusicSaison5 from './components/MusicSaison5';
import MusicSaison6 from './components/MusicSaison6';
import MusicSaison7 from './components/MusicSaison7';
import MusicSaison8 from './components/MusicSaison8';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

import routeData from './data/route';
import seasonData from './data/seasons';
import housesData from './data/houses';
import books from './data/books';
import games from './data/games';
import actors from './data/actors';
import regions from './data/region';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/header" element={<Header links={routeData} />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/home" element={<Home />} />
      <Route path="/history" element={<History />} />
      <Route path="/seasons" element={<Seasons seasons={seasonData} />} />
      <Route path="/saison1" element={<Season1 />} />
      <Route path="/saison2" element={<Season2 />} />
      <Route path="/saison3" element={<Season3 />} />
      <Route path="/saison4" element={<Season4 />} />
      <Route path="/saison5" element={<Season5 />} />
      <Route path="/saison6" element={<Season6 />} />
      <Route path="/saison7" element={<Season7 />} />
      <Route path="/saison8" element={<Season8 />} />
      <Route path="/card" element={<Card regions={regions} house={housesData} />} />
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
      <Route path="/music" element={<Music seasons={seasonData} />} />
      <Route path="/musicsaison1" element={<MusicSaison1 />} />
      <Route path="/musicsaison2" element={<MusicSaison2 />} />
      <Route path="/musicsaison3" element={<MusicSaison3 />} />
      <Route path="/musicsaison4" element={<MusicSaison4 />} />
      <Route path="/musicsaison5" element={<MusicSaison5 />} />
      <Route path="/musicsaison6" element={<MusicSaison6 />} />
      <Route path="/musicsaison7" element={<MusicSaison7 />} />
      <Route path="/musicsaison8" element={<MusicSaison8 />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
