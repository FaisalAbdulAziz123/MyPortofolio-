import profilePicture from '../assets/faisal.jpg'
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import '../styles/Header.css'
function Header() {
    return (
        <header>
            <div className="header-jumbotron">
                <img src={profilePicture} />
                <h3>FAISAL ABDUL AZIZ</h3>
                <p>Programmer - Content Creator - Researcher</p>
                <div className='socialMedia'>
                    <a href='https://www.instagram.com/isall_ya/'><FaInstagram /></a>
                    <a href=''><FaTiktok /></a>
                    <a href=''><FaTwitter /></a>
                    <a href='https://web.facebook.com/faisal.abdulaziz.77736?locale=id_ID'><FaFacebookF /></a>
                </div>
            </div>
        </header>
    )
}

export default Header