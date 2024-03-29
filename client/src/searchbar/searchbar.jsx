import React, { useState } from 'react';
import useSearch from '../hooks/useSearch';
import './searchbar.css';
import SongModal from '../SongModal/SongModal';

function SearchResult({ item, onTitleClick }) {
  return (
    <div className="search-result">
      <p className="title" onClick={() => onTitleClick(item)}>{item.music_title}</p>
      <p>Artist Name: {item.artist_name}</p>
    </div>
  );
}

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [searchTerm, setSearchTerm] = useState(null);
  const searchResult = useSearch(searchTerm);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);

  const handleSearchChange = event => {
    setSearch(event.target.value);
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter' && search.trim()) {
      console.log('Enter key pressed, searching for:', search);
      setSearchTerm(search);
    }
  };

  const openModal = (item) => {
    setSelectedSong(item);
    setIsOpen(true);
  }

  return (
    <main>
      <div className="search-container">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={handleSearchChange}
          onKeyDown={handleKeyPress}
          placeholder="Search for an artist or song..."
        />
        {searchResult.isLoading && <p className="loading">Loading...</p>}
        {searchResult.error && <p className="error">Sorry, an error occurred: {searchResult.error.message}</p>}
        {searchResult.data && searchResult.data.map((item) => (
          <SearchResult key={item.music_ID} item={item} onTitleClick={openModal} />
        ))}
        <SongModal 
          isOpen={modalIsOpen}
          onRequestClose={() => setIsOpen(false)}
          songData={selectedSong}
        />
      </div>
    </main>
  )
}

export default SearchBar;
