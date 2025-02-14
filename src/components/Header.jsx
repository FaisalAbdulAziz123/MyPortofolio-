import profilePicture from '../assets/faisal.jpg'
import { FaInstagram, FaTiktok, FaLinkedin, FaFacebookF, FaWhatsapp, FaGithub } from "react-icons/fa";
import '../styles/Header.css'

function Header() {
    return (
        <header>
            <div className="header-jumbotron">
                <img src={profilePicture} />
                <h3>FAISAL ABDUL AZIZ</h3>
                <p>Programmer - Content Creator - Mobile App</p>
                <div className='socialMedia'>
                    <a href='https://www.instagram.com/isall_ya/'><FaInstagram /></a>
                    <a href='https://www.tiktok.com/@abdul_isall?is_from_webapp=1&sender_device=pc'><FaTiktok /></a>
                    <a href='https://www.linkedin.com/in/faisal-abdul-aziz-72b523338/'><FaLinkedin /></a>
                    <a href='https://web.facebook.com/faisal.abdulaziz.77736?locale=id_ID'><FaFacebookF /></a>
                    <a href='https://wa.me/6283873645789'><FaWhatsapp /></a>
                    <a href='https://github.com/FaisalAbdulAziz123?tab=repositories'><FaGithub /></a>
                </div>
            </div>
        </header>
    )
}

export default Header
