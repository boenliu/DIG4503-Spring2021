import './index.css';

function Member(props){
  return (
    <div class="member">
      <img src={props.picture}/>
      <p>{props.name}</p>
    </div>
  );
}

export default Member;
