import './Home.css'
import TypeWriterEffect from 'react-typewriter-effect'

export default function Home() {

  return (
    <div id="home" className="home-page component">
        <div className="hero-section">
            <h2>Hello,<br/><span> I'M ASHRAF CHITAMBAA</span></h2>

            <div className="career">
                <p>Based in Malawi</p>
                    <TypeWriterEffect
                      textStyle={{
                        fontFamily: 'inherit',
                        color: 'inherit',
                        fontWeight: 500,
                        fontSize: '1.2em',
                        textAlign: 'center',
                        textDecoration: 'underline',
                        fontStyle: 'oblique',
                        letterSpacing: '1px'
                      }}

                      startDelay={1000}
                      cursorColor="whitesmoke"
                      multiText={[
                        "I'm a Website Developer.", 
                        'Website Designer.', 
                        'Freelancer.'
                      ]}
                      multiTextDelay={5000}
                      typeSpeed={50}
                      multiTextLoop
                    />
            </div>
        </div>
    </div>
  )
}
