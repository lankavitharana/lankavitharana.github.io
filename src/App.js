import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Base from './routes/base/base.component';
import Page1 from './routes/page1/page1.component';
import Page2 from './routes/page2/page2.component';

import './App.css';

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Base/>}>
          <Route index element={<Page1/>}/>
          <Route path='page2' element={<Page2/>}/>
        </Route>
      </Routes>
  );
}

export default App;
