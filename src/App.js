import { React, useState } from 'react';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Game from './components/Game';

const App = () => {

  const [namePlayer, setNamePlayer] = useState('');
  const [player, setPlayer] = useState({ name: '', score: 0 })
  
  function addPlayer(name) {
    setNamePlayer(name)
    setPlayer({ ...player, name })
  }

  function addLocalStorage() {
    if(!JSON.parse(window.localStorage.getItem('player'))){
      window.localStorage.setItem('player', JSON.stringify([{ name: namePlayer, score: 0 }]));
    }
    const allPlayers = JSON.parse(window.localStorage.getItem('player'));
    if (allPlayers.find(person => person.name !== player.name)) {
      window.localStorage.setItem('player', JSON.stringify([...allPlayers, { name: namePlayer, score: 0 }]));
    } else{
      setPlayer(allPlayers.find(person => person.name === player.name) )
    }
  }

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home addPlayer={addPlayer} handleClick={addLocalStorage}/>}></Route>
          <Route path="/game" element={<Game player={player}/>}></Route>
        </Routes>
      </BrowserRouter>
   
    );
}

export default App;
