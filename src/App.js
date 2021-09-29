import React, { createContext, useState } from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Shipment from './Components/Shipment/Shipment';

export const CategoryContext = createContext();

function App() {
  const [category , setCategory] = useState('Device')
  return (
    <CategoryContext.Provider value = {[category , setCategory]} >
      <h1>Context API</h1>
      <p>count value = {category}</p>
      <Header   ></Header>
      <Home  ></Home>
      <Shipment></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;
