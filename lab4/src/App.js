import logo from './logo.svg';
import './App.css';
import Market from './Components/Market.js'

function App() {
  // makes a new Market so that i can render it.
  let mk = new Market();

  // renders the new Market
  return mk.render();
}

export default App;
