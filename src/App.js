import Loader from './Components/Loader';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Work from './Components/Work'
import Contact from './Components/Contact'
import Footer from './Components/Footer';
import Aos from 'aos'
import 'aos/dist/aos.css' 
import { useEffect, useState } from 'react'
import {animateScroll as backScroll} from 'react-scroll';
import './App.css';
import './Imports.css'

export default function App() {
  useEffect(() => {
    Aos.init({ duration: 1500, delay: 500 })
    window.addEventListener('scroll', showGoTopBtn)

    return () => {
      window.removeEventListener('scroll', showGoTopBtn)
    }
  }, [])

  let sendFormData = (formData) => {
    fetch(
        'https://ashraf-chitambaa1-default-rtdb.firebaseio.com/Portfolio.json',
        {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {'content-Type': 'application/json'}
        }
      )
  }

  let scrollToTop = () => {
    backScroll.scrollToTop()
  }
  
  const [goToTopActive, setGoToTopActive ] = useState(false);
  let showGoTopBtn = () => {
    const docHeight = window.innerHeight
    const docScrolls = window.scrollY
    if (docScrolls > docHeight)  {
      setGoToTopActive(true)
    }
    else setGoToTopActive(false)
  }

  const [changeTheme, setChangeTheme] = useState(false);
  let darkTheme = () => {
    setChangeTheme(true)
  }

  let lightTheme = () => {
    setChangeTheme(false)
  }

  return (
    <div className={`${changeTheme === true ? 'elements-dark-theme' : ''}`}>
      <Loader />
      <Navigation darkTheme={darkTheme} lightTheme={lightTheme}/>
      <Home />
      <About />
      <Services />
      <Work />
      <Contact sendMessage={sendFormData}/>
      <Footer />

      <div className={`${ goToTopActive === true ? 'go-top' : '' }`}>
          <i 
            className="fa-solid fa-arrow-up-long icon"
            onClick={scrollToTop}>
          </i>
      </div>

    </div>
  )
}


