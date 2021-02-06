import React from 'react'; // imports react so that homepage can extend react.component
import './index.css' // simple css to test css with react.

// class creation, extending react.component
class HomePage extends React.Component{
  // simple constructor that sents up props
  constructor(props){
    super(props);
  }

  // render returns the firstname attribute which is set in App.js
  render(){
    return (<p>{this.props.firstName}</p>);
  }
}

// exports the class so that App.js can use it.
export default HomePage;
