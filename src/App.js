import './App.css';
import {useState} from 'react';
import Timer from './Components/Timer';
import Toggler from './Components/Toggler'
import GameBoard from './Components/GameBoard';


function App() {
  const [toFind, setToFind] = useState(7);

  return (
    <div class="pageBody">
      <h1>How Fast Can You Find Number {toFind}</h1>
      <Timer />
      <Toggler />
      <GameBoard />
    </div>
  );
}

export default App;
