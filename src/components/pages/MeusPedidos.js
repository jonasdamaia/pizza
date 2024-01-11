import Message from "../layout/Message"
import { useLocation } from "react-router-dom"
import styles from './MeusPedidos.module.css'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import PedidoCard from "../project/PedidoCard"
import { useState, useEffect } from "react"

function MeusPedidos(){

    const [pedidos, setPedidos] = useState([])
    const [pedidoMessage, setPedidoMessage] = useState('')

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        fetch('https://jsonserver.online/user/Z9q-83I-Qxt/pedidos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            setPedidos(data)
        })
        .catch((err) => console.log(err))
    }, [])

    function removePedido(id) {
        fetch(`https://jsonserver.online/user/Z9q-83I-Qxt/pedidos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setPedidos(pedidos.filter((pedido) => pedido.id !== id))
            setPedidoMessage('Pedido eliminado com sucesso!')
        })
        .catch((err) => console.log(err))
    }

    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Pedidos</h1>
                <LinkButton to="/novopedido" text="FAZER PEDIDO!" />
            </div>
            {message && <Message type="success" msg={message} />}
            {pedidoMessage && <Message type="success" msg={pedidoMessage} />}
            <div>
                <table>
                    <tr className={styles.table}>
                        <th className={styles.table_columns}>NOME</th>
                        <th className={styles.table_columns}>ENDEREÇO</th>
                        <th className={styles.table_columns}>TELEFONE</th>
                        <th className={styles.table_columns}>TAMANHO</th>
                        <th className={styles.table_columns}>SABOR</th>
                    </tr>
                </table>
            </div>
            <Container customClass="start">
                {pedidos.length > 0 &&
                    pedidos.map((pedido) => <PedidoCard
                        id={pedido.id}
                        name={pedido.nome}
                        endereco={pedido.endereco}
                        telefone={pedido.telefone}
                        tamanhos={pedido.tamanhos.name}
                        sabores={pedido.sabores.name}
                        key={pedido.id}
                        handleRemove={removePedido}
                    />)
                }
            </Container>
        </div>
    )
}

export default MeusPedidos