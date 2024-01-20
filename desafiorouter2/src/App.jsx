import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import NavBar from './components/NavBar';
import './index.css'


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<PokemonList />} />
        <Route path="/pokemones/:name" element={<PokemonDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
