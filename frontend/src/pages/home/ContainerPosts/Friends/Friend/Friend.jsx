import "./friend.css"


function Friend ({imagem, nome, setPerfil}) {
    return (
        <div className="friend">
            <div style={{display : "flex", alignItems : "center"}}>
                <img style={{
                    width : "30px",
                    height : "30px",
                    marginRight : "10px",
                    backgroundColor : "rgb(69, 69, 69)",
                    borderRadius : "50%"
                }} src={imagem} alt="" />
                <label>{nome}</label>
            </div>
            <div style={{
                marginTop : "20px"
            }}>
                <button className="button-friend">mensagens</button>
                <button
                    onClick={() => setPerfil(nome)}
                className="button-friend">perfil</button>
            </div>
        </div>
    )
}


export default Friend