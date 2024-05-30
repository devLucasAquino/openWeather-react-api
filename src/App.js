import { useState } from 'react';
import Card from './Card.js';

import './App.css';

function App() {
  const [ data, setData ] = useState({
    temperature: '', 
    description: '',
    tempMin: '',
    tempMax: '',
    country: '',
  });

  const [ stateCity, setStateCity ] = useState('');

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
            tempMax: dadoTemperatura.main.temp_max,
            country: dadoTemperatura.sys.country,
          })

      })

  
  }

  const handleCity = (event) =>{
    setStateCity(event.target.value);
  }

    return(
    
    <div className='App'>
      <div>
        <input type='text' onChange={handleCity}></input>
        <button onClick={callAPI}>search</button>
      </div>

      {stateCity != '' && 
        <Card temp={data.temperature} 
              desc={data.description}
              tempMax={data.tempMax}
              tempMin={data.tempMin}
              country={data.country}>
              
            {stateCity}
          </Card>
        }

      {stateCity === '' && <p>Por favor, insira uma cidade</p>}

      

    </div>
  )
}          

export default App;
