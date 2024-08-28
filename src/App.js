import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WeatherDashboard from './components/WeatherDashboard';
import SearchHistory from './components/SearchHistory';
import { useState } from 'react';
import NavBar from './components/NavBar';

function App() {
  const [recentSearches, setRecentSearches] = useState(JSON.parse(localStorage.getItem('recentSearches')) || []);
  return (
     <div className="bg-custom-image bg-cover h-screen">
      <Routes>
       <Route path="/" element={<NavBar/>}>
        <Route path="/" element={<WeatherDashboard recentSearches={recentSearches} setRecentSearches={setRecentSearches} />} />
        <Route path="/search-history" element={<SearchHistory recentSearches={recentSearches} />} />
       </Route>
      </Routes>
     </div>
  );
}

export default App;



