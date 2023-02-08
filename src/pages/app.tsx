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
import Suits from '../components/Suits';
import routeData from '../data/route';

function App() {
  return (
    <>
      <Header links={routeData} />
      <Routes>
        <Route path="/history" element={<History />} />
        <Route path="/season" element={<Seasons />} />
        <Route path="/card" element={<Card />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/objects" element={<Objects />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="/creator" element={<Creator />} />
        <Route path="/music" element={<Music />} />
        <Route path="/suit" element={<Suits />} />
      </Routes>
    </>
  );
}

export default App;
