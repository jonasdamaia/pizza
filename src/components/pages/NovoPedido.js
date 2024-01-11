import { useNavigate } from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'
import styles from './NovoPedido.module.css'

function NovoPedido(){

    const navigate = useNavigate()

    function createPost(pedido) {

        fetch("https://jsonserver.online/user/Z9q-83I-Qxt/pedidos", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pedido),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
            navigate('/meuspedidos', {state: {message: 'Pedido enviado com sucesso!'}})
        })
        .catch((err) => console.log(err))
    }

    return(
        <div className={styles.novopedido_container}>
            <h1>FAZER PEDIDO</h1>
            <p>Monte sua pizza agora mesmo!</p>
            <ProjectForm handleSubmit={createPost} btnText='ENVIAR PEDIDO' />
        </div>
    )
}

export default NovoPedido