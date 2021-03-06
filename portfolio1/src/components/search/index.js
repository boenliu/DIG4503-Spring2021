import React from 'react';
import Axios from 'axios';
import Member from '../member';
import './index.css';

class Search extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      inputValue: '',
      pMon: '',
      loaded: false,
      team: []
    }
  }

  updateInputValue(event){
    this.setState({
      inputValue: event.target.value
    });
  }

  fetch(){
    if(this.state.inputValue === '')
      return;
    Axios('https://pokeapi.co/api/v2/pokemon/' + this.state.inputValue)
    .then((response) => {
      this.setState({pMon: response.data});
      this.setState({loaded: true})
    })
    .catch((error) =>{
      this.setState({loaded: false})
    })
  }

  render(){
    return(
      <div class="full">
        <input type="text" value={this.state.inputValue} onChange={event => this.updateInputValue(event)} />

        <button onClick={() => {
          this.fetch()
        }}>fetch!</button>
        {
          this.state.loaded ?
          (
            <div>
              <div class="searchResult">
                <img src={this.state.pMon.sprites.front_default}/>
                <p>Name: {this.state.pMon.name}</p>
                <p>Pokemon ID: {this.state.pMon.id}</p>
              </div>

              <div class="buttons">
                <button onClick={() => {
                  let member = this.state.pMon;
                  let team = this.state.team;
                  team.push(<Member name={member.name} iden={member.id} picture={member.sprites.front_default} key={this.state.team.length}/>);
                  this.setState({team: team});
                }}>Add to team!</button>

                <button onClick={() => {
                  let empty = [];
                  this.setState({team: empty});
                }}>Clear team</button>
              </div>
            </div>
          ) :
          (
            <div class="display">
              <p>Please search a valid pokemon!</p>
            </div>
          )
        }
        <div class="team">
          {
            this.state.team.map(element => {
              return element
            })
          }
        </div>
      </div>
    );
  }
}

export default Search;
