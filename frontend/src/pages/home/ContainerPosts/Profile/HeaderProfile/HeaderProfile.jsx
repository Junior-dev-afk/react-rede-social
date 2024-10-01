import "./headerProfile.css"


import arrow from "../../../../../../public/icons/arrow.png"


function HeaderProfile ({usuario, setPage, pagina_anterior}) {

    return (
        <div className="container-header-profile">
            <button onClick={()=> {
                setPage(pagina_anterior)
                }} className="button-header-profile">
                <img className="img-header-profile" src={arrow} alt="" />
            </button>
            <div style={{
                display : "flex",
                flexDirection : "column"
            }}>
                <label>{usuario}</label> 
                <label style={{fontSize : "12px", color : "rgb(150, 150, 150)"}}>{"10"} Posts</label>               
            </div>
        </div>
    )
}


export default HeaderProfile