import React from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ placeholder, onChange, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder}
        className="search-input"
        onChange={onChange}
      />
      <button className="search-button" onClick={onSearch} aria-label="search">
        <SearchIcon style={{ fontSize: 20, color: 'white' }} />
      </button>
    </div>
  );
}
