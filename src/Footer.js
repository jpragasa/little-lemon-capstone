import Contact from './Contact';
import logo from './Logo.png';
import Navigation from './Navigation';
import SocialMedia from './SocialMedia';
function Footer() {
    return <footer>
        <img src={logo} alt='Little Lemon Logo' />
        <Navigation />
        <Contact />
        <SocialMedia />
    </footer>
}

export default Footer;