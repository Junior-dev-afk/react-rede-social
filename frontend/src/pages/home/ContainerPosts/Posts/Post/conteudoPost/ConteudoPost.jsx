import "./conteudopost.css"



function ConteudoPost ({conteudo}) {
    return (
        <div className="container-conteudo-post">
            {conteudo.tipo == "texto" && (
                <label style={{
                    wordBreak : "break-all",
                    paddingRight : "40px"
                }} >{conteudo.conteudo}</label>)}

            {conteudo.tipo == "imagem" && (
                <img className="imagem-conteudo-post" src={conteudo.conteudo}/>)}
        </div>
    )
}



export default ConteudoPost