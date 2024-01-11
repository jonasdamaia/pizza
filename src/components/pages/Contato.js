import { BsTelephone } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"
import { RiFacebookCircleLine } from "react-icons/ri"
import { FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { CiLinkedin } from "react-icons/ci";
import styles from './Contato.module.css'

function Contato(){

    return(
        <div>
            <h1>CONTATO</h1>
                <div className={styles.container}>
                    <p>Ficou com alguma dúvida?</p>
                    <p>Quer fazer um elogio, sugestão ou reclamação?</p>
                    <p>Entre em contato conosco através dos canais abaixo:</p>
                    <div className={styles.telefone}>
                        <BsTelephone />
                        <p>(47) 3333-3333</p>
                    </div>
                    <div className={styles.whatsapp}>
                        <FaWhatsapp />
                        <p>(47) 9 9999-9999</p>
                    </div>
                    <div className={styles.email}>
                        <MdOutlineEmail />
                        <p>toppizza@toppizza.com.br</p>
                    </div>
                    <div className={styles.redes_sociais}>
                        <RiFacebookCircleLine />
                        <FaInstagram />
                        <CiLinkedin />
                        <FaXTwitter />
                    </div>
                </div>
        </div>
    )
}

export default Contato