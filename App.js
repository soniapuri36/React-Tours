import './App.css';
import toursData from './toursData.js';
import ToursList from './ToursList.js'; 

function App() {

  return (
    <div className="Tours for Summer 2023">
      <p className='summer tours'></p> 
      <ToursList tours={toursData}/>
    </div>
  )
  
};

export default App;
