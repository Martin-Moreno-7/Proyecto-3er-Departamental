import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonSearch = () => {
  const [pokemonName, setPokemonName] = useState("");// Aqui use el hook llamado UseState
  const [pokemonData, setPokemonData] = useState(null);// Aqui use el hook llamado UseState

  useEffect(() => {
    const fetchData = async () => {
      if (pokemonName.trim() !== "") {
        try {//Manejo de casos de exito y error
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`//Respuesta que integra la libreria axios
          );
          setPokemonData(response.data);
        } catch (error) {//Manejo de casos de exito y error
          console.error("error fetching data:", error);
          setPokemonData(null);
        }
      } else {
        setPokemonData(null);
      }
    };

    fetchData();
  }, [pokemonName]);

  return (
    <div>
      <label>
        search pokemon:
        <input
          type="text"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
      </label>

      {pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <div>
            <strong>Abilities</strong>
            <ul>
              {pokemonData.abilities.map((ability, index) => (
                <li key={index}>{ability.ability.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <strong>Base Experience:</strong> {pokemonData.base_experience}
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonSearch;
