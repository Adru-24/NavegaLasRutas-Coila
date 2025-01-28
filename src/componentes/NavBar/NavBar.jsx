import React from 'react'
 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import Exterior from '../Exterior/Exterior'
import Interior from '../Interior/Interior'

const NavBar = () => {
    
    // return (
    //     <header>
    //     <h2>PLANTIN</h2>

    //     <nav>
    //         <ul>
    //             <li>li</li>
    //             <li>exterior</li>
    //             <li>materiales</li>
    //         </ul>
    //     </nav>

    //         <CartWidget/>

    // </header>
    // )
    return (
        <Router>
            <header>
            <h2>PLANTIN</h2>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Interior</Link>
                    </li>
                    <li>
                        <Link to="/Exterior">exterior</Link>
                    </li>
                    <li>materiales</li>
                </ul>
            </nav>

            <CartWidget/>
            
            <Routes>
                <Route path="/" element={<Interior />} />
                <Route path="/Exterior" element={<Exterior />} />
            </Routes>

            </header>
        </Router>
    );
}
export default NavBar