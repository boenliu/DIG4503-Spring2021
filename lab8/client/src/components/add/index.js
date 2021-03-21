import React from 'react';
import Axios from 'axios';

class Add extends React.Component{
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

  addName(){
    Axios.put('http://localhost:45030/people/' + this.state.name)
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
        <h1>Add</h1>
        <input type="text" onChange={event => this.handleChange(event)}/>
        <button onClick={() => {this.addName()}}>Add</button>
        {
          this.state.loaded ?
          (
            <p>added: {this.state.jsonObject.name}</p>
          ) :
          (
            <p>please type in a name</p>
          )
        }
      </div>
    );
  }
}

export default Add;
