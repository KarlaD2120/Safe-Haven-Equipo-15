import Navigation from './navigation/navigation';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <div className="container">
            <div className="logo">
                <img className="logo-img" src="src/assets/images/logo.png" alt="Logo" />
            </div>
            <div>
                <Navigation />
            </div>
        </div>
    );
}

export default Header;