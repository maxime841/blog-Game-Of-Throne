// == Import npm
import React from 'react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import History from 'src/components/History';
import Seasons from 'src/components/Seasons';
import Card from 'src/components/Card';
import Houses from 'src/components/Houses';
import Objects from 'src/components/Objects';
import Actors from 'src/components/Actors';
import Creator from 'src/components/Creator';
import Music from 'src/components/Music';
import Suits from 'src/components/Suits';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// == Import
import './bloggot.scss';
import routeData from '../../data/route';

// == Composant
const BlogGOT = () => (
  <div className="blog-got">
    <Router>
      <Header links={routeData} />
      <Routes>
        <Route path="/history" exact element={<History />} />
        <Route path="/season" element={<Seasons />} />
        <Route path="/card" element={<Card />} />
        <Route path="/houses" element={<Houses />} />
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
