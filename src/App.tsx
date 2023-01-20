import React from 'react';
import './App.scss';
import Footer from './component/footer';
import ListCard from './component/ListCard';
import Navigation from './component/navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <ListCard/>
      <Footer/>
    </div>
  );
}

export default App;
