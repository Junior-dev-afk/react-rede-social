import { useState } from "react"
import Chat from "./Chat/Chat"
import Conversas from "./Conversas/Conversas"


import "./messages.css"


const chats = {
    "1" : [
        {
            user : "you",
            mensagem : "ola ",
        },
        {
            mensagem : "ola",
        },
        {
            mensagem : "ola",
        },
        {
            mensagem : "olakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
        }
    ],
    "2" : [
        {
            user : "you",
            mensagem : "ola",
        },
        {
            mensagem : "ola",
        },
    ],
    "3" : [
        {
            user : "you",
            mensagem : "ola",
        },
        {
            mensagem : "ola",
        },
    ],
}

let numero = 0


function Messages () {

    const [id, setId] = useState(false)
    const [count, setCount] = useState(0) 

    const recarregar = () => {
        numero++
        setCount(numero)
        console.log(numero)
    }

    return (
        <div className="container-mensagens">
            {
                id !== false ? (
                    <Chat recarregar={recarregar} conversas={chats} id={id} />
                ) :(
                    ""
                )
            }
            
            <Conversas setConversa={setId}/>
        </div>
    )
}


export default Messages