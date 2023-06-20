import React, { useState } from 'react';
import './App.css';
import logo from './placeholder.png'; 

function App() {
  const [search, setSearch] = useState('');

  const handleSearchChange = event => {
    setSearch(event.target.value);
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    console.log('Searching for:', search);
    //  call API to get the search results
  };

  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1>xxxxx</h1>
        <p>
          Welcome to Hip Hop Unleashed, the platform for hip hop fans to explore,
          rate, and rank their favorite tracks. Discover how fan favorites differ
          from mainstream rankings and join the community today!
        </p>
      </header>
      <main>
        <div className="search-container">
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search for an artist or song..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;