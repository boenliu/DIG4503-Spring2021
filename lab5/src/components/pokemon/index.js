import React from 'react'; // need this to extend React.Component

// the Pokemon class that extends React.Component
class Pokemon extends React.Component {
  constructor(props) {
    super(props);
  }

  // the render method that returns a <div> with the image of the pokemon, the name, and the pokemon id.
  render(){
    return(
      <div>
        <img src={this.props.pData.sprites.front_default} />
        <p>Name: {this.props.pData.name}</p>
        <p>Pokemon ID: {this.props.pData.id}</p>
      </div>
    );
  }
}

// exports the Pokemon component so that the Search component can use it. 
export default Pokemon;
