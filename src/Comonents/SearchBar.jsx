import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
export const SearchBar = ({ cards, setFilteredFilms }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const filtered = cards.filter(card => 
      card.nombre.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredFilms(filtered);
  }, [search, setFilteredFilms, cards]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div style={{ position: 'relative', width: '280px' }}>
      <input style={{ width: '100%', paddingLeft: '30px' }}
        className='form-control'
        value={search}
        onChange={handleInputChange}
        placeholder='Buscar película por su nombre...'
      />
      <FaSearch style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}  />
    </div>
  );
};
