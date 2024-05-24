import { useState } from 'react';
import Card from './Card.js';

import './App.css';

function App() {
  const [ data, setData ] = useState({
    temperature: '',
    description: '',
    tempMin: '',
    tempMax:'',
  });

  const [ stateCity, setStateCity ] = useState();

  const callAPI = () => {
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${stateCity}&lang=pt_br&appid=f5f865ff13ae9828564399051f651125&units=metric`)
    .then(resposta =>{
      return resposta.json()
    })
      .then((dadoTemperatura) =>{

        setData({
            temperature: dadoTemperatura.main.temp,
            description: dadoTemperatura.weather[0].description,
            tempMin: dadoTemperatura.main.temp_min,
            tempMax: dadoTemperatura.main.temp_max
          })

      })
  
  }

  const handleCity = (event) =>{
    setStateCity(event.target.value);
  }

  return(
    <div className='App'>
      <input type='text' onChange={handleCity}></input>
      <button onClick={callAPI}>search</button>

      <Card temp={data.temperature} 
            desc={data.description}
            tempMax={data.tempMax}
            tempMin={data.tempMin}>
          {stateCity}
        </Card>

    </div>
  )
}          

export default App;
