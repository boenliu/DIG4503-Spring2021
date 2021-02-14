import logo from './logo.svg';
import './App.css';
import Market from './Components/Market.js'

function App() {
  // creates a new Market
  let mk = new Market();
  // renders a the webapp
  return mk.render();
}

export default App;
