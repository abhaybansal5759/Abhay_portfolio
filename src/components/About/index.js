import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faReact,faAngular,faHtml5,faJsSquare 
} from '@fortawesome/free-brands-svg-icons'
// import Loader from 'react-loaders'

const About = () => {

    function resume(){
        window.open("https://drive.google.com/file/d/1c_hhW6W4c65EBXxUnG4zy_r_QoDHjbyD/view?usp=sharing");
    }

    const [letterClass] = useState('text-animate')
    // useEffect(() => {
    //         return setTimeout(() => {
    //           setLetterClass('text-animate-hover')
    //         }, 3000)
    //       }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>Hi, my name is</p>
                <h2><p>Abhay Bansal .</p></h2>
                <p>I'm very ambitious front-end, back-end developer looking for a role in established IT comapny with the opportunity to work with the latest technologies on challenging and diverse projects.
                </p>
                <p>
                    I'm quitely confident, naturally curious, and perpetually working on improving my chops one design problem at a time .
                </p>
                <p>
                    I design and code beautifully simple things , and I love what I do and tech-obsessed!!!
                </p>
                <p><h3>SKILLS :</h3>HTML, CSS, JavaScript, ReactJs, C++, Python, Github.</p>
             <button className='resume-btn' onClick={resume}>MY RESUME</button>
                

            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        < FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>

                    <div className="face2">
                        < FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>

                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>

                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>

                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>

                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>

                </div>

            </div>
        </div>
        {/* <Loader type="pacman"/> */}
        </>
    )
}

export default About