import { useState } from 'react';
import Logo from './img/star_wars_logo.png'
import { useNavigate } from 'react-router-dom';


const Form = () => {
    const [category, setCategory] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate( `/${category}/${id}` );
    }

    return (
    <div>
        
        <form className='inputs' onSubmit={handleSubmit}>
        <div className='star-wars'>
            <img src={Logo} alt='Logo' className='logo'></img>  
        </div>

        
        <div>
            <label>Search for:</label>
            
            <select  defaultValue={"DEFAULT"} onChange={(e) => setCategory(e.target.value)}>
                <option value="DEFAULT" disabled>Select One</option>
                <option value="people">Peolple</option>
                <option value="films">Films</option>
                <option value="starships">Starship</option>
                <option value="vehicles">Vehicles</option>
                <option value="species">Species</option>
                <option value="planets">Planets</option>
            </select>
        </div>
        
        <div>
            <label>ID:</label>
            <input className='ID' type="number" onChange={(e) => setId(e.target.value)}/>
            <input type='submit' className='btnSearch' value="Search"/>
        </div>

        </form>
    </div>
    );
}

export default Form;

