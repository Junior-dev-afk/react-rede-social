import ButtonsPost from "./buttonsPost/ButtonsPost"
import ConteudoPost from "./conteudoPost/ConteudoPost"
import Descricao from "./descricao/Decricao"
import "./post.css"
import TopPost from "./topPost/TopPost"


function Post ( {detalhes} ) {

    return (
        <div className="container-post">
            <TopPost usuario={detalhes.usuario}/>
            <ConteudoPost conteudo={detalhes.conteudo}/>
                {detalhes.conteudo.tipo != "texto" && 
                <Descricao descricao={detalhes.descricao}/>}
            <ButtonsPost />
        </div>
    )

}


export default Post