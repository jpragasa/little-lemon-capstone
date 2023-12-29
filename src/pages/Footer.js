import Contact from './Contact';
import logo from '../FooterLogo.png';
import Navigation from './Navigation';
import SocialMedia from './SocialMedia';
function Footer() {
    return <footer>
        <img className='footerLogo' src={logo} alt='Little Lemon Logo' />
        <Navigation isTopNav={false}/>
        <Contact />
        <SocialMedia />
    </footer>
}

export default Footer;