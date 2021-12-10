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
import HouseBaratheon from 'src/components/HouseBaratheon';
import HouseBolton from 'src/components/HouseBolton';
import HouseBronn from 'src/components/HouseBronn';
import HouseFrey from 'src/components/HouseFrey';
import HouseGreyjoy from 'src/components/HouseGreyjoy';
import HouseLannister from 'src/components/HouseLannister';
import HouseMartell from 'src/components/HouseMartell';
import HouseStark from 'src/components/HouseStark';
import HouseTargaryen from 'src/components/HouseTargaryen';
import HouseTully from 'src/components/HouseTully';
import HouseTyrell from 'src/components/HouseTyrell';
import Objects from 'src/components/Objects';
import Actors from 'src/components/Actors';
import Creator from 'src/components/Creator';
import Music from 'src/components/Music';
import Suits from 'src/components/Suits';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// == Import
import './bloggot.scss';
import routeData from '../../data/route';
import seasonData from '../../data/seasons';
import housesData from '../../data/houses';

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
        <Route path="/houseBaratheon" element={<HouseBaratheon />} />
        <Route path="/houseBolton" element={<HouseBolton />} />
        <Route path="/houseBronn" element={<HouseBronn />} />
        <Route path="/houseFrey" element={<HouseFrey />} />
        <Route path="/houseGreyjoy" element={<HouseGreyjoy />} />
        <Route path="/houseLannister" element={<HouseLannister />} />
        <Route path="/houseMartell" element={<HouseMartell />} />
        <Route path="/houseStark" element={<HouseStark />} />
        <Route path="/houseTargaryen" element={<HouseTargaryen />} />
        <Route path="/houseTully" element={<HouseTully />} />
        <Route path="/houseTyrell" element={<HouseTyrell />} />
        <Route path="/objects" element={<Objects />} />
        <Route path="/actors" element={<Actors />} />
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
