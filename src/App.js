import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {Documentaries,HorrorMovies,RomanceMovies,action,trending} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={trending} title="trending"  /> 
      <RowPost url={RomanceMovies} title="RomanceMovies" isSmall />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={HorrorMovies} title="HorrorMovies" isSmall />
      <RowPost url={Documentaries} title="Documentaries" isSmall />

    </div>
  );
}

export default App;
