function HeaderChat ({foto, name, status}) {
    return (
        <div style={{
            width : "100%",
            height : "60px",
            display : "flex",
            outline : "1px solid white"
        }}>
            <img style={{
                width : "40px",
                height : "40px",
                marginBlock : "10px",
                marginInline : "20px",
                borderRadius : "50%",
                backgroundColor : "rbg(69, 69, 69)"
            }} src={foto}/>
            <div style={{
                display : "flex",
                flexDirection : "column",
                justifyContent : "center"
            }}>
                <label>{name}</label>
                <label style={{fontSize : '12px'}}>{status || "Offline"}</label>
            </div>
        </div>
    )
}

export default HeaderChat