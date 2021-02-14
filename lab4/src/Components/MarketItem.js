// a simple function component that returns a small div with a paragraph that states "Item #"
function MartketItem(props){
  return(
    <div>
      <p>Item {props.count}</p>
    </div>
  );
}

export default MartketItem;
