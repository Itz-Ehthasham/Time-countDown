import { useState, useref} from 'react';

export default function Player() {
const playerName = useref();


const [enteredPlayerName, setEnteredPlayerName] = useState('');
const [submitted, setSubmitted] = useState(false);

function handleChange(event) {
  setSubmitted(false);
  setEnteredPlayerName(event.target.value);
}

function handleClick ( ) {
  setEnteredPlayerName.current.value;
}


  return (
    <section id="player">
      <h2>Welcome { submitted ? enteredPlayerName : 'unknown entity'}</h2>
      <p>
        <input ref={playerName} 
        type="text" 
        onChange={handleChange} 
        value={enteredPlayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
