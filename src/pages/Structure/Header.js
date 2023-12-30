import logo from '../../Logo.png'
import Navigation from './Navigation';
function Header() {
    return <header>
        <img className='topNavLogo' src={logo} alt='Little Lemon Logo' />
        <Navigation isTopNav={true} />
    </header>
}

export default Header;