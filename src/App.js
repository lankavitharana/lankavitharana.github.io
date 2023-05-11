import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Gallery from './components/gallery/gallery';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/gallery" component={Gallery} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
