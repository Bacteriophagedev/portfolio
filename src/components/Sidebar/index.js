import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoJ from '../../assets/images/logo-J.png'
import LogoSubtitle from '../../assets/images/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => (
    <div className="nav-bar">
        <Link className="Logo" to="/">
            <img src={LogoJ} alt="Logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
        </Link>
        <nav>
            <NavLink exact= "true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color= "#4d4d4e" />
            </NavLink>
            <NavLink exact= "true" activeclassname="active" className= "about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color= "#4d4d4e" />
            </NavLink>
            <NavLink exact= "true" activeclassname="active" className="contact-link"to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color= "#4d4d4e" />
            </NavLink>  
        </nav>
        <ul>
            <li>
                <a target = '_blank' rel='noreferrer' href='https://www.linkedin.com/in/japhet-kolawole/'>
                    <FontAwesomeIcon icon={faLinkedin} color = "#4d4d4e" />
                </a>
            </li>
            <li>
                <a target = '_blank' rel='noreferrer' href='https://github.com/Bacteriophagedev'>
                    <FontAwesomeIcon icon={faGithub} color = "#4d4d4e" />
                </a>
            </li>
            <li>
                <a target = '_blank' rel='noreferrer' href='mailto:kolawolejaph121@gmail.com'>
                    <FontAwesomeIcon icon={faEnvelope} color = "#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar