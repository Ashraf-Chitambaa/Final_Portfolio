import Logo from '../Media/Logo.png'
import './Navigation.css'
import { useState, useEffect } from 'react';
import { Link, animateScroll as backScroll } from 'react-scroll';

export default function Navigation(props) {
    const [navActive , setNavActive] = useState(false)
    const [navBg, setNavBg] = useState(false);
    const [themeBox, setThemeBox] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', changeNavBg) 
        window.addEventListener('mouseup', docClickRemovingNav)
        window.addEventListener('mouseup', removeThemeBox)

        return () => {
            window.removeEventListener('scroll', changeNavBg)
            window.removeEventListener('mouseup', docClickRemovingNav) 
            window.removeEventListener('mouseup', removeThemeBox)   
        }
    }, [])

    const removeThemeBox = () => {
        setThemeBox(false)
    }

    const showMenu = () => {
        setNavActive(!navActive)
    }

    const removeMenu = () => {
        setNavActive(false)
    }

    const docClickRemovingNav = (TSE) => {
        if(!(TSE.target.closest(".nav-menu") || TSE.target.closest(".mobile-menu") )) {
            setNavActive(false)
        }
    }

    let changeNavBg = (TSE) => {
        if( window.scrollY > window.innerHeight / 4 ) {
            setNavBg(true)
        }

        else {
            setNavBg(false)
        }

    }

    let scrollToTop = () => {
        backScroll.scrollToTop()
    }

  return (
    <header>
        <nav className={navBg === true ? 'navigation-container active' : 'navigation-container'} >
            <img src={Logo} alt="logo" className="logo" onClick={scrollToTop} />

            <ul className={navActive === true ? 'nav-menu active' : 'nav-menu'}> 
                <li onClick={showMenu}>
                    <Link 
                        to="home" 
                        className="link home"
                        smooth={true}
                        duration={800}
                        onClick={removeMenu}
                        >
                        home
                    </Link>
                </li>

                <li onClick={showMenu}>
                    <Link 
                        to="about-me-page" 
                        className="link about-me-page"
                        smooth={true}
                        duration={800}
                        onClick={removeMenu}
                        >
                        about me
                    </Link>
                </li>

                <li onClick={showMenu}>
                    <Link 
                        to="services-page" 
                        className="link services-page" 
                        smooth={true}
                        duration={800}
                        onClick={removeMenu}
                        >
                        services
                    </Link>
                </li>
                
                <li onClick={showMenu}>
                    <Link 
                        to="work-page" 
                        className="link work-page"
                        smooth={true}
                        duration={800}
                        onClick={removeMenu}
                        >
                        work
                    </Link>
                </li>

                <li onClick={showMenu}>
                    <Link 
                        to="contact-me" 
                        className="link contact-me"
                        smooth={true}
                        duration={800}
                        onClick={removeMenu}
                        >
                        contact
                    </Link>
                </li>
            </ul>

            <div className="theme-container">
                <i 
                    className="fa-solid fa-circle-half-stroke"
                    id="theme-chose-icon" onClick={() => {setThemeBox(!themeBox)}}>
                </i>

                <div className={`icons ${themeBox === true ? 'active' : ''}`}>
                    <p id="dark-icon" onClick={props.darkTheme} onMouseUp={removeThemeBox}>
                        <i className="fa-solid fa-moon icon"></i>
                        <span>dark theme</span>
                    </p>
        
                    <p id="light-icon" onClick={props.lightTheme} onMouseUp={removeThemeBox}>
                        <i className="fa-solid fa-sun icon"></i>
                        <span>light theme</span> 
                    </p>
                </div>
            </div>

            <div className="mobile-menu" id="menu-btn" onClick={showMenu}>
                <i className={`fa-solid fa-bars icon ${navActive === true ? 'active show-icon' : 'show-icon'}`}></i>
                <i className= {`fa-solid fa-xmark icon ${navActive === true ? 'active close-icon' : 'close-icon'}`}></i>
            </div>    
        </nav>
    </header>
  )
}
