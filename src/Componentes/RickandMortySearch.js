import React, {useState} from 'react';
import axios from 'axios';

const RickandMortySearch = () =>{
    const [RickAndMortyName, setRickAndMortyName] = useState('');
    const [RickAndMortyData, setRickAndMortyData] = useState(null);

    const headleInputChange = (e) => {
        setRickAndMortyName(e.target.value)
    }

    const handleSearchClick = async () => {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${RickAndMortyName.toLowerCase()}`)
        setRickAndMortyData(response.data);
    }



return (

    <div>
        <br/>
        <label>
            Busqueda Rick and Morty:

            <input
            type='text'
            value={RickAndMortyName}
            placeholder='Escribe'
            onChange={headleInputChange}
            ></input>
        </label>
        <button onClick={handleSearchClick}>Buscar</button>

        {RickAndMortyData && (
            <div>
                
                <h2>{RickAndMortyData.name}</h2>
                <img src={RickAndMortyData.results.image} alt={RickAndMortyData.name}></img>
                <div>
                    
                    <strong>Species</strong>
                    <ul>
                        {RickAndMortyData.results.map((species, index) => (
                            <li key={index}>{species.species}</li>
                        ))}
                    </ul>

                    <strong>Status</strong> 
                    {RickAndMortyData.results.map((status,index) => (
                        <li key={index}>{status.status}</li>
                    ))}

                    <strong>Origin</strong>
                    {RickAndMortyData.results.map((origin,index) => (
                        <li key={index}>{origin.name.name}</li>
                    ))}

                </div>
            </div>
            
        )}
        <br></br>
       
        
    </div>

)


};//fin

export default RickandMortySearch;





