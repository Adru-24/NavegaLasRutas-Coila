import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <Link to="/">
                 <img className= 'logotienda' src="../img/logo.png" alt="logo Plantin" />
            </Link>
            <nav>
                <ul className='enlaces'>
                    <li>
                        <NavLink to="categoria/interior">Interior</NavLink>
                    </li>
                    <li>
                        <NavLink to="categoria/exterior">Exterior</NavLink>
                    </li>
                    <li>
                        <NavLink to="categoria/accesorios">Accesorios</NavLink>
                    </li>
                </ul>
            </nav>

            <CartWidget/>
        </header>
    )
}
export default NavBar