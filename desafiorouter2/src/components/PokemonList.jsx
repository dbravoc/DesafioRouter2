import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=40') // Aumenta el límite si deseas obtener más pokémones
      .then(response => response.json())
      .then(async data => {
        const pokemonData = await Promise.all(data.results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const details = await response.json();
          return {
            name: details.name,
            image: details.sprites.front_default,
            url: pokemon.url
          };
        }));
        setPokemons(pokemonData);
      });
  }, []);

  return (
    <div className="container">
      <h1>Pokemones</h1>
      <div className="pokemon-grid">
        {pokemons.map(pokemon => (
          <div className="pokemon-card" key={pokemon.name} onClick={() => navigate(`/pokemones/${pokemon.name}`)}>
            <img src={pokemon.image} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
