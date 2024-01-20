import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../index.css';

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemonDetail, setPokemonDetail] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then(data => setPokemonDetail(data));
  }, [name]);

  if (!pokemonDetail) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="pokemon-detail-grid">
        <div className="pokemon-card">
          <h1>{pokemonDetail.name}</h1>
          <img src={pokemonDetail.sprites.front_default} alt={pokemonDetail.name} />
        </div>

        <div className="pokemon-stats">
          {pokemonDetail.stats.map(stat => (
            <div key={stat.stat.name} className="stat">
              <strong>{stat.stat.name.replace('-', ' ')}:</strong> {stat.base_stat}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
