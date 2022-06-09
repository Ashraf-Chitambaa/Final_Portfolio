import './About.css'
import Image1 from '../Media/WebBackground.jpg'
import Image2 from '../Media/ashraf3.jpg'
import { useRef, useEffect, useState } from 'react'

export default function About() {
    const about = useRef()
    const [aboutInView, setAboutInView] = useState(false);
    let addAboutShadow = () => {
        const aboutSectionContainerView = about.current.getBoundingClientRect().y
        if (window.scrollY > (aboutSectionContainerView - 20)) {
            setAboutInView(true)
        }

        else {
            setAboutInView(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", addAboutShadow);
        return () => {
            window.removeEventListener("scroll", addAboutShadow);
        }
    }, [])

  return (
    <main className="about-me component" id="about-me-page">
       <h2 className="main-heading bott-line" data-aos='fade-up'>About</h2>
        <div className={`profile-container cards ${aboutInView === true ? 'add-shadow' : ''}`}  ref={about}>
            <div className="profile-pics" data-aos="zoom-in">
                <figure>
                    <img src={Image1} alt="noHat" />
                    <img src={Image2} alt="Hat" className="hat-image" />
                </figure>
            </div>

            <div className="profile-information" data-aos="fade-up">        
                <p>
                My name is Ashraf Chitambaa, a first year student at University 
                of Malawi majoring in Bachelor of science with a direct interest 
                in computer related concepts. I started my programming journey in 
                high school where I mostly worked with Visual basic and practiced 
                on Visual basic express. I am currently a web oriented developer 
                with intermediate knowledge in UI design and interms of backend 
                currently I have knowledge in PHP.
                </p>

                <a 
                    href="myCV.txt" 
                    download="ASHRAF_CV" 
                    className="view-my-work"
                    data-aos='zoom-in'>
                    download cv
                    <i 
                        className="fa-solid fa-circle-arrow-down">
                    </i>
                </a>
            </div> 

            <div className="my-skills" data-aos="slide-up">
                <h2 className="main-heading">Expertise</h2>
                <div className="skills-information">
                    <div className="front-end skill" data-aos="fade-right">
                        <h3 className="skill-title">Front-End</h3>
                        <ul className="skills">
                            <li>html</li>
                            <li>css</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>

                    <div className="back-end skill" data-aos="fade-left">
                        <h3 className="skill-title">Back-End</h3>
                        <ul className="skills">
                            <li>php</li>
                        </ul>
                    </div>

                    <div className="other-languages skill" data-aos="fade-right">
                        <h3 className="skill-title">Others</h3>
                        <ul className="skills">
                            <li>java</li>
                            <li>Python</li>
                        </ul>
                    </div>
                </div>
            </div> 
        </div>
        <hr style={
            {
            alignSelf: 'center', 
            border: 'none',
            borderBottom: '1px solid rgb(4, 83, 95)',
            marginTop: '1em'
            }
        }
        />
    </main> 
  )
}