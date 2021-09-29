import React, { useState } from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Shipment from './Components/Shipment/Shipment';

function App() {
  const [count , setCount] = useState(0)
  return (
    <div className="App">
      <h1>Contex API</h1>
      <p>count value = {count}</p>
      <Header count={count} setCount={setCount}></Header>
      <Home  count={count}></Home>
      <Shipment></Shipment>
    </div>
  );
}

export default App;
