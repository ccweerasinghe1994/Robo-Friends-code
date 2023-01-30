import { useState, useEffect } from 'react';

import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };
  useEffect(() => {
    setFilteredMonsters(
      monsters.filter((monster) =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    );
  }, [monsters, searchField]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  return (
    <div className='App'>
      <h1>Robo Friends</h1>
      <SearchBox
        className='search-box'
        handleChange={handleChange}
        placeholder='search mosters'
      />
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
};

export default App;
