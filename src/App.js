import logo from './logo.svg';
import './App.css';
import data from './data';
import Cards from './Components/Cards';
import { useState } from 'react';
function App() {
  const [tour,settour] = useState(data);

  function RemoveTour(id){
    const new_tour = tour.filter(t => t.id!==id);
    settour(new_tour);

  }
  if(tour.length ==0){
    return(<div className='Refresh-container'>
      <h2>Sorry!! No Tours Left</h2>
      <button className='button-refresh' onClick={()=>{return settour(data)}}>Refresh</button>
    </div>)
  }
  return (
    <div className="App">
      <Cards data={tour} RemoveTour = {RemoveTour}></Cards>
    </div>
  );
}

export default App;
