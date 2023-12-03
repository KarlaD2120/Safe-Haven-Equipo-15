import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    const [showEventosSubMenu, setShowEventosSubMenu] = useState(false);
    const [showEventosSubbMenu, setShowEventosSubbMenu] = useState(false);
    return (
        <nav className="navbar">
            <ul className="navbar__list container">
                <li className="navbar__item" onMouseEnter={() => setShowEventosSubMenu(true)} onMouseLeave={() => setShowEventosSubMenu(false)}>
                    <NavLink to="/" className="navbar__link">Organizaciones</NavLink>
                    {showEventosSubMenu && (
                        <ul className="submenu" onMouseEnter={() => setShowEventosSubbMenu(true)} onMouseLeave={() => setShowEventosSubbMenu(false)}>
                            <li className="navbar__item">
                                <NavLink to="/">Eventos</NavLink>
                                {showEventosSubbMenu && (
                                    <ul className='subbmenu'>
                                        <li><NavLink to="/">Talleres</NavLink></li>
                                        <li><NavLink to="/">Charlas</NavLink></li>
                                    </ul>
                                )}
                            </li>
                            <li><NavLink to="/">Articulos</NavLink></li>
                        </ul>
                    )}
                </li>
                <li className="navbar__item">
                    <NavLink to="/homelogin" className="navbar__link">Usuario</NavLink>
                </li>
            </ul>
        </nav>

    );
}

export default Navigation;

