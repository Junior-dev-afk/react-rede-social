import { useEffect, useRef } from "react";
import "./chats.css"


function Chats ({conversas, id}) {

    const scrollRef = useRef(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [conversas, id]);

    useEffect(() => {
        
        const rolarTela = () => {
            setTimeout(()=>{
                scrollRef.current.scrollTop = scrollRef.current.scrollHeight
            }, 100)
        }

        document.addEventListener("onMessageSent", rolarTela)

        return () => document.removeEventListener("onMessageSent", rolarTela)

    }, [])

    return(
        <div ref={scrollRef} className="container-chats">
            {conversas[id].map( (chat, i) => {

                if ( 'user' in chat ) return <Mensagem conversas={conversas[id]} index={i} mensagem={chat.mensagem} direction={"end"}/>

                return <Mensagem conversas={conversas[id]} index={i} mensagem={chat.mensagem} direction={"start"}/>

            })}
        </div>
    )
}


const Mensagem = ({ mensagem, conversas, index}) => {

    const colorUser = "rgb(50, 50, 50)"
    const colorOther = "rgb(100, 100, 100)"

    let borderRadius = "10px"

    const isUser = "user" in conversas[index];
    const prevIsUser = index > 0 && "user" in conversas[index - 1];
    const nextIsUser =  index < conversas.length - 1 && "user" in conversas[index + 1];

    let marginTop = prevIsUser == isUser ? "1px" : "10px"
    let marginBottom = nextIsUser == isUser ? "1px" : "10px"
    let direction = isUser ? "flex-end" : "flex-start"
    let color = isUser ? colorUser : colorOther

    if (isUser) {

        let pxRigthTop = prevIsUser ? "0px" : "10px"
        let pxRigthBottom = nextIsUser ? "0px" : "10px"

        borderRadius = `10px ${pxRigthTop} ${pxRigthBottom} 10px`
    }


    if (!isUser) {

        let pxLeftTop = !prevIsUser ? "0px" : "10px"
        let pxLeftBottom = (index + 1 < conversas.length) || !nextIsUser ? "0px" : "10px"
        
        borderRadius = `${pxLeftTop} 10px 10px ${pxLeftBottom}`
    }

    return (
        <div style={{ 
            width: "auto",
            maxWidth : "70%", 
            height: "auto", 
            backgroundColor: color, 
            padding: "15px" ,
            alignSelf : direction,
            margin : "10px",
            marginTop : marginTop,
            marginBottom : marginBottom,
            borderRadius : borderRadius,
            display : "flex",
            flexDirection : "column"
            }}>
                <label style={{wordBreak : "break-all"}}> {mensagem}</label>
        </div>
    )
}


export default Chats