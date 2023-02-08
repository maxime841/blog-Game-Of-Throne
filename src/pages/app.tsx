import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Seasons from '../components/Seasons';
import Card from '../components/Card';
import Houses from '../components/Houses';
import Objects from '../components/Objects';
import Actors from '../components/Actors';
import Creator from '../components/Creator';
import Music from '../components/Music';
import History from '../components/History';
import Header from '../components/Header';

// == Import
import routeData from '../data/route';
import seasonData from '../data/seasons';
import housesData from '../data/houses';
// import books from '../data/books';
// import games from '../data/games';
import actors from '../data/actors';
// import regions from '../data/region';

function App() {
  return (
    <>
      <Header links={routeData} />
      <Routes>
        <Route path="/history" element={<History />} />
        <Route path="/season" element={<Seasons seasons={seasonData} />} />
        <Route path="/card" element={<Card />} />
        <Route path="/houses" element={<Houses houses={housesData} />} />
        <Route path="/objects" element={<Objects />} />
        <Route path="/actors" element={<Actors actors={actors} />} />
        <Route path="/creator" element={<Creator />} />
        <Route path="/music" element={<Music seasons={seasonData} />} />
      </Routes>
    </>
  );
}

export default App;
