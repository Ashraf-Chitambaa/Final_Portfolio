import './Skills.css'

export default function Skills() {
  return (
    <div className="my-skills">
        <h2 className="main-heading">Expertise</h2>
        <div className="skills-information">
            <div className="front-end">
                <h3 className="skill-title">Front-End</h3>
                <ul className="skills">
                    <li>html</li>
                    <li>css</li>
                    <li>JavaScript</li>
                </ul>
            </div>

            <div className="back-end">
                <h3 className="skill-title">Back-End</h3>
                <ul className="skills">
                    <li>php</li>
                </ul>
            </div>

            <div className="other-languages">
                <h3 className="skill-title">Others</h3>
                <ul className="skills">
                    <li>java</li>
                    <li>Python</li>
                </ul>
            </div>

            <a href="myCV.txt" download="ASHRAF_CV" className="view-my-work">download cv<i className="fa-solid fa-circle-arrow-down"></i></a>
        </div>
    </div> 
  )
}
