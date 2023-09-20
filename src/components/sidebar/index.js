import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Sidebar(){
    return(
        <div className='nav-bar'>
            <Link to="" className='logo'>
                <img src={logo} alt=".."  className='logo'/>
            </Link>
            <nav>
                <NavLink exact='true' activeclassname='active' to='/'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/elhoussine-quayssi-a54103280/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.facebook.com/elquayssi/'>
                        <FontAwesomeIcon icon={faFacebook} color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.instagram.com/el_quayssi/'>
                        <FontAwesomeIcon icon={faInstagram} color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/ElhoussineQuayssi'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                    </a>
                </li>
            </ul>
        </div>
    )
}