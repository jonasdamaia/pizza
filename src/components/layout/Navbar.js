import { Link } from "react-router-dom"
import Container from "./Container"
import styles from './Navbar.module.css'
import logo from '../../img/pizza-logo2.jpg'

function Navbar(){

    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img className={styles.logomarca} src={logo} alt="TOP Pizza" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="./">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="./meuspedidos">Meus Pedidos</Link> 
                    </li>
                    <li className={styles.item}>
                        <Link to="./contato">Contato</Link>
                    </li>
                </ul>
            </Container>
      </nav>
    )
}

export default Navbar