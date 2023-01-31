import './navbar.css';
import Logo from '../assets/img/aceite-esencial.png'
import CartWidget from './cartWidget';

function Header(){
    return(
        <header className='header'>
            <div className="logo">
                <a href='index.js'>
                    <img className='headerLogo' src={Logo}></img>
                    <p className='nombreBrand'> BachShop </p>
                </a>
            </div>
            <div className='navbar'>
                <a href='index.js' className='menuEnlace'> INICIO </a>
                <a href='index.js' className='menuEnlace'> REMEDIO INDIVIDUAL </a>
                <a href='index.js' className='menuEnlace'> CONJUNTO DE REMEDIOS </a>
                <a href='index.js' className='menuEnlace'> CAJAS DE REMEDIOS </a>
                <a href='index.js' className='menuEnlace'> CONTACTO </a>
            </div>
            <div>
                <CartWidget />
            </div>
        </header>

    );
}

export default Header;