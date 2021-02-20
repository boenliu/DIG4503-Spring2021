import React from 'react'; // need this to extend React.Component
import Axios from 'axios'; // need this to find pokemon
import Pokemon from '../pokemon'; // need this to display pokemon stuff

// the Search class that extends React.Component
class Search extends React.Component{
  constructor(props){ // simple constructor
    super(props); // passes the properties back to react.Component

    // added a few states
    this.state = {
      inputValue: '', // input values of the <input> is stored here temporarily
      pMon: '', // stores the response.data of the pokemon
      loaded: false // this is a boolen which render() will check so that the <p> can switch from the default words stating no pokemon found to <Pokemon />
    }
  }

  // this a method to update the value of this.state.inputValue
  updateInputValue(event){
    this.setState({
      inputValue: event.target.value
    });
  }

  // this is a method to retrieve data from Axios
  fetch(){
    // line 28 is a simple debug line to make sure line 29 is inputing the right link
    // console.log('https://pokeapi.co/api/v2/pokemon/' + this.state.inputValue);

     // this line calls Axios to find the inputed pokemon from the text field
    Axios('https://pokeapi.co/api/v2/pokemon/' + this.state.inputValue)
    // if there is a response, then set it to this.state.pMon and then set this.state.loaded to true
    .then((response) => {
      this.setState({pMon: response.data});
      this.setState({loaded: true})
    })
    // simple error catch (not really sure if it works and probably irrelevant and unneeded)
    .catch((error) =>{
      this.setState({loaded: false})
    })
  }

  // the render method of Search
  render(){
    return(
      <div>
        {/* input text field that automatically updates this.state.inputValue when there is a change in the text field. */}
        <input type="text" value={this.state.inputValue} onChange={event => this.updateInputValue(event)} />

        {/* button that will call fetch() which will populate this.state.pMon and change this.state.loaded to true. */}
        <button onClick={() => {
          this.fetch()
        }}>fetch!</button>

        {
          // this is like an if statement where it compares this.state.loaded and
          // sees if the boolen is true. IF true, then display <Pokemon /> with
          // the attribute pData (which is this.state.pMon)
          this.state.loaded ?
          (
            <Pokemon pData={this.state.pMon}/>
          ) :
          (
            // if it is false, then continue to display the default paragraph.
            <p>No Pokemon loaded OR invalid pokemon OR the guy who made this is dumb and this app doesn't work</p>
          )
        }
      </div>
    );
  }
}

// export the Search component to App.js
export default Search;
