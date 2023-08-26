
import { Route, Routes } from 'react-router-dom';
import './App.css';
import People from './component/People';
import Films from './component/Films';
import StarShip from './component/StarShips';
import Vehicles from './component/Vehicles';
import Species from './component/Species';
import Planets from './component/Planets';
import Form from './component/Form';


const App = () => {
  return(
    <div className="App">
    <Form/>
    <Routes>
      <Route path='/people/:id' element={<People/>}/> 
      <Route path='/films/:id' element={<Films/>}/>
      <Route path='/starships/:id' element={<StarShip/>}/>
      <Route path='/vehicles/:id' element={<Vehicles/>}/>
      <Route path='/species/:id' element={<Species/>}/>
      <Route path='/planets/:id' element={<Planets/>}/>
    </Routes>
  </div>
  );
  
}

export default App;
