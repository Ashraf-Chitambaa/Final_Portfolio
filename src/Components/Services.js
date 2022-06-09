import './Services.css'

export default function Services() {
  return (
    <div className="services-container component" id="services-page">
        <h2 className="main-heading bott-line" data-aos='fade-up'>Services</h2>
        <div className="services cards">
            <div className="service shadowed-card" data-aos="slide-right">
                <i className="fa-brands fa-connectdevelop icon" data-aos='fade'></i>
                <h3 className="service-name" data-aos='zoom-in'>Web design</h3>
                <p data-aos='fade-up'>
                Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit. Modi voluptate a, dicta 
                dolorum pariatur corporis rem quas at ut aliquid.
                </p>
            </div>

            <div className="service shadowed-card" data-aos="slide-left">
                <i className="fa-solid fa-globe icon" data-aos='fade'></i>
                <h3 className="service-name" data-aos='zoom-in'>Web development</h3>
                <p data-aos='fade-up'>
                Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit. Modi voluptate a, dicta 
                dolorum pariatur corporis rem quas at ut aliquid.
                </p>
            </div>

             <div className="service shadowed-card" data-aos="slide-right">
                <i className="fa-solid fa-cubes icon" data-aos='fade'></i>
                <h3 className="service-name" data-aos='zoom-in'>Graphics Design</h3> 
                <p data-aos='fade-up'>
                Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit. Modi voluptate a, dicta 
                dolorum pariatur corporis rem quas at ut aliquid.
                </p>
            </div> 
        </div> 
    </div>
  )
}