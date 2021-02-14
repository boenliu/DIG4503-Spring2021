import React from 'react';
import MarketItem from './MarketItem.js'

// class Market
class Market extends React.Component{
  // constructor so that we can use "this" and properties.
  constructor(props) {
    super(props);

    // creates an array for items in the state property(attribute? I apologize, it's late, my comments probably don't make any sense)
    this.state = {
      items: []
    };
  }

  // the render method that renders html when called by App.js
  render(){
    return(
      <div>

        // a button that allows the user to add items to the items array.
        <button onClick={() => {

          // this is the bane of my existance. please end my suffering. I'm 300% sure this is wrong and why my app isn't working.
          this.setState({items: [MarketItem(this.state.items)]})

        // this is a button that says "I am a button"
        }}>I am a button</button>

        // this is my poor attempt at trying to make something appear on the site. It didn't work.
        {this.state.items.map(x => x)}
      </div>
    );
  }
}

export default Market;


// I sent you an email, hopefully you've already read it. I understand I'm not going to get full credit for this lab, but please explain what I'm doing wrong.
