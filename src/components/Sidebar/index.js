import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo_A1.jpg'
import LogoSubtitle from '../../assets/images/logoo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

import {
    faLinkedin,
    faGithub,
    faInstagram,
    
  } from '@fortawesome/free-brands-svg-icons'

 


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to="/">
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="Abhay" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon= {faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink 
            exact="true" activeclassname="active"  className="about-link" to="/about">
                <FontAwesomeIcon icon= {faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="skills-link" to="/Projects">
                <FontAwesomeIcon icon= {faBookOpenReader} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon= {faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/abhay-bansal-865695218">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>

            </li>

            <li>
                <a target="_blank" rel='noreferrer' href="https://github.com/abhaybansal5759">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>

            </li>

            
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.instagram.com/abhaybansal7516/">
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>

            </li>
        </ul>
    </div>
)

export default Sidebar