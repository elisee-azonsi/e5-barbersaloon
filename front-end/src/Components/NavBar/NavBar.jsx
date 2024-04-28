import { useState } from 'react';
import { useCookies } from 'react-cookie';
import './NavBar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import menu_icon from '../../assets/menu-icon.png'



const NavBar = () => {
    
    const[navBar, setNavBar] = useState(false);
    

    const [mobileMenu, setMobileMenu] = useState(false)
    const toggleMenu = () =>{
      mobileMenu? setMobileMenu(false) : setMobileMenu(true);
    }

    const [cookies,removeCookie] = useCookies(['uuid']);
    const userLoggedIn = cookies['uuid'];

    const handleLogout = () => {
      // Remove the 'uuid' cookie
      removeCookie('uuid');
    
    }

    const changeBackground = () =>{
      console.log(window.scrollY)
      if(window.scrollY >= 50) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }
      
    }
    window.addEventListener('scroll', changeBackground);

  return (
    <div className='nav'>
      <nav className={`container ${navBar ? 'dark-nav' : 'tras-nav'}`} >
       <img src={logo} alt="logo" className='logo'/> 
        <ul className={mobileMenu? 'menu' : 'hide-mobile-menu'}>
               <li><Link to="/">Accueil</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/rdv">Rdv</Link></li>
              {userLoggedIn !== 'undefined'?
              <span><li><Link to="/profile">Profil</Link></li>
                <li className='logout-button' onClick={handleLogout}><Link to="/" >Déconnexion </Link></li>
               </span>:<span>
              <li><Link to="/login">Se Connecter</Link></li>
              <li><Link to="/register">S&apos;inscrire</Link></li>
              </span>
}
       </ul>
       <img src={menu_icon} alt="" className={`${navBar ? 'dark-icon' : 'menu-icon'}`} onClick={toggleMenu}/>
    </nav>
    </div>
    
  )
}

export default NavBar
