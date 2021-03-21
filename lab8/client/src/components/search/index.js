import React from 'react';
import Axios from 'axios';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      jsonObject: '',
      loaded: false
    }
  }

  handleChange(event){
    this.setState({name: event.target.value});
    console.log(this.state.name);
  }

  searchName(){
    Axios.get('http://localhost:45030/search/' + this.state.name)
    .then((response) => {
      this.setState({jsonObject: response.data});
      this.setState({loaded: true});
    })
    .catch((err) => {
      this.setState({loaded: false});
    })
  }

  render(){
    return(
      <div>
        <h1>Search</h1>
        <input type="text" onChange={event => this.handleChange(event)}/>
        <button onClick={() => {this.searchName()}}>Search</button>
        {
          this.state.loaded ?
          (
            <p>{this.state.jsonObject.search.map(element => (<p>{element}</p>))}</p>
          ) :
          (
            <p>please type in a name</p>
          )
        }
      </div>
    );
  }
}

export default Search;
