import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Shipment from './Components/Shipment/Shipment';

function App() {
  return (
    <div className="App">
      <h1>Contex API</h1>
      <Home></Home>
      <Header></Header>
      <Shipment></Shipment>
    </div>
  );
}

export default App;
