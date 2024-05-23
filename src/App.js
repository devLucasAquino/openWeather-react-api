import { useState } from 'react';
import Card from './Card.js';

import './App.css';

function App() {
  let temperatura;
  const [ stateTemperatura, setStateTemperatura ] = useState(temperatura);
  const [ stateCity, setStateCity ] = useState();

  const callAPI = () => {
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${stateCity}&lang=pt_br&appid=f5f865ff13ae9828564399051f651125&units=metric`)
    .then(resposta =>{
      return resposta.json()
    })
      .then((dadoTemperatura) =>{
        setStateTemperatura(dadoTemperatura.main.temp + ' ºC')
      })
  
  }

  const handleCity = (event) =>{
    let input = event.target.value
    
    if( input != '' ){
      setStateCity(input);
    }else{
      setStateCity('São Paulo')
    }


  }

  return(
    <div className='App'>
      <input type='text' onChange={handleCity}></input>
      <button onClick={callAPI}>search</button>

      <Card temp={stateTemperatura}>{stateCity}</Card>

    </div>
  )
}

export default App;
