import { useEffect, useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectForm({handleSubmit, btnText, pedidoData}){

    const [tamanhos, setTamanhos] = useState([])
    const [sabores, setSabores] = useState([])
    const [pedido, setPedido] = useState(pedidoData || {})

    useEffect(() => {
        fetch("https://jsonserver.online/user/Z9q-83I-Qxt/tamanhos", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((dataTamanhos) => {
            setTamanhos(dataTamanhos)
        })
        .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        fetch("https://jsonserver.online/user/Z9q-83I-Qxt/sabores", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((dataSabores) => {
            setSabores(dataSabores)
        })
        .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(pedido)
    }

    function handleChange(e) {
        setPedido({...pedido, [e.target.name]: e.target.value})
    }

    function handleTamanhos(e) {
        setPedido({...pedido, tamanhos: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }

    function handleSabores(e) {
        setPedido({...pedido, sabores: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }

    return(
        <form onSubmit={submit} className={styles.form}>
            <div className={styles.container}>
                <div className={styles.container_a}>
                    <Input
                        type='text'
                        text='Nome'
                        name='nome'
                        placeholder='Informe seu nome'
                        handleOnChange={handleChange}
                        value={pedido.nome ? pedido.nome : ''}
                    />
                    <Input
                        type='text'
                        text='Endereço'
                        name='endereco'
                        placeholder='Informe o endereço de entrega'
                        handleOnChange={handleChange}
                        value={pedido.endereco ? pedido.endereco : ''}
                    />
                    <Input
                        type='text'
                        text='Telefone'
                        name='telefone'
                        placeholder='Informe seu telefone'
                        handleOnChange={handleChange}
                        value={pedido.telefone ? pedido.telefone : ''}
                    />
                </div>
                <div className={styles.container_b}>
                    <Select
                        name='tamanho_id'
                        text='Tamanho'
                        options={tamanhos}
                        handleOnChange={handleTamanhos}
                        value={pedido.tamanhos ? pedido.tamanhos.id : ''}
                    />
                    <Select
                        name='sabor_id'
                        text='Sabores'
                        options={sabores}
                        handleOnChange={handleSabores}
                        value={pedido.sabores ? pedido.sabores.id : ''}
                    />            
                    <SubmitButton text={btnText} />
                </div>
            </div>
        </form>
    )
}

export default ProjectForm