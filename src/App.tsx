import React, { useState } from 'react';
import './App.scss';
import Banner from './component/banner';
import Footer from './component/footer';
import ListCard from './component/ListCard';
import Navigation from './component/navigation';

function App() {
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    setTheme(!theme);
  }
  
  return (
    <div className="App" id={theme ? "active-theme" : "inactive-theme"}>
      <Navigation theme={theme} changeTheme={changeTheme} />
      <Banner />
      <ListCard theme={theme}/>
      <Footer/>
    </div>
  );
}

export default App;
