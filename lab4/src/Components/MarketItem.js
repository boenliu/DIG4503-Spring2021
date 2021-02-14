function MartketItem(props){
  return(
    <div>
      // a simple function that displays "Item #" where the # is the number of the position of the array.
      <p>Item {props.count}</p>
    </div>
  );
}

// ez export
export default MartketItem;
