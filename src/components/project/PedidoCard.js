import styles from './PedidoCard.module.css'
import {BsFillTrashFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function PedidoCard({id, name, endereco, telefone, tamanhos, sabores, handleRemove}){

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return(
        <div className={styles.tabela}>
            <table className={styles.tabela_colunas}>
                <tr className={styles.table}>
                    <td className={styles.table_columns}>{name}</td>
                    <td className={styles.table_columns}>{endereco}</td>
                    <td className={styles.table_columns}>{telefone}</td>
                    <td className={styles.table_columns}>{tamanhos}</td>
                    <td className={styles.table_columns}>{sabores}</td>
                    <button className={styles.button} onClick={remove}>
                        <BsFillTrashFill /> 
                </button>
                </tr>
            </table>

        <div>

        </div>
        </div>
    )
}

export default PedidoCard