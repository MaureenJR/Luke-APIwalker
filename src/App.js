
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import People from './component/People';
import Films from './component/Films';
import StarShip from './component/StarShips';
import Vehicles from './component/Vehicles';
import Species from './component/Species';
import Planets from './component/Planets';
import { useState } from 'react';
import PeopleID from './component/PeopleID';




const App = () => {
  const [options, setOptions] = useState("/people");
  const [currentID, setCurrentID] = useState([]);
  const navigate = useNavigate();
  const navigate2 = useNavigate();

  const selectOption = (e) => {
      setOptions(e);
      navigate(options);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentID > 85){
      alert ("This ID doesn't exist, put a number between 1 and 85")
    } else if (currentID === 0){
      alert ("This ID doesn't exist, put a number between 1 and 85")
    }else{
      navigate2("/people/" + currentID);
      setCurrentID([]);
    }
  }

  return (
    <div className="App">

      <div className='inputs'>

        <div>
          <label>Search for:</label>
          
          <select onClick={e => selectOption(e.target.value)}>
            <option value="/people">Peolple</option>
            <option value="/films">Films</option>
            <option value="/starships">Starship</option>
            <option value="/vehicles">Vehicles</option>
            <option value="/species">Species</option>
            <option value="/planets">Planets</option>
          </select>
        </div>
        
        <form onSubmit={handleSubmit}>
          <label>ID:</label>
          <input className='ID' type="number" onChange={e => setCurrentID(e.target.value)} value={currentID}/>
          <input type='submit' className='btnSearch' value="Search"/>
        </form>

      </div>

      <Routes>
        <Route path='/people' element={<People/>}></Route>
        <Route path={'/people/:ID'} element={<PeopleID/>}></Route>
        <Route path='/films' element={<Films/>}/>
        <Route path='/starships' element={<StarShip/>}/>
        <Route path='/vehicles' element={<Vehicles/>}/>
        <Route path='/species' element={<Species/>}/>
        <Route path='/planets' element={<Planets/>}/>
      </Routes>
      
    </div>
    //Se cargan los datos pero si uso onChange se cambia con retraso y si uso onClick le dengo que dar click de nuevo para que funcione
  );
}

export default App;
