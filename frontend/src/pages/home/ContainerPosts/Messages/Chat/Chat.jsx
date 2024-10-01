import { useState } from "react"
import "./chat.css"
import Chats from "./Chats/Chats"
import HeaderChat from "./HeaderChat/HeaderChat"
import InputChats from "./InputChat/InputChat"


const amigos = [
    {
        foto : "#",
        id : "1",
        nome : "Junior",
        mensagem : "ultima mensagem aaaaa awadawdawd"
    },
    {
        foto : "#",
        id : "2",
        nome : "Laura",
        mensagem : "ultima mensagem aaaaa awadawdawd"
    },
    {
        foto : "#",
        id : "3",
        nome : "João",
        mensagem : "ultima mensagem aaaaa awadawdawd"
    },

]

function getUserFromID (id) {

    const find = amigos.find( amigo => amigo.id == id)

    if ( find === undefined ) return false

    return find.nome

}


function Chat ({id, conversas, recarregar}) {

    const user = getUserFromID(id)

    return (
        <div className="container-chat">
            { (user != false && id != false) && (
                <HeaderChat foto={"#"} name={user} status={"Online"}/>
            )}
            {
                (user != false && id != false) &&  (
                    <div className="display-mensagens-chat">
                        <Chats id={id} conversas={conversas}/>
                    </div>
                ) 
            }
            {
                (user != false && id != false) &&  (
                    <InputChats recarregar={recarregar} conversas={conversas} id={id}/>
                ) 
            }
        </div>
    )
}


export default Chat