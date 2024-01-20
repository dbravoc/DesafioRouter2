import { NavLink } from 'react-router-dom';
import '../index.css';

const NavBar = () => {
  return (
    <nav className='nav'>
      <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
      <NavLink to="/pokemones" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Pokemones</NavLink>
    </nav>
  );
};

export default NavBar;
