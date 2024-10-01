import "./toppost.css"


function TopPost ({usuario}) {

    return (
        <div className="container-top-post">
            <div style={{display : "flex",alignItems : "center"}}>

                <img src="" alt="" className="img-top-post" />
                
                <label style={{
                    color:"white",
                    marginLeft : "20px"
                }}>{usuario}</label>

            </div>
        </div>
    )

}

export default TopPost