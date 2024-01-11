import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'
import { FaXTwitter } from "react-icons/fa6"

function Footer(){

    return(
        <footer className={styles.footer}>
            <ul className={styles.redes_sociais}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
                <li><FaXTwitter /></li>
            </ul>
        </footer>
    )
}

export default Footer