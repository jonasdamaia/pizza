import styles from './Home.module.css'
import pizza from '../../img/pizza-b.jpg'
import LinkButton from '../layout/LinkButton'

function Home(){

    return(
        <section className={styles.home_container}>
            <div className={styles.box1}>
                <img src={pizza} alt='TOP Pizza' />
            </div>
            <div className={styles.box2}>
                <h1>Bem-vindo(a) a <span>TOP Pizza</span></h1>
                <p>Peça sua pizza agora mesmo!</p>
                <LinkButton to="/novopedido" text="FAZER PEDIDO!" />
            </div>
        </section>
    )
}

export default Home