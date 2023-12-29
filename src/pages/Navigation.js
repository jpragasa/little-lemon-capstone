import home from '../Home.png';
function Navigation({ isTopNav }) {
    return <nav className={isTopNav ? "navigation" : "footerNav"}>
        <ul>
            
            <li><a className='homeLogo' href='#'><img src={home}/></a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
        </ul>

    </nav>
}

export default Navigation;