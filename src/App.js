import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import List from './Components/List/List';

function App() {
  const [searchParam, setSearchParam] = useState("")

  function handleSearch(searchParam) {
    console.log(searchParam)
    setSearchParam(searchParam)
    
  }
  return (
    <div className="App">
      <Navbar handleCallback={handleSearch}/>
      <List searchParam={searchParam}/>
    </div>
  );
}

export default App;
