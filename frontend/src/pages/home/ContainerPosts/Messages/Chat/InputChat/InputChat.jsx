import "./inputChat.css"


import { useEffect, useRef, useState } from "react"


import emoji from "../../../../../../../public/icons/manutencao.png"
import others from "../../../../../../../public/icons/manutencao.png"


const eventSendMessage = new Event("onMessageSent")


function InputChats ({conversas, recarregar, id}) {

    const ref = useRef(null)

    useEffect(()=>{

        function enviar (e) {

            if (e.key != "Enter" || ref.current.value.trim() == "") return

            const mensagem = { 
                user : "you",
                mensagem : ref.current.value
            }

            conversas[id].push(mensagem) 

            recarregar()

            ref.current.value = ""

            document.dispatchEvent(eventSendMessage)

        }

        window.addEventListener("keydown", enviar)

        return () => window.removeEventListener("keydown", enviar)

    }, [id, conversas, recarregar])

    return (
        <div className="container-input-chats">
            <img src={emoji} style={{width : "30px", height : "30px"}} />
            <input ref={ref} placeholder="Enviar mensagem..." className="input-chats" type="text" />
            <img src={others} style={{width : "30px", height : "30px"}} />
        </div>
    )
}


export default InputChats