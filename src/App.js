import Card from './Card';


import './App.css';

function App() {
  const dayWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (

    <div className='app'>
      {
        dayWeek.map((day) => {
          return (
            <Card dayWeek={day}></Card>
          )
        })
      }

    </div>
    
  );
}

export default App;
