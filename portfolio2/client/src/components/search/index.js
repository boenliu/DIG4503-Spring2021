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
      other: false,
      team: [],
      dbteam: [],
      user: '',
      signedin: false,
      neighbor: '',
    }
  }

  updateInputValue(event){
    this.setState({inputValue: event.target.value});
  }

  login(){
    if(this.state.user === ''){
      return;
    }else{
      this.setState({signedin: true});
    }
  }

  updateUserValue(event){
    this.setState({user: event.target.value});
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

  saveToTeam(){
    return null;
  }

  // add pokemon to their list
  put(){
    Axios.put('http://localhost:45030/pokemon/' + this.state.pMon.id, {
      name: this.state.pMon.name,
      user: this.state.user
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) =>{
      console.log(error);
    })
  }

  // the someone that has the same pokemon in their deck
  getNeighbor(){
    Axios.get('http://localhost:45030/pokemon/' + this.state.pMon.id, {
      user: this.state.user
    })
    .then((response) => {
      this.setState({neighbor: response.data.user});
      this.setState({other: true});
    })
    .catch((error) =>{
      console.log(error);
    })
  }

  deleteOne(){
    Axios.delete('http://localhost:45030/pokemon/' + this.state.pMon.id, {
      params: {
        user: this.state.user
      }
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) =>{
      console.log(error);
    })
  }

  // find all user's pokemon
  findAllUserPokemon(){
    Axios.post('http://localhost:45030/pokemon/search/', {
      user: this.state.user
    })
    .then((response) => {
      this.setState({team: []});
      let team = this.state.team;
      for(let element of response.data){
        team.push(<Member name={element.name} iden={element.id} picture={null} key={this.state.team.length}/>);
      }
      this.setState({team: team});
    })
    .catch((error) =>{
      console.log(error);
    })
  }

  render(){
    return(
      <div class="full">
        {
          this.state.signedin ?
          (
            <div>
              <h3>Welcome {this.state.user}!</h3>
              <input type="text" value={this.state.inputValue} onChange={event => this.updateInputValue(event)} />

              <button onClick={() => {
                this.fetch();
                this.setState({other: false});
              }}>fetch!</button>
              {
                this.state.loaded ?
                (
                  <div>
                    <div class="box">
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
                      }}>Add to local team!</button>

                      <button onClick={() => {
                        let empty = [];
                        this.setState({team: empty});
                      }}>Clear local team</button>

                    </div>

                    <div class="buttons">
                      <button onClick={() => {
                        this.put();
                      }}>Save to db team</button>

                      <button onClick={() => {
                        this.findAllUserPokemon();
                      }}>Load saved db team</button>

                      <button onClick={() => {
                        this.deleteOne();
                      }}>Delete from db team</button>
                    </div>

                    <div class="box">
                      <button onClick={() => {
                        this.getNeighbor();
                      }}>Who else likes {this.state.pMon.name}?</button>
                      {this.state.other && this.state.neighbor != "not found" ?
                        (
                          <p>{this.state.neighbor} does!</p>
                        ) :
                        (
                          <p></p>
                        )
                      }
                    </div>

                    <div class="team">
                      {
                        this.state.team.map(element => {
                          return element
                        })
                      }
                    </div>
                  </div>
                ) :
                (
                  <div class="display">
                    <p>Please search a valid pokemon!</p>
                  </div>
                )
              }
            </div>
          ) :
          (
            <div>
              <input type="text" value={this.state.user} onChange={event => this.updateUserValue(event)} />

              <button onClick={() => {
                this.login();
              }}>login!</button>
            </div>
          )
        }
      </div>
    );
  }
}

export default Search;
