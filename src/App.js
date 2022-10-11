import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element={<ItemListContainer />}/>
      <Route path='/detail/:productsid' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<h1>404 Not Found</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
