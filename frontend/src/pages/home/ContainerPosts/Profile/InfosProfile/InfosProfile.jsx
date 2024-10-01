import "./infosProfile.css"


function InfosProfile () {
    return (
        <div className="container-infos-profile">
            <label style={{fontSize : "25px"}}>Nome</label>
            <label>@usuario</label>
            <label style={{marginBlock : "10px", wordBreak : "break-all"}}>descricao</label>
            <label>entrou dia 9 maio</label>
            <div style={{marginTop : "10px"}}>
                <label>100 <label>Seguidores</label></label>
                <label style={{marginLeft : "20px"}}>200 <label>seguindo</label></label>
            </div>
        </div>
    )
}


export default InfosProfile