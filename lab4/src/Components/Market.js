import React from 'react';
import MarketItem from './MarketItem.js'

class Market extends React.Component{
  constructor(props) {
    super(props);
    // a state with an empty array
    this.state = {
      items: []
    };
  }

  // this clones the array, adds a new marketItem, then returns a new array.
  addItem(list){
    // i'm not sure if this is an assignment or just linking it to this.state.item
    let li = list;
    // uses push to add new array element
    li.push(<MarketItem count={li.count} key={li.key} />);
    return li;
  }

  render(){
    return(
      <div>
        // a button that will call addItem() to add a new element to the array.
        <button onClick={() => {
          this.setState({items: this.addItem(this.state.items)});

          // i used the next line to test if line
          // console.log(this.state.items.map(item => item));
        }}>I am a button</button>

        // this line doesn't work like intended. It's supposed to display a list of all the items in the items array. it doesn't update after every button press.
        <p>{this.state.items.map(item => item)}</p>
      </div>
    );
  }
}

export default Market;
