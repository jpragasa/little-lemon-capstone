import home from '../../Home.png';
import { Link } from 'react-router-dom';
function Navigation({ isTopNav }) {
    return <nav className={isTopNav ? "navigation" : "footerNav"}>
        <ul>

            <li><Link className='homeLogo' to='/'><img src={home} /></Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/menu'>Menu</Link></li>
            <li><Link to='/reservations'>Reservations</Link></li>
            <li><Link to='/orderonline'>Order Online</Link></li>
            <li><Link to='/login'>Login</Link></li>

        </ul>
    </nav>
}

export default Navigation;