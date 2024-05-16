import Card from './Card';
import { useState } from 'react';

import './App.css';

function App() {
  const dayWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const [isDay, setIsDay] = useState('Sunday');

  function handleIsDay(day){
    setIsDay(day);
  }

  return (

    <div className='app'>
      {
        dayWeek.map((day) => { 
          return (
            <Card dayWeek={(day)}
            style={{
              backgroundColor: isDay === 'Sunday' && 'black',
            }}></Card>
          )
        })
      }

    </div>
    
  );
}

export default App;
