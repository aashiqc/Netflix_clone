import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/RowPost/Rowpost';
import { actions, comedy, originals } from './urls';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Originals'  />
      <Rowpost url={actions} title='Action' isSmall />
      <Rowpost url={comedy} title='Comedy' isSmall />
      <Footer />

    </div>
  );
}

export default App;
