import { useRef, useState } from "react";
import "./conversas.css"


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


function Conversas ({setConversa}) {

    const input = useRef(null);
    const [filter, setFilter] = useState("");

    const amigos_filtrados = amigos.filter(amigo =>
        amigo.nome.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="container-conversas">
            <div style={{
                width : "100%",
                backgroundColor : "black",
                position : "sticky",
                top : 0
            }}>
                <input 
                ref={input} 
                onInput={() => {
                    const valorAtual = input.current.value;
                    setFilter(valorAtual);
                }}
                placeholder="Search"
                className="input-pesquisa-conversas" type="text" />
            </div>
            {
                amigos_filtrados.map(amigo => {
                    return (<div onClick={()=> setConversa(amigo.id)} className="amigo-conversa">

                        <img style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            backgroundColor: "rgb(69, 69, 69)",
                            marginRight : "10px"
                        }} src={amigo.foto} alt="" />

                        <div style={{
                            display: "flex",
                            flexDirection : "column"
                        }}>

                            <label className="text-amigos-chat">{amigo.nome}</label>
                            <label className="text-amigos-chat" style={{ fontSize: "14px" }}>{amigo.mensagem}</label>

                        </div>
                    </div>)
                })
            }
        </div>
    )
}


export default Conversas