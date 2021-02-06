import logo from './logo.svg'; // i have no idea what this does. I don't think it is used in this at all. not sure why it's still in here, i should probably delete it instead of writing this unnecessarily long comment
import './App.css'; // the css for this js file. In hindsight, i probably should have just used this css file instead of creating a new one inside (i'm not really sure what the current standard/meta for css is)
import HomePage from './components/HomePage/index.js'; // imports the HomePage class/component

// a simple function that displays the firstname attribute from HomePage
function App() {
  return(<HomePage firstName="BoEn" />);
}

// exports this whole file...or just the function? What would happen if there is another function in this file? Will it export both?
export default App;
