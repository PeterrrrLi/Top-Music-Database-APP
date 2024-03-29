import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './home/home'
import NavBar from './navbar/navbar'
import RankPage from './rankpage/rankpage';
import Top10Songs from './top10Songs/top10Songs';
import Top10Artists from './top10Artists/top10Artists';
import AllSongs from './allSongs/allSongs';


export default function App() {
  
  return (
    <div>
      
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="top10Songs" element={<Top10Songs />} />
          <Route path="top10Artists" element={<Top10Artists />} />
          <Route path="allSongs" element={<AllSongs />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);